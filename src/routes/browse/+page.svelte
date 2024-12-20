<script lang="ts">
    import "$lib/styles/forms.css";
    import type { PageData } from "./$types";
    import SolidButton from "$lib/components/SolidButton.svelte";

    export let data: PageData;
</script>

<svelte:head>
    <title>Join a Club</title>
</svelte:head>

<h1>Browse</h1>

{#if !(Object.keys(data.clubs).length)}
    <br/>
    <h3>Unfortunately there aren't any clubs in here yet.</h3>
{/if}

<ul>
    {#each data.clubs as club (club.id)}
        <li class="card">
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
        margin: 1% auto;
    }

    #description {
        border: 1px solid rgb(148,157,166);
        border-radius: 10px;
        padding: 15px;
    }
    
</style>
