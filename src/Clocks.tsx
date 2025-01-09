import React, {useEffect, useState} from "react";

type PropsType = {
    mode?: "analog" | "digital"
}

const get2DigitString = (num: number) => num < 10 ? "0" + num : num
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
    }, []); //useEffect сработал один раз при запуски


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

type ClockViewPropsType = {
    date: Date,
}

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
return (
    <>
    <span>
            {/*{date.getHours()}*/}
    {get2DigitString(date.getHours())}
        </span>
:
    <span>
        {/*{date.getMinutes()}*/}
        {get2DigitString(date.getMinutes())}
    </span>
:
    <span>
        {/*{date.getSeconds()}*/}
        {get2DigitString(date.getSeconds())}
    </span>
    </>
)
}
export const AnalogClockView: React.FC<ClockViewPropsType> = () => {
    return (
        <>
    <span>
            ANALOG
    </span>
        </>
    )
}