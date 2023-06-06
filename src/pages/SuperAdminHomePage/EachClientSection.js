import React, { useEffect, useState } from "react";
import AdminPageCardView from "../../Components/AdminPageCardView";
import axios from "axios";
import { useParams } from "react-router-dom";

function EachClientSection() {
  const [companyName, setCompanyName] = useState("Applova");
  const [companyId, setCompanyId] = useState("AFEA1234");
  const [activeStatus, setActiveStatus] = useState(true);
  const [apiData, setApiData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `http://localhost:1997/omnigen-ai/v1/controller/company/${id}/chat_bot`
      )
      .then((res) => {
        setApiData(res.data);
        console.log("Data - ", res.data);
      })
      .catch((err) => {
        console.log("Error -", err);
      });
  }, []);

  return (
    <div>
      <div>EachClientSection</div>
      <div>{id}</div>
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
          {apiData
            ? apiData.map((data) => (
                <div>
                  <AdminPageCardView
                    isAdminHomePage={false}
                    clientName={data.name}
                    clientId={data.chatBotId}
                    activeStatus={data.status}
                  />
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default EachClientSection;
