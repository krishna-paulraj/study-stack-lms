"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant="secondary" onClick={() => alert("hello")}>
        Hello World
      </Button>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
