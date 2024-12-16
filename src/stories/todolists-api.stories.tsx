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
        const id = "badbd018-a372-4933-9351-287b5fa8e1ad"
        todolistsApi.deleteTodolist(id).then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolists    = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const id = "5ced5196-e3df-4487-b84f-1acdb80775a3"
       todolistsApi.updateTodolist(id, "YOYOYOY").then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}