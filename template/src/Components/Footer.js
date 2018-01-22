import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {footer, Col, Grid, Row } from 'react-bootstrap'

class MyComponent extends Component {
  render() {
    return (
      <div class="container">
      <footer className="footer">
      <Grid>
      <Row className="show-grid">
         <Col md={6} mdPush={6}>
          <span class="text-muted">React-Bootstrap {(new Date().getFullYear())}</span>
         </Col>
        </Row>
      </Grid>
      </footer>
      </div>
    );
  }
}
export default MyComponent
