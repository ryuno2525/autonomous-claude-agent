"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Success() {
  useEffect(() => {
    localStorage.setItem("qrcraft_pro", "true");
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
          <span className="text-purple-400 text-3xl">+</span>
        </div>
        <h1 className="text-3xl font-bold mb-3">You&apos;re Pro!</h1>
        <p className="text-gray-400 mb-8">
          QRCraft Pro is now unlocked. Unlimited downloads, SVG export, and all
          customization options — yours forever.
        </p>
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          Create QR Codes
        </Link>
      </div>
    </main>
  );
}
