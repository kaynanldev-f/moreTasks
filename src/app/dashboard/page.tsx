import { getServerSession } from "next-auth";
import { authOptions } from "../../app/lib/auth";
import { redirect } from "next/navigation";
import TextArea from "../components/TextArea";
export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/");
  }
  return (
    <div className="w-full flex flex-col items-center justify-between p-6 ">
      <main className="max-w-5xl w-full flex flex-col p-6">
        <h1 className="text-[#fafafa] text-4xl font-bold">Qual sua tarefa?</h1>
        <form action="" className=" max-w-5xl w-full px-4 pb-6 mt-8 rounded-lg">
          <TextArea placeholder="Descreva sua tarefa..." />

          <div className="flex items-center gap-2 mt-4">
            <input
              className="w-4.5 h-4.5 outline-none "
              type="checkbox"
              name="taskPublic"
              id="taskPublic"
            />
            <label htmlFor="taskPublic" className="text-[#fafafa]">
              Tarefa pública
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-10 rounded text-[#fafafa] bg-[#3183ff] py-3 text-lg"
          >
            Registrar
          </button>
        </form>
      </main>
    </div>
  );
}
