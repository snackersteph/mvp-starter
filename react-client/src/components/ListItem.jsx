import React from 'react';

const ListItem = (props) => (
  <div>
    <span><img src="https://maxcdn.icons8.com/Share/icon/Hands//thumbs_down1600.png" alt="thumbs up icon" height="25" width="25" /></span>
    <span> { props.item.name } </span>
  </div>
)

export default ListItem;