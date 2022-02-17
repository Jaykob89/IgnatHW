import React from 'react'
import m from './Message.module.css'

type messageType = {
    name: string
    message: string
    time: string
    avatar: any
}

function Message(props: messageType) {
    return (
        <div>
            <div>{props.avatar}</div>
            <div className={m.messageText}>
                <div className={m.textColor}>{props.name}</div>
                <div>{props.message}</div>
                <div className={m.timeColor}> {props.time} </div>
            </div>
        </div>
    )
}

export default Message
