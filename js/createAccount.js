function createAccount() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (name === '' || name === undefined || name === null) {
    //Validação de nome vazio
    alert('nome vazio');
  } else if (email === '' || email === undefined || email === null) {
    //Validação de email vazio
    alert('email vazio');
  } else if (password === '' || password === undefined || password === null) {
    //Validação senha vazia
    alert('senha vazia');
  } else {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    window.location.href = 'http://127.0.0.1:5500/index.html';
  }
}
