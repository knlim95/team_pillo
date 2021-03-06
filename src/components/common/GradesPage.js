import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  Table,
  Row,
  Col,
  Container
} from 'reactstrap';
import logo from '../../images/logo.png';
import { NavLink as RRNavLink } from 'react-router-dom';

class GradesPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar dark style={{ background: '#34374C' }}>
          <NavbarBrand tag={RRNavLink} to="/stu_class">
            <img src={logo} width="131" alt="Pillo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/stu_class">
                  Class
                </NavLink>
                <NavLink tag={RRNavLink} to="/forum">
                  Forum
                </NavLink>
                <NavLink tag={RRNavLink} to="/grades">
                  Grades
                </NavLink>
                <NavLink tag={RRNavLink} to="/">
                  Log Out
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Container>
          <Card>
            <CardBody>
              <h1>CSE 134B</h1>
              <p color="muted">Winter 2018</p>
              <hr />
              <Row>
                <Col>
                  <Table hover>
                    <thead>
                      <tr>
                        <th>Student ID</th>
                        <th>Assignment 1</th>
                        <th>Assignment 2</th>
                        <th>Assignment 3</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Kevin Lim</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>----</td>
                      </tr>
                      <tr>
                        <td>Ken Truong</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>----</td>
                      </tr>
                      <tr>
                        <td>Perry Liu</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>----</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default GradesPage;
