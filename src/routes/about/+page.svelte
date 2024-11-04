<script lang="ts">
    const arr: number[] = [];
    for (let i  = 0; i < 1000; i++) {
        arr.push(i);
    }
</script>

<svelte:head>
    <title>About Us</title>
</svelte:head>

<h1>About Us</h1>
<br/>
<p>Nothing here yet, don't know what's gonna be here tbh.</p>
<br/>
<hr/>
<br/>
<h3>Really long scrolling to test navbar</h3>
{#each arr as item}
    <p>{item}</p>
{/each}
