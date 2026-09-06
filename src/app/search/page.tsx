import type { Metadata } from "next";
import SearchPage from "../../components/SearchPage";

export const metadata: Metadata = {
  title: "Search — Wing & Steel",
  description: "Search the Wing & Steel catalog of military aircraft and weapons.",
};

export default function Page() {
  return <SearchPage />;
}
