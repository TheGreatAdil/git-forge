"use client";

import CircularText from "@/components/CircularText";
import ShinyText from "@/components/ShinyText";
import TextLoop from "@/components/TextLoop";
import { names } from "@/data";

export default function Home() {
  return (
    <>
      <section id="hero" className="w-full bg-black">
        <TextLoop
          text="Git ✦ Forge"
          shape="wave"
          speed={90}
          direction="forward"
          separator="✦"
          curviness={90}
          fontSize={46}
          fontWeight={800}
          letterSpacing={2}
          uppercase
          color="#ffffff"
          ribbon
          ribbonColor="#5227FF"
          ribbonWidth={86}
          pauseOnHover={false}
        />
      </section>

      <section
        id="contributions"
        className="w-full bg-black flex justify-center items-center"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-32 pb-32">
          {names.map((name, index) => (
            <ShinyText
              key={index}
              text={name.replace(" ", " ✦ ")}
              speed={2}
              delay={0}
              color="#552ffb"
              shineColor="#ffffff"
              spread={240}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
              className="text-2xl md:text-4xl font-geist-mono text-center"
            />
          ))}
        </div>
      </section>
    </>
  );
}
