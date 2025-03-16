import { useState } from "react";
import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";

const StudentForm = () => {
  const [inputVal, setInputVal] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    action: "",
    gender: "",
  });

  console.log("inputVal", inputVal);
  const existingDataVale = JSON.parse(localStorage.getItem("inputVal"));
  console.log("existingDataVale", existingDataVale);
  // const validateForm = () => {
  //   let newErrors = {};
  //   if (!inputVal.firstName.trim())
  //     newErrors.firstName = "User Name is required";
  //   if (!inputVal.lastName.trim()) newErrors.lastName = "User Name is required";
  //   if (!inputVal.email.trim()) {
  //     newErrors.email = "Email is required";
  //   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputVal.Email)) {
  //     newErrors.Email = "Invalid email format";
  //   }
  //   if (!inputVal.password) {
  //     newErrors.password = "password is required";
  //   } else if (inputVal.password.length < 8) {
  //     newErrors.password = "password must be at least 8 characters";
  //   }

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("inputVal")) || [];
    const updatedData = [...existingData, inputVal];
    localStorage.setItem("inputVal", JSON.stringify(updatedData));
    setInputVal({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      action: "",
      gender: "",
    });
  };
  const fetchData = async () => {
    alert("ff");
    try {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      let data = await response.json();
      console.log("data", data);
    } catch (errors) {
      console.log(errors);
    }
  };

  const handleRadioChange = (e) => {
    setInputVal({ ...inputVal, gender: e.target.value });
  };
  return (
    <>
      <h1>Registration Form</h1>
      <Container>
        <Form onSubmit={handleSubmitForm}>
          <Button onClick={fetchData}>new Button</Button>
          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={inputVal?.firstName}
                onChange={(e) =>
                  setInputVal({ ...inputVal, firstName: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGrid:astName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={inputVal?.lastName}
                onChange={(e) =>
                  setInputVal({
                    ...inputVal,
                    lastName: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={inputVal?.email}
                onChange={(e) =>
                  setInputVal({ ...inputVal, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={inputVal?.password}
                onChange={(e) =>
                  setInputVal({ ...inputVal, password: e.target.value })
                }
              />
              <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridAction">
                  <Form.Label>Dropdown Button</Form.Label>
                  <Dropdown
                    onSelect={(e) => {
                      setInputVal({ ...inputVal, action: e });
                    }}
                  >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {inputVal.action || "Select an Action"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="Action 1">
                        Action 1
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Action 2">
                        Action 2
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Action 3">
                        Action 3
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col}>
                  <Form.Label>Gender</Form.Label>
                  <div>
                    <Form.Check
                      type="radio"
                      label="Male"
                      name="gender"
                      value="Male"
                      checked={inputVal.gender === "Male"}
                      onChange={handleRadioChange}
                    />
                    <Form.Check
                      type="radio"
                      label="Female"
                      name="gender"
                      value="Female"
                      checked={inputVal.gender === "Female"}
                      onChange={handleRadioChange}
                    />
                    <Form.Check
                      type="radio"
                      label="Other"
                      name="gender"
                      value="Other"
                      checked={inputVal.gender === "Other"}
                      onChange={handleRadioChange}
                    />
                  </div>
                </Form.Group>
              </Row>
            </Form.Group>
          </Row>
          <Button type="submit">submit</Button>
        </Form>
      </Container>
    </>
  );
};
export default StudentForm;
