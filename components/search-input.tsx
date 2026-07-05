"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { MovieType } from "@/lib/movies";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SearchInputSkeleton } from "./skeleton/search-loading";

type MovieProps = {
  movies: Pick<MovieType, "title" | "poster" | "releaseDate" | "_id">[];
  loading: boolean;
  setSearchQuery: (query: string) => void;
};

export function SearchInput({ movies, loading, setSearchQuery }: MovieProps) {
  const router = useRouter();
  const resetSearchQuery = (value: unknown) => {
    if (!value) {
      setSearchQuery("");
    }
  };
  return (
    <Combobox onValueChange={(value) => resetSearchQuery(value)} items={movies.map((movie) => movie.title)}>
      <ComboboxInput
        showClear
        showTrigger={false}
        className={"py-5"}
        placeholder="Search titles..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ComboboxContent>
        <ComboboxList>
          {loading ? (
            <ComboboxItem>
              <SearchInputSkeleton />
            </ComboboxItem>
          ) : movies.length === 0 ? (
            <ComboboxEmpty>
              <div className="flex flex-col items-center justify-center gap-2 py-4">
                <p className="text-sm text-[#b48d88]">Oops.. Thats all from our database</p>
              </div>
            </ComboboxEmpty>
          ) : (
            movies.map((movie) => (
              <ComboboxItem onClick={() => setSearchQuery(movie.title)} key={movie._id} value={movie.title}>
                <div onClick={() => router.push(`/movies/${movie._id}`)} className="flex items-center gap-3">
                  <Image
                    src={movie.poster}
                    width={40}
                    height={40}
                    alt={movie.title}
                    className="h-10 w-10 rounded-md object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#e5e2e1]">{movie.title}</span>
                    <span className="text-xs text-[#b48d88]">{movie.releaseDate}</span>
                  </div>
                </div>
              </ComboboxItem>
            ))
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
