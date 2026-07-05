import { Skeleton } from "@/components/ui/skeleton";

export function SearchInputSkeleton() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="h-12 w-12 rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  );
}
