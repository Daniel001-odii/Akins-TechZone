export function myReusableFunction(parameter) {
    // Your logic here
    return `Parameter received: ${parameter}`;
  }

export function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
};

