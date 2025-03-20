import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Dashboard page</h1>{" "}
      <Button onClick={() => navigate("/")}>Home</Button>
    </>
  );
};
export default Dashboard;
