export default function StyleGuide() {
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
        </div>
    </>
}