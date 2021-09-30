import React from 'react';

import {
    Form,
    Button,
    FormControl,
    Nav,
    Navbar,
  } from "react-bootstrap";


const Header = () => {
    return (
        <div>
        <Navbar bg="primary" expand="lg">
        <Navbar.Brand href="#" >Block Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search for your Block"
              className="textes"
              aria-label="Search"
            />
            <Button variant="outline-success"><i class="fa fa-search" aria-hidden="true"></i></Button>

            <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="myblog">Blogs</Nav.Link>
            
           
          </Nav>
          </Form>
        </Navbar.Collapse>
      </Navbar>

        
   
        </div>

    )
}

export default Header
