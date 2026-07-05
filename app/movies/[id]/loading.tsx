import { SpinningCircularText } from "@/components/spinning-circular-text";

export default function Loading() {
  // Define the Loading UI here
  return (
    <div className="flex py-20 items-center justify-center bg-[#0a0a0a]">
      <SpinningCircularText className="text-foreground" text="CineStream • CineStream" />
    </div>
  );
}
