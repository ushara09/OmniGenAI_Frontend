import React, { useState, useEffect } from 'react'

export default function AdminPageCardView(props) {

// useEffect(()=>{
//     setClientName = name;
//     setClientId = id;
//     setNumberOfBots = numOfBots;
// },[])

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          This is some text within a card body.
          {props.activeStatus ? (
            <div
              className="bg-success rounded-circle"
              style={{ width: "30px", height: "30px" }}
            ></div>
          ) : (
            <div
              className="bg-danger rounded-circle"
              style={{ width: "30px", height: "30px" }}
            ></div>
          )}
          <div>{props.clientName}</div>
          <div>
            <span>Clilent ID - </span>
            {props.clientId}
          </div>
          <div>
            <span>Number of AI bots - </span>
            {props.numberOfBots}
          </div>
          <div>
            <button type="button" class="btn btn-primary">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
