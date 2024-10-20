import React, { useRef } from "react";
import "../Css/GetQuote/QuoteForm.css";
import { Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { AiOutlineCloudUpload } from "react-icons/ai";

export const QuoteForm = () => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div>
      <Container className="form-container-quote">
        <Row>
          <Col lg={6}></Col>

          <Col lg={6} className="form-outline">
            <Container>
              <Row className="mb-3">
                <Col md={6} className="mt-3">
                  <Form.Group controlId="formFirstName">
                    <Form.Control
                      type="text"
                      placeholder="First name"
                      className="p-2"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mt-3">
                  <Form.Group controlId="formLastName">
                    <Form.Control
                      type="email"
                      placeholder="Last name"
                      className="p-2"
                    />
                  </Form.Group>
                </Col>

                <Col md={6} className="mt-3">
                  <Form.Group controlId="formPhone">
                    <Form.Control
                      type="text"
                      placeholder="Phone number"
                      className="p-2"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mt-3">
                  <Form.Group controlId="formEmail">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      className="p-2"
                    />
                  </Form.Group>
                </Col>

                <Col md={6} className="mt-3">
                  <Form.Group controlId="formCompanyName">
                    <Form.Control
                      type="text"
                      placeholder="Company name"
                      className="p-2"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mt-3">
                  <Form.Group controlId="formService">
                    <Form.Control as="select" className="p-2">
                      <option>Select a Prime service</option>
                      <option>Consulting</option>
                      <option>Development</option>
                      <option>Design</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formDescription">
                    <Form.Control
                      as="textarea"
                      rows={8}
                      placeholder="Your Message"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col className="text-center">
                  <Form.Group
                    controlId="formFileUpload"
                    className="file-upload"
                  >
                    <div className="upload-box p-4" onClick={handleClick}>
                      <AiOutlineCloudUpload size={40} />
                      <h5>Please include relevant PDF & CAD files</h5>
                      <p>
                        If you have a link to a file sharing website (ie
                        Dropbox, Box, One Drive, Google Drive, ect.) please add
                        the link to the above instruction section or send to
                        carl@projectprime.com.au
                      </p>
                      <h6>Click or Drag and Drop to Upload</h6>
                      <Form.Control
                        type="file"
                        style={{ display: "none" }}
                        ref={fileInputRef}
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="green-btn-form-line my-0">
                <Col className="text-center green-btn-form ">
                  <p>Send</p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
