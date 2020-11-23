// Common actions

// main menu
const mainMenuButton = document.querySelector('.app-menu');
const mainMenu = document.querySelector('.rt-main-menu');

mainMenuButton.addEventListener('click', () => {
	const isOpen = mainMenu.classList.contains('open');
	!isOpen ? mainMenu.classList.add('open') : mainMenu.classList.remove('open');
});

document.querySelector('body').addEventListener('click', (e) => {
	const isMainMenu = e.target.classList.contains('rt-main-menu');
	const isMainMenuButton = e.target.classList.contains('app-menu-btn');
	if (!isMainMenu && !isMainMenuButton && mainMenu.classList.contains('open')) {
		mainMenu.classList.remove('open');
	}
});

// side menu
const sideMenu = document.querySelector('.side-menu');
const sideMenuMobile = document.querySelector('.side-menu-sm');
const sideMenuButton = document.querySelector('.side-menu-btn');
const deskContainer = document.querySelector('.rt-desk-container');
const newTicketButton = document.querySelectorAll('.rt-create');

console.log(newTicketButton);

sideMenuButton &&
	sideMenuButton.addEventListener('click', () => {
		sideMenu.classList.add('expanded');
		sideMenuMobile.classList.add('expanded');

		deskContainer.style.filter = 'blur(5px)';
	});

deskContainer &&
	deskContainer.addEventListener('click', () => {
		const sideMenuIsOpen = sideMenuMobile.classList.contains('expanded');
		if (sideMenuIsOpen) {
			deskContainer.style.filter = 'none';
			sideMenu.classList.remove('expanded');
			sideMenuMobile.classList.remove('expanded');
		}
	});

newTicketButton &&
	newTicketButton.forEach((createTicket) => {
		createTicket.addEventListener('click', () => {
			console.log('create');
			window.location.href = window.location.origin + '/new-ticket.html';
		});
	});

  
// profile menu
