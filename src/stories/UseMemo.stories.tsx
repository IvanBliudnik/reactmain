import React, {useCallback, useMemo} from 'react';


export default {
    title: 'useMemo.demo',
};


export const DifficultCountingExample = () => {
    console.log("Example")
    const [a, setA] = React.useState<number>(5);
    const [b, setB] = React.useState<number>(5);
    let resultA = 1
    let resultB = 1
    resultA = useMemo(() => {
        let tempResultA = 1 //задаём начальное значения для дальнейшей работы и возврата
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            // сломали быструю производительность resultA
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a]) //это означает что не запускай функцию 1пар пока не поменялся начальный state [a]

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    );
};


const UsersSecret = (props: { users: Array<string> }) => {
    console.log("Users secret");
    return (
        <div>
            {props.users.map((u, i) => (
                <div key={i}>{u}</div>
            ))}
        </div>
    );
};
const Users = React.memo(UsersSecret);
export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = React.useState(0);
    const [users, setUsers] = React.useState(["Dimych", "Valera", "Artem", "Katya"]);
    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf("a") > -1);
        return newArray
    }, [users])
    const addUser = () => {
        const newUsers = [...users, "Sveta " + new Date().getTime()];
        setUsers(newUsers);
    };
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>Add user</button>
        {counter}
        <Users users={newArray}/>
    </>;
}

