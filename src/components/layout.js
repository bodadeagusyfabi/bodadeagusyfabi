/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"
import "semantic-ui-less/semantic.less"
import { LOCALES } from '../translations'
import { IntlProvider } from "react-intl"
import AppProvider, { AppContext } from '../providers/AppContext'

const Layout = ({ children }) => (
  <AppProvider>
    <AppContext.Consumer>
      {(context) => {
        const messages = (
          LOCALES[context.locale] ||
          LOCALES[context.locale.split('-')[0] ] ||
          LOCALES['en']
        )

        return <IntlProvider
          locale={context.locale}
          key={context.locale}
          messages={messages}
          defaultLocale='en'
        >
          <StaticQuery
            query={graphql`
              query SiteTitleQuery {
                site {
                  siteMetadata {
                    title
                  }
                }
              }
            `}
            render={data => (
              <>
                  <div
                    className="ui container"
                    style={{
                      padding: `0 1.1rem`
                    }}
                  >
                    <main>{children}</main>
                  </div>
              </>
            )}
          />
        </IntlProvider>
      }}
    </AppContext.Consumer>
  </AppProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
