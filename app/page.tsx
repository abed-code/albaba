import Grid from "@/components/common/Grid";
import { resturants } from "@/data/resturants";
import ResturantCard from "@/components/common/ResturantCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main>
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-16">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-48 h-48"
            />
          </div>
          <h1 className="text-4xl font-bold mb-5 text-primary text-center">
            المطاعم
          </h1>
          <Grid
            data={resturants}
            renderItem={(resturant) => (
              <ResturantCard key={resturant.id} resturant={resturant} />
            )}
          />
        </div>
      </main>

      <footer className="border-t mt-5 pt-5 flex items-center justify-center">
        &copy; 2025 Albaba
      </footer>
    </div>
  );
}
