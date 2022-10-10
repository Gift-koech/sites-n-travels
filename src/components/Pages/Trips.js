import React from "react";
import Cards from "./Cards";
import './Trips.css'


function rides() {
  return (
    <div className='cards'>
      <h1>Check out these Epic holiday categories!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Cards
              src='/assets/cruiseship.jpg'
              text=''
              label='Cruise vacation'
             
            />
            <Cards
              src='/assets/campingvacay.jpg'
              text=''
              label='Camping vacation'
           
            />
          </ul>
          <ul className='cards__items'>
            <Cards
              src='/assets/sightseeing.jpg'
              text=''
              label='Sigh-seeing vacation'
           
            />
           
            <Cards
              src='/assets/roadtrip.jpg'
              text=' '
              label='Road-trip vacay'
              
            />
            <Cards
              src='/assets/spacetour.jpg'
              text=' '
              label='Space Tours'
              
            />
            <Cards
              src='/assets/deserttour.jpg'
              text='Locked-in! '
              label='Deserts n Outbacks'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default rides;