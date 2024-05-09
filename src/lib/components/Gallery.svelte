/*
  A gallery component to mainly be used within posts. Will likely be removed
  if used exclusively within Post.svelte
*/
<script lang="ts">
    export let images: {src: string, alt: string}[];
    let counter: number = 0;
</script>

<div>
    {#if images}
        {#if images.length === 1}
            <img src={images[1].src} alt={images[1].alt}>
        {:else}
            <img src={images[counter].src} alt={images[counter].alt}>
            <button on:click={() => counter++}>Next image</button>
            <button on:click={() => counter--}>Previous image</button>
        {/if}
    {/if}
</div>