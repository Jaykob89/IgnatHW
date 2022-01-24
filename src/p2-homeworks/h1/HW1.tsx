import React from 'react'
import Message from "./Message";
import logo from './Message.module.css'

const messageData = {
    avatar: <img src = 'https://i.redd.it/dh5otp8kcf741.png'/>,
    name: 'Yevhen Ivanin',
    message: 'Я же отправлял Вам запрос, верно?',
    time: '22:00',
}

function HW1() {
    return (
        <div className={logo.message}>
            <hr/>
            {/*homeworks 1*/}

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
