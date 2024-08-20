import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const TaskForm = ({ task, onSave, onCancel }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (task) {
      setName(task.name);
      setDescription(task.description);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      onSave({ name, description });
    } else {
      alert('Both fields are required.');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group controlId="taskName">
        <Form.Label>Task Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter task name"
          required
        />
      </Form.Group>
      <Form.Group controlId="taskDescription">
        <Form.Label>Task Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="me-2">
        Save
      </Button>
      <Button variant="secondary" onClick={onCancel}>
        Cancel
      </Button>
    </Form>
  );
};

export default TaskForm;
