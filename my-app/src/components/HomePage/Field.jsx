import React from "react";
import "../../css/styleField.css";

function Field() {
  return (
    <>
      <div className="container-fluid">
        <div className="row row-content register d-flex justify-content-center flex-column">
          <div className="container">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="register-field  d-flex justify-content-center flex-column">
                <span className="mb-1">
                  <h2>Đăng ký ngay hôm nay</h2>
                </span>
                <span>Bạn đã sẵn sàng trải nghiệm FServices chưa ?</span>
                <span>Tham gia ngay</span>
                <a href="index.html">Trải nghiệm ngay</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Field;
