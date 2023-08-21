import React, { useEffect } from "react";
import { Alert } from "antd";
const Alertt = ({ list, showAlert, type, msg }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [list]);

  return (
    <div>
      <Alert className="alert" message={msg} type={type} showIcon />
    </div>
  );
};

export default Alertt;
