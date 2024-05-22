"use client";

import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [name, setName] = useState("World");
  return (
    <main className="w-screen h-screen flex flex-col gap-8 justify-center items-center max-w-2xl mx-auto">
      <Link href="/form">here</Link>
    </main>
  );
}
