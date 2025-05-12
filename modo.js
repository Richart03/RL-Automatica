const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');
const body = document.body;
// Verificar preferencia del sistema
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
// Verificar tema guardado en localStorage
const currentTheme = localStorage.getItem('theme');
// Aplicar tema inicial
if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
enableDarkMode();
}
// Función para activar modo oscuro
function enableDarkMode() {
body.classList.add('dark-mode');
themeIcon.textContent = '☀';
themeText.textContent = 'Modo Claro';
localStorage.setItem('theme', 'dark');
}
// Función para activar modo claro
function enableLightMode() {
body.classList.remove('dark-mode');
themeIcon.textContent = '🌙';
themeText.textContent = 'Modo Oscuro';
localStorage.setItem('theme', 'light');
}
// Alternar entre modos
themeToggle.addEventListener('click', () => {
if (body.classList.contains('dark-mode')) {
enableLightMode();
} else {
enableDarkMode();
}
});
// Escuchar cambios en la preferencia del sistema
prefersDarkScheme.addEventListener('change', e => {
if (localStorage.getItem('theme') === null) {
if (e.matches) {
enableDarkMode();
} else {
enableLightMode();
}
}
});