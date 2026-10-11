//your JS code here. If required.
function getData() {
  let now = new Date();
  let day = now.getDate();
  let month = now.getMonth()+1;
  let year = now.getFullYear();
  
  document.getElementById("dataArea").textContent = `${day}/${month}/${year}, ${now.toLocaleTimeString()}`;
}
setInterval(getData, 1000);
