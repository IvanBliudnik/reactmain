import React, {useState} from 'react';

type OnOffPropsType = {
    onChange: (on: boolean) => void
}

export function UnControlledOnOff(props: OnOffPropsType) {
    console.log('onOff rendering')
    let [on, setOn] = useState<boolean>(false);
    console.log("on:  " + on)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : "white",
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : "red",
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    };
    const onClicked = () => {
        setOn(true);
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false);
        props.onChange(false)
    }
    return (
        <div>
            <div onClick={onClicked}>On
            </div>
            <div onClick={offClicked}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

