import React, { useEffect, useState } from "react";
import AdminPageCardView from "../../Components/AdminPageCardView";
import axios from "axios";
import { useParams } from "react-router-dom";

function EachClientSection() {
  const [companyName, setCompanyName] = useState("");
  const [activeStatus, setActiveStatus] = useState();
  const [apiData, setApiData] = useState([]);
  const { id, cName } = useParams();

  useEffect(() => {
    axios
      .get(
        `http://172.16.1.158:1997/omnigen-ai/v1/controller/company/${id}/chat_bot`
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
      <div>{companyName}</div>
      <div>
        <span>Available AI Bots</span>
        <div>
          {apiData
            ? apiData.map((data) => (
                <div style={{ marginTop: "90px", marginBottom: "20px" }}>
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
