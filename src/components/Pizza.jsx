import React, {useState} from 'react'
import pizzas from '../pizzadata'

const Pizza = ({pizza}) => {
    const [ quantity, setQuantity ] = useState(1)
    const [ varient, setVarient ] = useState('small')
    return (
        <div>
            <h1>{pizza.name}</h1>
            <img src={pizza.image} className='img-fluid' style={{height: '300px', width:'300px'}}/>
            <div className='flex-container'>
                <div className='w-100'>
                    <p>Varients</p>
                    <select value={varient} onChange={(e)=> {setVarient(e.target.value)}}>
                        {pizza.varients.map(varient=>{
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className='w-100'>
                    <p>Quantity</p>
                    <select value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} >
                        {[...Array(10).keys()].map((x, i)=>{
                            return <option value={i+1}>{i+1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className='flex-container'>
                <div>
                    <h1>Price: {pizza.prices[0][varient] * quantity}</h1>
                </div>
            </div>

        </div>
    )
}

export default Pizza