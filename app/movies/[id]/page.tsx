import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Film, Play, Star } from "lucide-react";
import type { MovieType } from "@/lib/movies";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

type MoviePageProps = {
  params: Promise<{
    id: string;
  }>;
};

const reviews = [
  {
    author: "LateNightQueue",
    rating: 5,
    comment: "A strong shelf of recommendations when I want something dark and atmospheric.",
  },
  {
    author: "MoodSetter",
    rating: 4,
    comment: "The selection feels intentional instead of random, which makes it easy to start watching.",
  },
];

// {
//   params: Promise<{ slug: string }>;
// }

export async function generateStaticParams() {
  const movies = fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies`, { cache: "no-store" }).then((res) =>
    res.json(),
  ) as unknown as Promise<MovieType[]>;
  const moviesData = await movies;
  return moviesData.map((movie: { _id: string }) => ({
    id: movie._id,
  }));
}

async function getMovieById(id: string): Promise<MovieType | null> {
  try {
    const client = await clientPromise;
    const db = client.db("movie-api-db");
    const moviesCollection = db.collection("movies");

    const movie = await moviesCollection.findOne({ _id: new ObjectId(id) });

    return movie as MovieType | null;
  } catch (error) {
    console.error("Error fetching movie by ID:", error);
    return null;
  }
}

export default async function MovieDetailsPage({ params }: MoviePageProps) {
  const paramId = (await params).id;

  const movie = await getMovieById(paramId);

  if (!movie) {
    notFound();
  }

  const backdrop = movie.backdrops[0] ?? movie.poster;
  const trailerEmbedUrl = getYouTubeEmbedUrl(movie.trailerLink);
  const meta = [movie.releaseDate, movie.genres.slice(0, 3).join(" · ")].filter(Boolean).join(" · ");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: `url(${backdrop})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.08)_0%,rgba(10,10,10,0.56)_48%,rgba(10,10,10,0.96)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.14),transparent_30%),radial-gradient(circle_at_left,rgba(75,142,255,0.1),transparent_30%)]" />

        <div className="relative mx-auto max-w-360 px-4 pb-12 pt-6 sm:px-6 lg:px-16 lg:pb-16 lg:pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-semibold text-[#f4f1f0] backdrop-blur-md transition-colors hover:border-[#e50914]/40 hover:bg-black/35"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="mt-10 space-y-8 lg:mt-12">
            <div className="max-w-4xl space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase text-[#e9bcb6]">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{meta}</span>
              </div>

              <div className="space-y-3">
                <h1 className="font-heading text-5xl font-black tracking-tight text-[#f4f1f0] sm:text-7xl lg:text-[4.75rem] lg:leading-[0.96]">
                  {movie.title}
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-5 text-sm text-[#e5e2e1]">
                <span className="inline-flex items-center gap-2 text-[#ffcb3d]">
                  <Star className="h-4 w-4 fill-current" />
                  {movie.rating}/10 IMDb
                </span>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.72fr)] lg:items-stretch">
              <div className="order-2 overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 shadow-[0_30px_80px_-34px_rgba(0,0,0,0.8)] lg:order-0">
                <div
                  className="relative aspect-2/3 h-full min-h-112 bg-cover bg-center sm:min-h-136 lg:min-h-160"
                  style={{ backgroundImage: `url(${movie.poster})` }}
                ></div>
              </div>

              <div className="order-1 overflow-hidden rounded-[2rem] border border-white/10 bg-black/45 shadow-[0_30px_80px_-34px_rgba(0,0,0,0.82)] lg:order-0 lg:col-start-2 lg:row-start-1">
                <div className="p-3 sm:p-4">
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-[0_20px_60px_-24px_rgba(0,0,0,0.85)]">
                    {trailerEmbedUrl ? (
                      <iframe
                        className="aspect-video w-full"
                        src={trailerEmbedUrl}
                        title={`${movie.title} trailer`}
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <div className="flex aspect-video items-center justify-center px-6 text-center text-sm text-[#b48d88]">
                        Trailer is unavailable for this movie.
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1 pb-1">
                    <div className="flex flex-wrap gap-2">
                      {movie.genres.slice(0, 3).map((genre) => (
                        <span
                          key={genre}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#f4f1f0]"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>

                    {movie.trailerLink ? (
                      <Link
                        href={movie.trailerLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/8 px-4 py-2 text-sm font-semibold text-[#e5e2e1] backdrop-blur-sm transition-colors hover:border-[#ffb4aa]/35 hover:bg-white/12 hover:text-[#fff7f6]"
                      >
                        Open trailer
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto grid max-w-360 gap-8 px-4 py-10 sm:px-6 lg:px-16 lg:py-14">
        <section className="space-y-10">
          <div className="grid gap-4 md:grid-cols-2">
            <article className="glass-card rounded-3xl p-6">
              <h2 className="section-title font-heading text-2xl font-bold text-[#f4f1f0]">Why watch it</h2>
              <p className="mt-4 text-sm leading-7 text-[#e9bcb6]">
                The film blends high-concept storytelling with a visual language that stays grounded in character
                stakes. It is built for viewers who like movies that keep asking for one more watch.
              </p>
            </article>
          </div>

          <div className="space-y-4">
            <h2 className="section-title font-heading text-3xl font-bold text-[#f4f1f0]">Community reviews</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {reviews.map((review) => (
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
      </main>
    </div>
  );
}

function getYouTubeEmbedUrl(trailerLink: string) {
  if (!trailerLink) {
    return "";
  }

  try {
    const url = new URL(trailerLink);

    if (url.hostname.includes("youtube.com")) {
      const videoId = url.searchParams.get("v");
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      }
    }

    if (url.hostname.includes("youtu.be")) {
      const videoId = url.pathname.split("/").filter(Boolean)[0];
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      }
    }

    return trailerLink;
  } catch {
    return trailerLink;
  }
}
