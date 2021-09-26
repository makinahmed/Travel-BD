import React from 'react';
import Name from '../Name/Name';

const Cart = (props) => {
    let total = 0;
    let count = 0;
    let nameArray = []
    let newArr = props.cart
    // console.log(newArr);
    for (const a of newArr) {
        count = count + 1;
        total = total + a.cost
        nameArray.push(a.placeName)
    }
    return (
        <div>
           
            <p>Total Added:{count} </p>
            <p>Total Cost: <span>৳ </span>{total} </p>
            {
                <Name nameArray={nameArray}></Name>
            }
        </div>
    );
};

export default Cart;