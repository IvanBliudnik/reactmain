import {useEffect, useState} from "react";
import {tasksApi, TaskType} from "../api/tasks-api";
import {todolistsApi, TodolistType} from "../api/todolists-api";


export default {
    title: "API"
}


export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "2bab8a30-a97f-4d5c-858e-468211a39649"
        tasksApi.getTasks(todolistId).then((res) => {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "2bab8a30-a97f-4d5c-858e-468211a39649"
        const taskId = "123"
        const title = "HOHOHOH"
        tasksApi.createTask(todolistId, taskId, title).then((res) => {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>("")
    const [todolistId, settodolistId] = useState<string>("")
    const deleteTask = () => {
        const todolistId = "2916c6e6-d2bf-4ba8-b528-b0117ae6c471"
        const taskId = ""
        tasksApi.deleteTask(todolistId, taskId).then((res) => {
            setState(res.data)
        })
    }
    return <div>
        {JSON.stringify(state)}
        <input placeholder={"todolistId"} type="text" value={todolistId} onChange={(e) => {settodolistId(e.currentTarget.value)}}/>
        <input placeholder={"taskId"} type="text" value={taskId} onChange={(e) => {setTaskId(e.currentTarget.value)}}/>
        <button onClick={deleteTask}>delete task</button>
    </div>
}

export const UpdateTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // const todolistId = "2916c6e6-d2bf-4ba8-b528-b0117ae6c471"
        // const taskId = ""
        // const model = {
        //
        // }
        // tasksApi.updateTasks(todolisId, taskId, model).then((res) => {
        //     setState(res.data)
        // })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

///____________________________
//где то тут истина))))
// export const AppHttpRequests = () => {
//     const [todolists, setTodolists] = useState<TodolistType[]>([])
//     const [tasks, setTasks] = useState<{
//         [key: string]: TaskType[]
//     }>({})
//

//
//     useEffect(() => {
//         todolistsApi.getTodolists().then((res) => {
//             const todolists = res.data
//             setState(todolists)
//             todolists.forEach((tl:TodolistType[]) => {
//                 tasksApi.getTasks(tl.id).then((res) => {
//                     setState((prevState) => {
//                         return { ...prevState, [tl.id]: res.data.items }
//                     })
//                 })
//             })
//         })
//     }, [])