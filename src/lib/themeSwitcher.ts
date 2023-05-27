export const initTheme = () => {
	if (typeof window === 'undefined') return;
	if (
		localStorage.getItem('theme') === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.setAttribute('data-theme', 'dark');
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
	}
};

export const toggleTheme = () => {
	console.log();
	if (document.documentElement.getAttribute('data-theme') === 'dark') {
		localStorage.setItem('theme', 'light');
		document.documentElement.setAttribute('data-theme', 'light');
	} else {
		localStorage.setItem('theme', 'dark');
		document.documentElement.setAttribute('data-theme', 'dark');
	}
};
