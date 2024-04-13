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
        border: 3px solid #4E9CAF;
        width: 60px;
        padding: 5px;
        text-align: center;
        border-radius: 5px;
        color: black;
        text-decoration: none;
        font-weight: bold;
    }
</style>