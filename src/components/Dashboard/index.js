import { React, useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../Layouts";

import {
  Row,
  Col,
  Card,
  CardText,
  CardTitle,
  CardBody,
  CardGroup,
  Navbar,
  NavbarBrand,
} from "reactstrap";

export default function Dashboard() {

  const [imageHeight, setImageHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setImageHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Card className="border-0 position-relative d-flex justify-content-center align-items-center" style={{ width: '100%', height: `${imageHeight}px`}}>
      <div className="position-relative">
        <img
          alt="Sample"
          src="/dashboard.png"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <CardTitle tag='h3' class="position-absolute" style={{ top: '20px'}}>
          Welcom to Demo App
      </CardTitle>
    </Card>
  );
}
