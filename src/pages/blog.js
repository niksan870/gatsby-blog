import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

import BlogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const blogs = data.allContentfulBlogPost.edges.map((item, index) => {
    return (
      <li className={BlogStyles.post} key={index}>
        <Link to={`/blog/${item.node.slug}`}>
          <h2>{item.node.title}</h2>
          <p>{item.node.publishedDate}</p>
        </Link>
      </li>
    )
  })
  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <h1>Blog</h1>
        <p>Posts will show up here later on.</p>
        <ol className={BlogStyles.posts}>{blogs}</ol>
      </Layout>
    </div>
  )
}

export default BlogPage
