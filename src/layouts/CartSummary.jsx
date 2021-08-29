import React from 'react'
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownDivider} from "semantic-ui-react";

export default function CartSummary() {
    return (
        <div>
            <Dropdown item text="Sepetiniz">
              <Dropdown.Menu>
                <Dropdown.Item>Acer Laptop</Dropdown.Item>
                <Dropdown.Item>Asus Laptop</Dropdown.Item>
                <Dropdown.Item>Lenova Laptop</Dropdown.Item>
                <DropdownDivider/>
                <Dropdown.Item as={NavLink} to={"/card"} >Sepete Git</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
