"use client"

import { ChangeEvent, useState, useEffect } from "react"
import TextArea from "../TextArea"
import { db } from "../../services/firebase"
import { 
    addDoc,
    collection,
    serverTimestamp,
    query,
    where,
    orderBy,
    onSnapshot }
 from "firebase/firestore"

 interface listTaskType{
    id: string
    task: string,
    created: string,
    public: boolean,
    user: string
 }
 interface userType {
  user: {
    email: string;
  };

  onTasksChange: (tasks: listTaskType[]) => void;
}
export default function TaskForm({user, onTasksChange}: userType){
    const [publicTask, setPublicTask] = useState(false)
    const [task, setTask] = useState("")

    useEffect(() =>{

      async  function loadTasks() {
        const taskRef = collection(db, "tasks")
        const q = query(
            taskRef,
            orderBy("created", "desc"),
            where("user", "==", user.email),
            
        )
        onSnapshot(q, (snapshot) => {
                const list = [] as listTaskType[]
                snapshot.forEach((doc) => {
                    list.push({
                    id: doc.id,
                    task: doc.data().task,
                    created: doc.data().created,
                    public: doc.data().public,
                    user: user.email
                    })
                })
                
                onTasksChange(list)
            })
            }

            loadTasks()
            
    }, [user.email, onTasksChange])
    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault()

        if(task === "") return

        try{
            await addDoc(collection(db, "tasks"), {
                task: task,
                created: serverTimestamp(),
                public: publicTask,
                user: user.email
            })

            setTask("")
            setPublicTask(false)
        }
        catch(error){
            console.log(error)
        }
    }
    return(
        <form onSubmit={handleSubmit} action="" className=" max-w-5xl w-full px-4 pb-6 mt-8 rounded-lg">
            <TextArea placeholder="Descreva sua tarefa..." value={task} onChange={(e) => setTask(e.target.value)}/>
        
            <div className="flex items-center gap-2 mt-4">
                <input
                    className="w-4.5 h-4.5 outline-none "
                    type="checkbox"
                    name="taskPublic"
                    id="taskPublic"
                    checked={publicTask}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPublicTask(e.target.checked)}
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
    )
}