import './App.css';
import {UncontrolledRatting} from "./components/UncontrolledRatting/UncontrolledRatting";
import {useState} from "react";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UnControlledAccordion} from "./components/UncontrolledAccordion/UnControlledAccordion";
import {Accordion1v} from "./components/Accordions/Accordion1v";
import {Accordion2v} from "./components/Accordions/Accordion2v";
import {UnControlledOnOff} from "./components/UncontrolledOnOff/UnControlledOnOff";
import {OnOff} from "./components/OnOff/OnOff";

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
            <Accordion2v titleValue={"Menu"}
                         collapsed={accordionCollapsed}
                         onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
            <UncontrolledRatting/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion1v titleValue={"Users"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
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
