import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {FormattedMessage} from 'react-intl'

const ItemDiv = styled.div`
  a {
    padding: 10px 0;
    display: block;
    float: left;
    font-size: 16px;
  }
`

const Footer = styled.div`
  background-color: #fff;
  margin: 20px 0;
`

export default () =>

<Footer className="footer">
  <div className="ui hidden divider"></div>
  <div className="ui divider"></div>
  <div className="ui stackable grid">
      <div className="three column row">
        <div className="column">
         <div className="ui vertical list">
           <ItemDiv className="item">
             <Link to="/about-us/">
             <FormattedMessage id="footer.aboutUs" />
             </Link>
           </ItemDiv>
           <ItemDiv className="item">
             <Link to="/contact/">
              <FormattedMessage id="header.contact" />
             </Link>
           </ItemDiv>
           <ItemDiv className="item">
             <Link to="/security-contact/">
              <FormattedMessage id="footer.securityContact" />
             </Link>
           </ItemDiv>
           <ItemDiv className="item">
             <Link to="/political-neutrality/">
              <FormattedMessage id="footer.politicalNeutrality" />
             </Link>
           </ItemDiv>
         </div>
       </div>
      <div className="column">
         <div className="ui vertical list">
           <ItemDiv className="item">
             <Link to="/blog/"> 
              <FormattedMessage id="footer.blog" />
             </Link>
           </ItemDiv>
            <ItemDiv className="item">
             <a
              href="https://nvotes.com/doc/en/"
              target="_blank"
              rel="noreferrer noopener">
                <FormattedMessage id="footer.documentation" />
              </a>
           </ItemDiv>
           <ItemDiv className="item">
             <Link to="/attributions/">
                <FormattedMessage id="footer.attributions" />
             </Link>
           </ItemDiv>
           <ItemDiv className="item">
             <Link to="/process/">
                <FormattedMessage id="footer.process" />
             </Link>
           </ItemDiv>
         </div>
       </div>
      <div className="column">
         <div className="ui vertical list">
           <ItemDiv className="item">
             <Link to="/tos/">
                <FormattedMessage id="footer.tos" />
             </Link>
           </ItemDiv>
           <ItemDiv className="item">
             <Link to="/privacy/">
                <FormattedMessage id="footer.privacyPolicy" />
             </Link>
           </ItemDiv>
           <ItemDiv className="item">
             <a href="/cookies/">
                <FormattedMessage id="footer.cookiesPolicy" />
             </a>
           </ItemDiv>
           <ItemDiv className="item">
              <a
                href="https://twitter.com/nvotes_com"
                rel="noopener noreferrer"
                target="_blank">
                <i className="twitter icon"></i>
              </a>
              <a
                href="https://www.facebook.com/nvotes"
                rel="noopener noreferrer"
                target="_blank">
                <i className="facebook icon"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/nvotes-online-voting"
                rel="noopener noreferrer"
                target="_blank">
                <i className="linkedin icon"></i>
              </a>
              <a
                href="/rss.xml"
                rel="noopener noreferrer"
                target="_blank">
                <i className="rss icon"></i>
              </a>
           </ItemDiv>
         </div>
       </div>

       </div>
    </div>
</Footer>
