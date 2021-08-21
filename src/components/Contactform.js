import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Contactform() {
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

    // Based on the input type, we set the state of either email, person's name, and their message
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

    // First we check to see if the email is not valid or if the name/message is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name || !message) {
      setErrorMessage('Email, name, or message are invalid. Please fill out all areas.');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
   
    alert(`Thanks for contacting me ${name}!`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className="contactform">
      <h1 >Contact Form</h1>
      
      <form className="form">
          <div className = "form-group contactItem">
              <label for = "emailfield">Email:</label>
            <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
                id="emailfield"
                className="form-control"
            />
          </div>

          <div className = "form-group contactItem">
              <label for = "namefield">Name:</label>
              <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="Name"
                id="namefield"
                className="form-control"
                />
          </div>

          <div className = "form-group contactItem">
              <label for = "messagefield">Message:</label>
              <textarea
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder="Message"
                id="messagefield"
                rows="3"
                className="form-control"
            />
          </div>       
        
        
        <button className = "contactbtn" type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contactform;