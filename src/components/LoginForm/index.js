import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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
  FormFeedback
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Redux/Action";

export default function LoginForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };
    try {
      setLoading(true);
      await dispatch(loginUser(loginData));
      navigate("/dashboard");
      window.location.reload();
    } catch (error) {
      setLoading(false);
    }
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

  const validateEmail = (value) => {
    if (!value) {
      return "Email is required";
    }
    // Add more validation rules here if needed
    return null;
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={8}>
            <img
              alt="Sample"
              src="/login.png"
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
              <CardTitle tag="h2">Welcom to Entrance Test interview!</CardTitle>
              <CardText>
                Please sign-in to your account and start the adventure.
              </CardText>
              <FormGroup>
                <Label for="email"><span style={{ color: 'red' }}>*</span>Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="johdoe@gmail.com"
                  onChange={(e) => {setEmail(e.target.value); setEmailError(validateEmail(e.target.value));} }
                />
                {emailError && <FormFeedback>{emailError}</FormFeedback>}
              </FormGroup>
              <FormGroup>
                <Label for="password"><span style={{ color: 'red' }}>*</span>Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col>
                    <Input type="checkbox" /> <Label check>Remember me</Label>
                  </Col>
                  <Col className="text-end">
                    <Link hrefLang="###"> Forgot Password</Link>
                  </Col>
                </Row>
              </FormGroup>
              <Button type="submit" style={{ backgroundColor: "#7367F0" }} disabled={loading}>
                Login
              </Button>
            </Card>
          </Col>
        </Row>
      </Form>
    </>
  );
}
