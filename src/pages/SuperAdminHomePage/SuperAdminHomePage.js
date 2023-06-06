import React from "react";
import AdminPageCardView from "../../Components/AdminPageCardView";
import { AiOutlinePlusCircle } from "react-icons/ai";

function SuperAdminHomePage() {
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

      <div className="" style={{marginTop:"90px", marginBottom:"20px"}} >
        <AdminPageCardView
          clientName="vihan"
          clientId="2000-abc"
          numberOfBots="4"
          activeStatus={false}
          isAdminHomePage={true}
        />
      </div>
      {/* <AdminPageCardView
        clientName="christo"
        clientId="1998-abc"
        numberOfBots="1"
        activeStatus={true}
        isAdminHomePage={true}
      /> */}
    </div>
  );
}

export default SuperAdminHomePage;
