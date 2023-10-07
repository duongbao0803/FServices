import React, { Component } from "react";

export default function Contact() {
  return (
    <div className="container mt-5">
      <div className="contact mb-3">
        <div className="title-detail">
          <h2
            style={{ paddingLeft: "20px", color: "#757575", fontSize: "18px" }}
          >
            THÔNG TIN LIÊN HỆ
          </h2>
          <div className="line" />
        </div>
        <div className="table-custom">
          <table>
            <tbody>
              <tr>
                <td>Tên liên hệ</td>
                <td>Dương Tôn Bảo</td>
              </tr>
              <tr>
                <td>Số điện thoại</td>
                <td>0909 099 089</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>duongbao2k3@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
