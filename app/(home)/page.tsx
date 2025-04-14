import Image from "next/image";

import { Card } from "@/components/ui/card";

import About from "./_components/about";
import { CardThree } from "./_components/cardThree";
import Summary from "./_components/sumarry";

const Home = () => {
  return (
    <Card>
      <section className="overhi h-screen w-full overflow-hidden bg-black p-0">
        <div className="relative h-full w-full">
          <Image src="/banner.jpeg" alt="bg" fill className="object-cover" />
          {/* <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center">
            <h1 className="font-pixo-reto text-[230px] font-light text-[#520000]">
              PORTIFOLIO
            </h1>
          </div>
          <Navbar /> */}
        </div>
        <CardThree />
      </section>
      <About />
      <Summary />
    </Card>
  );
};

export default Home;
