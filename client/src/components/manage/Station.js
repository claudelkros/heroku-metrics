import React from "react";
import "./styles/station.scss";
import ShareIcon from "@material-ui/icons/Share";
import { Button } from "@material-ui/core";

export default function Station() {
  return (
    <div className="station">
      <div className="station__header">Station Pitoa</div>
      <div className="station__content">
        <div className="longitude">
          <span>Longitude</span>
          <span>13.2552</span>
        </div>
        <div className="latitude">
          <span>Latitude</span>
          <span>13.2552</span>
        </div>
      </div>
      <div className="station__footer">
        <div className="footer__share">
          <Button color="primary" startIcon={<ShareIcon />} />
        </div>
        <div className="footer__status">
          <span className="status"></span>
        </div>
      </div>
    </div>
  );
}
