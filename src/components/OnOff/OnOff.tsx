import React, {useState} from 'react';

type OnOffPropsType = {
    // on: boolean
    // onChange: (on: boolean) => void
}

export function OnOff  (props: OnOffPropsType)  {
    console.log('onOff rendering' )
    let [swichOn, setSwichOn] = useState<boolean>(false);
    console.log("on:  " + swichOn )

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor:  swichOn ? 'green' : "white",
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor:  swichOn ? 'white' : "red",
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: swichOn? 'green': 'red'
    };
    return (
        <div>
            <div style={onStyle} onClick={()=>{setSwichOn(true)}}>On</div>
            <div style={offStyle} onClick={()=> {setSwichOn(false)}}>Off</div>
            <div style={indicatorStyle} ></div>
        </div>
    );
};

