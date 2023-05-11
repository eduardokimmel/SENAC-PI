function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const name = localStorage.getItem('name');

  if (email === '' || email === undefined || email === null) {
    //Validação de email vazio
    alert('email vazio');
  } else if (password === '' || password === undefined || password === null) {
    //Validação senha vazia
    alert('senha vazia');
  } else if (name === '' || name === undefined || name === null) {
    alert('Voce não tem uma conta!');
  } else {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    window.location.href = 'http://127.0.0.1:5500/html/newUser.html';
  }
}
