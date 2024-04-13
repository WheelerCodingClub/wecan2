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
        background: #4E9CAF;
        padding: 8px;
        text-align: center;
        border-radius: 5px;
        color: white;
        text-decoration: none;
        font-weight: bold;
    }
</style>