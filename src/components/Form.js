import React from 'react';

function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input required type="text" name={props.id} placeholder="Send your ID" />
      <input required type="text" name={props.userId} placeholder="Send your UserID" />
      <input required type="text" name={props.title} id="" placeholder="Send title" />
      <textarea required name={props.text} cols="30" rows="10" placeholder="Write your post" />
      <input type="submit" value="Send posts" className="submit-btn" />
    </form>
  )
}

export default Form;
