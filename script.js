function getData() {
  let now = new Date();
  let day = now.getDate();
  let month = now.getMonth()+1;
  let year = now.getFullYear();
  
  document.getElementById("timer").textContent = `${day}/${month}/${year}, ${now.toLocaleTimeString()}`;
}
setInterval(getData, 1000);

