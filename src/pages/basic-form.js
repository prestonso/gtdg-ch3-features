import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default class BasicFormPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    country: "",
    city: "",
  }

  render() {
    return (
      <Layout>
        <Seo title="Basic form" />
        <h1>Hi from the basic form page</h1>
        <p>Welcome to the basic form page</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}
