import React from "react";
import { Undo } from "iconoir-react";
import Footer from "../footer/Footer";
import Link from "next/link";

export default function ProjectLayout({ children }) {
  return (
    <div>
      <div>
        <Link href='/'>
          <Undo />
        </Link>
      </div>
      {children}
      <Footer />
    </div>
  );
}
