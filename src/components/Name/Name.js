import React from 'react';

const Name = (props) => {
    console.log(props.nameArray);
    return (
        <div>
          {
             props.nameArray.map(name=><h6>Place Name :{name} </h6>) 
          }
        </div>
    );
};

export default Name;