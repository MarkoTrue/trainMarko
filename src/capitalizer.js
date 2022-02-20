function capitalizer(str) {
  if (str === "") {
    return "";
  }
  let a = str.split("");
  a[0] = a[0].toUpperCase();
  return a.join("");
}
export { capitalizer };
