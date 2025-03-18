import React, { useState } from 'react'
//importing the css file 
import './Calci.css';


export default function Calci() {//creating states
  const[total,setTotal]=useState('');
   // Function for All Clear
  const clear=()=>{
    setTotal("");}
    //Function for Delete the last Number Entered
  function handleDelete(){
    setTotal(total.slice(0,-1));
  }
  //Function for equalto Button
  const calculate=()=>{
    setTotal(eval(total).toString());
  }
  //Function for making the calculation
  const handleClick=(e)=>{
    setTotal(total.concat(e.target.name));
  }
  return (
    <div>
      <h1>Modern Calculator</h1>
      <div className='container'>
        <form>
            <input type='text' value={total}/>
        </form>
        <div className='keypad'>
            <button onClick={clear}id='clear' className='highlight'>AC</button>
            <button onClick={handleDelete}className='highlight'>DEL</button>
            <button   name="/"onClick={handleClick} className='highlight'>&divide;</button>
            <button  name='7' onClick={handleClick}>7</button>
            <button  name='8' onClick={handleClick}>8</button>
            <button  name='9' onClick={handleClick}>9</button>
            <button  name='*' onClick={handleClick} className='highlight'>&times;</button>
            <button  name='4' onClick={handleClick}>4</button>
            <button  name='5' onClick={handleClick}>5</button>
            <button  name='6' onClick={handleClick}>6</button>
            <button  name='-' onClick={handleClick} className='highlight'>-</button>
            <button  name='1' onClick={handleClick}>1</button>
            <button  name='2' onClick={handleClick}>2</button>
            <button  name='3' onClick={handleClick}>3</button>
            <button  name='+' onClick={handleClick} className='highlight'>+</button>
            <button  name='0' onClick={handleClick} id='zero'>0</button>
            <button  name='.' onClick={handleClick}>.</button>
            <button  id='equal' onClick={calculate} className='highlight'>=</button>

        </div>
      </div>
    </div>
   
  )
  
}

