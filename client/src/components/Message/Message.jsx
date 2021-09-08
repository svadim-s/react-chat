import React from 'react'
import ReactEmoji from 'react-emoji'

import styles from "./Message.module.scss"

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false

  const trimmedName = name.trim().toLowerCase()

  if (user === trimmedName) {
    isSentByCurrentUser = true
  }

  return (
    isSentByCurrentUser ? (
      <div className={styles.messageContainer} style={{justifyContent: "flex-end", alignItems: "center"}}>
        <p className={styles.sendText} style={{paddingRight: "10px"}}>{trimmedName}</p>
        <div className={styles.messageBox} style={{background: "blue"}}>
          <p className={styles.messageText} style={{color: "white"}}>{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    ) : (
      <div className={styles.messageContainer} style={{justifyContent: "flex-start", alignItems: "center"}}>
        <div className={styles.messageBox}  style={{background: "light"}}>
          <p className={styles.messageText} style={{color: "black"}}>{ReactEmoji.emojify(text)}</p>
        </div>
        <p className={styles.sendText} style={{paddingLeft: "10px"}}>{user}</p>
      </div>
    )
  )
}

export default Message
