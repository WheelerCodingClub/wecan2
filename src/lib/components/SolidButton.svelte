{#if $$props.href}
    <a
        class={$$props.class || ""}
        href={$$props.href}
    ><slot>button</slot></a>
{:else}
    <button
        class={$$props.class || ""}
        disabled={$$props.disabled || ""}
        on:click 
        on:focus 
        on:mouseover 
        on:blur 
        on:mouseout
    ><slot>button</slot></button>
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
