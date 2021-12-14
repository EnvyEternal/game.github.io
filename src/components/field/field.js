import React, { useState }  from 'react'
import Character from '../character/character'
import styles from '../field/field.module.sass'

function Field() {
    const [position, setPosition] = useState(660)
    const [color, setColor] = useState(false)

   setTimeout(()=>{
       setColor(!color)
       console.log(color)
       clearInterval()
   },Math.random()*70000) 

  

    const click = () =>{
        if(position>0){
            if(!color){
            setPosition(position - 20)
            console.log(position)}
            else
            {
            setPosition(660)
            setColor(false)
            alert('You are lose')
        }
        }else{
            alert('You are win!')
            setPosition(660)
        }
    }
    return (
        <div className={styles.field} onClick={click}>
            <div className={styles.watcher} style={color ?{backgroundColor:'red'} : {backgroundColor:'green'}}></div>
            <Character position={position} />
        </div>
    )
}

export default Field
