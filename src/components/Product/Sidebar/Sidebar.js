import React from 'react';

const Sidebar = (props) => {
  return (
    <div>
      I am the sidebar component
      {props.data.title}
    </div>
  )
}

export default Sidebar;
