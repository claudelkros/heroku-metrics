import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../../../redux/actions/authActions";

export default function RegisterForm() {
  const authError = useSelector((state) => state.authError);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [error, setError] = useState("");
  const [errorState, setErrorState] = useState(false);
  const { control, handleSubmit } = useForm();
  const { push } = useHistory();

  const methods = useForm();

  const dispatch = useDispatch();

  const onSubmitForm = (data) => {
    dispatch(register(data));
  };

  useEffect(() => {
    if (authError.state) {
      if (authError.state.id === "REGISTER_FAIL") {
        setError("Email already used");
        setErrorState(true);
      } else {
        setError("");
        setErrorState(false);
      }
    }
    if (isAuthenticated) {
      push("/dashboard");
    }
  }, [isAuthenticated, authError, push]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitForm)} className="loginform">
        <Controller
          as={TextField}
          variant="filled"
          type="email"
          label="Email"
          className="input"
          name="email"
          defaultValue=""
          required
          control={control}
          error={errorState}
          helperText={error}
        />
        <Controller
          as={TextField}
          variant="filled"
          label="FirstName"
          className="input"
          name="firstName"
          control={control}
          required
          defaultValue=""
        />
        <Controller
          as={TextField}
          variant="filled"
          label="LastName"
          name="lastName"
          type="text"
          required
          className="input"
          control={control}
          defaultValue=""
        />
        <Controller
          as={TextField}
          variant="filled"
          type="number"
          label="Phone"
          className="input"
          name="number"
          required
          control={control}
          defaultValue=""
        />
        <Controller
          as={TextField}
          variant="filled"
          type="password"
          label="Password"
          className="input"
          name="password"
          required
          defaultValue=""
          control={control}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="input"
        >
          Register
        </Button>
      </form>
    </FormProvider>
  );
}
