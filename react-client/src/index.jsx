import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import AddListItem from './components/AddListItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: [
        // {name: 'chips', id: 1},
        // {name: 'apple', id: 2},
        // {name: 'tea', id: 3}
      ]
    }
    this.addToList = this.addToList.bind(this);
    this.getAllSnacks = this.getAllSnacks.bind(this);
  }

  addToList (data) {
    console.log("POSSTTTTTTT",data)
    $.ajax({
      url: '/snacks',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({name: data}), 
      success: (results) => {
        console.log("YAAAAAAAY")
        this.getAllSnacks();
      },
      error: (status, error) => {
        console.log('ERRRRR', status, error);
      }
    });
  }

  getAllSnacks () {
    $.ajax({
      url: '/snacks', 
      success: (data) => {
        this.setState({
          list: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  // componentDidMount() {
  //   this.seeAllSnacks();
  // }

  render () {
    return (<div>
      <h1>Snack List</h1>
      <AddListItem addToList={this.addToList}/>
      <List list={this.state.list}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));