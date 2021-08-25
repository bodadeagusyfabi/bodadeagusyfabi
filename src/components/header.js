import { Link } from "gatsby"
import React, { Component } from "react"
import {
  Container,
  Icon,
  Menu,
  Sidebar,
  Responsive
} from "semantic-ui-react"
import {FormattedMessage} from 'react-intl'
import styled from "styled-components"

const StyledMenuItem = styled(Menu.Item)`
  a {
    font-size: 18px;
    font-weight: normal;
  }

  a:hover {
    color: #29557e;
  }
`

const NavBarMobile = ({
  children,
  onToggle,
  onPusherClick,
  visible
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      vertical
      visible={visible}
    >
      <Menu.Item>
        <Link to="/">
          <FormattedMessage id="header.home" />
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link to="/security/">
          <FormattedMessage id="header.security" />
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link to="/pricing/">
          <FormattedMessage id="header.featuresAndPlans" />
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link to="/contact/">
          <FormattedMessage id="header.contact" />
        </Link>
      </Menu.Item>
    </Sidebar>
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    >
    <Menu borderless pointing>
      <Container>
        <Menu.Item>
          <Link to="/">
            <FormattedMessage id="header.home" />
          </Link>
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
    {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const NavBarDesktop = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
  <Menu borderless pointing>
      <Container>
        <Menu.Item>
          <Link to="/">
            <FormattedMessage id="header.home" />
          </Link>
        </Menu.Item>

        <Menu.Menu position="right">
          <StyledMenuItem>
            <Link to="/security/">
              <FormattedMessage id="header.security" />
            </Link>
          </StyledMenuItem>

          <StyledMenuItem>
            <Link to="/pricing/">
              <FormattedMessage id="header.featuresAndPlans" />
            </Link>
          </StyledMenuItem>

          <StyledMenuItem>
            <Link to="/contact/">
              <FormattedMessage id="header.contact" />
            </Link>
          </StyledMenuItem>
        </Menu.Menu>
      </Container>
    </Menu>
  </header>
);

class Header extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={visible}
          >
            {children}
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop />
          {children}
        </Responsive>
      </div>
    );
  }
}
/*
Header.propTypes = {
  children: PropTypes.node.isRequired
}*/

export default Header
