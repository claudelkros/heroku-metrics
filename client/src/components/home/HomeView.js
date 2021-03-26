import React, { useEffect, useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import { Link } from "react-router-dom";
import { data } from "./data";
import markerIcon from "../../assets/icons/motion-sensor.svg";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import StationContent from "./components/StationContent";
import RatingFeedback from "./components/RatingFeedback";

import "./styles/home.scss";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function HomeView() {
  const [count, setCount] = useState(0);

  const [selectedStation, setSelectedStation] = useState({});

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (place) => {
    setOpen(true);
    setSelectedStation(place);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedStation("");
  };

  const [viewport, setViewport] = useState({
    latitude: 5.79142,
    longitude: 12.25444,
    width: "100%",
    height: "100vh",
    zoom: 5,
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (count >= 3) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }, 3000);
    return () => window.clearInterval(timer);
  }, [count, selectedStation]);

  return (
    <div>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoic2VwY3kiLCJhIjoiY2tsZnRnN3p3MWx5MjJ1czRqY3J4NzI2diJ9.D0ktmflFAGe4aRnq9m6L5g"
        mapStyle="mapbox://styles/sepcy/cklfy4o3847qy17k7lwbi8fo3"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {data.map((place) => (
          <Marker
            key={place.id}
            longitude={place.latitude}
            latitude={place.longitude}
          >
            <button className="marker" onClick={(e) => handleClickOpen(place)}>
              <img src={markerIcon} alt="marker icon" />
            </button>
            <Dialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
              //BackdropComponent="SimpleBackdrop"
              //overlayStyle={{ backgroundColor: "transparent" }}
              BackdropProps={{
                style: { backgroundColor: "grey", opacity: 0.1 },
              }}
            >
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                <div className="title">
                  {`Station ${selectedStation.name}`}
                  <div className="date">
                    {selectedStation.data
                      ? selectedStation.data[count].hour
                      : ""}
                  </div>
                </div>
              </DialogTitle>
              <DialogContent dividers>
                <StationContent
                  longitude={Math.ceil(selectedStation.longitude)}
                  latitude={Math.ceil(selectedStation.latitude)}
                  temperature={
                    selectedStation.data
                      ? selectedStation.data[count].temperature
                      : ""
                  }
                  windSpeed={
                    selectedStation.data
                      ? selectedStation.data[count].windSpeed
                      : ""
                  }
                  humidity={
                    selectedStation.data
                      ? selectedStation.data[count].humidity
                      : ""
                  }
                />
              </DialogContent>
              <DialogActions>
                <div className="actions">
                  <div className="actions__buttons">
                    <Button autoFocus onClick={handleClose} color="primary">
                      <TwitterIcon />
                    </Button>
                    <Button autoFocus onClick={handleClose} color="primary">
                      <FacebookIcon />
                    </Button>
                    <Button autoFocus onClick={handleClose} color="primary">
                      <EmailIcon />
                    </Button>
                  </div>
                  <RatingFeedback />
                </div>
              </DialogActions>
            </Dialog>
          </Marker>
        ))}
      </ReactMapGl>
    </div>
  );
}
