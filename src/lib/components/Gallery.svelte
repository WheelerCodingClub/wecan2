<!--
  A gallery component to mainly be used within posts. Will likely be removed
  if used exclusively within Post.svelte
-->
<script lang="ts">
    export let images: {src: string, alt: string}[];
    let counter: number = 0;
</script>

<div class="img-container">
    {#if images}
        {#if images.length === 1}
            <img src={images[0].src} alt={images[0].alt}>
        {:else}
            <img src={images[counter].src} alt={images[counter].alt}>
            <button class="right"
                on:click={() => counter++}
                disabled={counter === images.length - 1}>Next image</button>
            <button class="left"
                on:click={() => counter--}
                disabled={counter === 0}>Previous image</button>
        {/if}
    {/if}
</div>

<style>
    div {
        overflow: hidden;
        position: relative;
        z-index: 5;
    }

    .right {
        position: absolute;
        top: 50%;
        right: 0;
    }

    .left {
        position: absolute;
        top: 50%;
        left: 0;
    }
</style>
