import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router";
import StudentForm from "./components/students/Student";
import MyUseCallBacks from "./components/practice/useCallBackHook/MyUseCallBacks";
import { Container } from "react-bootstrap";
import UseMemo from "./components/practice/useMemoHook/UseMemo";
import Todo from "./components/todoApp/Todo";
import UserList from "./components/search/Userlist";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/authentication/Login";
import Dashboard from "./components/authentication/Dashboard";
import PrivateRoute from "./components/authentication/PrivateRoute";
import Registration from "./components/authentication/Registration";

function App() {
  return (
    <>
      <Container>
        {/* <UserList /> */}
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
