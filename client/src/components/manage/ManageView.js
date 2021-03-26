import { Button } from "@material-ui/core";
import React from "react";
import HomeView from "../home/HomeView";
import Station from "./Station";
import StationList from "./StationList";
import "./styles/manage.scss";
import AddStationButton from "./AddStationButton";

export default function ManageView() {
  const stations = (
    <>
      <Station />
      <Station />
      <Station />
      <Station />
      <Station />
    </>
  );

  const btn = <AddStationButton />;
  return (
    <div className="manage">
      <div className="manage__sidebar1">
        <StationList title="Followed stations" stations={stations} />
      </div>
      <div className="manage__sidebar2">
        <StationList title="My stations" addBtn={btn} stations={stations} />
      </div>
      <div className="manage__sidebar">
        <HomeView />
      </div>
    </div>
  );
}
