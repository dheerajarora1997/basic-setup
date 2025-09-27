"use client";

import { useMemo, useState } from "react";
import ControlledTable from "../DesignComponents/ControlledTable";
import {
  getDateInFormat,
  getPriorityColorCode,
  getStatusColorCode,
} from "../utils/utils";
import { FiDownload } from "react-icons/fi";
import Checkbox from "../DesignComponents/Checkbox";
import { getPriorityIcon } from "../Components/utils";

type ModalDataType = {
  [key: string]: any;
};

export default function DashboardPage() {
  const [modalData, setModalData] = useState<ModalDataType>({});
  const openModalDialog = (id: string, data: any) => {
    console.log("Open modal for ID:", id, data);
    setModalData(data);
  };
  const columns = useMemo(
    () => [
      {
        id: "select-col",
        header: ({ table }: { table: any }) => (
          <Checkbox
            checked={table.getIsAllRowsSelected()}
            indeterminate={table.getIsSomeRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()} //or getToggleAllPageRowsSelectedHandler
          />
        ),
        cell: ({ row }: { row: any }) => (
          <Checkbox
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
      },
      {
        header: "Reconciliation ID",
        accessorKey: "id",
        cell: ({ cell }: { cell: any }) => {
          const id = cell.getValue();
          const data = cell.row.original;
          return (
            <span
              onClick={() => {
                openModalDialog(id, data);
              }}
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              className="ps-2"
            >
              {id}
            </span>
          );
        },
      },
      {
        header: "Priority",
        accessorKey: "priority",
        cell: ({ cell }: { cell: any }) => {
          const priority = cell.getValue();
          let priorityColorCode = getPriorityColorCode(priority) || "primary";
          return (
            <span className={`text-${priorityColorCode}`}>
              {getPriorityIcon(priority, priorityColorCode)}
              {priority}
            </span>
          );
        },
      },
      {
        header: "Status",
        accessorKey: "status",
        cell: ({ cell }: { cell: any }) => {
          const status = cell.getValue();
          let badgeClass = getStatusColorCode(status) || "";

          return (
            <span
              className={`badge border border-${badgeClass} bg-light-${badgeClass} text-${badgeClass}`}
            >
              {status}
            </span>
          );
        },
      },
      {
        header: "Reconciliation Balance",
        accessorKey: "reconciliationBalance",
        cell: ({ cell }: { cell: any }) => {
          const balance = cell.getValue();
          return (
            <span className="text-md-end pe-5 d-inline-block pe-5 w-100">
              {balance}
            </span>
          );
        },
      },
      {
        header: "Currency",
        accessorKey: "currency",
      },
      {
        header: "Created on",
        accessorKey: "createdOn",
        cell: ({ cell }: { cell: any }) => {
          const date = new Date(cell.getValue());
          return <span className="ps-2">{getDateInFormat(date)}</span>;
        },
      },
      {
        header: "",
        accessorKey: "download",
        cell: ({ cell }: { cell: any }) => {
          const download = cell.getValue();
          return (
            <a href={`${download}`} className="ps-2 text-primary">
              <FiDownload />
            </a>
          );
        },
      },
    ],
    []
  );
  const [data, setData] = useState(() => [
    {
      id: "1001",
      priority: "High",
      status: "Prepare",
      reconciliationBalance: "54,345.87",
      currency: "USD",
      createdOn: "2025-04-10T00:00:00Z",
      download: "download link here",
    },
    {
      id: "1002",
      priority: "Medium",
      status: "Completed",
      reconciliationBalance: "977.87",
      currency: "EUR",
      createdOn: "2025-04-11T00:00:00Z",
      download: "download link here",
    },
    {
      id: "1003",
      priority: "Low",
      status: "Review",
      reconciliationBalance: "72,245.87",
      currency: "GBP",
      createdOn: "2025-04-12T00:00:00Z",
      download: "download link here",
    },
    {
      id: "1004",
      priority: "High",
      status: "Review",
      reconciliationBalance: "65,432.87",
      currency: "USD",
      createdOn: "2025-04-13T00:00:00Z",
      download: "download link here",
    },
    {
      id: "1005",
      priority: "Medium",
      status: "Completed",
      reconciliationBalance: "7,121.87",
      currency: "AUD",
      createdOn: "2025-04-13T00:00:00Z",
      download: "download link here",
    },
    {
      id: "1006",
      priority: "Low",
      status: "Failed",
      reconciliationBalance: "5,657.87",
      currency: "CAD",
      createdOn: "2025-04-14T00:00:00Z",
      download: "download link here",
    },
    {
      id: "1007",
      priority: "High",
      status: "Prepare",
      reconciliationBalance: "5,943.87",
      currency: "INR",
      createdOn: "2025-04-14T00:00:00Z",
      download: "download link here",
    },
    {
      id: "1008",
      priority: "Medium",
      status: "Completed",
      reconciliationBalance: "57,977.87",
      currency: "USD",
      createdOn: "2025-04-15T00:00:00Z",
      download: "download link here",
    },
    {
      id: "1009",
      priority: "Low",
      status: "Review",
      reconciliationBalance: "87.65",
      currency: "EUR",
      createdOn: "2025-04-15T00:00:00Z",
      download: "download link here",
    },
  ]);
  const fallbackData = [
    {
      id: "1010",
      priority: "High",
      status: "Failed",
      reconciliationBalance: "57,977.87",
      currency: "JPY",
      createdOn: "2025-04-16T00:00:00Z",
    },
  ];
  return (
    <>
      <section className="py-3">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-8">
              <h3 className="fw-bold">My reconciliations</h3>
            </div>
            <div className="col-12 col-md-3">
              <div className="form-group m-0">
                <input type="date" name="" id="" className="form-control" />
              </div>
            </div>
          </div>
          <div className="border p-4 mt-3 rounded">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="row justify-content-center align-items-center">
                  <div className="col-12 col-lg-4 d-none d-lg-flex">
                    <div
                      style={{ width: 160, height: 160, borderRadius: "50%" }}
                      className="bg-primary"
                    ></div>
                  </div>
                  <div className="col-12 col-lg-5">
                    <h5>Reconciliation status</h5>
                    <p className="m-0">8: Total</p>
                    <p className="mt-2 mb-0">
                      <strong>5:</strong> Prepare
                    </p>
                    <p className="m-0">
                      <strong>2:</strong> Review
                    </p>
                    <p className="m-0">
                      <strong>1:</strong> Completed
                    </p>
                    <p className="m-0">
                      <strong>0:</strong> Rejected
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 border-start">
                <div className="row justify-content-center align-items-center">
                  <div className="col-12 col-lg-4 d-none d-lg-flex">
                    <div
                      style={{ width: 160, height: 160, borderRadius: "50%" }}
                      className="bg-primary"
                    ></div>
                  </div>
                  <div className="col-12 col-lg-5">
                    <h5>Priority</h5>
                    <p className="m-0">8: Total</p>
                    <p className="mt-2 mb-0">
                      <strong>6:</strong> High
                    </p>
                    <p className="m-0">
                      <strong>2:</strong> Low
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <ControlledTable
              title={"Records"}
              titleTabs={
                <ul className="nav nav-pills">
                  <li className="nav-item me-2">
                    <a
                      className="nav-link rounded-5 active"
                      aria-current="page"
                      href="#"
                    >
                      All
                    </a>
                  </li>
                  <li className="nav-item me-2">
                    <a className="nav-link rounded-5" href="#">
                      Prepare
                    </a>
                  </li>
                  <li className="nav-item me-2">
                    <a className="nav-link rounded-5" href="#">
                      Review
                    </a>
                  </li>
                  <li className="nav-item me-2">
                    <a className="nav-link rounded-5" href="#">
                      Reject
                    </a>
                  </li>
                  <li className="nav-item me-2">
                    <a className="nav-link rounded-5" href="#">
                      Complete
                    </a>
                  </li>
                </ul>
              }
              border={0}
              cellPadding={10}
              style={{ borderCollapse: "collapse", width: "100%" }}
              columns={columns}
              data={data}
              fallbackData={fallbackData}
              sorting={true}
              headerSticky={false}
              maxHeight={"calc(100vh - 430px)"}
              tableButtonLink={"/dashboard"}
              tableButtonText={"+ Download"}
              enableMultiRowSelection={true}
            />
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <div className="row w-100">
                <div className="col-6">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Reconciliation details
                  </h1>
                </div>
                <div className="col-6"></div>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body overflow-scroll">
              <ul className="nav nav-tabs p-1">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="javascript:void(0)"
                  >
                    Details
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)">
                    Comments
                  </a>
                </li>
              </ul>
              <div
                className="accordion mt-3"
                id="accordionPanelsStayOpenExample"
              >
                <div className="accordion-item border">
                  <div className="accordion-body">
                    <div className="row">
                      <div className="col-4">
                        <p className="text-muted mb-1">Reconciliation ID:</p>
                        <p className="text-dark">{modalData?.id} </p>
                      </div>
                      <div className="col-4">
                        <p className="text-muted mb-1">Created on:</p>
                        <p className="text-dark">
                          {getDateInFormat(new Date(modalData?.createdOn))}
                        </p>
                      </div>
                      <div className="col-4">
                        <p className="text-muted mb-1">
                          Reconciliation Balance:
                        </p>
                        <p className="text-dark">
                          {modalData?.reconciliationBalance}{" "}
                        </p>
                      </div>
                      <div className="col-4">
                        <p className="text-muted mb-1">Status:</p>

                        <span
                          className={`badge border border-${getStatusColorCode(
                            modalData?.status || ""
                          )} bg-light-${getStatusColorCode(modalData?.status || "")} text-${getStatusColorCode(modalData?.status || "")}`}
                        >
                          {modalData?.status}
                        </span>
                      </div>
                      <div className="col-4">
                        <p className="text-muted mb-1">Priority:</p>
                        <span
                          className={`text-${getPriorityColorCode(modalData?.priority || "")}`}
                        >
                          {getPriorityIcon(
                            modalData?.priority || "",
                            getPriorityColorCode(modalData?.priority || "")
                          )}
                          {modalData?.priority}
                        </span>
                      </div>
                      <div className="col-4">
                        <p className="text-muted mb-1">Deadline:</p>
                        <p className="text-dark">
                          {getDateInFormat(new Date(modalData?.createdOn))}
                        </p>
                      </div>
                    </div>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse show"
                    >
                      <div className="">Hidden data</div>
                    </div>
                  </div>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Show more
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-start">
              <button type="button" className="btn btn-primary">
                Understood
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
