import './App.css';
import {RatingValueType, UncontrolledRatting} from "./components/UncontrolledRatting/UncontrolledRatting";
import {useState} from "react";
import {Rating} from "./components/Rating/Rating";
import {UnControlledAccordion} from "./components/UncontrolledAccordion/UnControlledAccordion";
import {UnControlledOnOff} from "./components/UncontrolledOnOff/UnControlledOnOff";
import {Accordion} from "./components/Accordions/Accordion";

// import {OnOff} from "./components/OnOff/OnOff";

function App() {
    console.log('App rendering');
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [swichOn, setSwichOn] = useState<boolean>(false);

    return (
        <div className="App">
            {/*<PageTitle title={'This is App component'} />*/}
            {/*<PageTitle title={'My friends'} />*/}
            <UnControlledOnOff onChange={setSwichOn}/> {swichOn.toString()}
            {/*<OnOff on={swichOn} onChange={setSwichOn}/>*/}
            <UnControlledAccordion titleValue={'Menu'}/>
            <UnControlledAccordion titleValue={'Users'}/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed);
                       }} items={[]} onClick={function (value: any): void {
                throw new Error('Function not implemented.');
            }}/>
            <UncontrolledRatting onChange={function(value: RatingValueType): void {
                throw new Error('Function not implemented.');
            } }/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Users"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}
                       onChange={function (): void {
                           throw new Error('Function not implemented.');
                       }} items={[]}/>
        </div>
    )
}

// type PageTitlePropsType = {
//   title: string
// }

// function PageTitle(props: PageTitlePropsType) {
//   console.log('AppTitle rendering');
//   return (
//     <h1>{props.title}</h1>
//   )
// }

export default App;
