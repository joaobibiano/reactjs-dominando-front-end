import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center place-content-center">
      <Loader2 className="animate-spin" />
    </div>
  );
}
