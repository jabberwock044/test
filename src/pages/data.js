import React from "react"
import Layout from "../components/Layouts/layout"
import { graphql } from 'gatsby'

const About = () => {
  return (
    <div>
      <Layout>
        <h1>About page</h1>
      </Layout>
    </div>
  )
}

export const japan = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default About