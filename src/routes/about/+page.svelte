<script lang="ts">
    import { page } from "$app/state";
    const arr: number[] = [];
    for (let i  = 0; i < 100; i++) {
        arr.push(i);
    }
    const joinRedirect: boolean = page.url.searchParams.has("joinRedirect");
</script>

<svelte:head>
    <title>About Us</title>
</svelte:head>

{#if joinRedirect}
    <p style="text-align: center; font-weight: bold; margin: 0px;">Redirected from Home</p>
{/if}
<h1>About Us</h1>
<br/>
<p>Nothing here yet, don't know what's gonna be here tbh.</p>
<br/>
<hr/>
<br/>
<h3>Really long scrolling to test navbar</h3>
<ul style="list-style-type:disc; margin-left: 18pt;">
    {#each arr as item}
        <li>{item}</li>
    {/each}
</ul>