import {useEffect, useState} from "react";
import axios from "axios";
import {config, todolistsApi} from "../api/todolists-api";


export default {
    title: "API"
}


export const GetTodolists    = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        //здесь мы будем делать запрос и ответ закидывать в стейт
        //который в виде строки будем отражать в div
        todolistsApi.getTodolists().then((res) => {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolists    = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.post(`https://social-network.samuraijs.com/api/1.1//todo-lists`,{ title: "Privet" }, config)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolists    = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "fc029246-4819-45ba-9da0-119b4d77668c"
        axios.delete(`https://social-network.samuraijs.com/api/1.1//todo-lists/${todolistId}`,config)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolists    = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "fc029246-4819-45ba-9da0-119b4d77668c"
        axios.put(`https://social-network.samuraijs.com/api/1.1//todo-lists/${todolistId}`,{ title: "Yo yo" }, config)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}