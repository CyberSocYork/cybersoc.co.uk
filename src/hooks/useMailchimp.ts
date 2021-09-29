import { useState, useCallback } from "react";

import jsonp from "jsonp";

export enum Status {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR,
}

export const useMailchimp = (url: string) => {
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [value, setValue] = useState(null);

  const subscribe = useCallback((data) => {
    const params = new URLSearchParams(Object.entries(data)).toString();
    const ajaxURL = url.replace("/post?", "/post-json?");
    const newURL = ajaxURL + "&" + params;

    setError(null);
    setStatus(Status.LOADING);

    jsonp(newURL, { param: "c" }, (err, data) => {
      if (err) {
        setStatus(Status.ERROR);
        setError(err);
      } else if (data.result !== "success") {
        setStatus(Status.ERROR);
        setError(data.msg);
      } else {
        setStatus(Status.SUCCESS);
        setValue(data.msg);
      }
    });
  }, []);

  return { subscribe, status, error, value };
};
