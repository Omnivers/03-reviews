import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex]=useState(0);
  const {name,text,job,image}=people[index];
  const max=people.length-1; //Setting our max number for our generator function && length of our array 

  const randomPerson =()=>{
    setIndex((index)=>{
      index=Math.floor(Math.random() * (max + 1));//generating random number
      return(index)
    })

  }
  const previousPerson= ()=>{
    setIndex((index)=>{
      if(index===0){
        index=max
        return(index)
      }
      else{
        index--
      return(index)
      }
    })
  }
  const nextPerson= ()=>{
    setIndex((index)=>{
      if(index===max){
        index = 0
        return (index)
      }
      else{
        index++
        return (index)
      }
    })
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
          <button className="prev-btn" onClick={previousPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>Random</button>
    </article>

)};

export default Review;
