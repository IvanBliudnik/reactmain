import React from 'react';

export default {
    title: 'ReactMemo.demo',
};

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>;
};

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("Users");
    return (
        <div>
            {props.users.map((u, i) => (
                <div key={i}>{u}</div>
            ))}
        </div>
    );
};

const Users = React.memo(UsersSecret);

export const Example1 = () => {
    console.log("Example")
    const [counter, setCounter] = React.useState(0);
    const [users, setUsers] = React.useState(["Dimych", "Valera", "Katya"]);
    const addUser = () => {
        const newUsers = [...users, "Sveta " + new Date().getTime()];
        setUsers(newUsers);
    }
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessagesCounter count={counter} />
            <Users users={users} />
        </>
    );
};
