"use client"

import TextArea from "../TextArea"
import { useState, useEffect } from "react"
import { db } from "../../services/firebase"
import { addDoc, collection} from "firebase/firestore"


 interface DetailsTaskType{
    id: string
    user: string,
    email: string
 }


export default function DetailsForm({user, email, id}: DetailsTaskType){
    const [comment, setComment] = useState("")


    
    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()

        if(!user) return
        if(comment === "") return

        try{
             await addDoc(collection(db, "comments"),{
                user: user,
                email: email,
                created: new Date(),
                comment: comment,
                idTask: id
            })

            setComment("")
        }
        catch(error){
            console.log(error)
        }
    }

    
    return(
        <form action="" onSubmit={handleSubmit}>
                <TextArea value={comment} onChange={(e) => setComment(e.target.value)}/>
                <button disabled={!user} className="w-full mt-2 py-3 rounded-sm border-0 text-white bg-[#3183ff] text-lg cursor-pointer" type="submit">Enviar comentário</button>
        </form>
    )
}