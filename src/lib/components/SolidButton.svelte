<script lang="ts">
    export let href: string = "";
</script>

{#if href}
    <a {href}><slot>button</slot></a>
{:else}
    <button on:click><slot>button</slot></button>
{/if}

<style>
    a, button {
        display: block;
        background: var(--button-background, #4E9CAF);
        width: var(--button-width, 60px);
        padding: 8px;
        text-align: center;
        border-radius: 5px;
        color: var(--button-color, white);
        text-decoration: none;
        font-weight: bold;
    }
</style>