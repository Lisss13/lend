import React, { Component } from "react"
import {
  Layout,
  Header,
  Navigation,
  AboutUs,
  Service,
  AboutProduct,
  Footer,
} from "../components"

import { withTranslation } from "../i18n"

class Home extends Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ["common"],
    }
  }
  render() {
    return (
      <Layout>
        <Header />
        <Navigation />
        <AboutUs />
        <Service />
        <AboutProduct />
        <Footer />
      </Layout>
    )
  }
}

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"],
})

export default withTranslation("common")(Home)
