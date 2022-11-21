import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bv1ctr9",
        "template_pqsgex7",
        form.current,
        "6vaKnzydXxFOtXDyV"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('👍  Messsage sent!', {
            position: "bottom-left",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
            });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error('👎 Messsage was not sent!', {
            position: "bottom-left",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
            });
          e.target.reset();
        }
      );
  };

  return (
    <main>
      <div className="flex flex-col items-center justify-center mt-28">
        <h2 className="font-burtons my-5 text-2xl dark:text-white">
          Contact Me
        </h2>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <label className="label dark:text-white">Name</label>
          <input
            placeholder="name"
            className="input"
            type="text"
            name="user_name"
            required
          />
          <label className="label dark:text-white">Email</label>
          <input
            placeholder="email"
            className="input"
            type="email"
            name="user_email"
            required
          />
          <label className="label dark:text-white">Subject</label>
          <input
            placeholder="subject"
            className="input"
            type="text"
            name="subject"
            required
          />
          <label className="label dark:text-white">Message</label>
          <textarea
            placeholder="text"
            className="textArea"
            name="message"
            required
          />
          <input
            className="input transition-all hover:scale-110 duration-[0.5s] hover:bg-red-500"
            type="submit"
            value="Send"
          />
        </form>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={false}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
      />
    </main>
  );
};

export default Contact;
