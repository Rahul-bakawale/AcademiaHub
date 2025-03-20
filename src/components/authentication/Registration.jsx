import { Alert, Button, Container } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useState } from "react";
const Registration = () => {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData?.firstName?.trim()) {
      newErrors.firstName = "First Name is required";
    }
    if (!formData?.lastName?.trim()) {
      newErrors.lastName = "Last Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrorMsg(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    localStorage.setItem("formData", JSON.stringify(formData) || "");
    setSuccessMessage("Registration Successful!");
    setFormData("");
    setErrorMsg({});
  };
  return (
    <>
      <Container>
        <h1>Registration</h1>
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        <Form onClick={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name </Form.Label>
            <Form.Control
              type="firstName"
              placeholder="Enter Name"
              name="firstName"
              value={formData?.firstName ? formData?.firstName : ""}
              onChange={handleChange}
            />
            <p className="text-danger">{errorMsg?.firstName} </p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name </Form.Label>
            <Form.Control
              type="lastName"
              placeholder="Enter last Name"
              name="lastName"
              value={formData?.lastName ? formData?.lastName : ""}
              onChange={handleChange}
            />
            <p className="text-danger">{errorMsg?.lastName} </p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData?.email ? formData?.email : ""}
              onChange={handleChange}
            />
            <p className="text-danger">{errorMsg?.email} </p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData?.password ? formData?.password : ""}
              onChange={handleChange}
            />
            <p className="text-danger">{errorMsg?.password} </p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label> Confirm Password</Form.Label>
            <Form.Control
              type="confirmPassword"
              placeholder="confirm Password"
              name="confirmPassword"
              value={formData?.confirmPassword ? formData?.confirmPassword : ""}
              onChange={handleChange}
            />
            <p className="text-danger">{errorMsg?.confirmPassword} </p>
          </Form.Group>
          <Button
            // onClick={() => navigate("/login")}
            variant="primary"
            type="submit"
          >
            Registration
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default Registration;
