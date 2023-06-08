import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";

function EachBotSection() {
  const [prompt, setPrompt] = useState([
    "prompt 1",
    "prompt 2",
    "prompt 3",
    "prompt 4",
  ]);
  const { id, name, status } = useParams();

  return (
    <div>
      <div>
        <div className="container">
          <div className="card mt-4">
            <div className="card-body">
              <div className="row mt-3 mb-3">
                <div className="col">{name}</div>
                <div className="col flex-end">
                  {status ? (
                    <div
                      className="bg-success rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                  ) : (
                    <div
                      className="bg-danger rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                  )}
                </div>
              </div>

              <div className="row">
                <span className="col">AI Bot Id -</span>
                <div className="col flex-end">{id}</div>
              </div>
              <div>
                {prompt ? (
                  prompt.map((item, key) => (
                    <div key={key} className="mt-2 mb-2">
                      <EachPromt name={item} />
                    </div>
                  ))
                ) : (
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: "100vh" }}
                  >
                    <h2>No Data</h2>
                  </div>
                )}
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
              <div className="col-9">
                <span>{props.name}</span>
              </div>
              <div className="col-3">
                <AiTwotoneDelete
                  size={30}
                  color="red"
                  onClick={() => console.log("deleted")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
