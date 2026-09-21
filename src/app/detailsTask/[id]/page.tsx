import { redirect } from "next/navigation"
import {getTask} from "../../lib/tasks"
import TextArea from "../../components/TextArea"
interface ListTaskType {
  id: string
  task: string;
  created: string;
  public: boolean;
  user: string;
}

export default async function detailsTask({params}: {params: Promise<{id: string}>}){
    const {id} = await params
    const task = await getTask(id)

    if(!task) {
        redirect("/")
    }

    
    return(
        <div className="w-full max-w-5xl mt-10 mx-auto px-6 flex flex-col items-center justify-center">
        <main className="w-full">
            <h1 className="text-5xl font-bold mb-4">Tarefa</h1>
            <article className="border-[1.5px] border-[#909090] p-4 rounded-sm flex items-center">
                <p className="whitespace-pre-wrap text-base">{task.task}</p>
            </article>
        
            <h2 className="mb-4 my-10 text-3xl font-bold">Deixar comentário</h2>
            <form action="">
                <TextArea />
                <button className="w-full mt-2 py-3 rounded-sm border-0 text-white bg-[#3183ff] text-lg cursor-pointer" type="submit">Enviar comentário</button>
            </form>
            
        </main>
        </div>
    )
}
