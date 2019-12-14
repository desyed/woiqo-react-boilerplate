// import { extend } from 'umi-request';
import axios from "axios";
// import { notification } from "antd";

// Import Config
const config = require("../utils/envConfig");

// const codeMessage = {
//   200: "The server successfully returned the requested data. ",
//   201: " New or modified data is successful. ",
//   202: " A request has entered the background queue (asynchronous task). ",
//   204: " Delete data successfully. ",
//   400: " The request was sent with an error, and the server did not perform operations to create or modify data. ",
//   401: "The user does not have permission (token, username, password is incorrect). ",
//   403: " User is authorized, but access is forbidden. ",
//   404: " The request was made for a record that does not exist and the server did not operate. ",
//   406: " The format of the request is not available. ",
//   410: "The requested resource was permanently deleted and will not be obtained again. ",
//   422: " A validation error occurred while creating an object. ",
//   500: "The server has an error, please check the server. ",
//   502: " Gateway error. ",
//   503: "The service is unavailable, the server is temporarily overloaded or maintained. ",
//   504: "The gateway timed out. "
// };

/**
 * Default parameters when configuring request request
 */
let url;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  url = config.localAPI; // dev code
} else {
  url = config.liveAPI; // production code
}
// Prefix Config
const prefix = config.prefix;

/**
 *
 * @param {string} link   API link
 * @param {object} params API peramitter
 */
const request = (link, params, noPrefix = null, header = null) => {
  console.log("req----", link, params);

  const ax = axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json,text/plain, */*; charset=utf-8",
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  });

  let confiq = {
    method: (params && params.method) || "GET",
    url: noPrefix ? link : prefix + link,
    data: (params && params.data) || ""
  };
  if (header) confiq.headers = header;

  return ax(confiq)
    .then(res => {
      console.log("api response", {
        data: res.data,
        pagination: {
          total: Number(res.headers.total),
          pageSize: Number(res.headers.limit)
        }
      });
      return {
        data: res.data,
        pagination: {
          total: Number(res.headers.total),
          pageSize: Number(res.headers.limit)
        }
      };
    })
    .catch(error => {
      console.log(error.response);
      return {
        error: error.response
      };
    });
};

export default request;
