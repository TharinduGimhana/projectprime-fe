import React, { useEffect, useRef, useState } from "react";
import "../Css/GetQuote/QuoteForm.css";
import {
  Col,
  Container,
  Row,
  Form,
  Spinner,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { AiOutlineCloudUpload } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

export const QuoteForm = () => {
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    company_name: "",
    prime_service: "",
    message: "",
    file: " ",
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false); // Toast state
  const [isSuccess, setIsSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (file) => {
    const validTypes = [
      "application/pdf", // PDF
      "application/vnd.dwg", // DWG
      "application/dxf", // DXF (some browsers may detect this differently)
      "application/octet-stream", // Common for CAD files
      "application/x-cad", // Alternative CAD MIME type
    ];
    if (file && validTypes.includes(file.type)) {
      setErrors((prevErrors) => ({ ...prevErrors, file: null }));
      setFormData((prev) => ({ ...prev, file }));
      setFileName(file.name);
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        file: "Only PDF, DWG, DXF, and CAD files are allowed",
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setIsSuccess(null);
    if (name === "file" && files) {
      handleFileChange(files[0]);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.first_name.trim())
      newErrors.first_name = "First name is required";
    if (!formData.last_name.trim())
      newErrors.last_name = "Last name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone_number) {
      newErrors.phone_number = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone_number)) {
      newErrors.phone_number = "Phone number must be 10 digits";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.prime_service)
      newErrors.prime_service = "Prime Service is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true); // Start loader

    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formPayload.append(key, value);
    });

    try {
      const response = await fetch(
        "https://projectprime.com.au/admin-api/api/contact-us",
        {
          method: "POST",
          body: formPayload,
        }
      );
      if (response.ok) {
        const result = await response.json();
        setIsSuccess(true);
        setShowToast(true); // Show toast notification
        console.log("Toast should display here");

        setFormData({
          first_name: "",
          last_name: "",
          phone_number: "",
          email: "",
          company_name: "",
          prime_service: "",
          message: "",
          file: "",
        });
        setFileName(""); 
        setErrors({});
      } else {
        setIsSuccess(false);
        setShowToast(true);
      }
    } catch (error) {
      setIsSuccess(false);
      setShowToast(true);
    } finally {
      setIsLoading(false); // End loader
      setShowToast(true);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file) handleFileChange(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="section-margin-common">
      <Container className="form-container-quote" data-aos="fade-up">
        <Row>
          <Col lg={6}></Col>
          <Col lg={6} className="form-outline">
            <Container onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col md={6} className="mt-3">
                  <Form.Group controlId="formFirstName">
                    <Form.Control
                      type="text"
                      placeholder="First name"
                      className="p-2"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                    />
                    {errors.first_name && (
                      <p className="error-text">{errors.first_name}</p>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6} className="mt-3">
                  <Form.Group controlId="formLastName">
                    <Form.Control
                      type="text"
                      placeholder="Last name"
                      className="p-2"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                    />
                    {errors.last_name && (
                      <p className="error-text">{errors.last_name}</p>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6} className="mt-3">
                  <Form.Group controlId="formPhone">
                    <Form.Control
                      type="text"
                      placeholder="Phone number"
                      className="p-2"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                    />
                    {errors.phone_number && (
                      <p className="error-text">{errors.phone_number}</p>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6} className="mt-3">
                  <Form.Group controlId="formEmail">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      className="p-2"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="error-text">{errors.email}</p>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6} className="mt-3">
                  <Form.Group controlId="formCompanyName">
                    <Form.Control
                      type="text"
                      placeholder="Company name"
                      className="p-2"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mt-3">
                  <Form.Group controlId="formService">
                    <Form.Control
                      as="select"
                      className="p-2"
                      name="prime_service"
                      value={formData.prime_service}
                      onChange={handleChange}
                    >
                      <option value="" disabled hidden>
                        Select a Prime Service
                      </option>
                      <option>Machine Control Models</option>
                      <option>Earth Work Quantities</option>
                      <option>Services</option>
                    </Form.Control>
                    {errors.prime_service && (
                      <p className="error-text">{errors.prime_service}</p>
                    )}
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
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <p className="error-text">{errors.message}</p>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col className="text-center">
                  <Form.Group
                    controlId="formFileUpload"
                    className="file-upload"
                  >
                    <div
                      className="upload-box p-4"
                      onClick={handleClick}
                      onDragEnter={handleDragEnter}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      onDragLeave={handleDragLeave}
                    >
                      <AiOutlineCloudUpload size={40} />
                      <h5>Please include relevant PDF, DWG, DXF & CAD files</h5>
                      <p>
                        If you have a link to a file sharing website (ie
                        Dropbox, Box, One Drive, Google Drive, ect.) please add
                        the link to the above instruction section or send to
                        quotes@projectprime.com.au
                      </p>
                      {fileName ||
                        "No file selected" ||
                        "Click or Drag and Drop to Upload"}
                      <h6>Click or Drag and Drop to Upload</h6>
                      <Form.Control
                        type="file"
                        style={{ display: "none" }}
                        ref={fileInputRef}
                        name="file"
                        onChange={handleChange}
                      />
                    </div>
                    {errors.file && (
                      <p className="error-message">{errors.file}</p>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Row className="green-btn-form-line my-0">
                <Col
                  className="text-center green-btn-form"
                  onClick={handleSubmit}
                >
                  {isLoading ? (
                    <Spinner animation="border" className="spinner-submit" />
                  ) : (
                    <p>Send</p>
                  )}
                </Col>
              </Row>

              <ToastContainer
                position="top-right"
                className="p-3 toast-not"
              >
                <Toast
                  onClose={() => setShowToast(false)}
                  show={showToast}
                  delay={3000}
                  autohide
                  bg={isSuccess ? "success" : "danger"}
                >
                  <Toast.Body>
                    {isSuccess
                      ? "Submitted Successfully!"
                      : "An error occurred. Please try again."}
                  </Toast.Body>
                </Toast>
              </ToastContainer>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
