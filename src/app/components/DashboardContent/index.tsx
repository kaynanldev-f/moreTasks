"use client"

import { useState } from "react";
import { FaShare, FaTrash } from "react-icons/fa";
import TaskForm from "../TaskForm";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";
import Link from "next/link";
interface ListTaskType {
  id: string
  task: string;
  created: string;
  public: boolean;
  user: string;
}

interface DashboardContentProps {
  email: string;
}


export default function DashboardContent({
  email,
}: DashboardContentProps){
    const [taskList, setTaskList] = useState<ListTaskType[]>([]);

    function handleTasksChange(tasks: ListTaskType[]) {
      setTaskList(tasks);
    }

    async function deleteTask(id: string){
      try{
        await deleteDoc(doc(db, "tasks", id))
        console.log(id)
      }
      catch(error){
        console.log(error)
      }
    }

    return(
        <>
        <section>
        <h1 className="text-[#fafafa] text-4xl font-bold">Qual sua tarefa?</h1>
        <TaskForm onTasksChange={handleTasksChange} user={{email}}/>
        </section>
        <section className=" mt-10 w-full">
          <h1 className="text-center text-4xl text-[#fafafa] mb-6">Minhas tarefas</h1>
          
          {taskList.map((task, index) => (
            <article key={index} className="flex flex-col bg-[#fafafa]  mb-4 p-6 border-[1.5px]  border-[#909090] rounded-lg">
            
            {task.public && (
                <div className="flex items-center  gap-2">
                    <label htmlFor="tag" className="bg-[#3183ff] px-1 py-1 text-[#fafafa] rounded-sm text-xs">PÚBLICO</label>
                    <Link href={`/detailsTask/${task.id}`} className="bg-transparent border-0 my-2 cursor-pointer">
                    <FaShare size={20} color="#3183ff"/>
                    </Link>
            </div>
            )}          
            
            <div className="mt-2 flex items-center justify-between">
              <p className="whitespace-pre-wrap text-background">{task.task}</p>
              <button onClick={() => deleteTask(task.id)}>
                <FaTrash size={20} color="#ea3140" className="cursor-pointer"/>
              </button>
            </div>
          </article>
          ))}
          
          
        </section>
        </>
    )
}