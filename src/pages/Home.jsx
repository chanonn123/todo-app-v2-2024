import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TodoCard from "../components/TodoCard";
import { TodoContext } from "../contexts/TodoContext";

export default function Home() {
  const todos = useContext(TodoContext).todos
  return (
    <Container>
      <h1 className="my-3"></h1>
      <Row>
        <CardGroup todos={todos}></CardGroup>
      </Row>
    </Container>
  )
}

function CardGroup({ todos }) {
  // function CardGroup({todos}) {
  // const todos = [{ title: 'Lunch', description: 'Pizza', completed: false, id: 1 }]

  return todos.map(todo => {
    return (
      <Col md={4} key={todo.id}>
        <TodoCard todo={todo} />
      </Col>
    )
  })
}
