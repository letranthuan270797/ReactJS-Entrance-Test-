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
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header>
      <Navbar className="my-2" style={{ float: "right" }}>
        <Card style={{ border: 0 }}>
          <CardTitle tag="h5">John Doe</CardTitle>
          <CardText>Avalilable</CardText>
        </Card>
        <img
          alt="logo"
          src="/user.png"
          style={{
            height: 40,
            width: 40,
          }}
        />
      </Navbar>
    </header>
  );
};

export default Header;
