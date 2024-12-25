"use client";

import { SignedOut, SignInButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/form"); // Navigate after the component mounts
    }
  }, [isSignedIn, router]);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="text-4xl font-bold">Young Blaster</div>
      <div className="bg-blue-500 px-3 py-2 rounded-lg hover:bg-slate-600">
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </div>
  );
}
