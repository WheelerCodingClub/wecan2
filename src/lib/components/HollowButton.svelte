<script lang="ts">
    export let href: string = "/#";
</script>

{#if href}
    <a {href}><slot>button</slot></a>
{:else}
    <button on:click><slot>button</slot></button>
{/if}

<style>
    a, button {
        display: block;
        border-width: 3px;
        border-style: solid;
        border-color: var(--button-border-color, #4E9CAF);
        width: var(--button-width, fit-content);
        padding: 5px;
        margin: var(--button-margin, 0px);
        text-align: center;
        border-radius: 5px;
        color: var(--button-color, black);
        text-decoration: none;
        font-weight: bold;
        cusor: pointer;
    }
</style>