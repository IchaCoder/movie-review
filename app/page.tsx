import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";
import { getMovieCards, MovieType } from "@/lib/movies";
import { HomeHero } from "@/components/home-hero";

const trendingMovies = getMovieCards();

const spotlightCards = [
  { 
    eyebrow: "Directorial Debut",
    title: "Shadow of the Phoenix",
    body: "A masterpiece of modern noir storytelling.",
    className: "md:col-span-2 xl:col-span-4",
    art: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4F4yWTbY-zS-3bT8QXiBu737fC5ggOlJ9QdSXSo65Ees19szULjCcAJzpo0A64el8xwi5B7CNoZMJfJbm03YvGM2nh2VlyPfJBlKKzmymfY7EwDZGw4VcC0RQzCaKpd6Cr6_0-ddjJXmIxd-dKKDFvux5n23Lf0of8Wn7dZzL3EZ-vXd0WCetam0rZlqzCgwmZjn99s5ywimbGgCxJfpq9wfukN0NVfjLjYM2L9WatyERv3axy9iLOLvUkX5msU9zUOjAcRdF6ls",
  },
  {
    eyebrow: "CineMatch",
    title: "Find your next favorite movie based on your mood.",
    body: "Personalized picks tuned to the vibe you want tonight.",
    className: "md:col-span-1 xl:col-span-2",
  },
  {
    eyebrow: "Critics Choice",
    title: "Top-rated films by global film critics.",
    body: "Curated selections for when you want a guaranteed hit.",
    className: "md:col-span-1 xl:col-span-2",
  },
  {
    eyebrow: "Noir Collection",
    title: "Classic shadows. Modern obsession.",
    body: "A handpicked stack of high-contrast thrillers and mysteries.",
    className: "md:col-span-2 xl:col-span-4",
    art: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1W2J2_kGMYtFgQ4oWQ8I2L1Qwzv4W7lH8uX6n0VY8x4xjDk2u8vLwG1Zx2Y5xLQKJcM6J6M4ZV3fS7fJZfXW0qL2sV8vL8o8q0y3dO5nS4nB4Wn8K1XU2H5G2qW1J1F0h8p8O5Z8h4lHq0iQm9s2QmV4vH8bQ2yJm4iV3O3lA0mFQ",
  },
];

function fetchMovies(): Promise<MovieType[]> {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies`, { cache: "no-store" }).then((res) => res.json());
}

export default async function Home() {
  const movies = await fetchMovies();
  console.log(movies);
  const movie = movies[0];

  return (
    <main className="pt-19">
      {movie ? <HomeHero movie={movie} /> : null}

      <section className="mx-auto max-w-360 px-4 py-10 sm:px-6 lg:px-16 lg:py-14">
        <div className="mb-6 flex items-center gap-3">
          <h2 className="font-heading text-2xl font-bold text-[#f4f1f0] sm:text-[2rem]">Trending Now</h2>
          <ChevronRight className="h-5 w-5 text-[#e50914]" />
        </div>
        <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
          {trendingMovies.map((movie) => (
            <Link
              key={movie.title}
              href={`/movies/1`}
              className="group flex w-52.5 shrink-0 flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#131313] transition-all duration-300 hover:-translate-y-1 hover:border-[#e50914]/40 hover:shadow-[0_20px_40px_-18px_rgba(229,9,20,0.55)]"
            >
              <div className="relative aspect-2/3 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${movie.art})` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.04)_0%,rgba(10,10,10,0.2)_56%,rgba(10,10,10,0.9)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="glass-card rounded-xl px-3 py-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#f4f1f0]">
                      <span>{movie.title}</span>
                      <span className="text-[#ffb4aa]">{movie.rating} ★</span>
                    </div>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#b48d88]">{movie.year}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-3 text-sm text-[#e5e2e1]">
                <span className="truncate">{movie.title}</span>
                <span className="inline-flex items-center gap-1 text-[#ffb4aa]">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  {movie.rating}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-360 px-4 pb-16 sm:px-6 lg:px-16 lg:pb-20">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {spotlightCards.map((card) => (
            <article
              key={card.title}
              className={`group relative min-h-70 overflow-hidden rounded-3xl border border-white/8 bg-[#131313] ${card.className} transition-all duration-300 hover:-translate-y-1 hover:border-[#ffb4aa]/25`}
            >
              {card.art ? (
                <>
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${card.art})` }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.08)_0%,rgba(10,10,10,0.34)_42%,rgba(10,10,10,0.88)_100%)]" />
                </>
              ) : null}
              <div className="relative flex h-full flex-col justify-end p-6">
                <span className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ffb4aa]">
                  {card.eyebrow}
                </span>
                <h3 className="max-w-[15ch] font-heading text-2xl font-bold leading-tight text-[#f4f1f0] sm:text-[2rem]">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-[#e9bcb6]">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
