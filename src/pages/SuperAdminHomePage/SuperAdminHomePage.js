import React, { useEffect, useState } from "react";
import AdminPageCardView from "../../Components/AdminPageCardView";
import { AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";

function SuperAdminHomePage() {
  const [companyData, setCompanyData] = useState(false);
  const [haveData, setHaveData] = useState(true);
  useEffect(() => {
    axios
      .get("http://172.16.1.158:1997/omnigen-ai/v1/controller/company", {})
      .then((res) => {
        setCompanyData(res.data);
        console.log("API Data - ", res.data);
      })
      .catch((err) => {
        console.log("Error - ", err);
      });
  }, []);

  return (
    <div>
      <div>SuperAdminHomePage</div>
      <div className="row px-3 mb-3 float-end">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control search-form rounded"
            placeholder="Search Client"
          />
        </div>

        <div className="col-md-7">
          <button type="button" class="btn btn-primary">
            <AiOutlinePlusCircle size={24} /> Add New Client
          </button>
        </div>
      </div>

      {companyData
        ? companyData.map((data) => (
            <div>
              <div className="" style={{ marginTop: "70px" }}>
                <AdminPageCardView
                  clientName={data.name}
                  clientId={data.companyId}
                  numberOfBots={data.totalChatBotCount}
                  activeStatus={data.status}
                  isAdminHomePage={true}
                />
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default SuperAdminHomePage;
