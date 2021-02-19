import React, { useState } from 'react'
import { Link } from 'gatsby'
import axiosBase from "axios";


const IndexPage = () => {

  const axios = axiosBase.create({
    baseURL: 'http://localhost:9000',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  console.log(form)

 const onChange = (e) => {
  setForm({...form, [e.target.name]: e.target.value });
}

const submitForm = async (e) => {
  e.preventDefault();

  try{
    const response = await axios.post("/.netlify/functions/sendgrid", {
      body: form,
    })

    if (!response.ok) {
      //not 200 response
      return (console.log(response.body))
    }

    //all OK
    
  } catch(e){
    return (console.log(e))
  }
}

const testform = async (e) => {
  e.preventDefault();
  const response = JSON.stringify(form)
  return (console.log(response))
}

  return (
    <>
      <h1>BOOK NOW!!!!!!</h1>
      <form
      name="contact"
      method="post"
      onSubmit={submitForm}
      >
        <p>
          <label>
            Your name:
            <br />
            <input type="text" name="name" onChange={onChange} />
          </label>
        </p>
        <p>
          <label>
            Your email:
            <br />
            <input type="email" name="email" onChange={onChange} />
          </label>
        </p>
        <p>
          <label>
            subect:
            <br />
            <input type="text" name="subject" onChange={onChange} />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea name="message" onChange={onChange} />
          </label>
        </p>
        <p>
          <button type="submit" >Send</button>
        </p>
      </form>
      <Link to="/">Go to Home</Link>
    </>
  )
} 

export default IndexPage