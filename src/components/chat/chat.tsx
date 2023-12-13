import './chat.scss'
const Chat = () => {
    return (
        <>
        <div className="container">
            <div className="containerChat">
            <img src="./user.svg" alt="Avatar"/>
            <p>Hello. How are you today?</p>
            <span className="time-right">11:00</span>
            </div>

            <div className="containerChat darker">
            <img src="./user.svg" alt="Avatar" className="right"/>
            <p>Hey! I'm fine. Thanks for asking!</p>
            <span className="time-left">11:01</span>
            </div>

            <div className="containerChat">
            <img src="./user.svg" alt="Avatar"/>
            <p>Sweet! So, what do you wanna do today?</p>
            <span className="time-right">11:02</span>
            </div>

            <div className="containerChat darker">
            <img src="./user.svg" alt="Avatar" className="right"/>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
            </div>
        </div>
        </>
    )
}

export default Chat