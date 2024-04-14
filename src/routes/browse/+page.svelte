<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h1>Browse</h1>
<ul>
    {#each data.clubs as club (club.id)}
        <li>
            <h2><a href="/view/{club.id}">{club.name}</a> <code>[ID: {club.id}]</code></h2>
            <p>{club.description}</p>
        </li>
    {/each}
</ul>
