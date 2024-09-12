import { useState } from 'react';
import './App.css';
import Form from './components/form';
import Table from './components/Table';
import Task from './components/Task';

const data = [
  { user: 'Alice', tasks: ['Design Homepage', 'Review Logo', 'Write Blog Post'] },
  { user: 'Bob', tasks: ['Fix Bugs', 'Deploy Website', 'Update Documentation'] },
  { user: 'Charlie', tasks: ['Create Wireframes', 'Research Competitors', 'Plan Sprint'] },
  { user: 'Diana', tasks: ['Optimize Database', 'Improve UI', 'Test New Features'] },
  { user: 'Eve', tasks: ['Organize Meeting', 'Prepare Presentation', 'Send Invoice'] }
];

function App() {
  const [users, setUsers] = useState(data);
  const [user, setUser] = useState(data[0]);
  const [newUser, setNewUser] = useState('');
  const [newTask, setNewTask] = useState('');

  const handleUser = (e) => {
    e.preventDefault();
    setNewUser(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isUserExists = users.some((u) => u.user === newUser);
    if (!isUserExists && newUser) {
      const newUserObject = { user: newUser, tasks: [] };
      setUsers([...users, newUserObject]);
      setNewUser('');
    }
  }

  const handleTask = (e) => {
    e.preventDefault();
    setNewTask(e.target.value);
  }

  const handleSubmitTask = (e) => {
    e.preventDefault();
    if (newTask) {
      const updatedUsers = users.map((u) => {
        if (u.user === user.user) {
          return { ...u, tasks: [...u.tasks, newTask] };
        }
        return u;
      });
      setUsers(updatedUsers);
      setUser({ ...user, tasks: [...user.tasks, newTask] });
      setNewTask('');
    }
  }

  const handleSelect = (userName) => {
    const selectedUser = users.find((u) => u.user === userName);
    setUser(selectedUser);
  }

  const handleRemoveUser = (clickedUser) => {
    const updatedUsers = users.filter(u => u.user !== clickedUser);
    setUsers(updatedUsers);
    
    if (user.user === clickedUser) {
      if (updatedUsers.length > 0) {
        setUser(updatedUsers[0]); 
      } else {
        setUser({ user: '', tasks: [] });
      }
    }
  }

  const handleRemoveTask = (clickedTask) => {
    const updatedTasks = user.tasks.filter(task => task !== clickedTask);
    const updatedUsers = users.map(u => {
      if (u.user === user.user) {
        return { ...u, tasks: updatedTasks };
      }
      return u;
    });
    setUsers(updatedUsers);
    setUser({ ...user, tasks: updatedTasks });
  }

  const renderUsers = users.map(user => (
    <Table 
      key={user.user} 
      user={user.user} 
      handleSelect={handleSelect} 
      onclick={handleRemoveUser} 
    />
  ));
  
  const renderTasks = user.tasks.map(task => (
    <Task 
      key={task} 
      task={task} 
      onclick={handleRemoveTask} 
    />
  ));

  return (
    <>
      <div className="shadow-lg h-fit w-fit m-auto">
        <h1 className="text-6xl mb-20">User Dashboard</h1>
        {renderUsers}
        <Form Text="Add User" value={newUser} onChange={handleUser} handleSubmit={handleSubmit} />
        <h1>Tasks for {user.user}</h1>
        {renderTasks}
        <Form Text="Add Task" value={newTask} onChange={handleTask} handleSubmit={handleSubmitTask} />
      </div>
    </>
  )
}

export default App;