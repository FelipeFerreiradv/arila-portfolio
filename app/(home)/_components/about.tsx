import { QrCode } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="bg-primary flex h-[500px] w-full gap-29 overflow-hidden py-20 pl-20 max-sm:h-full max-sm:flex-col"
    >
      <div className="flex w-1/3 max-w-1/3 flex-col gap-5">
        <h1 className="font-aleo text-muted-foreground text-2xl text-[20px] font-semibold italic">
          ABOUT ME
        </h1>
        <div className="flex flex-col overflow-hidden">
          <p className="font-montserrat text-muted-foreground text-[15px]">
            ipsons mori
          </p>
          <Link
            href="https://www3.mackenzie.br/processos/geraProcesso.php?p=XtTbHFw==oLemBwMStTdLjL0FbUtDxewZjCDnj2WmSLWmSXRPge3njnBzewCZ4LCZCwSUSLyNfmtnCLMD7nHmSXkHgCDLAwCNLe"
            target="_blank"
            className="font-montserrat text-muted-foreground text-[15px]"
          >
            ipsons mori
            https://www3.mackenzie.br/processos/geraProcesso.php?p=XtTbHFw==oLemBwMStTdLjL0FbUtDxewZjCDnj2WmSLWmSXRPge3njnBzewCZ4LCZCwSUSLyNfmtnCLMD7nHmSXkHgCDLAwCNLe
          </Link>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex gap-32">
            <div className="flex flex-col gap-5">
              <h1 className="font-aleo text-muted-foreground text-2xl text-[20px] font-semibold italic">
                CONTACT
              </h1>
              <div className="flex flex-col">
                <p className="font-montserrat text-muted-foreground text-[15px]">
                  telefone
                </p>
                <p className="font-montserrat text-muted-foreground text-[15px]">
                  email
                </p>
              </div>
            </div>
            <div className="flex h-32 w-32 items-center justify-center rounded-4xl bg-black">
              <QrCode className="text-muted-foreground h-20 w-20" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-1/3 max-w-1/3 gap-20">
        <hr className="bg-muted-foreground h-full w-[.5px] max-sm:hidden" />
        <div className="flex flex-col gap-5">
          <h1 className="font-aleo text-muted-foreground text-2xl text-[20px] font-semibold italic">
            EXPERIENCE
          </h1>
          <div className="flex flex-col">
            <p className="font-montserrat text-muted-foreground text-[15px]">
              ipsons mori
            </p>
            <Link
              href="https://www3.mackenzie.br/processos/geraProcesso.php?p=XtTbHFw==oLemBwMStTdLjL0FbUtDxewZjCDnj2WmSLWmSXRPge3njnBzewCZ4LCZCwSUSLyNfmtnCLMD7nHmSXkHgCDLAwCNLe"
              target="_blank"
              className="font-montserrat text-muted-foreground text-[15px]"
            >
              dasiugdgdgdgdgdgdgdgdgdgdg
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-1/3 max-w-1/3 gap-20">
        <hr className="bg-muted-foreground h-full w-[.5px] max-sm:hidden" />
        <div className="flex flex-col gap-5">
          <h1 className="font-aleo text-muted-foreground text-2xl text-[20px] font-semibold italic">
            EDUCATION
          </h1>
          <div className="flex flex-col overflow-hidden">
            <p className="font-montserrat text-muted-foreground text-[15px]">
              ipsons mori
            </p>
            <Link
              href="https://www3.mackenzie.br/processos/geraProcesso.php?p=XtTbHFw==oLemBwMStTdLjL0FbUtDxewZjCDnj2WmSLWmSXRPge3njnBzewCZ4LCZCwSUSLyNfmtnCLMD7nHmSXkHgCDLAwCNLe"
              target="_blank"
              className="font-montserrat text-muted-foreground text-[15px]"
            >
              dasiugdgdgdgdgdgdgdgdgdgdg
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
