<script lang="ts">
    import type { PageData } from "./$types";

    import SolidButton from "$lib/components/SolidButton.svelte";

    export let data: PageData;
</script>

<h1>Browse</h1>
<ul>
    {#each data.clubs as club (club.id)}
        <li>
            <h2>{club.name}</h2>
            <code>[ID: {club.id}]</code>
            <h4>Description:</h4>
            <p id="description">{club.description}</p>
            <SolidButton
                href="/view/{club.id}"
                --button-margin="0 auto"
                --button-width="50%">
                View More
            </SolidButton>
        </li>
    {/each}
</ul>

<style>
    ul {
        list-style: none;
    }

    li {
        border-radius: 10px;
        box-shadow: 1px 1px 5px rgb(148,157,166);
        padding: 1%;
        margin: 2% auto;
        width: 50%;
    }

    h2 {
        text-align: center;
    }

    #description {
        border: 1px solid rgb(148,157,166);
        border-radius: 10px;
        padding: 15px;
    }
    
</style>
