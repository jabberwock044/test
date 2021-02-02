import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layouts/layout"
import SEO from "../components/seo"
import Calendar from "../components/Calendars/calendar"
import Date from "../components/Calendars/date"
import Image from "../components/Layouts/image"
import moment from 'moment'
import Test from '../pages/testV2'


const IndexPage = () => {

  const country = "japanese";
  const name = "jabberwock";


  const [count, setCount] = useState(1);
  const increase = () => setCount(count + 1);
  const [day, setDay] = useState(moment);
  const daychange = (day) => setDay(day);


  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>{moment(day).format("YYYY-MM-DD")}</p>
      <Date ppppp={{ country, name, count, increase, day, daychange }}/>
      <Image/>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Test />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/contact/" day={{day}}>Go to お問い合わせ試作</Link><br />
    </Layout>
  );
}


export default IndexPage


/*
import React, { useState, useContext, createContext, } from 'react';

const MyContext = createContext();

const App = () => {
  const [count, setCount] = useState(0);
  const value = {
    name: 'soarflat',
    handleClick: () => setCount(count => count + 1)
  };

  return (
    <div>
      <p>count: {count}</p>
      <MyContext.Provider value={value}>
        <Child />
      </MyContext.Provider>
    </div>
  );
}



const Child = () =>{
  return <GrandChild />;
}
 
const GrandChild = () => {

  const context = useContext(MyContext);

  return (
    <>
      <p>{context.name}</p>
      <button onClick={context.handleClick}>increment</button>
    </>
  );
}

export default App

*/