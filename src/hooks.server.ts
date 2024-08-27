import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	event.setHeaders({ 'Arr-Disable-Session-Affinity': 'true' });
	event.setHeaders({ 'X-My-Hostname-Is': event.url.hostname });
	event.setHeaders({ 'X-My-Path-Is': event.url.pathname });
	event.cookies.set('testcookie', 'testcookie', {
		path: '/',
		maxAge: 3153699999,
	});

	event.setHeaders({'X-All-The-Cookies': JSON.stringify(event.cookies.getAll())});
	return await resolve(event);
};
