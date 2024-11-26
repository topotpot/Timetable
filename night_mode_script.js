const savedTheme = getCookie('theme')?.trim();
if (savedTheme === "dark") {
    document.body.classList.add('dark-theme');
    document.querySelector('header').classList.add('dark-theme');
    document.querySelector('.lessons-list')?.classList.add('dark-theme');
    document.querySelectorAll('.container').forEach((el) => {
        el.classList.add('dark-theme')
    });

    document.querySelectorAll('select').forEach((el) => {
        el.classList.add('dark-theme')
    });

    document.querySelectorAll('a').forEach((el) => {
        el.classList.add('dark-theme')
    });

    document.querySelectorAll('input').forEach((el) => {
        el.classList.add('dark-theme')
    });

}
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const header = document.querySelector('header');
    const container = document.querySelectorAll('.container');
    const select = document.querySelectorAll('select');
    const input = document.querySelectorAll('input');
    const links = document.querySelectorAll('a');
    const lessons_list = document.querySelector('.lessons-list');
    themeToggle.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-theme');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
        setCookie('theme', isDark ? 'dark' : 'light');
        header.classList.toggle('dark-theme');


        container.forEach((el) => {
            el.classList.toggle('dark-theme');
        });


        select.forEach((el) => {
            el.classList.toggle('dark-theme');
        });
        input.forEach((el) => {
            el.classList.toggle('dark-theme');
        });
        links.forEach((el) => {
            el.classList.toggle('dark-theme');
        });
        lessons_list.classList.toggle('dark-theme');
           
    })
    })