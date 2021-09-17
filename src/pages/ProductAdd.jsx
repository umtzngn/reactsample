import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { Button } from "semantic-ui-react";
import CPTextInput from "../utilities/customFormControls/CPTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 0 };

  const schema = yup.object({
    productName: yup.string().required("Ürün adı zorunlu"),
    unitPrice: yup.number().required("Ürün fiyatı zorunludur"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
          <CPTextInput name="productName" placeholder="Product Name"/>
          <CPTextInput name="unitPrice" placeholder="Unit Price"/>
          {/*<FormField>
            <Field name="productName" placeholder="Product Name"></Field>
            <ErrorMessage
              name="productName"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
              </FormField>*/}
          {/*<FormField>
            <Field name="unitPrice" placeholder="Unit Price"></Field>
            <ErrorMessage
              name="unitPrice"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>*/}
          <Button color="green" type="submit">
            Add
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
