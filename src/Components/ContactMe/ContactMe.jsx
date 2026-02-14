import React from 'react'
import styles from "./ContactMe.module.css"
const ContactMe = () => {
  return (
<section className={styles.section}>
      <h2 className={styles.title}>Contact Me</h2>

      <div className={styles.container}>
        {/* Left Card */}
        <div className={styles.card}>
          <h3 style={{ fontWeight: 600, fontSize: 22 }}>Get In Touch</h3>
          <br />
          <p className={styles.description}>
            Feel free to reach out for collaborations or any queries.
          </p>

          <div className={styles.info}>
            <p>📧 ayushmagrawal.76@gmail.com</p>
            <p>📞 +91 7666972175</p>
            <p>📍 Pune, Maharashtra</p> 
          </div>
        </div>

        {/* Right Card */}
        <div className={styles.card}>
          <h3 className={styles.center} style={{ fontWeight: 600, fontSize: 22 }}>Drop a Message</h3>

          <form className={styles.form}>
            <label>Your Name</label>
            <input type="text" />

            <label>Your Email</label>
            <input type="email" />

            <label>Message</label>
            <textarea rows="5" />

            <button type="submit"style={{ fontWeight: 600 }}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactMe
