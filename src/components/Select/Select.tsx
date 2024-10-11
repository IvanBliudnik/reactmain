import React, {useEffect} from "react";
import styles from "./Select.module.css";


type ItemType = {
    title: string;
    value: any;
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemType>,
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = React.useState(false);
    const [hoveredElement, sethovereedElementValue] = React.useState(props.value);
    const selectedItem = props.items.find((it) => it.value === props.value)
    const hoveredItem = props.items.find((it) => it.value === hoveredElement)
    useEffect(() => {
        sethovereedElementValue(props.value)
    }, [props.value])
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElement.value) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1];
                    if (pretendentElement) {
                        props.onChange(props.items[i + 1].value);
                        return
                    }
                }
            }
            if (!sethovereedElementValue) {
                props.onChange(props.items[0].value);
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            sethovereedElementValue(false)
        }
    }
    return (
        <>
            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={styles.items}>
                        {props.items.map((item: any) => <div
                            className={styles.items + " " + (hoveredItem === item ? styles.selected : "")}
                            onMouseEnter={() => {
                                sethovereedElementValue(item.value)
                            }}
                            key={item.value}
                            onClick={() => {
                                onItemClick(item.value)
                            }}
                        >{item.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    );
}