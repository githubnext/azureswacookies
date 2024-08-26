import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	event.setHeaders({ 'Arr-Disable-Session-Affinity': 'true' });
	event.setHeaders({ 'X-My-Hostname-Is': event.url.hostname });
	event.cookies.set('testcookie', 'testcookie', {
		path: '/',
		maxAge: 31536000000,
		sameSite: "lax",
		httpOnly: false,
		domain: event.url.hostname,
	});
	return await resolve(event);
};
