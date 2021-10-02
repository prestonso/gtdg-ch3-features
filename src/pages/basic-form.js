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
        <form>
          <label>
            First name
            <input type="text" name="firstName" />
          </label>
          <label>
            Last name
            <input type="text" name="lastName" />
          </label>
          <label>
            City
            <input type="text" name="city" />
          </label>
          <label>
            Country
            <input type="text" name="country" />
          </label>
          <button type="submit">Submit</button>
        </form>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}
