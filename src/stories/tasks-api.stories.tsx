import {useEffect, useState} from "react";
import {tasksApi} from "../api/tasks-api";
import {todolistsApi} from "../api/todolists-api";


export default {
    title: "API"
}


export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")

    const getTasks = () => {
        tasksApi.getTasks(todolistId).then((res) => {
            setState(res.data)
        })
    }

    return <div>{JSON.stringify(state)}
        <div>
            <input placeholder={"todolistId"} value={todolistId} onChange={(e) => {
                setTodolistId(e.currentTarget.value)
        }}/>
            <button onClick={getTasks}>get tasks</button>
        </div>
    </div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskTitle, setTaskTitle] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")

    const createTask = () => {
        tasksApi.createTask(todolistId, taskTitle).then((res) => {
            setState(res.data.data)
        })
    }
    return <div>
        {JSON.stringify(state)}
        <div>
            <input placeholder={"todolistId"} type="text" value={todolistId} onChange={(e) => {
                setTodolistId(e.currentTarget.value)
            }}/>
            <input placeholder={"task Title"} type="text" value={taskTitle} onChange={(e) => {
                setTaskTitle(e.currentTarget.value)
            }}/>
            <button onClick={createTask}>delete task</button>
        </div>
    </div>
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
