import React from "react";
import {ClockViewPropsType} from "./Clocks";

export const get2DigitString = (num: number) => num < 10 ? "0" + num : num
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