import React from 'react'

export default function Post(props) {
  return (
    <div className="post">
      <span className="post-id">{"ID:" + props.id}</span>
      <h4 className="post-user-id">{`UserID:${props.userID}`}</h4>
      <h2 className="post-title">{props.title}</h2>
      <p className="post-text">{props.text}</p>
    </div>
  )
}
