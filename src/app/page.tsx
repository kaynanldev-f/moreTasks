import Image from "next/image";
import heroImage from "../../public/hero.svg";
export default function Home() {
  return (
    <>
      <main className="flex-1 flex items-center justify-center">
        <div className="container">
          <Image
            src={heroImage}
            alt="Imagem da hero section"
            width={400}
            height={400}
            className="object-contain"
          />
          <h1 className="text-foreground text-center max-w-[50%] m-6 text-4xl font-bold">
            Sistema feito para você organizar seus estudos e terefas
          </h1>
          <div className="flex items-center justify-around gap-4 text-background font-bold">
            <section className="bg-[#fafafa] py-3 px-8 rounded-sm transition-transform hover:scale-105 duration-200 ease-in-out">
              <span>+ 12 posts</span>
            </section>
            <section className="bg-[#fafafa] py-3 px-8 rounded-sm transition-transform hover:scale-105 duration-200 ease-in-out">
              <span>+ 90 comentários</span>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
