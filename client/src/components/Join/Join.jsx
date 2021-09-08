import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from "./Join.module.scss"

const Join = () => {
  const [name, setName] = useState("")
  const [room, setRoom] = useState("")

  return (
    <div className={styles.joinOuterContainer}>
      <div className={styles.joinInnerContainer}>
        <h1 className={styles.header}>Join</h1>
        <div>
          <input 
            placeholder="Name" 
            className={styles.joinInput}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input 
            placeholder="Room" 
            className={styles.joinInput}
            style={{ marginTop: "20px" }}
            type="text"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={styles.button} style={{ marginTop: "20px" }} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  )
}

export default Join
