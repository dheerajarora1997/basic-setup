"use client";

import { useMemo, useState } from "react";
import ControlledTable from "../DesignComponents/ControlledTable";

type Invoice = {
    id: string;
    productName: string;
    quantity: number;
    totalPrice: number;
    date: string;
    customer: string;
};

export default function StyleGuide() {
    const columns = useMemo(
        () => [
            {
                header: "Reconciliation ID",
                accessorKey: "id",
            },
            {
                header: "Priority",
                accessorKey: "date",
            },
            {
                header: "Status",
                accessorKey: "customer",
            },
            {
                header: "Reconciliation Balance",
                accessorKey: "productName",
            },
            {
                header: "Currency",
                accessorKey: "quantity",
            },
            {
                header: "Created on",
                accessorKey: "totalPrice",
            },
        ],
        []
    );
    const [data, setData] = useState<Invoice[]>(() => [
        {
            id: "134567865",
            productName: "Gold Necklace",
            quantity: 2,
            totalPrice: 500,
            date: "2025-04-10",
            customer: "Alice Johnson",
        },
        {
            id: "234567865",
            productName: "Diamond Ring",
            quantity: 1,
            totalPrice: 500,
            date: "2025-04-11",
            customer: "Bob Smith",
        },
        {
            id: "334567865",
            productName: "Silver Bracelet",
            quantity: 3,
            totalPrice: 450,
            date: "2025-04-12",
            customer: "Charlie Brown",
        },
        {
            id: "434567865",
            productName: "Pearl Earrings",
            quantity: 1,
            totalPrice: 180,
            date: "2025-04-13",
            customer: "Diana Prince",
        },
        {
            id: "534567865",
            productName: "Emerald Pendant",
            quantity: 2,
            totalPrice: 600,
            date: "2025-04-13",
            customer: "Eva Green",
        },
        {
            id: "634567865",
            productName: "Rose Gold Anklet",
            quantity: 4,
            totalPrice: 480,
            date: "2025-04-14",
            customer: "Frank Ocean",
        },
        {
            id: "734567865",
            productName: "Platinum Chain",
            quantity: 1,
            totalPrice: 600,
            date: "2025-04-14",
            customer: "George Lucas",
        },
        {
            id: "834567865",
            productName: "Turquoise Necklace",
            quantity: 2,
            totalPrice: 440,
            date: "2025-04-15",
            customer: "Hannah Lee",
        },
        {
            id: "934567865",
            productName: "Sapphire Ring",
            quantity: 1,
            totalPrice: 450,
            date: "2025-04-15",
            customer: "Iris West",
        },
        {
            id: "1345678650",
            productName: "Amethyst Bracelet",
            quantity: 3,
            totalPrice: 510,
            date: "2025-04-16",
            customer: "John Snow",
        },
    ]);
    const fallbackData = [
        {
            name: "Fallback User",
            email: "fallback@example.com",
            role: "Guest",
            age: "33",
            department: "new",
        },
    ];

    return <>
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <h1>Color Palette</h1>
                </div>
                <div className="col-1">
                    <div className="p-5 m-2 bg-primary rounded"></div>
                </div>
                <div className="col-1">
                    <div className="p-5 m-2 bg-success rounded"></div>

                </div>
                <div className="col-1">
                    <div className="p-5 m-2 bg-info rounded"></div>
                </div>
                <div className="col-1">
                    <div className="p-5 m-2 bg-warning rounded"></div>
                </div>
                <div className="col-1">
                    <div className="p-5 m-2 bg-danger rounded"></div>
                </div>
                <div className="col-1">
                    <div className="p-5 m-2 bg-dark rounded"></div>
                </div>
                <div className="col-1">
                    <div className="p-5 m-2 bg-muted rounded"></div>
                </div>
                <div className="col-1">
                    <div className="p-5 m-2 bg-transparent rounded"></div>
                </div>
                <div className="col-12"></div>
                <div className="col-1">
                    <div className="p-5 m-2 bg-light-primary border border-primary rounded"></div>
                </div>
                <div className="col-1">
                    <div className="p-5 m-2 bg-light-success border border-success rounded"></div>

                </div>
                <div className="col-1">
                    <div className="p-5 m-2 bg-light-info border border-info rounded"></div>
                </div>
                <div className="col-1">
                    <div className="p-5 m-2 bg-light-warning border border-warning rounded"></div>
                </div>
                <div className="col-1">
                    <div className="p-5 m-2 bg-light-danger border border-danger rounded"></div>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-12">
                    <h1>Typography</h1>
                    <h1>The quick brown fox jumps over the lazy dog.</h1>
                    <h2>The quick brown fox jumps over the lazy dog.</h2>
                    <h3>The quick brown fox jumps over the lazy dog.</h3>
                    <h4>The quick brown fox jumps over the lazy dog.</h4>
                    <h5>The quick brown fox jumps over the lazy dog.</h5>
                    <h6>The quick brown fox jumps over the lazy dog.</h6>
                    <p>This is a lead paragraph. The quick brown fox jumps over the lazy dog.</p>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-12">
                    <h1>Large text</h1>
                    <h1 className="display-1">The quick brown fox jumps over the lazy dog.</h1>
                    <h2 className="display-2">The quick brown fox jumps over the lazy dog.</h2>
                    <h3 className="display-3">The quick brown fox jumps over the lazy dog.</h3>
                    <h4 className="display-4">The quick brown fox jumps over the lazy dog.</h4>
                    <h5 className="display-5">The quick brown fox jumps over the lazy dog.</h5>
                    <h6 className="display-6">The quick brown fox jumps over the lazy dog.</h6>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-12">
                    <h1>Alerts</h1>
                    <div className="alert alert-primary text-dark" role="alert">
                        A simple primary alert—check it out!
                    </div>
                    <div className="alert alert-success text-dark" role="alert">
                        A simple success alert—check it out!
                    </div>
                    <div className="alert alert-danger text-dark" role="alert">
                        A simple danger alert—check it out!
                    </div>
                    <div className="alert alert-warning text-dark" role="alert">
                        A simple warning alert—check it out!
                    </div>
                    <div className="alert alert-info text-dark" role="alert">
                        A simple info alert—check it out!
                    </div>
                    <div className="alert alert-dark text-dark" role="alert">
                        A simple dark alert—check it out!
                    </div>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-12">
                    <h1>Badges</h1>
                    <span className="badge border border-primary bg-light-primary text-primary mx-1">Primary</span>
                    <span className="badge border border-success bg-light-success text-success mx-1">Success</span>
                    <span className="badge border border-danger bg-light-danger text-danger mx-1">Danger</span>
                    <span className="badge border border-warning bg-light-warning text-warning mx-1">Warning</span>
                    <span className="badge border border-info bg-light-info text-info mx-1">Info</span>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-12">
                    <h1>Buttons</h1>
                    <button type="button" className="btn btn-primary m-1">Primary</button>
                    <button type="button" className="btn btn-success m-1">Success</button>
                    <button type="button" className="btn btn-danger m-1">Danger</button>
                    <button type="button" className="btn btn-warning m-1">Warning</button>
                    <button type="button" className="btn btn-info m-1">Info</button>
                    <br />
                    <button type="button" className="btn btn-outline-primary m-1">Primary</button>
                    <button type="button" className="btn btn-outline-success m-1">Success</button>
                    <button type="button" className="btn btn-outline-danger m-1">Danger</button>
                    <button type="button" className="btn btn-outline-warning m-1">Warning</button>
                    <button type="button" className="btn btn-outline-info m-1">Info</button>
                    <br />
                    <button type="button" className="btn border-primary btn-light-primary m-1">Primary</button>
                    <button type="button" className="btn border-success btn-light-success m-1">Success</button>
                    <button type="button" className="btn border-danger btn-light-danger m-1">Danger</button>
                    <button type="button" className="btn border-warning btn-light-warning m-1">Warning</button>
                    <button type="button" className="btn border-info btn-light-info m-1">Info</button>

                </div>
            </div>
            <div className="row my-5">
                <div className="col-12">
                    <h1>Nav Pills</h1>
                    <ul className="nav nav-pills">
                        <li className="nav-item me-2">
                            <a className="nav-link rounded-5 active" aria-current="page" href="#">All</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link rounded-5" href="#">Prepare</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link rounded-5" href="#">Review</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link rounded-5" href="#">Reject</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link rounded-5" href="#">Complete</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-12">
                    <h1>Nav Tabs</h1>
                    <ul className="nav nav-tabs p-1">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Details</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Comments</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-12">
                    <h1>Pagination</h1>
                    <nav aria-label="Page navigation">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link mx-1" href="#">Back</a></li>
                            <li className="page-item"><a className="page-link mx-1 active" href="#">1</a></li>
                            <li className="page-item"><a className="page-link mx-1" href="#">2</a></li>
                            <li className="page-item"><a className="page-link mx-1" href="#">3</a></li>
                            <li className="page-item"><a className="page-link mx-1" href="#">...</a></li>
                            <li className="page-item"><a className="page-link mx-1" href="#">10</a></li>
                            <li className="page-item"><a className="page-link mx-1" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ControlledTable
                        title={"Records"}
                        titleTabs={
                            <ul className="nav nav-pills">
                                <li className="nav-item me-2">
                                    <a className="nav-link rounded-5 active" aria-current="page" href="#">All</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="nav-link rounded-5" href="#">Prepare</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="nav-link rounded-5" href="#">Review</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="nav-link rounded-5" href="#">Reject</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="nav-link rounded-5" href="#">Complete</a>
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
                        headerSticky={true}
                        tableButtonLink={"/dashboard"}
                        tableButtonText={"+ Download"}
                    />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-12">
                    <h1>Popup design</h1>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Launch static backdrop modal
                    </button>

                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body overflow-scroll">
                                    Before getting started with Bootstrap’s modal component, be sure to read the following as our menu options have recently changed.
                                </div>
                                <div className="modal-footer justify-content-start">
                                    <button type="button" className="btn btn-primary">Understood</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}