import React from "react";
import { useSelector } from "react-redux";
import { AlertDiv } from "./styles";

const Alert = () => {
  const alerts = useSelector((state) => state.alert);

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <AlertDiv>
        <p key={alert.id}>{alert.msg}</p>
      </AlertDiv>
    ))
  );
};

export default Alert;
