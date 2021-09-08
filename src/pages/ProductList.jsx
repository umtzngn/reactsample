import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Menu, Table, TableHeaderCell } from "semantic-ui-react";
import ProductService from "../services/productService"
import { useDispatch } from "react-redux";
import { addToCard } from "../store/actions/cartActions";
import { toast } from "react-toastify";

export default function ProductList() {


 const dispatch = useDispatch()

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    let productService = new ProductService()
    productService.getProducts().then(result=>setProducts(result.data.data))
  },[])


  const handleAddToCard=(product)=>{
    dispatch(addToCard(product))
    toast.success(`${product.productName} sepete eklendi!`)
  }

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Unit Price</Table.HeaderCell>
            <Table.HeaderCell>Stock</Table.HeaderCell>
            <Table.HeaderCell>Definition</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell><Link to={`/products/${product.productName}`}>{product.productName}</Link></Table.Cell>
              <Table.Cell>{product.unitPrice}</Table.Cell>
              <Table.Cell>{product.unitsInStock}</Table.Cell>
              <Table.Cell>{product.quantityPerUnit}</Table.Cell>
              <Table.Cell>{product.category.categoryName}</Table.Cell>
              <Table.Cell><Button onClick={()=>handleAddToCard(product)}>Add</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
