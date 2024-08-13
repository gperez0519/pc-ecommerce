import Image from "next/image";
import PageHeader from "./components/PageHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative">
      <PageHeader size="text-6xl" title="Welcome to Ultrium Gaming PCs!" />
      <Image
        priority
        fill
        src="/images/galaxy-pc-setup.jpeg"
        alt="Main Gaming PC Setup"
      />
    </main>
  );
}
