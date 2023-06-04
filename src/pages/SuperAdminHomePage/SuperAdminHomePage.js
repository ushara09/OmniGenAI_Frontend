import React from 'react'
import AdminPageCardView from '../../Components/AdminPageCardView';
import { AiOutlinePlusCircle } from 'react-icons/ai';


function SuperAdminHomePage() {
  return (
    <div>
      <div>SuperAdminHomePage</div>
      <div className='row'>
        <div className='col'>
          <input
            style={{ width: "300px" }}
            type="text"
            className="form-control search-form rounded"
            placeholder="Search Client"
          />
        </div>

        <div className='col'>
          <button type="button" class="btn btn-primary">
            <AiOutlinePlusCircle size={24} /> Add New Client
          </button>
        </div>
      </div>

      <AdminPageCardView
        clientName="vihan"
        clientId="2000-abc"
        numberOfBots="4"
        activeStatus={false}
      />
      <AdminPageCardView
        clientName="christo"
        clientId="1998-abc"
        numberOfBots="1"
        activeStatus={true}
      />
    </div>
  );
}

export default SuperAdminHomePage;
