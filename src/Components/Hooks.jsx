import React, { useEffect, useState } from 'react';
export default function Hooks(){
    //Progression 1 & 2
    /* const [age,setAge] = useState(0); */
  /*   const ageInc = () => {
        setAge(age+1);
    } */
   
  /*   const [sib,setSibling] = useState(0);
     const sibInc = () => {
        setSibling(sib+1);
    }  */

    //Progression 3
    /* const [state,setState] = useState({age:0,sib:0});
    const {age , sib} = state;
    const click = (val) => {
        setState({
            age:age+1,
            sib:sib+1
        });
    } */
 //Progression 4
 /* const [count,setCount] = useState(0);
 const clickp = () => {
     setCount(count+1);
 }
 const clickm = () => {
     setCount(count-1);
 }
 const clickr = () => {
     setCount(0);
 } */

 //Progression 5
  const [age,setAge] = useState(0);
    const ageInc = () => {
       setAge(age+1);
    }
    useEffect(()=>{
        document.title = "Your age is " + age + " Years"; 
    }) 
/* Progression 6 */

    
    return(
        <>
        <div>
            {/* Progression 1,2,3 */}
            {/* <h1>Todays I am {age} Years of Age</h1>
            <h2>I have {sib} siblings</h2>
            <div className='btn'><button onClick={click}>Increase Age</button><button onClick={click}>Increase Sibling</button></div> */}
            {/* Progression 4 */}
            {/* <h1>Count Value is: {count}</h1>
            <div><button onClick={clickr}>Reset</button><button onClick={clickp}>Plus (+)</button><button onClick={clickm}>Minus (-)</button></div> */}
            {/* Progression 5 */}
             <h1>Todays I am {age} Years of Age</h1>
            <button onClick={ageInc}>Increase Age</button>
            <p>Click the Button to change the Title </p> 
        </div>
        </>
    )

    
}