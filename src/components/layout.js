import React from "react"
import SEO from "./seo"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { ThemeProvider } from "styled-components"
import theme from "../utils/theme"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <section>
        <Navbar />
        <SEO title="Home" />
        {children}
        <Footer />
      </section>
    </ThemeProvider>
  )
}

export default Layout
