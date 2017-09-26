import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import AddListItem from './components/AddListItem.jsx';
import TwitterFeed from './components/TwitterFeed.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: []
    }
    this.addToList = this.addToList.bind(this);
    this.getAllSnacks = this.getAllSnacks.bind(this);
  }

  addToList (data) {
    // console.log("POSSTTTTTTT",data)
    $.ajax({
      url: '/snacks',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({name: data}), 
      success: (results) => {
        console.log("WRONG TOO BAD")
        this.getAllSnacks();
        alert("WRONG TOO BAD")
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
      <h1>Can you guess what the raccoon is thinking?</h1>
      <p>Hint: the answer is one word</p>
      <AddListItem addToList={this.addToList}/>
      <List list={this.state.list}/>
      <TwitterFeed />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));