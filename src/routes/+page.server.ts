import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({cookies}) => {
    console.log('SvelteKit load function processed a request.');
    cookies.set('pagecookiename', 'pagecookievalue', {'path': '/', maxAge: 31536001});
}