import { COMPARE_KEY } from "@/lib/storage";
import ComparePage from "@/components/ComparePage";

export const metadata = {
  title: "Compare — Wing & Steel",
  description: "Compare military aircraft and weapons side by side.",
};

export default function CompareRoute() {
  void COMPARE_KEY;
  return <ComparePage />;
}
