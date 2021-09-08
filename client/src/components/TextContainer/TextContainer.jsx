import React from 'react'
import onlineIcon from '../../icons/onlineIcon.png';

import styles from './TextContainer.module.scss'

const TextContainer = ({ users }) => {
  return (
    <div className={styles.textContainer}>
    <div>
      <h1>RChat <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Created with</h2>
      <h2> - React</h2>
      <h2> - Node, Express</h2>
      <h2> - Socket.IO</h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className={styles.activeContainer}>
              <h2>
                {users.map(({name}) => (
                  <div key={name} className={styles.activeItem}>
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
    </div>
  )
}

export default TextContainer
