import { redirect } from "next/navigation"
import {getTask} from "../../lib/tasks"
import DetailsForm from "../../components/DetailsForm"
import DetailsComments from "../../components/DetailsComments"
import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth"


export default async function detailsTask({params}: {params: Promise<{id: string}>}){
    const {id} = await params
    const task = await getTask(id)
    const session = await getServerSession(authOptions)

    const user = session?.user?.email as string

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
            <DetailsForm  user={user} id={id}/>
            <DetailsComments id={id} />
        </main>
        </div>
    )
}
