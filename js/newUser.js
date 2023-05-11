function leave() {
  localStorage.removeItem('email');
  localStorage.removeItem('password');
  localStorage.removeItem('name');
  window.location.href = 'http://127.0.0.1:5500/index.html';
}

function getUserName() {
  const userName = localStorage.getItem('name');
  console.log(userName);
  document.getElementById('userName').innerText = userName;
}
