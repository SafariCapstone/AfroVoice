import VoiceRecorder from "@/components/VoiceRecorder";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center p-8 gap-8 sm:p-20">
      {/* grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] */}
     <VoiceRecorder />
    </div>
  );
}
