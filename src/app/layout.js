import AppRoute from "./AppRoute";
import "./globals.css";

export const metadata = {
  title: "Books Store",
  description:
    "Your go-to online bookstore with a diverse selection of titles.",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="lightMode">
        <AppRoute />
      </body>
    </html>
  );
}
