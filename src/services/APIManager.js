import config from "../config";

const baseUrl = config.baseURL;

export const userRegister = async (data) => {
    const config = {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    };
    try {
      const response = await fetch(baseUrl + "user/register", config);
      let result = await response.json();
      console.log("register user", result);
      return result;
    } catch (err) {
      console.log(err, "error");
      return;
    }
  };
  
  export const userLogin = async (data) => {
    const config = {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    };
    try {
      const response = await fetch(baseUrl + "user/login", config);
      let result = await response.json();
      console.log("register login", result);
      return result;
    } catch (err) {
      console.log(err, "error - login");
      return;
    }
  };

  export const getTopCreators = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    };
    try {
        
      const response = await fetch(baseUrl +"user/top", config);
      
      let result = await response.json();
      
      console.log("getTopCreators", result);
      
      return result;
    } catch (err) {
      console.log(err, "error - getTopCreators");
      return;
    }
  };
  const getAPIData = async (config, url) => {
    const response = await fetch(baseUrl + url, config);
    if (response.status == 401 || response.status == 403) {
      const ref_token = localStorage.getItem("refresh_token");
      let resp = await RefreshAuth({ "refresh_token": ref_token })
      // console.log("get API Data refresh", resp);
      if (resp.status) {
        let auth_token = resp.data.auth_token
        localStorage.setItem("auth_token", auth_token);
        config.headers.Authorization = `Bearer ${auth_token}`
        return getAPIData(config, url)
      } else {
        return response
      }
    }
  
    return response
  }
  export const RefreshAuth = async (data) => {
    const config = {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    };
    try {
      const response = await fetch(baseUrl + "user/token/refresh", config);
      let result = await response.json();
      console.log("RefreshAuth", result);
      return result;
    } catch (err) {
      console.log(err, "error - RefreshAuth");
      return;
    }
  };
  export const getUserData = async (auth_token) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth_token}`,
      },
      method: "GET",
    };
    try {
      const response = await getAPIData(config, "user")
      let result = await response.json();
      return result;
    } catch (err) {
      console.log(err, "error");
      return;
    }
  };
  export const getAppConfig = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    };
    try {
      const response = await fetch(baseUrl + "app/config", config);
      let result = await response.json();
      return result;
    } catch (err) {
      console.log(err, "error");
      return;
    }
  };
  export const getTopAssets = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    };
    try {
      const response = await fetch(baseUrl + "nft/top", config);
      let result = await response.json();
      console.log("getTopAssets", result);
      return result;
    } catch (err) {
      console.log(err, "error - getTopAssets");
      return;
    }
  };