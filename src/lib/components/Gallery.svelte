<!--
  A gallery component to mainly be used within posts. Will likely be removed
  if used exclusively within Post.svelte
  TODO: Make this actually look good
-->
<script lang="ts">
    import HollowButton from './HollowButton.svelte';
    import '$lib/styles/forms.css'

    export let images: {src: string, alt: string}[];
    let counter: number = 0;
</script>

<div class="card">
    {#if images}
        <img src={images[counter].src} alt={images[counter].alt}>
        <div class="button-container">
            <HollowButton
                on:click={() => counter--}
                disabled={counter === 0}>&lt;</HollowButton>
            <HollowButton
                on:click={() => counter++}
                disabled={counter === images.length - 1}>&gt;</HollowButton>
        </div>
    {/if}
</div>

<style>
    .card {
        overflow: hidden;
        position: relative;
        display: flex;
        width: 500px;
        height: auto;
        justify-content: space-around;
        align-items: center;
        padding: 0;
    }

    .button-container {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
</style>
