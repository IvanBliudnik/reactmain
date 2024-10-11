import React from "react";
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
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    return (
        <>
            <div className={styles.select} onKeyDown={()=>{}}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={styles.items}>
                        {props.items.map((item: any) => <div
                            className={styles.items + " " + (hoveredItem === item ? styles.selected : "")}
                            onMouseEnter={() => {sethovereedElementValue(item.value)}}
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
