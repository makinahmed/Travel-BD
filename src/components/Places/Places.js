import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import Cart from '../Cart/Cart';

const Places = () => {
    const [places, setPlaces] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./FakeData.JSON')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    const handleCart = (newPlace) => {
        const newCart = [...cart, newPlace];
        setCart(newCart);
    }

    return (
        <div className="ms-5 mt-5">
            <div className="row d-flex">
                <div className="col-lg-10">

                    <div className="row ms-4">
                        {
                            places.map(place => <Place key={place.cost} handleCart={handleCart} place={place}></Place>)
                        }
                    </div>
                </div>
                <div className="col-lg-2">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Places;