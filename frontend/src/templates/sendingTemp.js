import React from 'react'
import { Link } from "gatsby";
import Lolly from "../components/lolly";
import * as styles from "./showLolly.module.css";

function SendingTemp({pageContext: {c1,c2,c3,sender,msg,rec,id}}) {
    console.log(id);
    return (
        <div className={styles.lollyContainer}>
            <h1>LOLLY PAGE</h1>
            <div>
                <Lolly top={c1} middle={c2} bottom={c3} />
            </div>
            <div>
                <h1><b style={{color: c1}}>Sender: </b>{sender || 'You dont have a sender name'}</h1>

                <p style={{fontSize: '27px'}}><b style={{color: c2 || 'red'}}> Message: </b>{msg || 'You dont have a message'}</p>

                <h1><b style={{color: c3 }}>Reciever: </b>{rec || 'You dont have a receiver name'}</h1>

            </div>
            <Link to="/">Make your Own Lolly and Share with Friends!</Link>
        </div>
    )
}

export default SendingTemp
