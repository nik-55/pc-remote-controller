const login_form = document.getElementById('login-form');
const username = document.getElementById('login-input-1')
const password = document.getElementById('login-input-2')

login_form.addEventListener('submit', (e) => {
    e.preventDefault()
    _username = username.value
    _password = password.value
})