import {
  Row,
  Col,
  Card,
  CardText,
} from "reactstrap";
const Footer = () => {
  return (
    <footer>
      <Row>
        <Col>
          <Card style={{ border: 0 }}>
            <CardText>COPYRIGHT @ 2020</CardText>
          </Card>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
