import Image from "next/image";
import heroImage from "../../public/hero.svg";
export default function Home() {
  return (
    <>
      <main>
        <div className="bg-background w-full h-[100vh] flex items-center justify-center flex-col">
          <Image
            src={heroImage}
            alt="Imagem da hero section"
            width={400}
            height={400}
            className="object-contain"
          />
          <h1 className="color-foreground text-center max-w-[50%] m-6 text-4xl font-bold">
            Sistema feito para você organizar seus estudos e terefas
          </h1>
        </div>
      </main>
    </>
  );
}
