import { useRef } from "react";


export default function Start({setUsername}){
    const inputRef= useRef();
    return(
        <>
        
        <div className="start">
            
            <input placeholder="enter your name" className="startInput" ref={inputRef}/>
            <button className="startButton" onClick={()=> setUsername(inputRef.current.value)}>Start</button>
        </div>
        </>
    )
}