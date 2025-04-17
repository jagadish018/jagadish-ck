"use client"
import dynamic from "next/dynamic";

const LottiePlayer = dynamic(
  () => import("@/components/lottiefile-animation/LottiePlayer"),
  { ssr: false }
);

export default function Lottie() {
  return (
    <div>
      
    </div>
  );
}
