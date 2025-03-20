<script>
    let {aclass, href, disabled, children} = $props();
</script>

{#if href}
    <a
        class={aclass || ""}
        href={href}
    >
        {#if children}
            {@render children()}
        {:else}
            <p>fallback content</p>
        {/if}
    </a>
{:else}
    <button
        class={aclass || ""}
        disabled={disabled || ""}
    >
        {#if children}
            {@render children()}
        {:else}
            <p>fallback content</p>
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
