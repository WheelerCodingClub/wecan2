<script lang="ts">
    import type { Callable } from "$lib/types/callable";
    interface Props {
        aclass?: string;
        href?: string;
        disabled?: boolean;
        onclick?: Callable;
        children?: any;
    }
    let {
        aclass = "",
        href = "",
        disabled = false,
        onclick = () => {},
        children
    }: Props = $props();
</script>

{#if href}
    <a
        class={aclass || ""}
        href={href}
    >
        {#if children}
            {@render children()}
        {:else}
            button
        {/if}
    </a>
{:else}
    <button
        class={aclass || ""}
        {disabled}
        {onclick}
    >
        {#if children}
            {@render children()}
        {:else}
            button
        {/if}
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
