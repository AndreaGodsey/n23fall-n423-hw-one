import React from 'react';
import styles from '@/styles/About.home.module.css'

export default function Abouthome(props) {
  
    return (
        <>
        <div className={styles.Abouthome}>{props.descriptionone}</div>
        
        </>
    )
}