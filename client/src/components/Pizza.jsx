import React, {useState} from 'react'
import {Modal, Button} from 'bootstrap'
import pizzas from '../pizzadata'

const Pizza = ({pizza}) => {
    const [ quantity, setQuantity ] = useState(1)
    const [ varient, setVarient ] = useState('small')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='m-5 shadow-lg p-3 mb-5 bg-body rounded'>
            <div onClick={handleShow}>
                <h1>{pizza.name}</h1>
                <img src={pizza.image} className='img-fluid' style={{height: '300px', width:'300px'}}/>
            </div>
            <div className='flex-container'>
                <div className='w-100 m-1'>
                    <p>Varients</p>
                    <select className='form-control' value={varient} onChange={(e)=> {setVarient(e.target.value)}}>
                        {pizza.varients.map(varient=>{
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className='w-100 m-1'>
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} >
                        {[...Array(10).keys()].map((x, i)=>{
                            return <option value={i+1}>{i+1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className='flex-container'>
                <div className='m-1 w-100'>
                    <h1 className='m-1'>Price: {pizza.prices[0][varient] * quantity}</h1>
                </div>
                <div className='m-1 w-100'>
                    <button className='btn btn-danger mt-1'>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default Pizza