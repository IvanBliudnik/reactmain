import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode?: "analog" | "digital"
}


export const Clocks: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {

        const intervalID = setInterval(() => {
            console.log("Tick");
            setDate(new Date())
        }, 1000);
        // для остановки setInterval чтобы не жрала память (зачистка мусора при выключении компоненты )
        return () => {
            clearInterval(intervalID)
        }
    }, []); //useEffect сработал один раз при запуске


    // const secondsString =  date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
    // const minutesString =  date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    // const hoursString =  date.getHours() < 10 ? "0" + date.getHours() : date.getHours()

    let view
    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }
    return <div>
        {view}
    </div>
}

export type ClockViewPropsType = {
    date: Date,
}


