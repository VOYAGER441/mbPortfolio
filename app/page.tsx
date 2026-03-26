import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4 sm:p-8 bg-[#000]">
      <div className="w-full max-w-7xl h-[85vh] sm:h-[90vh]">
        <Terminal />
      </div>
    </main>
  );
}