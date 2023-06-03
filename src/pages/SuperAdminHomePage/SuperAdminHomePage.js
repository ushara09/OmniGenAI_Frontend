import React from 'react'

function SuperAdminHomePage() {
  return (
    <div>
    <div>SuperAdminHomePage</div>
    <div>
        <input style={{width:"300px"}} type='text' className='form-control search-form rounded' placeholder='Search Client' />
    </div>

    <div>
    <button type="button" class="btn btn-primary">Add New Client</button>
    </div>
    </div>
  )
}

export default SuperAdminHomePage;
