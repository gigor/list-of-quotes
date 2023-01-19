<script>
// @ts-nocheck

	import { LikedQuotes } from "../stores/quotes";



    // @ts-ignore
    export let quote

    let liked = $LikedQuotes.some(q => q.id == quote.id);

    const handleLike = () => {
        liked = !liked

        if (liked) {
            $LikedQuotes = [...$LikedQuotes, quote]
        } else {
            $LikedQuotes = $LikedQuotes.filter(q => q.id != quote.id)
        }
    };
    

</script>

<blockquote class="pb-10"> 
    {@html quote?.content?.rendered}
    <cite>{quote?.title?.rendered}</cite>

    <button on:click={handleLike} class="p-4 text-2xl {liked ? 'text-red-500' : 'text-white'}">&hearts;</button>
</blockquote>