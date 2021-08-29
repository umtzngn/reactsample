import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history= useHistory()


  function handleSignOut(params) {
    setIsAuthenticated(false)
    history.push("/")

  }

  function handleSingIn(params){
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to={"/"} name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            {isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1" /> : <SignedOut signIn={handleSingIn} bisey="2" />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
