import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";

function EachBotSection() {
  const [companyName, setCompanyName] = useState("Applova");
  const [companyId, setCompanyId] = useState("AFEA1234");
  const [activeStatus, setActiveStatus] = useState(true);
  const [botName, setBotName] = useState("Bot Name");
  const [botId, setBotId] = useState("Bot ID");

  return (
    <div>
      <div>EachBotSection</div>
      <div>{companyName}</div>
      <div>
        <span>Company Id : </span>
        {companyId}
      </div>

      <div>
        <div className="container">
          <div className="card">
            <div className="card-body">
              {activeStatus ? (
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
              <div>{botName}</div>
              <div>
                <span>AI Bot Id -</span>
                {botId}
              </div>
              <div>
                <EachPromt name="AI Personality"/>
                <EachPromt name="AI Language"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachBotSection;




function EachPromt(props) {
  return (
    <div>
      
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <span>{props.name}</span>
              </div>
              <div className="col">
                <AiTwotoneDelete size={30} color="red" onClick={() => console.log("deleted")}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
