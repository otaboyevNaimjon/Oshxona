import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Chair from '../Navbar/images/chair.png'
import Ovqat from '../Navbar/images/Rectangle 7.png'
import ichimlik from '../Navbar/images/Rectangle 8.png'
import salad from '../Navbar/images/Rectangle 9.png'
export default function Navbar() {
    let params = useParams()
    return (
        <div>
            <div className='header' style={{ width: "100" }}>
                <Link to={'/chair2'} style={{textDecoration:"none" , color:"black"}}>
                    <div className='chair'>
                        <img style={{ width: "130px"}} src={Chair} alt="" />
                        <h3 >{params.id}</h3>
                    </div>
                </Link>
                <Link to={`/dishes/${params.id}`} style={{ textDecoration: "none" }}>
                    <div className='dishes'>
                        <img src={Ovqat} alt="" />
                        <h2>Taomlar</h2>
                    </div>
                </Link>
                <Link to={`/drink/${params.id}`} style={{ textDecoration: "none" }}>
                    <div className='dishes'>
                        <img src={ichimlik} alt="" />
                        <h2>Ichimliklar</h2>
                    </div>
                </Link>
                <Link to={`/salad/${params.id}`} style={{ textDecoration: "none" }}>
                    <div className='dishes'>
                        <img src={salad} alt="" />
                        <h2>Salatlar</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}
