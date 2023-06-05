import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AdminPageCardView(props) {
  const [adminHomePage, setAdminHomePage] = useState(props.isAdminHomePage);

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
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
            <span>{adminHomePage ? "Client Id -" : "AI Bot Id -"}</span>
            {props.clientId}
          </div>
          <div>
            {adminHomePage ? (
              <div>
                <span>Number of AI bots - </span>
                {props.numberOfBots}
              </div>
            ) : null}
          </div>
          <div>
            <Link
              className="btn btn-primary"
              to={
                adminHomePage
                  ? "/admin/each-client-section"
                  : "/admin/each-bot-section"
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
