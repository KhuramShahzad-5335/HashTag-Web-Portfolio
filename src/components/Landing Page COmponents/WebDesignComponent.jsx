const WebDesignComponent = () => {
    return (
        <div className="container">
            <div className="row stiky-animation">
                <div className="col-12 col-lg-1"></div>
                <div className="col-12 col-lg-5 sktiky-position">
                    <p style={{ fontFamily: 'Allura', fontSize: '36px', color: 'rgb(0, 0, 0)' }}>Design</p>
                    <p style={{ fontSize: '24px', fontWeight: 600, color: 'rgb(28, 120, 206)', paddingTop: '24px', padding: '12px' }}>
                        Graphics Design
                    </p>
                    <p style={{ fontSize: '18px', color: 'rgb(0, 0, 0)', padding: '16px' }}>
                        Website Is An Asset For Your Business In the Digital Era. Your Website Should Be A Machine That Generates Leads For Your Business And Converts Them Into Sales. It Should Work As A Sales Funnel. Your Website Should Be A Demon And Grab Every Possible Customer As You Can Possibly Handle.
                    </p>
                    <button type="button" className="btn btn-primary btn-lg large-button2"
                    style={{ position: 'relative', zIndex: 999999999999999 }}>Read More</button>
                </div>                <div className="col-12 col-lg-5 scroll-position">
                    <img src="../picsfolder/
                         Apps.png" className="apps" alt="" />
                </div>
                <div className="col-12 col-lg-1"></div>
            </div>
        </div>
    );
}

export default WebDesignComponent;