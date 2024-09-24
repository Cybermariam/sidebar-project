const toggleBtn = document.querySelector('.sidebar-toggle');

const closeBtn = document.querySelector('.close-btn');

const sidebarBtn = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function () {
    sidebarBtn.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function () {
    sidebarBtn.classList.remove('show-sidebar');
});
