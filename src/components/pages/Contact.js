// import React from 'react';

// import '../../styles/Contact.css';

// export default function Contact() {
//   return (
//     <div className='container'>
//       <div className='row text-center'>
//         <div className='col-sm mt-5'>
//           <h1 className='text-center title'>Contact Me</h1>
//         </div>
//       </div>
//       <div className='row text-center'>
//         <div className='col-sm mt-5'>
//           <p>Phone: 732-616-8142</p>
//           <p> Email: <a class="c-links" href="mailto:bgrinthal@gmail.com" target="_blank"
//             rel="noopener noreferrer"> bgrinthal@gmail.com</a></p>
//           <p> Github: <a class="c-links" href="https://github.com/bgrinthal" target="_blank"> bgrinthal</a></p>
//           <p> Linkedin: <a class="c-links" href="https://www.linkedin.com/in/benjamin-grinthal-b05003122/"
//             target="_blank"> Benjamin Grinthal</a></p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import '../../styles/Contact.css';



// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!name) {
      setErrorMessage('Name must be entered')
      return
    }
    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Valid email address must be entered');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!message) {
      setErrorMessage('Message must be entered')
      return
    }

    if (name && email && message) {
      setErrorMessage(`Hello ${name}, thank yoou for reaching out!`)
    }

    window.open(`mailto:bgrinthal@gmail.com?subject=${name}?sent?a?message&body=${message}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className='form'>
      <h1 className='title'>Contact me:</h1>
      <form className="form">
        <h4 className='mt-3'>Name:</h4>
        <input className="name"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter first and last name"
        />
        <br></br>
        <h4 className='mt-3'>Email:</h4>
        <input className="email"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Enter email"
        />
        <br></br>
        <h4 className='mt-3'>Message:</h4>
        <input className="message"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="Enter message"
        />
        <br></br>
        <button className='button' type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
