<script lang="ts">
    import type { LayoutData } from "./$types";
    import SolidButton from "$lib/components/SolidButton.svelte"
    import HollowButton from "$lib/components/HollowButton.svelte";

    export let data: LayoutData;
</script>

<nav>
    <div class="container">
        <ul class="links-left">
            <li class="title"><a href="/">Wecan2</a></li>
            <!--The .title right next to it has the same
            function, so I removed it.-->
            <li><a href="/#">About</a></li>
            <!--Can't we just put contact in about?-->
        </ul>
        <ul class="links-right">
            <li><a href="/#">Join a Club</a></li>
            <!-- Since this is really just a wheeler thing,
            I don't think we need a register school option.
            If we need to we'll add it back later.-->
            {#if data.user}
                <li><a href="/logout">Log Out</a></li>
            {:else}
                <li><HollowButton href="/#">Log In</HollowButton>></li>
                <li><SolidButton href="/#">Register</SolidButton></li>
            {/if}
        </ul>
    </div>
</nav>

<main>
    <slot />
</main>

<style>
    nav, div, a, ul, li {
        padding: 0;
        margin: 0;

    }

    nav {
        padding: .5rem 1rem;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        box-shadow: 1px 1px 5px rgb(148,157,166);
    }

    .container {
        width: 100%;
        max-width: 1140px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .title {
        font-size: 30px;
        display: inline;
        margin: 0 2%;
    }

    .links-left {
        float: left;
    }

    .links-right {
        float: right;
    }

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        list-style: none;
    }

    li {
        margin: 0 2%;
        color: black;
    }

    li a {
        text-decoration: none;
        color: black;
        font-weight: bold;
    }
</style>
