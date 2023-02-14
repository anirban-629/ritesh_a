import React from "react";
import TextInput from './SubComponent/TextInput'
import TextArea from "./SubComponent/TextArea";

const Contact = () => {

  const Social = ['Dribbble', 'Facebook', 'Youtube', 'instagram']

  const listofSocial = Social.map((element, index) => {
    return (
      <li>
        <a href="/" key={index}>{element}</a>
      </li>
    )
  })


  return (
    <>
      <div className="row">
        <div className="medium-6 columns">
          <h3>Contact Me</h3>
          <p>
            Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque
            eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
            Phasellus molestie magna non est bibendum non venenatis nisl tempor.
            Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis
            porttitor.
          </p>
          <ul className="menu">
            {listofSocial}
          </ul>
        </div>
        <div className="medium-6 columns">
          <TextInput name='Name' type='text' placeholder='Enter you name' />
          <TextInput name='Email' type='email' placeholder='Enter you Email' />
          <TextArea name='Message' placeholder='holla at a designerd' col='6' rows='7' />
          <input type="submit" className="button expanded" value="Submit" />
        </div>
      </div>
    </>
  );
};

export default Contact;
