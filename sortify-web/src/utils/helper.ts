export function capitalizeFirst(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function formatLabelName(name: string) {
	return `${process.env.PREFIX}-${capitalizeFirst(name.trim())}`;
}

export function getURL() {
	if (process.env.NODE_ENV === 'development') {
		return 'http://localhost:3000';
	}
	const url = process.env.NEXT_PUBLIC_APP_URL!;
	return url.startsWith('https') ? url : `https://${url}`;
}
