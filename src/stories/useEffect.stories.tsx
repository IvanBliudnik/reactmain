import React, {useEffect, useState} from 'react';

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

//сначала выполняется отрисовка компонента потом выполняется useEffect (но он регестрируется)
export const SetTimeOutExample = () => {
    const [counter, setCounter] = React.useState(1);
    const [fake, setFake] = React.useState(1);
    console.log("SetTimeOutExample")
    useEffect(() => {
        setTimeout(()=> {
            console.log("SetTimeOutExample")
            document.title = counter.toString();
        }, 1000)
    }, [counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setFake(fake + 1)}>+</button>
        </>
    );
};

export const SetIntervalExample = () => {
    const [counter, setCounter] = React.useState(1);
    console.log("SetTimeExample")
    useEffect(() => {
        const intervalId = setInterval(()=> {
            setCounter(state => state + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId);
        }
    }, [])
    return (
        <>
            Hello,counter: {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    );
};

export const ResetEffectExample = () => {
    const [counter, setCounter] = React.useState(1);
    console.log("Component rendered with: " + counter);
    useEffect(() => {
        console.log("Effect occurred: " + counter);
        return () => { //функция зачистки
            console.log("ResetEffect: " + counter);
        }
    }, [counter])
    const increase = () => {
        setCounter(counter + 1)
    }
    return (
        <>
            Hello, {counter}
            <button onClick={increase}>+</button>
        </>
    );
};

export const KeysTrackerExample = () => {
    const [text, setText] = useState("");
    console.log("Component rendered with: " + text);
    useEffect(() => {
        const handler = (e:KeyboardEvent) => {
            //задали обработчик события handler для использования в двух местах при событии и при зачистке
            console.log(e.key)
            setText(text + e.key)
        }
            window.addEventListener("keypress", handler)
        return () => { //убиваем жизненный цикл компоненты если ушли от ёё перерисовки
            window.removeEventListener("keypress", handler) //remove
        }
    }, [text])
    return (
        <>
            Typed text: {text}
        </>
    );
};

export const SetTimeoutExample = () => {
    const [text, setText] = useState("");
    console.log("Component rendered with: " + text);
    useEffect(() => {
       const timeoutID = setTimeout(() => {
            console.log("timeout expired")
            setText("3 seconds pass ")
        }, 3000)
        return () => {
            clearTimeout(timeoutID) //зачистка обязательна
        }
    }, [text])
    return (
        <>
            Typed text: {text}
        </>
    );
};

