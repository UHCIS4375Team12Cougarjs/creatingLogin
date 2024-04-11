import axios from "axios";

const httpClient = axios.create({
    baseURL: import.meta.env.ROOT_API,
    headers: {
        "Content-Type": "application/json"
    }
})

function setAuthHeader(token) {
    httpClient.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

function delAuthHeader(token) {
    delete httpClient.defaults.headers.common["Authorization"]
}

function getErrorMessageFromResponseBody(string) {
    let errorString = string;
  
    try {
      let json = JSON.parse(string);
      if (json.errors) {
        errorString = json.errors[0].msg;
      }
    } catch (parseOrAccessError) {}
  
    return errorString;
  }

export async function loginUser(username, password) {
    try {
        const response = await httpClient.post("/login", {username, password})
        const token = response.data.token

        localStorage.setItem("authToken", token)
        setAuthHeader(token)

        return token
    } catch (error) {
        if (error.response.status == 400) {
            let errorString = getErrorMessageFromResponseBody(
                error.response.data.message
            )
            throw new Error(errorString)
        } else throw error
    }
}

export function logoutUser() {
    localStorage.clear()
    delAuthHeader()
}