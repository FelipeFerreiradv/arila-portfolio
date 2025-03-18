import { Card } from "@/components/ui/card";
import Navbar from "@/components/ui/navbar";

import { CardThree } from "./_components/cardThree";

const Home = () => {
  return (
    <Card>
      <section className="h-screen w-full bg-black p-0">
        <div className="relative h-full w-full">
          <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center">
            <h1 className="font-pixo-reto text-[230px] font-light text-[#520000]">
              PORTIFOLIO
            </h1>
          </div>
          <Navbar />
        </div>
        <CardThree />
      </section>
      <section className="bg-secondary-foreground-light h-screen w-full"></section>
    </Card>
  );
};

export default Home;
