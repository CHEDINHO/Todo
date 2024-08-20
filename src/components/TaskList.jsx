import React from 'react';
import TaskItem from './TaskItem';
import { Container, Row, Col } from 'react-bootstrap';

const TaskList = ({ tasks, onEdit, onDelete, onToggle }) => {
  return (
    <Container>
      <Row>
        {tasks.map((task) => (
          <Col key={task.id} md={4}>
            <TaskItem
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TaskList;
