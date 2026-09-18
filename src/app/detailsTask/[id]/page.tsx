import { redirect } from "next/navigation"
import {getTask} from "../../lib/tasks"
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
        <>
            <h1>{task.user}</h1>
        </>
    )
}