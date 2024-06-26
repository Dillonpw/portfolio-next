import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a1bf7f2c-e2c4-4575-9d2e-ac544037c627");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      setIsEmailSubmitted(true);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return isEmailSubmitted ? (
    <div className="m-8 text-3xl ">
      <p>{result}</p>
      <h1 className="text-3xl">Thank you for reaching out!</h1>
    </div>
  ) : (
    <motion.aside
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1 }}
      className="m-8  "
    >
      <form
        className="flex max-w-[600px] flex-col lg:mx-auto"
        onSubmit={onSubmit}
      >
        <label className="font-bold" htmlFor="email">
          Email:
        </label>
        <input
          className="my-2 h-10 rounded-md border-2 p-2 text-neutral-950"
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email@address.com"
        />

        <label className="font-bold" htmlFor="message">
          Message:
        </label>
        <textarea
          className="my-2 rounded-md border-2 p-2 text-black"
          name="message"
          id="message"
          rows="6"
          required
          placeholder="Your message..."
        ></textarea>

        <button
          className="w-fit items-center justify-center rounded-lg bg-slate-900 px-8 py-4 text-gray-200 opacity-90 hover:scale-105 hover:opacity-100 dark:bg-gray-200 dark:text-neutral-950"
          type="submit"
        >
          Submit
        </button>
      </form>
      <span className="text-center">{result}</span>
    </motion.aside>
  );
};

export default Contact;
