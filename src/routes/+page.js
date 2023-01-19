import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {

    let res  = await fetch('https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand');
    let quotes = await res.json();

    console.log(quotes);

    if (res.ok) {

        return {

            quotes
        }
    }

    throw error(404, 'Not found');
  }