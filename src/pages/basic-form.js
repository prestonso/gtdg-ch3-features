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

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <Layout>
        <Seo title="Basic form" />
        <h1>Hi from the basic form page</h1>
        <form>
          <label>
            First name
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Last name
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            City
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Country
            <input
              type="text"
              name="country"
              value={this.state.country}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}
