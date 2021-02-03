import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layouts/layout"
import SEO from "../components/seo"
import Calendar from "../components/Calendars/calendar"
import Date from "../components/Calendars/date"
import Image from "../components/Layouts/image"
import moment from 'moment'
import Test from '../pages/testV2'


const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <Date />
      <Image/>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Test />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/contact/">Go to お問い合わせ試作</Link><br />
    </Layout>
  );
}


export default IndexPage;