import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "steadfastfaith.app";
const DOCS_HOST = "docs.steadfastfaith.app";
const REDIRECT_HOSTS = new Set([
  "www.steadfastfaith.app",
  "steadfastprayer.com",
  "www.steadfastprayer.com",
]);

function isAssetPath(pathname: string) {
  return (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/images/") ||
    pathname.startsWith("/docs/Updated_Steadfast_Privacy_Policy.pdf") ||
    pathname === "/favicon.ico"
  );
}

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase();
  const url = request.nextUrl.clone();

  if (host && REDIRECT_HOSTS.has(host)) {
    url.protocol = "https";
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }

  if (host === DOCS_HOST && !isAssetPath(url.pathname)) {
    if (url.pathname === "/" || url.pathname === "") {
      url.pathname = "/docs";
      return NextResponse.rewrite(url);
    }

    if (!url.pathname.startsWith("/docs")) {
      url.pathname = `/docs${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
