import { useContext } from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
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
    const completed = todo.completed
    const bg = completed ? "success" : "danger"

    return (
      <Col md={4} key={todo.id}>
        <Card className="my-3">
          <Card.Body>
            <Card.Title>{todo.title}</Card.Title>
            <Card.Text>{todo.description}</Card.Text>
            <Badge bg={bg}>{!completed && "Not"} Completed</Badge>
          </Card.Body>
        </Card>
      </Col>
    )
  })
}
