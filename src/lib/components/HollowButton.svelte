<script lang="ts">
    let {aclass, href, disabled} = $props();
</script>

{#if href}
    <a
        class={aclass || ""}
        href={href}
    ><slot>button</slot></a>
{:else}
    <button
        class={aclass || ""}
        disabled={disabled || ""}
    ><slot>button</slot></button>
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
        cursor: pointer;
    }
</style>
