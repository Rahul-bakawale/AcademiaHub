import "bootstrap/dist/css/bootstrap.min.css";
import StudentForm from "./components/students/Student";
import MyUseCallBacks from "./components/practice/useCallBackHook/MyUseCallBacks";
import { Container } from "react-bootstrap";
import UseMemo from "./components/practice/useMemoHook/UseMemo";
import Todo from "./components/todoApp/Todo";
import UserList from "./components/search/Userlist";

function App() {
  return (
    <>
      <Container>
        <UserList />
      </Container>
    </>
  );
}

export default App;
