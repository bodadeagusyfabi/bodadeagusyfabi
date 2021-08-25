import React from "react"
import styled from "styled-components"

import HeaderImageSrc from "../images/header.png"
import "./index.css"

const HeaderImg = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
`

const IframeStyled = styled.iframe`
  background-color: #f2ecec;
  border: 0;
`

function IndexPage() {
  return (
    <>
      <HeaderImg src={HeaderImageSrc} />
      <IframeStyled 
        src="https://docs.google.com/forms/d/e/1FAIpQLSc_dKRIpJxkBNPF4sdvtk1lodD2lpGG7choSD0fBfRDJRhBJQ/viewform?embedded=true"
        width="100%" 
        height="2200" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0"
      >
        Cargando…
      </IframeStyled>
    </>
  )
}

export default IndexPage
