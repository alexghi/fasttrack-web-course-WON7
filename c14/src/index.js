import React from 'react';
import ReactDOM from 'react-dom/client';
import Greeting from './Greeting';
import './index.css';
import MyComponent from './MyComponent';
// import App from './_App';
import Welcome from './Welcome';
import TodoList from './TodoList';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    {/* <Welcome /> */}
    <TodoList/>
  </div>

);
