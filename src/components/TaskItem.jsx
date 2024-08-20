import React from 'react';
import { Button, Card } from 'react-bootstrap';

const TaskItem = ({ task, onEdit, onDelete, onToggle }) => {
  return (
    <Card className={`mb-3 ${task.completed ? 'bg-light text-decoration-line-through' : ''}`}>
      <Card.Body>
        <Card.Title
          onClick={() => onEdit(task)} 
          style={{ cursor: 'pointer' }}
        >
          {task.name}
        </Card.Title>
        <Card.Text>{task.description}</Card.Text>
        <Button
          variant={task.completed ? 'warning' : 'success'}
          onClick={() => onToggle(task.id)}
          className="me-2"
        >
          {task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            if (window.confirm('Are you sure you want to delete this task?')) {
              onDelete(task.id);
            }
          }}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default TaskItem;
