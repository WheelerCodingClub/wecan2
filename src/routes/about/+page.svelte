<script lang="ts">
    const arr: number[] = [];
    for (let i  = 0; i < 1000; i++) {
        arr.push(i);
    }
</script>

<p>Thank you Nicolas</p>
<h1>Really long scrolling to test navbar</h1>
{#each arr as item}
    <p>{item}</p>
{/each}
