import React, { useEffect, useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { MdOutlineDownloadDone } from "react-icons/md";

function AIManagementSection() {
  const [dropDownLable, setDropDownLabel] = useState("Company Prompts");
  const [dropDownSelectedValues, setDropDownSelectedValues] = useState([]);
  const [companies, setCompanies] = useState([
    "company one",
    "company two",
    "company three",
  ]);

  function changeDropDownLable(labelName) {
    if(labelName === "Common Prompts"){
        setDropDownSelectedValues([])
    }
    setDropDownLabel(labelName);
  }

  function selectDropDownValues(data) {
    // console.log("Data - ",data);
    setDropDownSelectedValues(data);
  }

  return (
    <div>
      <div>AIManagementSection</div>
      <input
        style={{ width: "300px" }}
        type="text"
        className="form-control search-form rounded"
        placeholder="Enter Prompt Title"
      />

      <div className="row">
        <div className="col">
          <div className="dropdown show">
            <a
              className="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {dropDownLable}
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a
                className="dropdown-item"
                href="#"
                onClick={() => changeDropDownLable("Company Prompts")}
              >
                Company Prompts
              </a>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => changeDropDownLable("Common Prompts")}
              >
                Common Prompts
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <Multiselect
            options={companies}
            placeholder=" "
            isObject={false}
            disable={dropDownLable == "Common Prompts" ? true : false}
            onSelect={(event) => {
              selectDropDownValues(event);
            }}
            onRemove={(event) => {
              selectDropDownValues(event);
            }}
          />
        </div>
      </div>

      <div className="form-group">
        <textarea
          className="form-control"
          rows="3"
          placeholder="Enter prompt"
        ></textarea>
      </div>

      <div className="col">
        <button type="button" className="btn btn-success">
          <MdOutlineDownloadDone size={20} />
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default AIManagementSection;
