import { useLinkStatus } from "next/link";
import { Spinner } from "./ui/spinner";
import { useBreakpoint } from "@/hooks/use-breakpoint";

export default function LoadingIndicator() {
  const { pending } = useLinkStatus();
  const { lg } = useBreakpoint();
  if (!pending || !lg) return null;
  return <Spinner className="size-5" />;
}
