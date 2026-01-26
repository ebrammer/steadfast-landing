import Image from "next/image";

export default function HeroGraphicSection() {
  return (
    <section className="py-10 sm:py-14">
      <div className="w-full">
        <div
          className="relative overflow-hidden"
          style={{
            backgroundImage: "url('/images/gridBottom.png')",
            backgroundPosition: "center",
            backgroundSize: "140%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="mx-auto flex w-full max-w-6xl justify-center px-6 py-12 sm:px-8">
            <Image
              src="/images/devices.png"
              alt="Steadfast: Faith on multiple devices"
              width={1400}
              height={900}
              className="h-auto w-full max-w-5xl object-contain"
              sizes="(min-width: 1024px) 70vw, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
