// Common actions
// side menu
const sideMenu = document.querySelector('.side-menu');
const sideMenuMobile = document.querySelector('.side-menu-sm');
const sideMenuButton = document.querySelector('.side-menu-btn');
const deskContainer = document.querySelector('.rt-desk-container');
const newTicketButton = document.querySelector('.new-ticket');


sideMenuButton.addEventListener('click', () => {
	sideMenu.classList.add('expanded');
	sideMenuMobile.classList.add('expanded');

	deskContainer.style.filter = 'blur(5px)';
});

deskContainer.addEventListener('click', () => {
	const sideMenuIsOpen = sideMenuMobile.classList.contains('expanded');
	if (sideMenuIsOpen) {
		deskContainer.style.filter = 'none';
    sideMenu.classList.remove('expanded');
		sideMenuMobile.classList.remove('expanded');
	}
});

newTicketButton.addEventListener('click', () => {
	window.location.href = window.location.origin + '/new-ticket.html';
});

// main menu

// profile menu
