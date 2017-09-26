import React from 'react';

const ListItem = (props) => (
  <div>
    <span> { props.item.name } </span>
    <span><p>thumbs up!</p></span>
  </div>
)

export default ListItem;