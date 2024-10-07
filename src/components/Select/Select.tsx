import {RatingValueType} from "../Rating/Rating";

type ItemType = {
    title: string;
    value: any;
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: Array<ItemType>,
}

export function Select(props: SelectPropsType) {
    console.log('Rating rendering');
    return (
        <div>
            <div>{}</div>
            {props.items.map((item: any, index: number) => <div>{item.title}</div>)}
        </div>
    );}