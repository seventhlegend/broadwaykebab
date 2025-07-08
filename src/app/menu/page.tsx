import { Metadata } from "next";
import MenuClient from "@/components/MenuClient";

export const metadata: Metadata = {
  title: "Menu - Broadway Kebab",
  description: "Browse our authentic Anatolian menu",
};

export default function MenuPage() {
  return <MenuClient />;
}
