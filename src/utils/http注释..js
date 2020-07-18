import axios from "axios";

const server = axios.create({
    // baseURL:""
    timeout:5000,
    withCredentials:true
});


server.interceptors.request.use((config)=>{

  /* 
      config   请求所带的配置项
        data
        params
        url
        methods
        headers
        等等。。。
  */
  if(config.method==="get"){
    config.params = {...config.data}
  }else if(config.method==="post"){
      config.headers["content-type"]="application/x-www-form-urlencoded";
      // config.data = qs.stringify(config.data)
  }
  return config;
},(err)=>{
  Promise.reject(err)
})

server.interceptors.response.use((res)=>{
  /* 
      res  响应回来的配置项和数据
        config
        data
        headers
        request
        status
        statusText
  */
//  console.log(res,222);
 if(res.statusText==="OK"){
   return res.data;
 }
  
})

export default server;

// export default (method,url,data={})=>{
//   if(method.toUpperCase() == "GET"){
     
//       return server.get(url,{
//           params:data
//       })
//   }else if(method.toUpperCase() == "POST"){
//       return server.post(url,data);
//   }
// }

// server("get","/ajax/movieOnInfoList",{cityId:10})

// server({
//   url:"/ajax/movieOnInfoList",
  //   data:{
  //     cityId:10
  //   },
//   method:"get",
//   timeout:3000
// }).then((data)=>console.log(data,333))





// 请求格式  

    /* 
      server({
        url:"",
        method:"",
        data:{

        },
        headers:{}
      }) 
    
    */

