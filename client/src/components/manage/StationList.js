import React from "react";
import "./styles/stationlist.scss";

export default function StationList({ title, stations, addBtn }) {
  return (
    <div className="stationList">
      <div className="stationList__header">
        <span>{title}</span>
        <span>{addBtn}</span>
      </div>
      <div className="stationList__content">{stations}</div>
    </div>
  );
}
