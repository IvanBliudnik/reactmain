import React, {useEffect} from 'react';

export default {
    title: 'useEffect demo',
};


export const SimpleExample = () => {
    const [counter, setCounter] = React.useState(1);
    console.log("SimpleExample")
    useEffect(() => {
        console.log("useEffect");
        document.title = counter.toString();
    })
    return (
        <>
            Hello, {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    );
};
