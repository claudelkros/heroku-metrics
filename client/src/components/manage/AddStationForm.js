import { Button, TextField } from "@material-ui/core";
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addStation } from "../../redux/actions/stationActions";

export default function AddStationForm() {
  const { control, handleSubmit } = useForm();
  const { push } = useHistory();

  const methods = useForm();

  const dispatch = useDispatch();

  const onSubmitForm = (data) => {
    dispatch(addStation(data));

    // setError("Station already exist");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitForm)} className="loginform">
        {/* {valError} */}

        <Controller
          as={TextField}
          variant="filled"
          type="text"
          label="ID"
          className="input"
          name="id"
          defaultValue=""
          control={control}
          required
        />
        <Controller
          as={TextField}
          variant="filled"
          type="text"
          label="Name"
          className="input"
          name="name"
          defaultValue=""
          control={control}
          required
        />
        <Controller
          as={TextField}
          variant="filled"
          type="text"
          label="Longitude"
          className="input"
          name="longitude"
          control={control}
          required
          defaultValue=""
        />
        <Controller
          as={TextField}
          variant="filled"
          type="text"
          label="Latitude"
          className="input"
          name="latitude"
          control={control}
          required
          defaultValue=""
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="input"
        >
          Add Station
        </Button>
      </form>
    </FormProvider>
  );
}
