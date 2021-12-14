import React from 'react'
import styles from '../field/field.module.sass'

function Character(props) {
    const {position} = props
    return (
        <div style={{marginTop: `${position}px`}} className={styles.player}></div>
    )
}

export default Character
