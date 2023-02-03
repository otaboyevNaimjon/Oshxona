import React from 'react';
import DishesData from './DishesData.json'
const Dishes = () => {
    return (
        <div>
            <div className='row my-1' style={{ marginLeft: "30px" }}>
                {
                    DishesData.map((arr, index) => {
                        return (
                            <div key={index} className="cards">
                                <div className="card my-3 mt-3">
                                    <div className="col-3">
                                        <img className='images' style={{ marginLeft: "50px", width: "300px", height: "200px" }} src={arr.img} alt="" />
                                        <h2 className='' style={{ position: "absolute", top: "200px", left: "150px", fontFamily: "cursive" }}>{arr.name}</h2>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-evenly mt-5'>
                                    <h4 className='h4' style={{ fontFamily: "cursive" }}>-</h4>
                                    <h3 style={{ fontFamily: "cursive" }}>0</h3>
                                    <h4 className='h4' style={{ fontFamily: "cursive" }}>+</h4>
                                </div>
                            </div>
                        )
                    })
                }
                <div>
                    <button>salom</button>
                </div>
            </div>
        </div>
    );
}

export default Dishes;

