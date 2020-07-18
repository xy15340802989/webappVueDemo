import axios from "axios";
import qs from "qs"

import loading from "@/lib/loading/loading.js";
let load = loading();
const server = axios.create({
  // baseURL:""
  timeout: 5000,
  withCredentials: true
});


server.interceptors.request.use((config) => {
  
  // 请求前加载动画
  load.load();

  if (config.method === "get") {
    config.params = { ...config.data }
  } else if (config.method === "post") {
    config.headers["content-type"] = "application/x-www-form-urlencoded";
    // config.data = qs.stringify(config.data)
  }

  return config;
}, (err) => {
  Promise.reject(err)
})

server.interceptors.response.use((res) => {

  if (res.statusText === "OK") {
    //卸载动画
    load.unload();
    loading=null;
    return res.data;
  }

})

// export default server;

export default (method, url, data = {}) => {
  if (method.toUpperCase() == "GET") {

    return server.get(url, {
      params: data
    })
  } else if (method.toUpperCase() == "POST") {
    return server.post(url, data);
  }
}

