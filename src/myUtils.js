import jwt from 'jsonwebtoken';
// const jwt = require("jsonwebtoken");

export function isTokenExpired(token) {
  if (!token) {
    return true; // Token doesn't exist
  }

  const decodedToken = jwt.decode(token);

  if (!decodedToken || !decodedToken.exp) {
    return true; // Invalid token or no expiration claim
  }

  // Get the current time in seconds
  const currentTime = Math.floor(Date.now() / 1000);

  // Compare the expiration time with the current time
  return decodedToken.exp < currentTime;
}

export function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
};

