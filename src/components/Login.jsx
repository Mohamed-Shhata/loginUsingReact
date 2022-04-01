import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function Login(props) {
  // const [value1, setValue1] = useState("");
  // const nameRef = useRef();
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    } else if (values.username.length < 3) {
      errors.username = "Username must be at least 3 characters";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, isSubmit]);

  // const onEmailChange = () => {
  //   setEmail(nameRef2.current.value);
  // };
  // const onNameChange = () => {
  //   setName(nameRef1.current.value);
  // };
  // const onPasswordChange = () => {
  //   setPassword(nameRef3.current.value);
  // };
  // const onloginclick = () => {
  //   if (
  //     name.length > 3 &&
  //     email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
  //     password.length > 8
  //   ) {
  //     // formValid = true;
  //     console.log("you log in successfully");
  //   }
  // };
  return (
    <>
      <Container>
        <div className="alert alert-light p-3 mt-4 ">
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3 w-50"
              controlId="exampleForm.ControlInput1"
            >
              <p>Login</p>
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui message success">Signed in successfully</div>
              ) : (
                <pre>
                  <code>{JSON.stringify(formValues, null, 2)}</code>
                </pre>
              )}
              {/* <input
                ref={nameRef}
                type="text"
                className="form-control"
                placeholder="Search"
                name="Search"
                onChange={onInputChange}
              /> */}
              {/* <p>You typed: {value1}</p> */}
              <Form.Label>Name</Form.Label>
              <Form.Control
                // onSubmit={handleSubmit}
                type="text"
                name="username"
                placeholder="Name"
                value={formValues.username}
                onChange={handleChange}
              />

              {/* {name.length <= 3 && (
                <p className="text-danger">enter valid name</p>
              )} */}
              <p>{formErrors.username}</p>
              {/* <p> {name}</p> */}
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="name@example.com"
                value={formValues.email}
                onChange={handleChange}
              />
              <p>{formErrors.email}</p>

              <Form.Label column sm="2">
                Password
              </Form.Label>

              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />

              <p>{formErrors.password}</p>
              <br />

              <Button
                variant="primary"
                type="submit"
                // disabled={!formValid}
                // onClick={onloginclick}
              >
                Sign up
              </Button>
              {/* <p>You clicked {valid} times</p> */}
            </Form.Group>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Login;
