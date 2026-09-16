"use client"

import { useState } from "react";
import { FaShare, FaTrash } from "react-icons/fa";
import TaskForm from "../TaskForm";

interface ListTaskType {
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
                    <button className="bg-transparentborder-0 my-2 cursor-pointer">
                    <FaShare size={20} color="#3183ff"/>
                </button>
            </div>
            )}          
            
            <div className="mt-2 flex items-center justify-between">
              <p className="whitespace-pre-wrap text-background">{task.task}</p>
              <button>
                <FaTrash size={20} color="#ea3140" className="cursor-pointer"/>
              </button>
            </div>
          </article>
          ))}
          
          
        </section>
        </>
    )
}