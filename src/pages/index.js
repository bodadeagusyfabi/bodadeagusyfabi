import React from "react"
import PropTypes from "prop-types"
import { FormattedMessage } from "react-intl"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

const StyledComingSoon = styled.div`
  text-align: center;
  width: 100%;
  padding-top: 200px;
`

function LayoutedIndexPage({title, description, showCallToAction}) {
  if (title === null) {
    title = ""
  }
  if (description === null) {
    description = ""
  }

  return (
    <>
      <SEO
        title={'Boda de Agus y Fabi'}
        keywords={['Boda de Agus y Fabi']}
      />

      <StyledComingSoon className="column">
        <FormattedMessage id="index.comingSoon" />
      </StyledComingSoon>
    </>
  )
}

function IndexPage({title, description, showCallToAction}) {
  // LayoutedIndexPage is another function because Layout declares the 
  // IntlProvider and only inside the layout can it be used
  return (
    <Layout>
      <LayoutedIndexPage
        title={title}
        description={description}
        showCallToAction={showCallToAction}
      />
    </Layout>
  )
}

IndexPage.defaultProps = {
  title: null,
  description: null,
  showCallToAction: true
}

IndexPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  showCallToAction: PropTypes.bool
}

export default IndexPage
