import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.list.length } items.
    <ul>
    { props.list.map(item => <ListItem item={item} key={item.id}/>)}
    </ul>
  </div>
)

export default List;