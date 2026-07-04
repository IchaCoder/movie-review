import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, Clock3, Play, Star } from "lucide-react";
import { getMovieById, getMovieCards, movies } from "@/lib/movies";

type MoviePageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return movies.map((movie) => ({ id: movie.id }));
}

const trendingMovies = getMovieCards();

export default function MovieDetailsPage({ params }: MoviePageProps) {
  // const movie = getMovieById(params.id);
  const movie = getMovieById("tenet");

  if (!movie) {
    notFound();
  }

  const relatedMovies = movie.relatedIds
    .map((relatedId) => getMovieById(relatedId))
    .filter((relatedMovie): relatedMovie is NonNullable<typeof relatedMovie> => Boolean(relatedMovie));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: `url(${movie.backdrop})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.08)_0%,rgba(10,10,10,0.42)_42%,rgba(10,10,10,0.94)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.12),transparent_28%),radial-gradient(circle_at_left,rgba(75,142,255,0.08),transparent_30%)]" />

        <div className="relative mx-auto max-w-360 px-4 pb-12 pt-6 sm:px-6 lg:px-16 lg:pb-16 lg:pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-semibold text-[#f4f1f0] backdrop-blur-md transition-colors hover:border-[#e50914]/40 hover:bg-black/35"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#e9bcb6]">
                <span className="rounded bg-[#e50914] px-3 py-1 text-[#fff7f6] shadow-[0_0_18px_rgba(229,9,20,0.34)]">
                  {movie.maturity}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  {movie.year} · {movie.genre} · {movie.duration}
                </span>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#ffb4aa]">Featured Film</p>
                <h1 className="font-heading text-5xl font-black uppercase tracking-tight text-[#f4f1f0] sm:text-7xl lg:text-[6.25rem] lg:leading-[0.94]">
                  {movie.title}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-[#e9bcb6] sm:text-lg">{movie.tagline}</p>
              </div>

              <div className="flex flex-wrap items-center gap-5 text-sm text-[#e5e2e1]">
                <span className="inline-flex items-center gap-2 text-[#ffcb3d]">
                  <Star className="h-4 w-4 fill-current" />
                  {movie.rating}/10 IMDb
                </span>
                <span className="inline-flex items-center gap-2 text-[#ff7d66]">
                  <Star className="h-4 w-4 fill-current" />
                  {movie.score} audience score
                </span>
                <span className="inline-flex items-center gap-2 text-[#e9bcb6]">
                  <Clock3 className="h-4 w-4" />
                  {movie.duration}
                </span>
              </div>

              <p className="max-w-2xl text-base leading-8 text-[#e9bcb6]">{movie.synopsis}</p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button className="inline-flex items-center gap-3 rounded-xl bg-[#e50914] px-7 py-4 text-base font-semibold text-[#fff7f6] shadow-[0_0_26px_rgba(229,9,20,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#c0000c]">
                  <Play className="h-5 w-5 fill-current" />
                  Play Trailer
                </button>
                <button className="inline-flex items-center gap-3 rounded-xl border border-white/12 bg-white/8 px-7 py-4 text-base font-semibold text-[#e5e2e1] backdrop-blur-sm transition-all hover:border-[#ffb4aa]/35 hover:bg-white/12">
                  Add to Watchlist
                </button>
              </div>
            </div>

            <div className="justify-self-start lg:justify-self-end">
              <div className="glass-card-strong w-full max-w-sm overflow-hidden rounded-[2rem] p-4 shadow-[0_30px_70px_-28px_rgba(0,0,0,0.7)]">
                <div
                  className="aspect-2/3 overflow-hidden rounded-[1.4rem] bg-cover bg-center"
                  style={{ backgroundImage: `url(${movie.poster})` }}
                />
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-[#e9bcb6]">Release</span>
                  <span className="font-semibold text-[#f4f1f0]">{movie.releaseDate}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-[#e9bcb6]">Director</span>
                  <span className="font-semibold text-[#f4f1f0]">{movie.director}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-[#e9bcb6]">Status</span>
                  <span className="font-semibold text-[#f4f1f0]">{movie.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto grid max-w-360 gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-16 lg:py-14">
        <section className="space-y-10">
          <div className="space-y-4">
            <h2 className="section-title font-heading text-3xl font-bold text-[#f4f1f0]">Overview</h2>
            <p className="max-w-4xl text-base leading-8 text-[#e9bcb6]">{movie.synopsis}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="section-title font-heading text-3xl font-bold text-[#f4f1f0]">Cast</h2>
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#ffb4aa] transition-colors hover:text-[#fff7f6]">
                View full credits <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
              {movie.cast.map((member) => (
                <article key={member.name} className="glass-card min-w-37.5 rounded-2xl p-4 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1c1b1b] text-sm font-bold text-[#f4f1f0]">
                    {member.initials}
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-[#f4f1f0]">{member.name}</h3>
                  <p className="mt-1 text-xs text-[#e9bcb6]">{member.role}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="glass-card rounded-3xl p-6">
              <h2 className="section-title font-heading text-2xl font-bold text-[#f4f1f0]">Why watch it</h2>
              <p className="mt-4 text-sm leading-7 text-[#e9bcb6]">
                The film blends high-concept storytelling with a visual language that stays grounded in character
                stakes. It is built for viewers who like movies that keep asking for one more watch.
              </p>
            </article>

            <article className="glass-card rounded-3xl p-6">
              <h2 className="section-title font-heading text-2xl font-bold text-[#f4f1f0]">Ratings snapshot</h2>
              <div className="mt-5 space-y-3">
                {[92, 78, 64, 46, 28].map((width, index) => (
                  <div key={width} className="flex items-center gap-3 text-sm">
                    <span className="w-12 text-[#e9bcb6]">{5 - index}★</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/8">
                      <div className="h-full rounded-full bg-[#e50914]" style={{ width: `${width}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="space-y-4">
            <h2 className="section-title font-heading text-3xl font-bold text-[#f4f1f0]">Community reviews</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {movie.reviews.map((review) => (
                <article key={review.author} className="glass-card rounded-3xl p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-[#f4f1f0]">{review.author}</h3>
                      <p className="text-sm text-[#e9bcb6]">Audience review</p>
                    </div>
                    <div className="flex items-center gap-1 text-[#e50914]">
                      {Array.from({ length: review.rating }, (_, index) => (
                        <Star key={index} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#e9bcb6]">{review.comment}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="glass-card rounded-3xl p-6">
            <h2 className="section-title font-heading text-2xl font-bold text-[#f4f1f0]">Quick facts</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-3">
                <dt className="text-[#e9bcb6]">Status</dt>
                <dd className="text-right font-semibold text-[#f4f1f0]">{movie.status}</dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-3">
                <dt className="text-[#e9bcb6]">Release date</dt>
                <dd className="text-right font-semibold text-[#f4f1f0]">{movie.releaseDate}</dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-3">
                <dt className="text-[#e9bcb6]">Director</dt>
                <dd className="text-right font-semibold text-[#f4f1f0]">{movie.director}</dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-3">
                <dt className="text-[#e9bcb6]">Budget</dt>
                <dd className="text-right font-semibold text-[#f4f1f0]">{movie.budget}</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-[#e9bcb6]">Box office</dt>
                <dd className="text-right font-semibold text-[#f4f1f0]">{movie.boxOffice}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e9bcb6]">Genres</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#f4f1f0]"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h2 className="section-title font-heading text-2xl font-bold text-[#f4f1f0]">More like this</h2>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {relatedMovies.map((relatedMovie) => (
                <Link key={relatedMovie.id} href={`/movies/${relatedMovie.id}`} className="group block">
                  <div className="aspect-2/3 overflow-hidden rounded-2xl border border-white/8 bg-[#131313]">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${relatedMovie.poster})` }}
                    />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-[#f4f1f0] group-hover:text-[#ffb4aa]">
                    {relatedMovie.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
