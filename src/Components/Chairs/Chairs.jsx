import React from 'react'
import Axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Chair from './ChairData.json'
import { Link } from 'react-router-dom'
export default function Chairs() {
  return (
    <div >
      <div className='row my-1' style={{ marginLeft: "30px", display: 'flex' }}>
        {
          Chair.map((arr, index) => {
            return (
              <div key={index} className="cards">
                <Link to={`/dishes/${arr.id}`} style={{ textDecoration: "none", color: "black" }}>
                  <div className="card my-3">
                    <div className="col-3">
                      <img style={{ marginLeft: "50px" }} src={arr.img} alt="" />
                      <h2 style={{ position: "absolute", top: "200px", left: "150px" }}>{arr.id}</h2>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
