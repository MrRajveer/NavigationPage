import React from 'react'
import styles from './Button.module.css'

function Button({text , icon ,isOutline}) {
  return (
    <div>
      
      <button className={isOutline ? styles.isoutlie_btn : styles.primary_btn} > 
         {icon}
         {text}
         </button>
    </div>
  )
}

export default Button