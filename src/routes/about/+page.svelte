<script lang="ts">
    let arr = new Array()
    for(let a = 0; a < 100000; a++){
        arr.push(a);
    }
</script>
<p>We can do it!</p>
<h1>Really long scrolling to test navbar</h1>
{#each arr as item}
    <p>{item}</p>
{/each}