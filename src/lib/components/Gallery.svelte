<script lang="ts">
    /*
        A gallery component to mainly be used within posts. Will likely be removed
        if used exclusively within Post.svelte
        TODO: Make this actually look good
    */

    import "$lib/styles/forms.css";
    import Carousel from "svelte-carousel";
    import HollowButton from "./HollowButton.svelte";

    interface Props {
        images?: {
        src: string;
        alt: string;
    }[];
    }

    let { images = [] }: Props = $props();

    let counter: number = $state(0);
    let carousel: Carousel; // for calling methods of the carousel instance
    
    const handleNextClick = () => {
        carousel.goToNext();
    };
</script>


<div class="card">
    {#if images}
        <img src={images[counter].src} alt={images[counter].alt}>
        <div class="button-container">
            <HollowButton
                onclick={() => counter--}
                disabled={counter === 0}>&lt;</HollowButton>
            <HollowButton
                onclick={() => counter++}
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
