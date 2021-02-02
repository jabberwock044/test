import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layouts/layout"
import SEO from "../components/seo"

const Page2 = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to page2.</p>
      <p>Now go build something great.</p>
      <Link to="/">home</Link> <br />
    </Layout>
  );
}

export default Page2

