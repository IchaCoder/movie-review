"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"] as const;

export function SearchInput() {
  return (
    <Combobox items={frameworks}>
      <ComboboxInput showClear showTrigger={false} className={"py-5"} placeholder="Search titles..." />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
