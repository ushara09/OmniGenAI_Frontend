import React, { useEffect, useState } from "react";
import AdminPageCardView from "../../Components/AdminPageCardView";
import axios from "axios";
import { useParams } from "react-router-dom";

function EachClientSection() {
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
      <div>
        <span>Available AI Bots</span>
        <div>
          {apiData.length != 0 ? (
            apiData.map((data) => (
              <div style={{ marginTop: "50px", marginBottom: "10px" }}>
                <AdminPageCardView
                  isAdminHomePage={false}
                  clientName={data.name}
                  clientId={data.chatBotId}
                  activeStatus={data.status}
                />
              </div>
            ))
          ) : (
            <div className="d-flex align-items-center justify-content-center" style={{height:"100vh"}}>
              <h2>No Data</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EachClientSection;
