import React, { useState } from 'react'
import Button from '../Button/Button'
import { MdOutlineMessage } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";


import styles from './Contact.module.css'


function ContactForm() {
 const [name, setName] = useState("")
 const [email, setEmail] = useState("")
 const [text, setText] = useState("")


 function Submit (e){
  e.preventDefault()
   setName(e.target[0].value)
   setEmail(e.target[1].value)
   setText(e.target[0].value)
 }

  return (
    <section className={styles.container}>
     <div className={styles.contact_form}>
      <div className={styles.top_btn}>
      <Button text = "VIA SUPPORT CHAT" icon = {<MdOutlineMessage fontSize="24px" />} />
      <Button text = "VIA Call" icon = {<MdPhoneInTalk fontSize="24px" />} />
      </div>
      <Button  isOutline={true} text = "VIA EMAIL FORM" icon = {<IoMdMailOpen fontSize="24px" />} />
      <form onSubmit={Submit} >
      <div className={styles.form_control}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' />
      </div>
      <div className={styles.form_control}>
        <label htmlFor="email">Email</label>
        <input type="text" name='email' />
      </div>
      <div className={styles.form_control}>
        <label htmlFor="text">Text</label>
        <textarea name="text" id="text" rows="8"></textarea>
      </div>
         <div style={{ display:"flex", justifyContent:"end"}}>
          <Button text= "SUBMIT BUTTON" />
         </div>
         <div> {name + ""+ email +""+ text} </div>
       </form>
     </div>
      <div>
        <img src="/images/Frame.svg" alt="" />
      </div>

    </section>
  )
}

export default ContactForm