export default function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));
  //console.log("Auth Header: ",user)
  if (user && user.access_token) {
    return { Authorization: "Bearer " + user.access_token };
  } else {
    return {};
  }
}
