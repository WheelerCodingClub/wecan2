<script lang="ts">
    export let href: string = "";
    export let Class: string = "";
</script>

{#if href}
    <a
    {href}
    class={Class}>
        <slot>button</slot>
    </a>
{:else}
    <button
    on:click
    on:focus
    on:mouseover
    on:blur
    on:mouseout
    class={Class}>
        <slot>button</slot>
    </button>
{/if}

<style>
    a, button {
        display: block;
        background: var(--button-background, #4E9CAF);
        width: var(--button-width, fit-content);
        padding: 10px;
        margin: var(--button-margin, 0px);
        text-align: center;
        border-radius: 5px;
        color: var(--button-color, white);
        text-decoration: none;
        font-weight: bold;
        cursor: pointer;
        border: none;
    }
</style>