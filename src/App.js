import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Container, Navbar, Card } from 'react-bootstrap';
import './styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task) => {
    setTasks([
      ...tasks,
      { ...task, id: Date.now(), completed: false }
    ]);
    setEditingTask(null);
  };

  const handleToggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">To-Do List</Navbar.Brand>
      </Navbar>
      <Container className="mt-4">
        <Card className="p-4 mb-4">
          <Card.Body>
            <Card.Title className="display-4">To-Do List</Card.Title>
            <Card.Text>
              Manage your tasks efficiently with this simple to-do list application.
            </Card.Text>
          </Card.Body>
        </Card>
        <TaskForm
          task={editingTask}
          onSave={handleAddTask}
          onCancel={() => setEditingTask(null)}
        />
        <TaskList
          tasks={tasks}
          onEdit={setEditingTask}
          onDelete={handleDeleteTask}
          onToggle={handleToggleTask}
        />
      </Container>
    </div>
  );
};

export default App;
