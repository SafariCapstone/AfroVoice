import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Main from "@/components/Main";

export default function Home() {
  return (
    // <div className="flex flex-col min-h-screen items-center p-8 gap-8 sm:p-20 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-600 bg-[length:400%_400%] animate-[gradient_12s_ease_infinite] ">
    <div className=" ">
      <Header />
      <Hero />
      <Main />
    </div>
  );
}
