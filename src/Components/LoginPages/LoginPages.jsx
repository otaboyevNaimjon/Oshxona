import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Style.css'

let data = [
    {
        name: "Naimjon",
        password: "7714001",
        role: "Girgitton"
    },
    {
        name: "Muhammad",
        password: '917903523',
        role: "Girgitton"
    },
    {
        name: "Aziz",
        password: "123456789",
        role: "Oshpaz"
    }
]

export default function LoginPages() {
    const navigate = useNavigate()
    const [value, setvalue] = useState('Girgitton')
    const [parol, setparol] = useState(null)

    function checkparol  (val)  {
        data.map((arr, index) => {
            if (value == "Girgitton") {
                if (val.target.value == arr.password) {
                    navigate('/chair')
                }
            }
            else {
                if (val.target.value == arr.password) {
                    console.log("tog'ri");
                    navigate('/cook')
                }
            }
        })
    }

    function change  (event) {
        setvalue(event.target.value)
        console.log(event.target.value);
    }
    return (
        <div>
            <div className="container">
                <div style={{ boxShadow: "0px 0px 25px 0", width: "700px", position: "absolute", height: "400px", top: "150px", left: "500px" }}>
                    <div className='d-flex align-items-center  justify-content-around text-center' style={{ marginLeft: "20px", marginTop: "10px" }}>
                        <div>
                            <img src={"./images/image 2.png"} alt="" />
                            <div style={{ display: "flex", justifyContent: "space-evenly" }} className="align-items-center mt-5">
                                <input type="radio" onChange={change} value="Girgitton" name='role' /> <h1 style={{ fontFamily: "cursive" }}>Girgitton</h1>
                            </div>
                        </div>
                        <div>
                            <img src={"./images/image 3.png"} alt="" />
                            <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "10px" }} className="mt-5 align-items-center">
                                <input type="radio" onChange={change} value="oshpaz" name='role' />  <h1 style={{ fontFamily: "cursive" }}>Oshpaz</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <input onInput={(val) => { setparol(val.target.value); checkparol(val) }} type="password" style={{ padding: "15px 20px", width: "80%", marginLeft: "60px", outline: "none", marginTop: '15px', borderRadius: "20px", border: "none" }} placeholder='Parol kiriting....' />
                    </div>
                </div>
            </div>
        </div>
    )
}
