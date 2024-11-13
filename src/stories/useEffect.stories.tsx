import React, {useEffect} from 'react';

export default {
    title: 'useEffect demo',
};


export const SimpleExample = () => {
    const [counter, setCounter] = React.useState(1);
    const [fake, setFake] = React.useState(1);
    console.log("SimpleExample")
    useEffect(() => {
        console.log("useEffect every time render");
        document.title = counter.toString();
    })
    //без зависимости будет постоянно вызываться seEffect
    useEffect(() => {
        console.log("useEffect only first time render(componentDidMount)");
        document.title = counter.toString();
    }, [])
    //вызов только при загрузке страницы 1 раз
    useEffect(() => {
        console.log("useEffect first time render and every time {counter} change");
        document.title = counter.toString();
    }, [counter])
    // только при изменении {counter}
    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setFake(fake + 1)}>+</button>
        </>
    );
};
//useEffect отображается только после отображения страницы