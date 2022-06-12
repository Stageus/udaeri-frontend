import React, { useEffect } from "react";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "./index.hooks";
import { getToken } from "../utils/aboutToken";

const useGetUserInfo = () => {
  let token = getToken();

  useEffect(() => {});

  return "g";
};

export default useGetUserInfo;
