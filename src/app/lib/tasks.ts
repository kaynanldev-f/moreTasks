import {doc, getDoc} from "firebase/firestore"
import { db } from "../services/firebase"


interface ListTaskType {
  id: string;
  task: string;
  created: Date;
  currentDate: string,
  public: boolean;
  user: string;
}
export async function getTask(id: string){

    
    const taskRef = doc(db, "tasks", id)
    const taskSnapshot = await getDoc(taskRef)

    if(!taskSnapshot.exists()){
        return null
    }
    
    

    const data = taskSnapshot.data().created.toDate()
    const currentDate = data.toLocaleDateString("pt-BR")
    return{
        id: taskSnapshot.id,
        ...taskSnapshot.data(),
        currentDate,
    } as ListTaskType
}