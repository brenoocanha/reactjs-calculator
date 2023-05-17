import React, {useState} from 'react';
import Container from '@mui/material/Container';
import './Calculator.css';
import { Box } from '@mui/system';


export default function Calculator() {

  const[num, setNum] = useState(0);
  const[oldnum, setOldnum] = useState(0);
  const[operator, setOperator] = useState();

  function inputNum(e){
    var input = e.target.innerHTML;
    if(num===0){
      setNum(input); 
    } else {
      setNum(num + input);
    }
  }

  function clear(){
    setNum(0);
  }

  function percentage(){
    setNum(num / 100);
  }

  function changeSign(){
    if(num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e){
    var operatorInput = e.target.innerHTML;
    setOperator(operatorInput);
    setOldnum(num);
    setNum(0);
  }

  function calculate(){

    if(operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    }
    if(operator === "X"){
      setNum(parseFloat(oldnum) * parseFloat(num));
    }
    if(operator === "+"){
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
    if(operator === "-"){
      setNum(parseFloat(oldnum) - parseFloat(num));
    }

    console.log("Calculou");
    console.log(oldnum);
    console.log(num);
    console.log(operator);
  }

  return(
    <div>
      <Box m={2}/>
      <Container maxWidth="xs">
        <div className='wrapper'>
          <h1 className='result'>{num}</h1>
          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={percentage}>%</button>
          <button className='orange' onClick={operatorHandler}>/</button>
          <button className='gray' onClick={inputNum}>7</button>
          <button className='gray' onClick={inputNum}>8</button>
          <button className='gray' onClick={inputNum}>9</button>
          <button className='orange' onClick={operatorHandler}>X</button>
          <button className='gray' onClick={inputNum}>4</button>
          <button className='gray' onClick={inputNum}>5</button>
          <button className='gray' onClick={inputNum}>6</button>
          <button className='orange' onClick={operatorHandler}>-</button>
          <button className='gray' onClick={inputNum}>1</button>
          <button className='gray' onClick={inputNum}>2</button>
          <button className='gray' onClick={inputNum}>3</button>
          <button className='orange' onClick={operatorHandler}>+</button>
          <button className='gray' style={{width: '45%'}} onClick={inputNum}>0</button>
          <button className='gray' onClick={inputNum}>.</button>
          <button className='orange' onClick={calculate}>=</button>
        </div>
      </Container>
    </div>
  )
}