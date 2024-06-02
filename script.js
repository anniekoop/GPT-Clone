const sidebar = document.getElementById('sidebar');
const menuIcon = document.getElementById('menu-icon');
const mainTop = document.querySelector('.main-top');

menuIcon.style.cursor = 'pointer';

menuIcon.addEventListener('click', hideSidebar);

function hideSidebar() {
    const gptWrap = document.querySelector('.gpt-wrap');
    gptWrap.style.marginLeft = '1.5rem';
    const openMenuIcon = document.createElement('i');
    openMenuIcon.classList.add('fa-solid', 'fa-bars-staggered', 'open-menu-icon');
    mainTop.appendChild(openMenuIcon);
    openMenuIcon.style.cursor = 'pointer';
    openMenuIcon.style.position = 'absolute';
    openMenuIcon.style.top = '1.375rem';
    openMenuIcon.style.left = '1rem';
    openMenuIcon.style.color = '#666';

    sidebar.style.display = 'none';

    openMenuIcon.addEventListener('click', function() {
        openMenuIcon.remove();
        sidebar.style.display = 'flex';
    });
}