type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    onChange: (value: boolean) => void,
}

export function Accordion2v({titleValue, collapsed, onChange}: AccordionPropsType) {
    console.log('Accordion2v rendering');
    return (
        <div>
            <AccordionTitle title={titleValue} onChange={()=> onChange(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle({title, onChange}: AccordionTitlePropsType) {
    console.log('AccordionTitle');

    return (
        <h3 onClick={onChange}>***{title}***</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody');

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
};
