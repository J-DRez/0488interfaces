const toggle = document.getElementById('theme-toggle');
const iconMoon = document.getElementById('icon-moon');
const iconSun = document.getElementById('icon-sun');

toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    iconMoon.classList.toggle('hidden');
    iconSun.classList.toggle('hidden');
});
