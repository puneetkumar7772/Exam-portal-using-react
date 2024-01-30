import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
  <div className={styles.sub_footer}>
    <div>
      <ul>
        <h2>Online Exam Portal</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        saepe, deleniti temporibus laudantium cumque ea?
      </p>
      </ul>
    </div>
    <div>
      <ul>
        <span>Quick Links</span>
        <li>Home</li>
      </ul>
      <ul>
        <li>About</li>
      </ul>
      <ul>
        <li>Contact</li>
      </ul>
      <ul>
        <li>FAQ</li>
      </ul>
    </div>
    <div>
      <ul>
        <span>Contact</span>
        <li>Address</li>
        <span>Shahjahanpur</span>
        <li>Email</li>
        <span>kumar0072@gmail.com</span>
        <li>Mobile</li>
        <span>+8800958825</span>
      </ul>
    </div>
    <div>
      <ul>
        <span>Subscribe</span><br />
        <input type="text" placeholder="Name"/>
      </ul>
      <ul>
        <input type="text" placeholder="Email"/>
      </ul>
      <ul>
        <button style={{cursor:"pointer"}}>Subscribe</button>
      </ul>
    </div>
  </div>
  <hr style={{width: "90%",margin: "auto",border: "2px solid #fff"}}/>
  <h3 style={{textAlign:"center"}}>@copyright:All rights reserved</h3>
</div>

    </div>
  )
}

export default Footer
