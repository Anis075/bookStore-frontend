import AppRoute from "./AppRoute"; // Ensure this matches your file name and path
import AuthProvider from "./Context/AuthProvider";
import "./globals.css";
import { Toaster } from "react-hot-toast";

// Metadata for SEO
export const metadata = {
  title: "Books Store",
  description: "Your go-to online bookstore with a diverse selection of titles.",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="lightMode">
        <AuthProvider>
          <AppRoute /> {/* Routing setup */}
          <Toaster /> {/* Notification setup */}
        </AuthProvider>
      </body>
    </html>
  );
}
