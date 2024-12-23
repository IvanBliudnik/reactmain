import {useEffect, useState} from "react";
import {todolistsApi} from "../api/todolists-api";


export default {
    title: "API"
}


export const GetTodolists    = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        //здесь мы будем делать запрос и ответ закидывать в стейт
        //который в виде строки будем отражать в div
        todolistsApi.getTodolists().then((res) => {
            setState(res.data)//res.data это то что нам пришло с сервера
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolists    = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsApi.createTodolist("halo").then((res) => {
            //передаём "halo" в createTodolist(title: string)
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolists    = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const id = "5be56e88-8696-4292-887c-2b280d942129"
        todolistsApi.deleteTodolist(id).then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolists    = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const id = "6ee044a2-61df-43e2-83fb-3f78e6d2e6d8"
       todolistsApi.updateTodolist(id, "YOYOYOY").then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}