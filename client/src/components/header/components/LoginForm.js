import { Button, TextField } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../../redux/actions/authActions";
import "./styles/loginform.scss";

export default function LoginForm() {
  const authError = useSelector((state) => state.authError);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [error, setError] = useState("");

  const { control, handleSubmit } = useForm();
  const { push } = useHistory();

  const methods = useForm();

  const dispatch = useDispatch();

  const onSubmitForm = (data) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (authError.state) {
      if (authError.state.id === "LOGIN_FAIL") {
        setError("Invalid credentials");
      } else {
        setError("");
      }
      if (isAuthenticated) {
        push("/dashboard");
      }
    }
  }, [isAuthenticated, authError, push]);

  const valError =
    error !== "" ? (
      <Alert severity="error" className="form__error">
        <AlertTitle>{error}</AlertTitle>
      </Alert>
    ) : null;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitForm)} className="loginform">
        {valError}

        <Controller
          as={TextField}
          variant="filled"
          type="email"
          label="Email"
          className="input"
          name="email"
          defaultValue=""
          control={control}
          required
        />
        <Controller
          as={TextField}
          variant="filled"
          type="password"
          label="Password"
          className="input"
          name="password"
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
          Sign In
        </Button>
      </form>
    </FormProvider>
  );
}
