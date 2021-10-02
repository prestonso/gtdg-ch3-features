import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Contact" />
        <h1>Hi from the contact page</h1>
        <form method="post" action="#">
          <label>
            Name
            <input type="text" name="name" id="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" id="email" />
          </label>
          <label>
            Message
            <textarea name="message" id="message" rows="6" />
          </label>
          <button type="submit">Submit</button>
          <input type="reset" value="Reset" />
        </form>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}
