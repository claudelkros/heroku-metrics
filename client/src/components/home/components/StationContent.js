import { Button } from "@material-ui/core";
import React from "react";
import "./styles/stationcontent.scss";
import AddIcon from "@material-ui/icons/Add";
import { useSelector } from "react-redux";

export default function StationContent({
  longitude,
  latitude,
  temperature,
  windSpeed,
  humidity,
}) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="stationContent">
      <div className="content">
        <div className="content__position">
          <div className="longitude">Longitude: {longitude}</div>
          <div className="longitude">Latitude: {latitude}</div>
        </div>
      </div>
      <div className="content">
        <div className="content__bloc">
          <div className="bloc">
            <div className="bloc__title">Temperature</div>
            <div className="bloc__value">{temperature}</div>
          </div>
          <div className="bloc">
            <div className="bloc__title">Wind Speed</div>
            <div className="bloc__value"> {windSpeed}</div>
          </div>
          <div className="bloc">
            <div className="bloc__title">Humidity</div>
            <div className="bloc__value">{humidity}</div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content__chart">
          <div className="chart__title">Last 7 days chart</div>
          <div className="chart__content">Chart here</div>
        </div>
      </div>
      <div className="content">
        <div className="content__button">
          {isAuthenticated ? (
            <Button color="primary" startIcon={<AddIcon />}>
              Follow station
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
