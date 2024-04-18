<script lang="ts">
    import type { LayoutData } from "./$types";

    import SolidButton from "$lib/components/SolidButton.svelte";
    import HollowButton from "$lib/components/HollowButton.svelte";

    export let data: LayoutData;
</script>

<nav>
    <div class="container">
        <ul class="links-left">
            {#if data.loggedIn}
                <li class="title"><a href="/">Wecan2</a></li>
            {:else}
                <li class="title"><a href="/about">Wecan2</a></li>
            {/if}
        </ul>
        <ul class="links-right desktop">
            {#if data.loggedIn}
                <li class="buttonList"><HollowButton href="/browse">Join a Club</HollowButton></li>
                <li class="buttonList">
                    <div class="dropdown">
                        <SolidButton>Account</SolidButton>
                        <div class="dropdown-content">
                            <a href="/me">Account Information</a>
                            <a href="/logout">Logout</a>
                        </div>
                    </div>
                </li>
            {:else}
                <li><a href="/register">Join a Club</a></li>
                <li class="buttonList"><HollowButton href="/login">Log In</HollowButton></li>
                <li class="buttonList"><SolidButton href="/register">Register</SolidButton></li>
            {/if}
        </ul>
        <ul class="links-right mobile">
                <svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
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
        position: sticky;
        top: 19px;
        background-color: var(--theme-background, white);
        padding: 19px;
        margin: 19px 0;
        box-shadow: 1px 1px 5px rgb(148,157,166);
        border-radius: 10px;
    }

    .container {
        width: 100%;
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

    li:not(.buttonList), li:not(.title) {
        margin: auto 8px;
        text-align: center;
    }

    li a {
        text-decoration: none;
        color: black;
        font-weight: bold;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        top: 60px;
        right: 28px;
        background-color: var(--theme-background, white);
        box-shadow: 1px 1px 5px rgb(148,157,166);
        border-radius: 10px;
    }

    .dropdown-content a {
        display: block;
        color: black;
        padding: 2px;
        text-decoration: none;
        padding: 20px 40px;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    * {
        font-family: 'Varela Round', sans-serif;
    }
</style>
