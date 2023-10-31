import LaunchIcon from "@mui/icons-material/Launch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function WhoWeAre() {
  return (
    <div id="card__container_l" style={{minWidth : "400px"}}>
      <div id="left__container">
        <div className="flex flex-col">
          <div id="item__container">
            <LaunchIcon
              sx={{ fontSize: 48, color: "#3B82F6", paddingRight: 1 }}
            />
            <div id="item__right">
              <div id="item__header">
                <h3 className="text-[#3B82F6] text-sm font-[600]">
                Team As A Service
                </h3>
                <ArrowForwardIcon sx={{ color: "#3B82F6" }} />
              </div>
              <p className="text-sm font-sans">
                Get inspired by stories of success we helped our clients achieve.
              </p>
            </div>
          </div>
          <div id="item__container" style={{marginTop : "20px"}}>
            <LaunchIcon
              sx={{ fontSize: 48, color: "#3B82F6", paddingRight: 1 }}
            />
            <div id="item__right">
              <div id="item__header">
                <h3 className="text-[#3B82F6] text-sm font-[600]">
                    Fixed Scope & Timeline
                </h3>
                <ArrowForwardIcon sx={{ color: "#3B82F6" }} />
              </div>
              <p className="text-sm font-sans">
                Leverage expertise across a wide range of industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;