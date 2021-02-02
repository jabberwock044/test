import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layouts/layout'

const ThanksPage = (props) => (
    <Layout>
        <h1>Thanks!</h1>
        <p>お問い合せを受け付けました. ありがとうございます.</p>
        <Link to="/">home</Link>
    </Layout>
)

export default ThanksPage