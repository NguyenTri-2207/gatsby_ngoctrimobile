/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.scss"
import NavTop from "./NavTop"
import Search from "./Search"
import Menu from "./Menu"
import Banner from "./Banner"
import MenuBot from "./MenuBot"
import SliderPhone from "./Slider/SliderPhone"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layout_home">
      <NavTop/>
      <Search/>
      <Menu/>
      <div className="container">
        <Banner/>
        <MenuBot/>
        <div className="bannerBottom"><StaticImage src="../images/bannerBottom.png"/></div>
        <SliderPhone/>
      </div>
     
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
      >
        <main>{children}</main>
      </div>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
