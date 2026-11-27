import { ShoppingBasket } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Cart({ cartItems }) {
  let totalPrice = 0;
  cartItems.forEach((_) => {
    const _price = _.price * _.quantity;
    totalPrice += _price;
  })
  const deliveryFee = 4500;
  const processingFee = ((totalPrice + deliveryFee) * 0.02); // 2% processing fee
  return (
    <div className='w-full p-2'>
      <div>
        <h1 className='font-bold text-2xl uppercase my-2'>My Cart</h1>
        <p className='text-gray-600 text-[13px] font-bold'>ACCESS YOUR CART AND PROCEED TO CHECKOUT</p>
      </div>
      {cartItems.length < 1 &&
        <div className='grid text-center p-20'>
          <span className='text-3xl text-gray-600 tracking-wider'>No items present in your cart</span>
          <div>
            <Link to={"/products"} className='flex justify-self-center gap-5 my-10 p-4 bg-[var(--champagne-gold)] text-white font-bold uppercase rounded cursor-pointer'>
              <span>
                <ShoppingBasket />
              </span>
              <span>Continue shopping</span>
            </Link>
          </div>
        </div>
      }
      <div className='grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-10 p-3 justify-center items-center'>
        <div className='grid gap-10 my-10'>
          {cartItems.map((item, index) => (
            <div key={index} className='rounded-2xl p-3 bg-white'>
              <div className='grid grid-cols-[3fr_6fr_1fr] gap-3 items-center justify-between'>
                <div className='border rounded-2xl h-full justify-center items-center'>
                  <img src="/logo.png" className='w-full' alt="" />
                </div>
                <div className='grid gap-2'>
                  <span className='font-bold'>{item.name}</span>
                  <span className=''>
                    Quantity:
                    <span className='font-bold'>{item.quantity}</span>
                  </span>
                  <span>Unit price:
                    <br />
                    <span className='font-bold'>NGN {item.price.toLocaleString()}</span>
                  </span>
                </div>
                <div className='grid'>
                  <div className='grid'>
                    <span className='text-center font-bold'>Quantity</span>
                    <div className='flex gap-0 justify-center rounded'>
                      <span className='border rounded-l-2xl px-4 py-2 bg-white/50'>-</span>
                      <span className='border px-3 py-2'>{item.quantity}</span>
                      <span className='border rounded-r-2xl px-4 py-2'>+</span>
                    </div>
                  </div>
                  <div>
                    Total price:
                    <br />
                    <span className='font-bold'>NGN {(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='sticky top-24 bg-white rounded-2xl p-0'>
          <div className='border-b p-2'>
            <h1 className='font-bold text-2xl text-[var(--deep-purple)]'>Cart summary</h1>
          </div>
          <div className='grid gap-3 p-5'>
            <div>
              <span className='font-extrabold'>Subtotal: </span>
              <span className='font-bold'>NGN {totalPrice.toLocaleString()}</span>
            </div>
            <div>
              <span className='font-extrabold'>Subtotal: </span>
              <span className='font-bold'>NGN {totalPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
