import React from 'react';
import MyButton from '../utils/button';
import {Zoom} from 'react-awesome-reveal';

const Pricing = () => {

    const priceState = {
        prices:[100,150,200],
        position:['Balcony','Medium','Star'],
        desc:[
            "If youre looking for an elevated experience at the Tech Summit, then a Balcony Ticket is the perfect option for you. With a Balcony Ticket, you'll have access to a premium seating area that provides a bird's-eye view of the stage and the speakers. This exclusive seating area is designed to offer a more intimate and immersive experience, allowing you to fully engage with the speakers and the presentations. You'll also have access to dedicated food and beverage options.",
            "With a Medium Ticket, you'll have access to the main seating area, which provides a great view of the stage and the speakers. e Medium Ticket still offers a fantastic opportunity to engage with the speakers and other attendees, and gain valuable insights into the future of technology. You'll also have access to food and beverage options and the opportunity to network with other tech enthusiasts, entrepreneurs, and industry leaders         .                 ",
            "For those seeking the ultimate Tech Summit experience, the Star Ticket is the ideal option. With a Star Ticket, you'll have access to an exclusive VIP area that provides an unparalleled view of the stage and the speakers. In addition to premium seating, you'll have access to dedicated food and beverage options, including a complimentary bar service. You'll also have the opportunity to meet and network with the speakers and other VIP attendees at an exclusive cocktail reception after the event."
        ],
        linkto:['http://hwllo.com','hhjbbf.com','pokemon.com'],
        delay:[500,0,500],
    }

    const showboxes = () => (
      priceState.prices.map((box,index)=>(
        <Zoom key={index} className="pricing_item" delay={priceState.delay[index]}>
         <div className='pricing_inner_wrapper'>
          <div className='pricing_title'>
            <span>${priceState.prices[index]}</span>
            <span>{priceState.position[index]}</span>
          </div>
          <div className='pricing_description'>
             {priceState.desc[index]}
          </div>
          <div className='pricing_buttons'>
              <MyButton
              text="Purchase"
              style={{
                color:'#ffff',
              
              }}
              link={
                priceState.linkto[index]
              }
              />
          </div>
         </div>
        </Zoom>
      ))
    )
  return (
    <div className='bck_black'> 
      <div className='center_wrapper pricing_section'>
        <h2>Pricing</h2>
        <div className='pricing_wrapper'>
          {showboxes()}
        </div>
      </div>
    </div>
  )
}

export default Pricing;
