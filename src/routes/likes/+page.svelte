<script>
// @ts-nocheck
	import Quote from "../../components/Quote.svelte";
    import { LikedQuotes } from "../../stores/quotes";

</script>

<div>
    {#each $LikedQuotes as quote (quote.id)}
        <Quote {quote}/>
    {/each}
</div>

