import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About</h1>
        <h2>I'm a 20 years old college studen in Gabrovo.</h2>
        <Link to="/contact">Contact.</Link>
      </Layout>
    </div>
  )
}

export default AboutPage
