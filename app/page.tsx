import Terminal from "@/components/Terminal";
import VoyagerShell from "@/components/voyager/VoyagerShell";

export default function Home() {
  return (
    <VoyagerShell active="home" mainClassName="flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl">
        <Terminal />
      </div>
    </VoyagerShell>
  );
}