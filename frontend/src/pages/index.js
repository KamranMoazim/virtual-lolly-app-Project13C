import React, { useState } from "react";
import Lolly from "../components/lolly";
import { useMutation } from "@apollo/client";  // useQuery
import gql from "graphql-tag";
import { Link } from "gatsby";
import * as styles from "./styles.module.css";

const shortid = require("shortid");
// const axios = require("axios");


// const GET_ALL = gql`
//   {
//     getLollies {
//       c1
//       c2
//       c3
//       rec
//       sender
//       msg
//       id
//     }
//   }
// `;


const ADD_VCARD = gql`
  mutation addLolly($lolly: LollyInput!){
    addLolly(lolly: $lolly){
      id
    }
  }
`;


let ID = shortid.generate()

const Home = () => {
  const [c1, setC1] = useState("#d52358");
  const [c2, setC2] = useState("#e95946");
  const [c3, setC3] = useState("#deaa43");

  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState(ID);


  const [addLolly] = useMutation(ADD_VCARD);
  // const { loading, error, data } = useQuery(GET_ALL);

  // if (loading) {
  //   return (<h1>Loading..</h1>);
  // }

  // if (error) {
  //   return (<h1>Error..</h1>);
  // }

  // console.log(data);

  const handleSubmit = async () => {
    // console.log(sender);
    // console.log(receiver);
    // console.log(message);
    const lolly = { c1, c2, c3, rec: receiver, sender: sender, msg: message, id }
    console.log("CALLED")
    await addLolly({ variables: { lolly }, });

    // axios.post("https://api.netlify.com/build_hooks/607a9fc8c418d6e1c6677821")
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
        
    ID = shortid.generate()
    setId(ID)
  };


  return (
    <div className={styles.container}>
      <h2>Create Lolly</h2>
      <div className={styles.main_container}>
        <div>
          <Lolly top={c1} middle={c2} bottom={c3} />
          <input
            type="color"
            value={c1}
            onChange={(e) => {
              setC1(e.currentTarget.value);
            }}
          ></input>
          <input
            type="color"
            value={c2}
            onChange={(e) => {
              setC2(e.currentTarget.value);
            }}
          ></input>
          <input
            type="color"
            value={c3}
            onChange={(e) => {
              setC3(e.currentTarget.value);
            }}
          ></input>
        </div>
        <div className={styles.form_container}>
          <input
            value={receiver}
            type="text"
            onChange={(e) => setReceiver(e.target.value)}
            placeholder="To"
          ></input>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          ></textarea>
          <input
            value={sender}
            type="text"
            onChange={(e) => setSender(e.target.value)}
            placeholder="From"
          ></input>
          <div className={styles.btn}>
          <Link
          style={{textDecoration:"none"}}
            to="/showLolly"
            state={{
              c1: c1,
              c2: c2,
              c3: c3,
              rec: receiver,
              sender: sender,
              msg: message,
              id: id
            }}
            onClick={()=>{handleSubmit()}}
          >
            Send
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
