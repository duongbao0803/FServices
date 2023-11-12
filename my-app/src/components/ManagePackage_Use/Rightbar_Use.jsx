import React from "react";
import { Steps, Row, Col } from "antd";
import {
  getStaffByUsingId,
  getStaffInfo,
  getUsingHistory,
} from "../../services/UserService";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { Pagination } from "@mui/material";
import { formatDate } from "../../utils/tools";

function Rightbar({ selectedServiceName }) {
  const { Step } = Steps;
  const { id } = useParams();
  const [totalPage, setTotalPage] = useState(0);
  const [workingHistory, setWorkingHistory] = useState([]);
  const [staffInfo, setStaffInfo] = useState([]);
  const [staffIds, setStaffIds] = useState([]);

  // You could format your dates here using a library like moment.js or date-fns
  const waitingTime = " 03:00 PM"; // dynamic in practice
  const finishedTime = " 05:00 PM"; // dynamic in practice

  useEffect(() => {
    viewWorkingHistory(1);
  }, []);

  const viewWorkingHistory = async (pageNum) => {
    try {
      const res = await getUsingHistory(id, pageNum);
      if (res && res.status === 200) {
        setWorkingHistory(res.data);
        const staffIds = res.data.map(
          (workingHistory) => workingHistory.staffId
        );
        getStaffInfo(staffIds);
      } else {
        setWorkingHistory([]);
        setStaffIds([]);
      }
    } catch (error) {
      console.log("Error Viewing Hisotry", error);
    }
  };

  const getStaffInfo = async (staffIds) => {
    try {
      const fetchedStaffInfo = [];

      for (const staffId of staffIds) {
        try {
          const res = await getStaffByUsingId(staffId);
          if (res && res.status === 200) {
            fetchedStaffInfo.push(res.data);
          }
        } catch (error) {
          console.log("Error Fetching Staff Information", error);
        }
      }

      setStaffInfo(fetchedStaffInfo);
    } catch (error) {
      console.log("Error Fetching Staff Information", error);
      setStaffInfo([]);
    }
  };

  const handlePageClick = (e) => {
    viewWorkingHistory(+e.selected + 1);
  };

  return (
    <div className="info-ordered_use">
      {workingHistory?.map((workingHistory, index) => (
        <div className="inside-table">
          <div className="d-flex justify-content-between">
            <p style={{ fontWeight: "bold", fontSize: "18px" }}>
              Dịch vụ:{" "}
              <span style={{ color: "#ff8228" }}>
                {workingHistory?.service?.name}
              </span>
            </p>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                color: "#757575",
              }}
            >
              {formatDate(workingHistory?.createdDate)}
            </p>
          </div>
          <div className="row_use row">
            <div className="col-md-4">
              <Steps
                direction="vertical"
                current={0}
                style={{ minHeight: "30vh" }}
              >
                <Step title="Đang chờ" description={` ${waitingTime}`} />
                <Step title="Đang thực hiện" />
                <Step title="Đã hoàn thành" description={`${finishedTime}`} />
              </Steps>
            </div>
            <div className="col-md-8">
              <div className="inside-details">
                <div
                  className="inside-details__table"
                  style={{ fontSize: "16px" }}
                >
                  <table>
                    <tbody>
                      <tr>
                        <th>Ngày thực hiện:</th>
                        <td>24.10.2023</td>
                      </tr>
                      <tr>
                        <th>Giờ hẹn:</th>
                        <td>{workingHistory?.shiftTime}</td>
                      </tr>
                      {staffInfo[index] && (
                        <>
                          <tr>
                            <th>Nhân viên:</th>
                            <td>{staffInfo[index]?.name}</td>
                          </tr>
                          <tr>
                            <th>Số điện thoại:</th>
                            <td>{staffInfo[index]?.phoneNumber}</td>
                          </tr>
                        </>
                      )}

                      <tr>
                        <th>Ghi chú:</th>
                        <td>{workingHistory?.note}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        pageCount={totalPage}
        marginPagesDisplayed={1}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
      {/* <Pagination count={10} onPageChange={handlePageClick} /> */}
    </div>

    //     </div>
    //   </div>
    // </div>
  );
}

export default Rightbar;
