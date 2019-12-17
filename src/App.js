import React from 'react';
import Nav from './Nav';
import View from './View';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTodoList: [
        {
          title: "내일일은 내일모레",
          done: [],
          haveTo: [1, 3, 5]
        },
        {
          title: "죽음과 결혼은 미룰수록 좋다",
          done: [],
          haveTo: ['똥싸기', '밥묵기', '잠자기', '그외 전부 리액트']
        },
        {
          title: "너무 늦었다고 생각할 때가 진짜 늦었다",
          done: [],
          haveTo: ['인생은 한 방']
        }
      ],
      currentList: {
        // title: "죽음과 결혼은 미룰수록 좋다",
        // done: [],
        // haveTo: ['똥싸기', '밥묵기', '잠자기', '그외 전부 리액트']
      }
    };
    this.selectTodoList = this.selectTodoList.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addTodoList = this.addTodoList.bind(this);
  }

  selectTodoList(list) {
    this.setState({
      currentList: list
    });
  }

  addTodoList(list) {
    this.setState({
      allTodoList : this.state.allTodoList.concat({ 
        title: list, 
        done: [],
        haveTo: []
      }),
      currentList: {
        title: list,
        done: [],
        haveTo: []
      }
    })
  }

  handleDelete() {

  }

  render() {
    return (
      <div className="app">
        <div className="left">
          <Nav
            selectTodoList={this.selectTodoList}
            allTodoList={this.state.allTodoList}
            addTodoList={this.addTodoList}
          />
        </div>
        <div className="right">
          <View
            currentList={this.state.currentList}
            defaultList={this.state.allTodoList[0]}
          />
        </div>
      </div>
    );
  }
}

export default App;
