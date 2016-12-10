import React from 'react';

var Todo = React.createClass({
  render: function() {
    var {text, id} = this.props;
    return (
      <div>
        {id+". "+text}
      </div>
    );
  }
})


export default Todo;
