import React from "react";
import { useState, useRef } from "react"; 
import "../Main.css";

export default function Main(){
    const inputRef = useRef(null); 
    const resultRef = useRef(null); 
    const [result, setResult] = useState(0); 
    
    function plus(e) { 
        e.preventDefault(); 
        setResult((result) => result + Number(inputRef.current.value)); 
    }; 
    
    function minus(e) { 
        e.preventDefault(); 
        setResult((result) => result - Number(inputRef.current.value));
    };
    
    function times(e) { 
        e.preventDefault(); 
        setResult((result) => result * Number(inputRef.current.value)); 
    }; 
    
    function divide(e) { 
        e.preventDefault(); 
        setResult((result) => result / Number(inputRef.current.value)); 
    };
    
    function resetInput(e) { 
        e.preventDefault(); 
        inputRef.current.value = 0 ; 
    }; 
    
    function resetResult(e) { 
        e.preventDefault(); 
        setResult(0);   
    };

    return(
        <div >
            <form className="form"> 
                <p ref={resultRef}> {result} </p> 

                <input
                pattern="[0-9]" 
                ref={inputRef} 
                type="number" 
                placeholder="Type a number" 
                /> 
                <div className="but">
                    <button onClick={plus}>plus</button> 
                    <button onClick={minus}>minus</button> 
                    <button onClick={times}>times</button> 
                    <button onClick={divide}>divide</button> 
                    <button onClick={resetInput}>resetInput</button> 
                    <button onClick={resetResult}>resetResult</button>
                </div>
            </form>
        </div>
    );
}