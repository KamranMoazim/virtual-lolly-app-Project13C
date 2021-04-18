import * as React from 'react';
import { Link } from "gatsby";
import Lolly from "../components/lolly";
import * as styles from "./showLolly.module.css";


const ShowLolly= ({ location }) => {
    // let lolly
    if(location.state){
        return (
            <div className={styles.lollyContainer}>
                <h1>LOLLY PAGE</h1>
                <h2>Share Lolly with your Friend.</h2>
                <h2>{location.href+"/"+location.state.id}</h2>
                    <div>
                        <Lolly top={location&&location.state.c1} middle={location.state["c2"]} bottom={location.state["c3"]} />
                    </div>
                <div>
                    <h1><b style={{color: location.state["c1"]}}>Sender: </b>{location.state.sender || 'please enter sender name'}</h1>
                    <p style={{fontSize: '27px'}}><b style={{color: location.state.c2 || 'red'}}> Message: </b>{location.state.msg || 'please enter a message'}</p>
                    <h1><b style={{color: location.state["c2"]}}>Reciever: </b>{location.state.rec || 'please enter a reciever name'}</h1>
                </div>
                <Link to="/">Make your Own Lolly</Link>
            </div>
        );
        }
    // }
    // console.log(location)

    
    return (
<h1>Nothing to Show</h1>
    );
}

export default ShowLolly;