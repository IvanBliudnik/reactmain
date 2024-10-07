import React from "react";

export default {
    title: "Input Stories",
};

export const UncontrolledInput = () => {
    <input/>
};
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = React.useState("");
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    }
    return <><input onChange={onChange}/> - {value}</>
};
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = React.useState("");
    const inputRef = React.useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }
    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value: {value}</>
};
export const ControlledInputWithFixedValue = () => {
    <input value={"it-incubator.by"}/>
};
export const ControlledInput = () => {
    const [parentValue, setParentValue] = React.useState("");
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.value);
    }
    return <><input value={parentValue} onChange={onChange}/></>
};
export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = React.useState(true);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.checked);
    }
    return <><input type="checkbox" onChange={onChange} checked={parentValue}/></>
};
export const ControlledSelepct = () => {
    const [parentValue, setParentValue] = React.useState<string | undefined>("2");
    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.currentTarget.value);
    }
    return <select onChange={onChange} value={parentValue}>
        <option value={"0"}>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
        <option value={"3"}>Kiev</option>
    </select>
}