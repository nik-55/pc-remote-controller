const login_form = document.getElementById('login-form');
const username = document.getElementById('login-input-1')
const password = document.getElementById('login-input-2')
const dashboard = document.getElementById('dashboard')
const online_switch = document.getElementById('online-switch')

login_form.addEventListener('submit', (e) => {
    e.preventDefault()
    _username = username.value
    _password = password.value
    dashboard.style.display = 'flex'
    login_form.style.display = 'none'
})

online_switch.addEventListener('change', async () => {
    const isChecked = online_switch.checked
    const response = await fetch("http://localhost:3123");
    const jsonData = await response.json();
    console.log(jsonData);
})