import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4>  </h4>
    You guessed wrong { props.list.length } times.
    <ul>
    { props.list.map(item => <ListItem item={item} key={item.id}/>)}
    </ul>
  </div>
)

export default List;