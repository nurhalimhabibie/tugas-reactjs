import React from "react";
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas";

const onSubmit = async (values, actions) => {
  alert(`
      Nama : ${values.username}
      Email : ${values.email}
      Password : ${values.password}
    `);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

function ValidationComponent() {
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div className="m-5 p-5">
      <Container
        className="d-flex flex-column justify-content-center w-50"
        style={{
          backgroundColor: "#374357",
          color: "#cee8ff",
          borderRadius: "10px",
          border: "1px solid black",
        }}
      >
        <h1>Registrasi Form</h1>
        <Form className="my-2" onSubmit={handleSubmit}>
          <FormGroup className="mb-3">
            <FormLabel>Username</FormLabel>
            <FormControl value={values.username} onChange={handleChange} name="username" type="text" placeholder="Enter your name" onBlur={handleBlur} className={errors.email && touched.email ? "input-error" : ""} />
            {errors.username && touched.username && <p>{errors.username}</p>}
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Email</FormLabel>
            <FormControl value={values.email} onChange={handleChange} name="email" type="email" placeholder="Enter your email" onBlur={handleBlur} className={errors.email && touched.email ? "input-error" : ""} />
            {errors.email && touched.email && <p>{errors.email}</p>}
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Password</FormLabel>
            <FormControl value={values.password} onChange={handleChange} name="password" type="password" placeholder="Enter your password" onBlur={handleBlur} className={errors.password && touched.password ? "input-error" : ""} />
            {errors.password && touched.password && <p>{errors.password}</p>}
          </FormGroup>
          <Button disabled={isSubmitting} type="submit">
            Register Account
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default ValidationComponent;
