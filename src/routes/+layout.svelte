<script>
	import { page } from "$app/stores";
	import { onMount } from "svelte";
    import "../app.css"
	import { LikedQuotes } from "../stores/quotes";

    onMount(() => {

        let mq = localStorage.getItem('myQuotes');

        if (mq) {
            LikedQuotes.set(JSON.parse(mq));
        }

        LikedQuotes.subscribe((value) => {
            localStorage.setItem('myQuotes', JSON.stringify(value));
        });


    });


</script>
<nav class="text-center mb-4"> 
    <a href="/" class="text-white  p-2 rounded {$page.url.pathname == '/' ? 'bg-red-800' : 'underline'}">Home</a>
    <a href="/likes" class="text-white  p-2 rounded {$page.url.pathname == '/likes' ? 'bg-red-800' : 'underline'}">Likes</a>
</nav>
<slot/>

<style lang="postcss">
    :global(html){
        background-color: theme(colors.black);
        color: theme(colors.green.500);
        font-family: theme(fontFamily.mono);
    }
    :global(body){
        padding: theme(spacing[16]);
    }
</style>