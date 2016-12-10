import React from 'react';
import TodoList from 'TodoList';

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clrean the yard'
        },
        {
          id: 3,
          text: 'Brush your teeths'
        },
        {
          id: 4,
          text: 'Go to sleep'
        }
      ]
    };
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}></TodoList>
      </div>
    );
  }
});


export default TodoApp;
