"use client";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  SortingState,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import "../style/components/_ControlledTable.scss";

import Link from "next/link";

type ITableProps = {
  border?: number;
  cellPadding?: number;
  data?: any[];
  columns: ColumnDef<any, any>[];
  fallbackData: any[];
  sorting?: boolean;
  style?: React.CSSProperties;
  title?: string;
  headerSticky?: boolean;
  maxHeight?: string;
  pageSizeToDisplay?: number;
  tableButtonLink?: string;
  tableButtonText?: string;
  titleTabs?: React.ReactNode;
  enableMultiRowSelection: boolean;
};

export default function ControlledTable({
  border = 0,
  cellPadding = 8,
  data,
  columns,
  fallbackData,
  sorting: enableSorting = false,
  style = {},
  title = "",
  titleTabs = null,
  headerSticky = false,
  maxHeight,
  pageSizeToDisplay = 10,
  tableButtonLink = "",
  tableButtonText = "",
  enableMultiRowSelection = false,
}: ITableProps) {
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: pageSizeToDisplay,
  });
  console.log("data", enableMultiRowSelection);
  const tableInstance = useReactTable({
    data: data ?? fallbackData,
    columns,
    state: {
      globalFilter,
      pagination: {
        pageSize: pagination.pageSize,
        pageIndex: pagination.pageIndex,
      },
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: false,
    enableMultiRowSelection: enableMultiRowSelection,
  });

  const prevBtnClicked = () => {
    if (tableInstance.getCanPreviousPage()) {
      setPagination((prev) => ({
        ...prev,
        pageIndex: prev.pageIndex - 1,
      }));
      tableInstance.previousPage();
    } else {
      tableInstance.setPageIndex(0);
    }
  };

  const nextBtnClicked = () => {
    if (tableInstance.getCanNextPage()) {
      setPagination((prev) => ({
        ...prev,
        pageIndex: prev.pageIndex + 1,
      }));
      tableInstance.nextPage();
    } else {
      tableInstance.setPageIndex(0);
    }
  };
  const start = pagination?.pageIndex * pagination?.pageSize + 1;
  const end = Math.min(
    (pagination?.pageIndex + 1) * pagination?.pageSize,
    data?.length ?? 0
  );
  return (
    <>
      <div className="row justify-content-between align-items-center mb-2">
        <div className="col-sm-12 col-md-6">
          {titleTabs ? titleTabs : title && <h3 className="">{title}</h3>}
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="d-flex justify-content-end align-items-center">
            <input
              type="text"
              placeholder="Search..."
              value={globalFilter ?? ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="form-control my-0 mx-2"
              style={{ maxWidth: "300px" }}
            />

            {tableButtonLink && (
              <Link href={tableButtonLink} className="btn btn-primary">
                {tableButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div
        className={`controlled-table ${headerSticky ? "table-sticky" : ""}`}
        style={{
          overflow: "auto",
          maxHeight: headerSticky ? maxHeight : "calc(100vh - 100px)",
        }}
      >
        <table border={border} cellPadding={cellPadding} style={{ ...style }}>
          <thead>
            {tableInstance.getHeaderGroups().map((headerGroup, index) => (
              <tr key={index}>
                {headerGroup.headers.map((header, ind) => {
                  return (
                    <th
                      key={ind}
                      {...(enableSorting && {
                        onClick: header.column.getToggleSortingHandler(),
                      })}
                      style={{ cursor: enableSorting ? "pointer" : "default" }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {tableInstance.getRowModel().rows.map((row, index) => (
              <tr key={index}>
                {row.getVisibleCells().map((cell, ind) => {
                  const columnId = cell.column.id;
                  const value = cell.getValue();
                  return (
                    <td key={ind} data-title={columnId}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row align-items-center justify-content-between mt-2">
        <div className="col-sm-12 col-md-12">
          <div className="d-flex justify-content-between align-items-center">
            <div className="">
              {start}-{end} of {data?.length}
            </div>
            <div className="">
              <nav aria-label="Page navigation">
                <ul className="pagination m-0">
                  <li className="page-item">
                    <button
                      onClick={() => prevBtnClicked()}
                      disabled={!tableInstance.getCanPreviousPage()}
                      type="button"
                      className="page-link mx-1"
                    >
                      Back
                    </button>
                  </li>
                  <li className="page-item">
                    <button
                      className="page-link mx-1 active"
                      onClick={() => {
                        tableInstance.setPageIndex(1);
                      }}
                    >
                      1
                    </button>
                  </li>
                  <li className="page-item">
                    <button
                      className="page-link mx-1"
                      onClick={() => {
                        tableInstance.setPageIndex(2);
                      }}
                    >
                      2
                    </button>
                  </li>
                  <li className="page-item">
                    <button
                      className="page-link mx-1"
                      onClick={() => {
                        tableInstance.setPageIndex(3);
                      }}
                    >
                      3
                    </button>
                  </li>
                  <li className="page-item">
                    <button className="page-link mx-1">...</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link mx-1">10</button>
                  </li>
                  <li className="page-item">
                    <button
                      onClick={() => nextBtnClicked()}
                      disabled={!tableInstance.getCanNextPage()}
                      type="button"
                      className="page-link mx-1"
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="mx-2">
              <div className="d-flex align-items-center">
                <span className="text-nowrap me-2">Items per page</span>
                <select
                  className="form-select"
                  value={pagination?.pageSize}
                  onChange={(e) => {
                    const size = Number(e.target.value);
                    setPagination((prev) => ({
                      ...prev,
                      pageSize: size,
                    }));
                    tableInstance.setPageSize(size);
                  }}
                >
                  {[5, 10, 25].map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
