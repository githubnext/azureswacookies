import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	event.setHeaders({ 'Arr-Disable-Session-Affinity': 'true' });
	event.cookies.set('testcookie', 'testcookie', {
		path: '/',
		maxAge: 31536000000,
		sameSite: "lax",
		httpOnly: false,
	});
	return await resolve(event);
};
