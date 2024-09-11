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
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const renderUsers = users.map(user => <Table key={user.user} user={user.user} />);
  const renderTasks = user.tasks.map(task => <Task key={task} task={task} />);

  //handles

  const handleUser = (e) => {
    e.preventDefault();
    setNewUser(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ user: newUser, tasks: [] });
    setUsers([...users, user]);
    e.target.value="";
  }


  const handleTask = (e) => {
    e.preventDefault();
    setNewTask([e.target.value]);
  }
  const handleSubmitTask = (e) => {
    e.preventDefault();
    setTasks([...tasks,newTask])
    setUser({ user: e.target.value, tasks: tasks });
    setUsers([...users, user]);
  }

  return (
    <>
      <div className="shadow-lg h-fit w-fit m-auto">
        <h1 className="text-6xl mb-20"> user Dashboard</h1>
        {renderUsers}
        <Form Text="add user" onChange={handleUser} handleSubmit={handleSubmit} />
        <h1>Tasks for {user.user}</h1>
        {renderTasks}
        <Form Text="add task" onChange={handleTask}  handleSubmit={handleSubmitTask}/>
      </div>
    </>
  )
}

export default App
