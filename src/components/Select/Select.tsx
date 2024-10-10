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
    const selectedItem = props.items.find((it) => it.value === props.value)
    const toggleItems = () => setActive(!active)

    return (
        <>
            <div className={styles.select}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={styles.items}>
                        {props.items.map((item: any, index: number) => <div
                            key={item.value}
                            onClick={() => {
                                props.onChange(item.value)
                            }}>
                            {item.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    );
}
