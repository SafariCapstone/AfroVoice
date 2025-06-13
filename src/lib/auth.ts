"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Client, Account } from "appwrite";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    // After OAuth, Appwrite sets the session in cookies.
    // Optionally, you can fetch the user or redirect.
    router.push("/dashboard");
  }, [router]);

  return <div>Signing you in...</div>;
}