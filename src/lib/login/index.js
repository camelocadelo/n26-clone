let loggedIn = false;
const requireAuth = (to, from, next) => {
  if (!loggedIn) {
    next({
      path: "/login",
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
};
const isLoggedIn = value => {
  loggedIn = value;
};
const storeUserInfo = userDetails => {
  if (isJSON(userDetails)) {
    setCookie(JSON.parse(userDetails).mintSessionId);
  }
};
const isJSON = data => {
  try {
    JSON.parse(data);
  } catch (e) {
    return false;
  }
  return true;
};
const setCookie = sessionId => {
  document.cookie = "sessionID =" + sessionId;
};
const getCookie = cname => {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  for (let c of decodedCookie.split(";")) {
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
const checkUser = () => {
  if (getCookie("sessionID")) {
    loggedIn = true;
    return true;
  } else {
    return false;
  }
};
const logout = () => {
  document.cookie = "sessionID=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  loggedIn = false;
};
export default {
  isLoggedIn,
  requireAuth,
  loggedIn,
  storeUserInfo,
  checkUser,
  logout
};
