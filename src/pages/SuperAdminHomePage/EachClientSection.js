import React, { useState } from "react";
import AdminPageCardView from "../../Components/AdminPageCardView";

function EachClientSection() {
  const [companyName, setCompanyName] = useState("Applova");
  const [companyId, setCompanyId] = useState("AFEA1234");
  const [activeStatus, setActiveStatus] = useState(true);

  return (
    <div>
      <div>EachClientSection</div>
      <div>{companyName}</div>
      <div>
        <span>Company Id : </span>
        {companyId}
      </div>
      <div className="row">
        <div className="col">
          <span>Company Status : </span>
        </div>
        <div className="col">
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
        </div>
      </div>
      <div>
        <span>Available AI Bots</span>
        <div>
          <AdminPageCardView
            isAdminHomePage={false}
            clientName="Bot 1"
            clientId="ARARG123"
            activeStatus={true}
          />
          <AdminPageCardView
            isAdminHomePage={false}
            clientName="Bot 2"
            clientId="ADFBD4654"
            activeStatus={false}
          />
          <AdminPageCardView
            isAdminHomePage={false}
            clientName="Bot 3"
            clientId="BBSBH7989"
            activeStatus={true}
          />
        </div>
      </div>
    </div>
  );
}

export default EachClientSection;
