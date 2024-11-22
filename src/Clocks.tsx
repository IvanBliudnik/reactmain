import React, {useEffect, useState} from "react";
import {clearInterval} from "node:timers";


type PropsType = {}

const get2DigitString = (num: number) => num < 10 ? "0" + num : num
export const Clocks: React.FC<PropsType> = (props: PropsType) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("Tick interval");
            setDate(new Date())
        }, 1000)
        // для остановки setInterval чтобы не жрала память (зачистка мусора при выключении компоненты )
        return () => {
            clearInterval(intervalId)
        }
    }, []); //useEffect сработал один раз при запуски


    // const secondsString =  date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
    // const minutesString =  date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    // const hoursString =  date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    return <div>
        <span>
            {/*{date.getHours()}*/}
            {get2DigitString(date.getHours())}
        </span> :
        <span>
        {/*{date.getMinutes()}*/}
            {get2DigitString(date.getMinutes())}
    </span> :
        <span>
        {/*{date.getSeconds()}*/}
            {get2DigitString(date.getSeconds())}
    </span>
    </div>
}