import React from 'react'
import styles from "./Footer.module.css"
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate=useNavigate()
  
  const handleLogout=()=>{
    localStorage.clear()
    navigate("/")
  }
  return (
    <div>
      <div className={styles.footer}>
  <div className={styles.sub_footer}>
    <div>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        <h2>Online Exam Portal</h2>
      <p className={styles.para}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        saepe, deleniti temporibus laudantium cumque ea?
      </p>
      </ul>
    </div>
    <div>
      <ul>
        <span>Quick Links</span>
        <li className={styles.list}>Home</li>
      </ul>
      <ul>
        <li className={styles.list}>About</li>
      </ul>
      <ul>
        <li className={styles.list}>Contact</li>
      </ul>
      <ul>
        <li className={styles.list}>FAQ</li>
      </ul>
    </div>
    <div>
      <ul>
        <span>Contact</span>
        <li className={styles.list}>Address</li>
        <span>Shahjahanpur</span>
        <li className={styles.list}>Email</li>
        <span>kumar0072@gmail.com</span>
        <li className={styles.list}>Mobile</li>
        <span>+8800958825</span>
      </ul>
    </div>
    <div>
      <ul>
        <span>Subscribe</span><br />
        <input className={styles.input_box} type="text" placeholder="Name"/>
      </ul>
      <ul>
        <input className={styles.input_box} type="text" placeholder="Email"/>
      </ul>
      <ul>
        <button className={styles.Subscribe}>Subscribe</button>
      </ul>
    </div>
  </div>
  <hr style={{width: "90%",margin: "auto",border: "2px solid #fff"}}/>
  <h3 className={styles.heading} style={{textAlign:"center"}}>@copyright:All rights reserved</h3>
</div>

    </div>
  )
}

export default Footer
