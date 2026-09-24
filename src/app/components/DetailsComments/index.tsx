"use client"

import { useEffect, useState } from "react"
import { db } from "../../services/firebase"

import { collection, query, where, getDocs } from "firebase/firestore"
import { FaTrash } from "react-icons/fa"


interface CommentType {
    created: string,
    user: string,
    email: string,
    comment: string
}

export default function DetailsComments({ id, emailA }: { id: string, emailA: string }) {
    const [comments, setComments] = useState<CommentType[]>()

    useEffect(() => {
        async function getComments() {
            const docComments = collection(db, "comments")
            const q = query(docComments, where("idTask", "==", id))
            const snapshotComments = await getDocs(q)

            const allComments: CommentType[] = []
            snapshotComments.forEach((doc) => {
                allComments.push({
                    user: doc.data().user,
                    email: doc.data().email,
                    created: doc.data().created,
                    comment: doc.data().comment
                })
            })
            setComments(allComments)
            console.log(allComments)
        }

        getComments()

    }, [id])

    return (
        <div className="my-10 w-full">
            <ul>
                {comments?.map((comment, index) => (
                    <li key={index} className="border-[1.5px] border-[#909090] p-4 rounded-sm flex flex-col gap-4 mb-4">
                        <div className="flex items-center gap-2">
                            <span className="bg-[#808080] text-sm text-white p-1 rounded-sm">{comment.user}</span>

                            {comment.email === emailA && (
                                <button><FaTrash size={18} color={"#ea3140"} /></button>
                            )}
                        </div>
                        <p className="text-base max-w-3/4 whitespace-pre-wrap">{comment.comment}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
}