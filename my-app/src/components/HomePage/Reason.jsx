import React from "react";
import { reasonList } from "../../data";
function Reason() {
  return (
    <>
      <div className="container mb-5 mt-5">
        <div className="content choose-service">
          <div className="row row-content mb-3">
            <div className="col-12 col-sm-12 col-md-12">
              <h3>Tại sao nên chọn FService</h3>
            </div>
          </div>
          <div className="row row-content">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="chooseService-img mb-4">
                <img
                  src={require("../../img/banner_2.png")}
                  alt="chọn service"
                  width="100%"
                />
              </div>
            </div>
            {reasonList.map((reason) => (
              <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="service-img mb-3">
                  <img
                    src={reason.image}
                    alt="Dọn phòng"
                    width="100px"
                    height="100px"
                  />
                </div>

                <div className="service-details">
                  <h5>{reason.title}</h5>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Reason;