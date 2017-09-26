import React from 'react';

class AddListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snack: ''
    }
    this.addNewSnack = this.addNewSnack.bind(this);
  }

  // Function to add snack
  addNewSnack(item) {
    console.log('newsnack!!!!')
    this.setState({
      snack: item.target.value
    })
  }

  

  render () {
    console.log("STATE: ",this.state.snack);
    // console.log(this.props.addToList)
    return(
      <div>
      New Snack: <input onChange={this.addNewSnack} value={this.state.snack}></input>
      <br />
      <button onClick={()=>{this.props.addToList(this.state.snack)}}>Add</button>
      </div>
    )
  }
}

export default AddListItem;