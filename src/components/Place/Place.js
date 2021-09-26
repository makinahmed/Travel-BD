import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Place = (props) => {
    console.log(props.place);
    const { placeName, cost, zilla, vehicle, image, isSecure } = props.place
    console.log(vehicle);
    return (
        <div className="border shadow p-3 mb-5 bg-body rounded" style={{ 'width': '285px', 'marginRight': '65px' }}>
            <div>
                <img className="w-100 mb-3" src={image} alt="" />
            </div>
            <div className="text-center">
                <p>Name : {placeName} </p>
                <p>Cost : <span>৳</span> {cost}</p>
                <p>Zilla:{zilla} </p>
                <p>IsSecure : {isSecure}</p>
                <p>Vehicle:{vehicle} </p>
                <button className="btn btn-secondary" onClick={() => props.handleCart(props.place)}>
                    <FontAwesomeIcon icon={faShoppingCart} />Add To Cart </button>
            </div>
        </div>
    );
};
export default Place;