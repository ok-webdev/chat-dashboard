const chatFilter = document.querySelector('.chats__filter'),
    chatFilterMenu = document.querySelector('.chats__filter-submenu'),
    chatSearchFilter = document.querySelector('.chats__search-filter'),
    chatSearchFilterMenu = document.querySelector('.chats__search-filter-submenu'),
    panelMenu = document.querySelector('.chat__panel-menu'),
    panelSubmenu = document.querySelector('.chat__panel-submenu');

chatFilter.addEventListener('click', () => {
    chatFilterMenu.classList.toggle('chats__filter-submenu_active');
});

chatSearchFilter.addEventListener('click', () => {
    chatSearchFilterMenu.classList.toggle('chats__search-filter-submenu_active');
});

panelMenu.addEventListener('click', (event) => {
  event.preventDefault();
  panelSubmenu.classList.toggle('chat__panel-submenu_active');
}); 