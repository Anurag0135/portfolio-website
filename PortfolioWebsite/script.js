// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Dark Mode
const toggleTheme = document.createElement('button');
toggleTheme.textContent = 'Dark Mode';
document.body.append(toggleTheme);

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Load theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
}