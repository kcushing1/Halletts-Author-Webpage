import React, { useEffect, useState } from "react";
import List from "../../components/List";
import MessageBox from "../../components/MessageBox/MessageBox";

export default function Messages() {
  const [message, setMessage] = useState([]);
  const [specificMessage, setSpecificMessage] = useState([]);

  function loadMessages() {
    let msg = fetch("/api/message");
    msg
      .then((resp) => resp.json())
      .then((res) => {
        setMessage(res);
      });
  }

  useEffect(() => {
    loadMessages();
  }, []);

  function handleClickName(e) {
    // let nameId = e.target.id;
    console.log("the id is", e.target.id);
    let getMsg = fetch("/api/message/" + e.target.id);
    getMsg
      .then((resp) => resp.json())
      .then((res) => {
        setSpecificMessage(res);
      });
  }

  return (
    <div className="row">
      <div className="col">
        <div className="row text-center">
          <div className="col">
            <h2 className="mb-5 border-bottom">LETTERS TO HALLETT</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <ul>
              {message.map((msg) => {
                return (
                  <List
                    item={msg.name}
                    key={msg.name}
                    onClick={handleClickName}
                    id={msg.id}
                  />
                );
              })}
            </ul>
          </div>
          <div className="col border rounded mb-4 mx-4">
            {specificMessage.id ? (
              <MessageBox
                name={specificMessage.name}
                email={specificMessage.email}
                text={specificMessage.text}
              />
            ) : (
              <h2 className="greytext align-self-middle">
                Click a name to read their message!
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
