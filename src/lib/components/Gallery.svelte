<!--
  A gallery component to mainly be used within posts. Will likely be removed
  if used exclusively within Post.svelte
-->
<script lang="ts">
    import HollowButton from './HollowButton.svelte';
    import '$lib/styles/forms.css'

    export let images: {src: string, alt: string}[];
    let counter: number = 0;
</script>

<div class="card">
    {#if images}
        {#if images.length === 1}
            <img src={images[0].src} alt={images[0].alt}>
        {:else}
            <img src={images[counter].src} alt={images[counter].alt}>
            <HollowButton class="left"
                on:click={() => counter--}
                disabled={counter === 0}>&lt;</HollowButton>
            <HollowButton class="right"
                on:click={() => counter++}
                disabled={counter === images.length - 1}>&gt;</HollowButton>
        {/if}
    {/if}
</div>

<style>
    div {
        overflow: hidden;
        position: relative;
        display: flex;
        width: 250px;
        height: 250px;
        margin: 0 auto;
        justify-content: space-around;
        align-items: center;
    }

    .left {
        position: absolute;
        top: 50%;
        left: 0;
    }

    .right {
        position: absolute;
        top: 50%;
        right: 0;
    }
</style>
