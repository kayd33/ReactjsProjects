import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class ToDoList extends Component{
  render(){
    let listAsLi = this.props.list.map((element) => {
      return <li>{element}</li>
    });
    return(
      <ul>{listAsLi}</ul>
    );
  }

}

class NewTodos extends Component{

  constructor(props){
    super(props);
    this.state = {item: ''};
  }
  submitHandler = (e) => {
    e.preventDefault();
    this.props.addFn(this.state.item)
    this.setState({item: ''});
    this.refs.itemInput.focus();
  }

  updateItem = (e) => {
    this.setState({item: e.target.value});
  }
  render(){

    return(
      <form onSubmit={this.submitHandler}>
        <input type="text" placeholder="I'm going to ..." onChange={this.updateItem} value={this.state.item} ref="itemInput"/>
        <input type="submit" value="Add to list" />
      </form>
    )
  }
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {list: ['One', 'Two']};
  }
  addHandler = (item) => {
    this.setState({list: this.state.list.concat(item)});
  }

  render() {
    return (
      <div style={{backgroundColor: '#666', padding: '20px 0'}}>
        <ToDoList list={this.state.list} />
        <NewTodos addFn={this.addHandler}/>
      </div>
    );
  }
}

export default App;
