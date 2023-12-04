
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { FidgetSpinner } from "react-loader-spinner";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const email = e.target.email.value;
    const name = e.target.name.value;
    const whatsApp = e.target.whatsApp.value;
    const attachment = e.target.attachment.files[0];
    const message = e.target.message.value;
    

    const serviceId = import.meta.env.VITE_SERVICEID;
    const templateId = import.meta.env.VITE_TEMPLATEID;
    const publicKey = import.meta.env.VITE_PUBLICKEY;

    const templateParams = {
      from_email: email,
      from_name: name,
      from_whatsApp: whatsApp,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then(res => {
        setLoading(false)
        if(res.status === 200){
            setConfirm("Successfully Sent")
            e.target.reset()
        }
    })
  };
  return (
    <div className="pt-20" id="contact">
      <h3 className="flex gap-2 max-w-fit text-xs uppercase border-[1px] rounded-3xl border-red-500 px-4 py-1 mb-2">
        <FaPhone className="text-sm"></FaPhone>Contact
      </h3>
      <h1 className="text-3xl">
        Touch with <span className="text-yellow-600">Fahim</span>
      </h1>

      <div className="mt-10">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <div className="w-1/2">
              <label className="block mb-2 text-sm text-red-500">
                Your Email *
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  id="email-address-icon"
                  className="bg-zinc-900 text-sm rounded-lg block w-full  p-2.5"
                  placeholder="yourName@gmail.com"
                />
              </div>
            </div>
            <div className="w-1/2">
              <label className="block mb-2 text-sm text-red-500">
                Your Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  id="email-address-icon"
                  className="bg-zinc-900 text-sm rounded-lg block w-full  p-2.5 "
                  placeholder="Your Name"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <div className="w-1/2">
              <label className="block mb-2 text-sm text-red-500">
                Whats App
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="whatsApp"
                  id="email-address-icon"
                  className="bg-zinc-900 text-sm rounded-lg block w-full  p-2.5"
                  placeholder="Whats app number"
                />
              </div>
            </div>
            <div className="w-1/2">
              <label className="block mb-2 text-sm text-red-500">
                Attachment
              </label>
              <div className="relative">
                <input
                  type="file"
                  name="attachment"
                  id="email-address-icon"
                  className="bg-zinc-900 text-sm rounded-lg block w-full p-2.5 "
                />
              </div>
            </div>
          </div>
          <label className="block mb-2 text-sm text-red-500">
            Your message *
          </label>
          <textarea
            id="message"
            rows="4"
            name="message"
            required
            className="block p-2.5 w-full text-sm bg-zinc-900 rounded-lg "
            placeholder="Leave a comment..."
          ></textarea>
          <p className="my-1 text-red-500">{confirm}</p>
          <button
            type="submit"
            className="btn rounded-md w-full bg-zinc-900 text-red-500 shadow-md shadow-black uppercase mt-4"
          >
            {loading ? 
            <FidgetSpinner
            visible={true}
            height="24"
            width="24"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={['#ff0000', '#00ff00', '#0000ff']}
            backgroundColor="#F4442E"
          />
            : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
