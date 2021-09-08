import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownDivider, Label } from "semantic-ui-react";
import { useSelector } from "react-redux";

export default function CartSummary() {

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          {cartItems.map((cartItems) => (
            <Dropdown.Item key={cartItems.product.id}>
              {cartItems.product.productName}
              <Label>
                {cartItems.quantity}
              </Label>
            </Dropdown.Item>
          ))
          }
          <DropdownDivider />
          <Dropdown.Item as={NavLink} to={"/card"}>
            Sepete Git
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
