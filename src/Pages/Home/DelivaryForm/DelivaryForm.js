import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cartitem from '../CartItem/Cartitem';
import { CartContext } from '../Home';

const DelivaryForm = () => {
    const navigate = useNavigate()
    const [cart, setCart] = useContext(CartContext)


    useEffect(() => {
        if (cart.length < 1) {
            navigate('/')
        }
    }, [])
    console.log(cart)
    let price = 0;
    let count = 0;
    for (const food of cart) {
        price += (food.price * food.count);
        count += food.count;
    }
    const delivary = 5;
    const tax = parseFloat((price * .05).toFixed(2));
    const total = price + delivary + price;

    const handleForm = (event) => {
        event.preventDefault()
        const order = {
            address: event.target.address.value,
            road: event.target.road.value,
            flat: event.target.flat.value,
            business: event.target.business.value,
            instructor: event.target.instructor.value,
            order: []

        }

        toast.success("Order Placed. Thank you")
        setCart([])
        navigate('/P')

    }
    return (
        <div className='container mx-auto flex flex-col md:flex-row items-center min-h-screen p-10'>
            <div className='text-left py-10 flex flex-col gap-6 items-start grow md:order-2 '>
                <div className='md:w-4/5 mx-auto'>
                    <div>
                        <h3 className='text-xl'>From <span className='font-semibold'>Gulshan Plaza Restaura GPR</span></h3>
                        <h3 className='text-sm'>From Arriving in 20-30 min</h3>
                        <h3 className='text-sm'>107 Rd No 8</h3>


                    </div>
                    <div className='mt-4'>
                        {
                            cart.map((cartItem, index) => <Cartitem cartItem={cartItem} key={index}></Cartitem>)
                        }
                    </div>
                    <div>
                        <p>Sub Total . {count} Item       : ${price}</p>
                        <p>Delivary Charge : ${delivary}</p>
                        <p>Tax             : ${tax}</p>
                        <p>Total           : ${total}</p>
                    </div>
                </div>
            </div>
            <div className='grow md:order-1'>
                <form onSubmit={handleForm} className='flex flex-col gap-10 md:px-8 pt-4 w-full md:w-4/5 mx-auto'>
                    <div className="input-group">
                        <input type="text" className=' w-full' name="address" id="" placeholder='Address' />
                    </div>
                    <div className="input-group">
                        <input type="text" name="road" id="" placeholder='Road no.' required />
                    </div>
                    <div className="input-group">
                        <input type="text" name="flat" id="" placeholder='Flat, suite or floor' required />

                    </div>
                    <div className="input-group">
                        <input type="text" name="business" id="" placeholder='Business Name' required />
                    </div>
                    <div className="input-group">
                        <textarea type="text" name="instructor" style={{ resize: "none" }} id="" placeholder='Add delivary instructor' required />
                    </div>
                    <div className="input-btn ">
                        <input type="submit" className='' value='Save & Continue' />
                    </div>


                </form>
            </div>


        </div>
    )
};
export default DelivaryForm;