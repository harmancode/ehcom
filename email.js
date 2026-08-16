'use strict';

document.addEventListener('DOMContentLoaded', function ()
{
	document.querySelectorAll('.email').forEach(function (a)
	{
		const address = a.getAttribute('href')
			.replace('to', 'ertugr')
			.replace('-contact-', 'ul@harman')
			.replace('eh/', '!av!tr')
			.replaceAll('!', '.');

		a.setAttribute('href', 'mailto:' + address);
		a.textContent = address;
	});
});
