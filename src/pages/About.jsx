import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const About = () => {
  const [showInput, setShowInput] = useState(false);
  const [userInput, setUserInput] = useState("");

  const sendEmail = () => {
    if (!userInput) {
      alert("text type kro");
      return;
    }

    const templateParams = {
      user_number: userInput,
    };

    emailjs
      .send(
        "service_qh38ffp", // अपनी Service ID
        "template_mla515p", // अपनी Template ID
        templateParams,
        "IccD0bFgeT97_IrOb", // अपनी Public Key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email Sent Successfully ✅");
        setUserInput("");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send ❌");
      });
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <button
        onClick={() => setShowInput(!showInput)}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Open Input
      </button>

      {showInput && (
        <div className="mt-4 w-full max-w-md flex flex-col items-center">
          <input
            type="text"
            placeholder="Type something here..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />

          <button
            onClick={sendEmail}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition w-full"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default About;
