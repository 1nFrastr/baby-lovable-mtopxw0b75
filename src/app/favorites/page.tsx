import { FAVORITES_KEY } from "@/lib/storage";
import FavoritesPage from "@/components/FavoritesPage";

export const metadata = {
  title: "Favorites — Wing & Steel",
  description: "Your saved aircraft and weapons.",
};

export default function FavoritesRoute() {
  void FAVORITES_KEY;
  return <FavoritesPage />;
}
