import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Contact</h1>
        <p>I live in Veliko Tanovo and my phone number is 08812312312</p>
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100002360831377"
        >
          Find me on Facebook.
        </a>
      </Layout>
    </div>
  )
}

export default ContactPage
