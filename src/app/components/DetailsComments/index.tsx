"use client"

import { useEffect, useState } from "react"
import { db } from "../../services/firebase"

import { collection, query, where, getDocs } from "firebase/firestore"


interface CommentType {
    created: string,
    user: string,
    comment: string
 }
 
export default function DetailsComments({id}: {id: string}){
    const [comments, setComments] = useState<CommentType[]>()

    useEffect(() =>{
            async function getComments(){
                const docComments = collection(db, "comments")
                const q = query(docComments, where("idTask", "==", id))
                const snapshotComments = await getDocs(q)
            
                const allComments: CommentType[] = []
                snapshotComments.forEach((doc) => {
                    allComments.push({
                        user: doc.data().user,
                        created: doc.data().created,
                        comment: doc.data().comment
                    })
                })
                setComments(allComments)
                console.log(allComments)
            }
    
            getComments()
        },[id])
    
    return(
        <div>
            {comments?.map((comment, index) =>(
                <p key={index}>{comment.comment}</p>
            ))}
        </div>
    )
}