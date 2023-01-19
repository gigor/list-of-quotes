<script>
	import { page } from "$app/stores";
	import Quote from "../components/Quote.svelte";



</script>


<div class="">
    {#each $page.data.quotes as quote (quote.id)}
        <Quote {quote}/>
    {/each}
</div>  