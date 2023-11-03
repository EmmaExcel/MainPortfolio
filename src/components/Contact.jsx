import "./components.css";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <>
        <section id="contact" className="contactSection">
            <div className="contactContainer">
                <div className="contactHeader">
                    <p>CONTACT</p>
                </div>

                <div className="contactInfo">
                    <p>Ready to bring your vision to life or just want to chat? Reach out, and let's create something memorable together.</p>
                    <p>I'm here to listen, collaborate, and craft web app solutions that resonate.</p>
                </div>

                <div className="contactMail">
                <a href="mailto:excelemma6@gmail.com">excelemma6@gmail.com</a>
                </div>

                <div className="contactFooter">
                    <div className="contactName">
                        <p>EXCEL®</p>
                    </div>

                    <div className="contactLink">
                        <a href="">GITHUB</a>
                        <a href="">TWITTER</a>
                        <a href="">LINKEDIN</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
