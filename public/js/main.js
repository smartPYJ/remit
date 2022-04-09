const submitform = document.querySelector("#submit");
submitform.addEventListener("click", data);
function data() {
  localStorage["Ai"] = document.getElementById('congregational_tithe').value;
  localStorage["Bi"] = document.getElementById('ministers_tithe').value;
  localStorage["Ci"] = document.getElementById('Thanksgiving').value;
  localStorage["Di"] = document.getElementById('first_fruit').value;
  localStorage["Dv"] = document.getElementById('first_born').value;
  localStorage["Ei"] = document.getElementById('sunday_love').value;
  localStorage["Fi"] = document.getElementById('crm').value;
  localStorage["Gi"] = document.getElementById('sunday_school').value;
  localStorage["Hi"] = document.getElementById('junior_church').value;
  localStorage["Ii"] = document.getElementById('gospel').value;
  localStorage["Ji"] = document.getElementById('house_fellowship').value;
  localStorage["Ki"] = document.getElementById('k').value;
  localStorage["Li"] = document.getElementById('l').value;
  localStorage["Oi"] = document.getElementById('o').value;

  window.location.replace("result.html");
}

