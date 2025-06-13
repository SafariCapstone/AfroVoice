"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    // Appwrite sets the session cookie, so just redirect to dashboard
    router.replace("/dashboard");
  }, [router]);

  return <div>Signing you in...</div>;
}