import Terminal from "@/components/Terminal";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4 sm:p-8 bg-[#000] relative w-full overflow-hidden">
      <div className="w-full max-w-7xl h-[85vh] sm:h-[90vh] z-10 relative">
        <Terminal />
      </div>
      <BackgroundBeams />
    </main>
  );
}