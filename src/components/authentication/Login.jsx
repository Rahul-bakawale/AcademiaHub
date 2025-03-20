import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <h1>Login page</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>

          <Button
            onClick={() => navigate("/dashboard")}
            variant="primary"
            type="submit"
          >
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default LoginPage;
