import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
// import {Rating, RatingValueType} from "./components/Rating/Rating";
// import {Accordion} from "./components/Accordions/Accordion";
// import {useState} from "react";
import {UnControlledAccordion} from "./components/Accordions/UnControlledAccordion";
import {UncontrolledRatting} from "./components/UncontrolledRatting/UncontrolledRatting";
// import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
// import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
  console.log('App rendering');
  // let [ratingValue, setRatingValue] = useState<RatingValueType>(1);
  //   let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);



  return (
    <div className="App">
      {/*<PageTitle title={'This is App component'} />*/}
      {/*<PageTitle title={'My friends'} />*/}
        <OnOff/>
        {/*<OnOff on={swichOn} onChange={setSwichOn}/>*/}
        {/*<UncontrolledOnOff onChange={setSwichOn}/> {swichOn.toString()}*/}

        <UnControlledAccordion titleValue={'Menu'} />
        <UnControlledAccordion titleValue={'Users'} />
        {/*<Accordion titleValue={"Menu"}*/}
        {/*           collapsed={accordionCollapsed}*/}
        {/*           onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}*/}
        {/*           />*/}
        <UncontrolledRatting/>
        {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}

      {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
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
