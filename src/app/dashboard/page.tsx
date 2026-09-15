import { getServerSession } from "next-auth";
import { authOptions } from "../../app/lib/auth";
import { redirect } from "next/navigation";
import { FaShare, FaTrash } from "react-icons/fa";
import TaskForm from "../components/TaskForm";

export default async function Dashboard() {
  
  const session = await getServerSession(authOptions);
  
  if (!session?.user) {
    redirect("/");
  }
  return (
    <div className="w-full flex flex-col items-center justify-between p-6 ">
      <main className="max-w-5xl w-full flex flex-col p-6">
        <section>
        <h1 className="text-[#fafafa] text-4xl font-bold">Qual sua tarefa?</h1>
        <TaskForm />
        </section>
        <section className=" mt-10 w-full">
          <h1 className="text-center text-4xl text-[#fafafa] mb-6">Minhas tarefas</h1>
          
          <article className="flex flex-col bg-[#fafafa]  mb-4 p-6 border-[1.5px]  border-[#909090] rounded-lg">
            <div className="flex items-center  gap-2">
              <label htmlFor="tag" className="bg-[#3183ff] px-1 py-1 text-[#fafafa] rounded-sm text-xs">PÚBLICO</label>
              <button className="bg-transparentborder-0 my-2 cursor-pointer">
                <FaShare size={20} color="#3183ff"/>
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <p className="whitespace-pre-wrap text-background">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
              <button>
                <FaTrash size={20} color="#ea3140" className="cursor-pointer"/>
              </button>
            </div>
          </article>
          <article className="flex flex-col bg-[#fafafa]  mb-4 p-6 border-[1.5px]  border-[#909090] rounded-lg">
            <div className="flex items-center  gap-2">
              <label htmlFor="tag" className="bg-[#3183ff] px-1 py-1 text-[#fafafa] rounded-sm text-xs">PÚBLICO</label>
              <button className="bg-transparentborder-0 my-2 cursor-pointer">
                <FaShare size={20} color="#3183ff"/>
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <p className="whitespace-pre-wrap text-background">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
              <button>
                <FaTrash size={20} color="#ea3140" className="cursor-pointer"/>
              </button>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
