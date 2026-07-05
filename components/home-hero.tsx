"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Info, Play, Star } from "lucide-react";
import type { MovieType } from "@/lib/movies";

type HomeHeroProps = {
  movie: MovieType;
};

export function HomeHero({ movie }: HomeHeroProps) {
  const backdrops = movie.backdrops.length > 0 ? movie.backdrops : movie.poster ? [movie.poster] : [];
  const [activeBackdrop, setActiveBackdrop] = useState(0);

  useEffect(() => {
    if (backdrops.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveBackdrop((current) => (current + 1) % backdrops.length);
    }, 5500);

    return () => window.clearInterval(intervalId);
  }, [backdrops.length]);

  const meta = [movie.releaseDate, movie.genres.slice(0, 3).join(" · ")].filter(Boolean).join(" · ");

  return (
    <section className="relative min-h-[88vh] overflow-hidden border-b border-white/5">
      <div className="absolute inset-0">
        {backdrops.map((backdrop, index) => (
          <div
            key={`${backdrop}-${index}`}
            className={`absolute inset-0 bg-cover bg-center transition-[opacity,transform] duration-1000 ease-in-out ${
              index === activeBackdrop ? "opacity-100 scale-105" : "opacity-0 scale-110"
            }`}
            style={{ backgroundImage: `url(${backdrop})` }}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.08)_0%,rgba(10,10,10,0.66)_56%,#0a0a0a_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.9)_0%,rgba(10,10,10,0.46)_34%,rgba(10,10,10,0.12)_58%,rgba(10,10,10,0.74)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,9,20,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(75,142,255,0.08),transparent_26%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-360 items-end px-4 pb-16 pt-24 sm:px-6 lg:px-16 lg:pb-20">
        <div className="max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#e9bcb6]">
            <span className="rounded bg-[#e50914] px-3 py-1 text-[#fff7f6] shadow-[0_0_18px_rgba(229,9,20,0.34)]">
              Featured
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{meta}</span>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#ffb4aa]">Featured Film</p>
            <h1 className="max-w-4xl font-heading text-5xl font-black uppercase tracking-tight text-[#f4f1f0] drop-shadow-[0_20px_50px_rgba(0,0,0,0.55)] sm:text-7xl lg:text-[6.5rem] lg:leading-[0.95]">
              {movie.title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[#e9bcb6] sm:text-lg">
              The featured backdrop rotates through stills from the movie with a soft cross-fade, keeping the hero
              animated without breaking the reading flow.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/movies/inception"
              className="inline-flex items-center gap-3 rounded-xl bg-[#e50914] px-7 py-4 text-base font-semibold text-[#fff7f6] shadow-[0_0_26px_rgba(229,9,20,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#c0000c]"
            >
              <Play className="h-5 w-5 fill-current" />
              Watch Now
            </Link>
            <button className="inline-flex items-center gap-3 rounded-xl border border-white/12 bg-white/8 px-7 py-4 text-base font-semibold text-[#e5e2e1] backdrop-blur-sm transition-all hover:border-[#ffb4aa]/35 hover:bg-white/12">
              <Info className="h-5 w-5" />
              More Info
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-[#e5e2e1]">
            <span className="inline-flex items-center gap-2 text-[#ffcb3d]">
              <Star className="h-4 w-4 fill-current" />
              {movie.releaseDate}
            </span>
            <span className="text-[#b48d88]">{movie.genres.join(" / ")}</span>
          </div>

          {backdrops.length > 1 ? (
            <div className="flex flex-wrap items-center gap-2 pt-3">
              {backdrops.map((backdrop, index) => (
                <button
                  key={`${backdrop}-dot-${index}`}
                  type="button"
                  onClick={() => setActiveBackdrop(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeBackdrop
                      ? "w-8 bg-[#e50914] shadow-[0_0_18px_rgba(229,9,20,0.36)]"
                      : "w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Show backdrop ${index + 1} of ${backdrops.length}`}
                  aria-pressed={index === activeBackdrop}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
