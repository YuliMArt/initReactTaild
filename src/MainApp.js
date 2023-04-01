import React from "react";
import moment from "moment";
import "moment/locale/es";
import "./index.css";

import { AppRouter } from "./router/AppRouter";

moment.locale("es");
export const MainApp = () => {
  return <AppRouter />;
};
