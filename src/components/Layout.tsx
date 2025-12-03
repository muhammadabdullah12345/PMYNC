import type { PropsWithChildren } from "react";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { setupRevealAnimations } from "../smoothAnimations.js";

export function Layout({ children }: PropsWithChildren) {
  useEffect(() => {
    setupRevealAnimations();
  }, []);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
