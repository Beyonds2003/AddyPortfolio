import React from 'react'
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {ThemeContext} from "../Context"

const variants = {
    hover: {
        scale: 1.1, color: "black", background: "white"
    },
    tap : {
    scale: 0.9
    }
}
function Fourth() {
    const {dark} = React.useContext(ThemeContext)
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [message, setMessage] = React.useState("")

    function Name(event) {
        setName(event.target.value)
    }

    function Email(event) {
        setEmail(event.target.value)
    }

    function Message(event) {
        setMessage(event.target.value)
    }

   async function Sent(event) {
        event.preventDefault()
        if(name.length === 0 || email.length === 0 || message.length === 0) {
            toast.error('Please Fill All The Fields!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored'
                });
        } else {
            toast.success('Thank You For Contacting Addy!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored'
                });
                const data =  {name, email, message}
                const res = await axios.post("/contact", data)
                setName("")
                setEmail("")
                setMessage("")
        }
    }



    return (
        <div style={{position: "relative"}} className="realFlex"  id="contact">
        <div className='realFlex notflex'>
            <div className={`abouts ab2 ${dark && "light1"}`}>Contact</div>
            <div className='mainforth'>
            <div className='form'>
            <form onSubmit={Sent}>
             <div>
            <div className='box'>
                <span type="name" className={`lab ${dark && "light"}`}>Name</span>
                <input type="text" id="id" className={`${dark && "light light1"}`} value={name} onChange={Name} placeholder='ADDY'/>
            </div>
            <div className='box'>
                <span type="name" className={`lab ${dark && "light"}`}>Email</span>
                <input type="text" id="id" className={`${dark && "light light1"}`} value={email} onChange={Email} placeholder='addy@gmail.com'/>
            </div>
            <div className='box2'>
                <span type="name" className={`lab ${dark && "light"}`}>Message</span>
                <textarea type="text" id="id" className={`${dark && "light light1"}`}  value={message} onChange={Message} placeholder='Type your message...'/>
            </div>
            </div>
            <div className='boo'>
            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
             className='sent'>Sent <i className="fa-solid fa-paper-plane arrow"></i></motion.button>
            </div>
             <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
             </form>
             </div>
             <div className='form2'>
               <div>
               <div className='text flex'>
                     <i className="fa-solid fa-at emailIcon"></i>
                      <div className={`email ${dark && "light1"}`}>addykyaw3@gmail.com</div>
                 </div>
                 <div className='text flex'>
                     <i className="fa-solid fa-phone emailIcon"></i>
                      <div className={`email ${dark && "light1"}`}>+959762045086</div>
                 </div>
                 <div className='text flex'>
                      <i className="fa-solid fa-location-dot emailIcon"></i>
                      <div className={`email ${dark && "light1"}`}>Hmawbi, Yangon, Myanmar</div>
                 </div>
               </div>
               <div className='text mainforth cc'>
                <a href='https://www.facebook.com/addy.kyaw.1' target="_blank"><div className='gg'><motion.i variants={variants} whileHover="hover" whileTap="tap" className="fa-brands fa-facebook-f emailIcon2"></motion.i></div></a>
                <a href="https://discord.com/users/914473041889734656" target="_blank"><div className='gg'><motion.i variants={variants} whileHover="hover" whileTap="tap" className="fa-brands fa-discord emailIcon2"></motion.i></div></a>
                <a href='https://github.com/Beyond2323' target="_blank"><div className='gg'><motion.i variants={variants} whileHover="hover" whileTap="tap" className="fa-brands fa-github emailIcon2"></motion.i></div></a>
               </div>
             </div>
            </div>
            <div className='finish'><img src='images/Computer.png' className='ook'/></div>
        </div>
        </div>
    )
}

export default Fourth
