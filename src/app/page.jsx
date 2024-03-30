"use client";
import React, { useState, useEffect } from 'react';
import style from './page.module.css'
function Page() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCars(data.cars);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
 

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>
       Built to Perform. Engineered to Inspire.
      </h1>
      {loading ? (
        <p className={style.loading}>Loading</p>
      ) : (

        <div className={style['car-wrap']}>
          {cars.map((car, index) => (
            <div key={index} className={style['car-item']}>
              <p>Brand: {car.brand}</p>
              <p>Model: {car.model}</p>
              <p>Body: {car['car body']}</p>
              <p>Color: {car.color}</p>
              <p>Price: {car.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;
