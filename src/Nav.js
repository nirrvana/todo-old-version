import React from "react";
import TodoListContainer from "./TodoListContainer";

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: true
    })
  }

  handleKeypress(e) {
    if(e.key === 'Enter') {
      console.log(e.target.value);
      this.props.addTodoList(e.target.value);
      this.setState({ 
        isClicked: false
      })
    }
  }

  render() {
    return (
      <div className="nav">
      <TodoListContainer 
        allTodoList={this.props.allTodoList}
        selectTodoList={this.props.selectTodoList}
      />
      
      <input className={'register ' + (this.state.isClicked ? 'show':'hide')} onKeyDown={this.handleKeypress}></input>    
      <button className="addTodoListBtn" onClick={this.handleClick}>목록추가</button>
    </div>
    )
  }
}


export default Nav;
