import { readFile } from "node:fs/promises";
import path from "node:path";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

type Doc = {
  title: string;
  description: string;
  body: string;
};

const DOCS_ROOT = path.join(process.cwd(), "content/docs");

function slugToFile(slug?: string[]) {
  const parts = slug?.length ? slug : ["index"];
  return path.join(DOCS_ROOT, ...parts) + ".md";
}

function parseFrontmatter(markdown: string): Doc {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const fields = new Map<string, string>();

  if (!match) {
    return {
      title: "Steadfast Docs",
      description: "Help and reference for Steadfast: Faith.",
      body: markdown,
    };
  }

  for (const line of match[1].split("\n")) {
    const [key, ...value] = line.split(":");
    fields.set(key.trim(), value.join(":").trim());
  }

  return {
    title: fields.get("title") ?? "Steadfast Docs",
    description:
      fields.get("description") ?? "Help and reference for Steadfast: Faith.",
    body: match[2],
  };
}

async function getDoc(slug?: string[]) {
  try {
    return parseFrontmatter(await readFile(slugToFile(slug), "utf8"));
  } catch {
    notFound();
  }
}

function renderInline(text: string) {
  const parts: ReactNode[] = [];
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(text))) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push(
      <a
        className="font-medium text-orange-700 underline-offset-4 hover:underline dark:text-orange-300"
        href={match[2]}
        key={`${match[1]}-${match.index}`}
      >
        {match[1]}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

function renderMarkdown(markdown: string) {
  const nodes: ReactNode[] = [];
  const lines = markdown.split("\n");
  let listItems: string[] = [];

  const flushList = () => {
    if (!listItems.length) {
      return;
    }

    nodes.push(
      <ul className="my-5 list-disc space-y-2 pl-6" key={`ul-${nodes.length}`}>
        {listItems.map((item) => (
          <li key={item}>{renderInline(item)}</li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  for (const line of lines) {
    if (!line.trim()) {
      flushList();
      continue;
    }

    if (line.startsWith("# ")) {
      flushList();
      nodes.push(
        <h1
          className="mt-0 text-4xl font-semibold tracking-normal text-neutral-950 dark:text-neutral-50 sm:text-5xl"
          key={`h1-${nodes.length}`}
        >
          {line.slice(2)}
        </h1>,
      );
      continue;
    }

    if (line.startsWith("## ")) {
      flushList();
      nodes.push(
        <h2
          className="mt-10 text-2xl font-semibold text-neutral-950 dark:text-neutral-50"
          key={`h2-${nodes.length}`}
        >
          {line.slice(3)}
        </h2>,
      );
      continue;
    }

    if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
      continue;
    }

    flushList();
    nodes.push(
      <p className="my-5 leading-7 text-neutral-700 dark:text-neutral-300" key={`p-${nodes.length}`}>
        {renderInline(line)}
      </p>,
    );
  }

  flushList();
  return nodes;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const doc = await getDoc(slug);

  return {
    title: `${doc.title} | Steadfast: Faith`,
    description: doc.description,
  };
}

export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const doc = await getDoc(slug);

  return (
    <main className="min-h-screen bg-white px-5 py-12 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-100 sm:px-8 sm:py-16">
      <article className="mx-auto max-w-3xl">
        <Link
          className="mb-10 inline-flex text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
          href="/"
        >
          Steadfast: Faith
        </Link>
        <div className="prose-neutral dark:prose-invert">
          {renderMarkdown(doc.body)}
        </div>
      </article>
    </main>
  );
}
