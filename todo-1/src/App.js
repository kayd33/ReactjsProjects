import React, { Component } from 'react';

class ToDoList extends Component{

  clickHandler = (e) => {
    this.props.removeFn(e.target.innerHTML);
  }
  render(){
    let listAsLi = this.props.list.map((element, index) => {
      return <li key={index} onClick={this.clickHandler}>{element}</li>
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
    this.state = {list: []};
  }
  addHandler = (item) => {
    this.setState({list: this.state.list.concat(item)});
  }
  removeHandler = (item) => {
    this.setState({list: this.state.list.filter(element => item !== element)});
  }

  render() {
    return (
      <div style={{backgroundColor: '#666', padding: '20px 0'}}>
        <h3>Add your tasks using the text box and remove them by clicking on your tasks</h3>
        <ToDoList removeFn={this.removeHandler} list={this.state.list} />
        <NewTodos addFn={this.addHandler}/>
      </div>
    );
  }
}

export default App;
