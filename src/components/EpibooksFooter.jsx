import { Component } from "react";
import Nav from "react-bootstrap/Nav";

class EpibooksFooter extends Component {
  render() {
    return (
      <Nav className="justify-content-center align-items-center p-2 mt-3 bg-success fluid">
        <Nav.Item>
          <p className="text-light fs-5">Made with 🔥</p>
        </Nav.Item>
      </Nav>
    );
  }
}

export default EpibooksFooter;
