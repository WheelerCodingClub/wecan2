<script lang="ts">
    import type { LayoutData } from "./$types";
    import SolidButton from "$lib/components/SolidButton.svelte"
    import HollowButton from "$lib/components/HollowButton.svelte";

    export let data: LayoutData;

    let hovered: boolean;
</script>

<nav>
    <div class="container">
        <ul class="links-left">
            <li class="title"><a href="/">Wecan2</a></li>
            <li><a href="/#">About</a></li>
        </ul>
        <ul class="links-right">
            {#if data.loggedIn}
                <li class="buttonList"><HollowButton href="/browse">Join a Club</HollowButton></li>
                <li class="buttonList">
                    <SolidButton 
                    on:mouseover={() => hovered = true}
                    on:mouseout={() => hovered = false}>
                    Account
                    </SolidButton>
                </li>
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div
                class="dropdown-options"
                class:hovered
                on:focus
                on:blur
                on:mouseover={() => hovered = true}
                on:mouseout={() => hovered=false}>
                    <a href="/me">Account Information</a>
                    <a href="/logout">Logout</a>
                </div>
            {:else}
                <li><a href="/register">Join a Club</a></li>
                <li class="buttonList"><HollowButton href="/login">Log In</HollowButton></li>
                <li class="buttonList"><SolidButton href="/register">Register</SolidButton></li>
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
        position: sticky;
        top: 19px;
        background-color: var(--theme-background, white);
        padding: 1%;
        margin: 1% 0;
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

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        list-style: none;
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

    .dropdown-options {
        display: none;
        position: absolute;
        top: 60px;
        right: 28px;
        background-color: var(--theme-background, white);
        box-shadow: 1px 1px 5px rgb(148,157,166);
        border-radius: 10px;
    }

    .hovered {
        display: block;
    }

    .dropdown-options a {
        display: block;
        color: black;
        padding: 2px;
        text-decoration: none;
        padding: 20px 40px;
    }

    * {
        font-family: 'Varela Round', sans-serif;
    }
</style>
