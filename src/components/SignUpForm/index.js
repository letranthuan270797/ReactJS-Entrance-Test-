import { React, useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardText,
  CardTitle,
  FormFeedback,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { signupUser  } from "../Redux/Action";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [emailInvalidMessage, setEmailInvalidMessage] = useState('');
  
  const handleSubmit = () => {
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    console.log('info signup', userData);
    dispatch(signupUser(userData));
    navigate('/signin');
  };

  const [imageHeight, setImageHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setImageHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const validateEmail = () => {
    // Logic to validate email
    const isValid = RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i).test(email)
    setEmailValid(isValid);
    setEmailInvalidMessage(isValid ? '' : 'Invalid email format');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={8}>
          <img
            alt="Sample"
            src="/singup.png"
            style={{
              objectFit: "cover",
              width: "100%",
              height: `${imageHeight}px`,
            }}
          />
        </Col>
        <Col
          md={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card body className="my-2 border-0">
            <CardTitle tag="h2">Adventure starts here</CardTitle>
            <CardText>
              Make your app management easy and fun!
            </CardText>
            <FormGroup>
              <Label for="firstName">Firstname<span style={{ color: 'red' }}>*</span></Label>
              <Input
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">LastName<span style={{ color: 'red' }}>*</span></Label>
              <Input 
                id="lastName" 
                name="lastName" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email<span style={{ color: 'red' }}>*</span></Label>
              <Input
                id="email"
                name="email"
                placeholder="johdoe@gmail.com"
                value={email}
                // onChange={(e) => setEmail(e.target.value)}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail();
                }}
                valid={emailValid}
                invalid={!emailValid}
              />
              <FormFeedback invalid={!emailValid}>{emailInvalidMessage}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password<span style={{ color: 'red' }}>*</span></Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Row>
                <Col>
                  <Input type="checkbox" /> <Label check>i agree</Label>{" "}
                  <Link style={{ color: "#7367F0" }}>
                    privacy policy & terms
                  </Link>
                </Col>
              </Row>
            </FormGroup>
            <Button type="submit" style={{ backgroundColor: "#7367F0" }}>Sign Up</Button>
            {/* navigate('/dashboard', {replace: true}) */}
            <FormGroup>
              <Row>
                <Col>
                  <Label>Already have a account?</Label>{" "}
                  <Link style={{ color: "#7367F0" }}>Sign in instead</Link>
                </Col>
              </Row>
            </FormGroup>
          </Card>
        </Col>
      </Row>
    </Form>
  );
}
