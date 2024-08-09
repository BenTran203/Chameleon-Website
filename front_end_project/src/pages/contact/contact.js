import React, { useEffect } from "react";
import styles from "./contact.module.css";
import { notifyWelcome } from "../../components/notificationComp/NotificationComponent";
import Screen from '../../components/app/Screen';
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import Chatbox from '../Chatbot/Chatbox'; //newly added
import '../Chatbot/Chatbox.css'; // newly added

// newly added
import chameleonLogo from "../../assets/ChameleonLogo.png";
import chatOpenImg from "../Chatbot/images/chat-open.png";
import chatCloseImg from "../Chatbot/images/chat-close.png";
import dotMenuImg from "../Chatbot/images/dot-menu.png";
import chatIcon from "../Chatbot/images/chat-icon.png";
import fileSelectIcon from "../Chatbot/images/file-select.png";
import sendMessageImg from "../Chatbot/images/send-message.png";

function Contact() {
  useEffect(() => {
    // Display a welcome message when the component mounts
    notifyWelcome(
      "Make sure to contact us only on working days 9:00 AM onwards!",
    );
  }, []);

  const page = {
    header: 'Contact Us',
    content: {
      phone: { title: 'Phone', description: 'Monday - Friday 9am to 5pm', contact: '0359756586' },
      email: { title: 'Email', description: 'We will get back to you soon', contact: 'info@chameleon.com.au' },
      chat:  { title: 'Chat', description: 'Chat with our friendly Chameleon Bot', contact: 'Start Live Chat' }
    }
  }

  return (
    <Screen>
      <div className="bg-[#deece3] mt-auto mb-auto">

        {/* Header Text */}
        <div className={`${styles.contact_title} bg-[#4fa373]  md:text-5xl text-4xl font-medium text-center text-white`}>
          <text>{page.header}</text>
        </div>

        {/* Main Content */}
        <div className={`${styles.contact_body} grid md:grid-cols-3 grid-cols-1 max-w-6xl mx-auto justify-between items-start gap-3 align-items-stretch flex-wrap`}>

          {/* Phone */}
          <div className="contact_item text-center p-2">
            <div className="flex justify-start items-center gap-3 p-3 border-bottom border-success">

              <div className="contact_item_img">
                <FaPhoneVolume size={23} />
              </div>

              <div className="contact_item_title lg:text-3xl md:text-2xl font-semibold ">
                {page.content.phone.title}
              </div>

              <span class="badge bg-success ml-auto align-self-center p-2">{page.content.phone.contact}</span>
            </div>

            <div className="contact_item_context w-[100%] p-2 text-center font-semibold text-black mt-3">
              {page.content.phone.description}
            </div>
          </div>

          {/* Email */}
          <div className="contact_item text-center p-2">
            <div className="flex justify-start items-center gap-3 p-3 border-bottom border-success">

              <div className="contact_item_img">
                <MdEmail size={25} />
              </div>

              <div className="contact_item_title lg:text-3xl md:text-2xl font-semibold ">
                {page.content.email.title}
              </div>

              <span class="badge bg-success ml-auto align-self-center p-2">{page.content.email.contact}</span>
            </div>
            
            <div className="contact_item_context w-[100%] p-2 text-center font-semibold text-black mt-3">
              {page.content.email.description}
            </div>
          </div>

          {/* Chat */}
          <div className="contact_item text-center p-2">
            <div className="flex justify-start items-center gap-3 p-3 border-bottom border-success">
              
              <div className="contact_item_img">
                <IoChatbubbleEllipsesSharp size={25} />
              </div>
              
              <div className="contact_item_title lg:text-3xl md:text-2xl font-semibold ">
                {page.content.chat.title}
              </div>
              
              {/*<span class="badge bg-success ml-auto align-self-center p-2">{page.content.chat.contact}</span>*/}
              <Link to="/Chatbot" className="badge bg-success ml-auto align-self-center p-2 text-decoration-none">{page.content.chat.contact}</Link>
            </div>
            
            <div className="contact_item_context w-[100%] p-2 text-center font-semibold text-black mt-3">
              {page.content.chat.description}
            </div>
          </div>
        </div>

        {/* Add the Chatbox component */} {/* newly added */}
        <Chatbox // newly added
          chameleonLogo={chameleonLogo} // newly added
          chatOpenImg={chatOpenImg} // newly added
          chatCloseImg={chatCloseImg} // newly added
          dotMenuImg={dotMenuImg} // newly added
          chatIcon={chatIcon} // newly added
          fileSelectIcon={fileSelectIcon} // newly added
          sendMessageImg={sendMessageImg} // newly added
        /> {/* newly added */}

      </div>
    </Screen>
  );
}

export const contactSearchableContents = [
  "Contact Us",
  "Phone Us",
  "Send a Email",
  "Live Chat",
];

export default Contact;
