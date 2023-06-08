import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AdminPageCardView(props) {
  const [adminHomePage, setAdminHomePage] = useState(props.isAdminHomePage);

  return (
    <div className="px-5">
      <div className="card">
        <div className="card-body shadow row">
          <div className="col">
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
          </div>
          <div className="col">{props.clientName}</div>
          <div className="col">
            <span>{adminHomePage ? "Company Id: " : "AI Bot Id: "}</span>
            {props.clientId}
          </div>
          <div className="col">
            {adminHomePage ? (
              <div>
                <span>Number of AI bots: </span>
                {props.numberOfBots}
              </div>
            ) : null}
          </div>
          <div className="col">
            <Link
              className="btn btn-primary w-50"
              to={
                adminHomePage
                  ? `/admin/each-client-section/${props.clientId}/${props.clientName}`
                  : `/admin/each-bot-section/${props.clientId}/${props.clientName}/${props.activeStatus}`
              }
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
