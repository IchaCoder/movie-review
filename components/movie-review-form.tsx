"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { PencilLine, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NativeSelect, NativeSelectOption } from "./ui/native-select";

type MovieReviewFormProps = {
  movieId: string;
};

export function MovieReviewForm({ movieId }: MovieReviewFormProps) {
  const router = useRouter();
  const [isRefreshing, startTransition] = useTransition();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("5");
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          movieId,
          author,
          rating: Number(rating),
          comment,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setErrorMessage(data.error ?? "We could not save your review.");
        return;
      }

      setAuthor("");
      setRating("5");
      setComment("");
      setSuccessMessage("Review saved.");

      startTransition(() => {
        router.refresh();
      });
    } catch {
      setErrorMessage("We could not save your review.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="glass-card rounded-3xl p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="section-title font-heading text-2xl font-bold text-[#f4f1f0]">Write a review</h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-[#e9bcb6]">
            Submit a review for this movie and it will be stored in the database.
          </p>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 p-3 text-[#ffcb3d]">
          <PencilLine className="h-5 w-5" />
        </div>
      </div>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-[#f4f1f0]">Your name</span>
            <Input
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
              placeholder="Your display name"
              required
              className="h-11 border-white/10 bg-white/5 text-[#f4f1f0] placeholder:text-[#8b7a77]"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-[#f4f1f0]">Rating</span>
            <NativeSelect value={rating} onChange={(e) => setRating(e.target.value)} className="">
              <NativeSelectOption value="">Select a rating</NativeSelectOption>
              <NativeSelectOption value="5">5 - Excellent</NativeSelectOption>
              <NativeSelectOption value="4">4 - Strong</NativeSelectOption>
              <NativeSelectOption value="3">3 - Good</NativeSelectOption>
              <NativeSelectOption value="2">2 - Mixed</NativeSelectOption>
              <NativeSelectOption value="1">1 - Weak</NativeSelectOption>
            </NativeSelect>
          </label>
        </div>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-[#f4f1f0]">Comment</span>
          <Textarea
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="What worked for you? What did not?"
            required
            rows={5}
            className="min-h-28 border-white/10 bg-white/5 text-[#f4f1f0] placeholder:text-[#8b7a77]"
          />
        </label>

        {errorMessage ? (
          <p className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-[#ffb4aa]">
            {errorMessage}
          </p>
        ) : null}

        {successMessage ? (
          <p className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
            {successMessage}
          </p>
        ) : null}

        <Button
          type="submit"
          disabled={isSubmitting || isRefreshing}
          className="h-11 w-full gap-2 rounded-xl bg-[#e50914] text-base font-semibold text-[#fff7f6] transition-colors hover:bg-[#c0000c]"
        >
          <Send className="h-4 w-4" />
          {isSubmitting ? "Saving..." : "Submit review"}
        </Button>
      </form>
    </section>
  );
}
