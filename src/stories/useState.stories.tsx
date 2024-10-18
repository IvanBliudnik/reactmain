import React from 'react';

export default {
    title: 'useState demo',
};

function generateData() {
    //difficult counting
    console.log("generateData")
    return 1231234345346
}

export const Example1 = () => {
    console.log("Example")
    //const initValue = useMemo(generateData, [])
    const [counter, setCounter] = React.useState(generateData); //[1, function(newValue)]
    const changer = (state: number) => {
        debugger
        return state + 1
    }
    return (
        <>
            <button onClick={() => setCounter(changer)}>+</button>
            {counter}
        </>
    );
};
