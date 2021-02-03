import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layouts/layout"
import ContactForm from "../components/Contacts/contactform"

const ContactPage = () => (
  <Layout>
    <h1>Contact Form</h1>
    <p>メールフォーム送信テスト</p>
    <ContactForm/>
    <Link to="/">home</Link>
  </Layout>
)

export default ContactPage