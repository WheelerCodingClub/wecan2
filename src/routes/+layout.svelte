<script lang="ts">
    import type { LayoutData } from "./$types";
    import { browser } from '$app/environment';

    import SolidButton from "$lib/components/SolidButton.svelte";
    import HollowButton from "$lib/components/HollowButton.svelte";

    import hamburgerIcon from "$lib/images/hamburger.svg";

    let mobileDropdown: boolean = false;
    let dropdownHeight: number = 0;

    $: height = mobileDropdown ? "100%" : "fit-content";

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
        <div class="mobile links-right">
            <HollowButton on:click={() => mobileDropdown = !mobileDropdown}>
                <img src={hamburgerIcon} alt="hamburger icon">
                <!--source: https://www.iconfinder.com/icons/134216/menu_lines_hamburger_icon-->
            </HollowButton>
        </div>
        {#if mobileDropdown}
        <ul class="mobile dropdown">
            {#if data.loggedIn}
                <li><a href="/browse">Join a Club</a></li>
                <li><a href="/me">Account Information</a></li>
                <li><a href="/logout">Logout</a></li>
            {:else}
                <li><a href="/register">Join a Club</a></li>
                <li><a href="/login">Log In</a></li>
                <li><a href="/register">Register</a></li>
            {/if}
        </ul>
        {/if}
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

    @media only screen and (min-width: 769px) {
        nav {
            top: 0px;
            padding-top: 1%;
            padding-bottom: 1%;
            position: absolute;
            width: 100%;
        }
        .container {
            border-radius: 10px;
            padding: 1%;
            margin: 1% auto;
            width: 96%;
        }
    }

    @media only screen and (max-width: 768px) {
        nav {
            top: 0px;
            left: 0px;
            padding: none;
            margin: none;
            width: 100%;
        }

        nav .container {
            border-radius: 0 0 10px 10px;
            padding: 1%;
            margin: none;
            border-top: none;
        }
    }

    nav {
        position: fixed;
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: var(--theme-background, white);
        box-shadow: 1px 1px 5px rgb(148,157,166);
    }

    .title {
        font-size: 30px;
        display: inline;
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
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

    .mobile .dropdown {
        clear: both;
    }

    * {
        font-family: 'Varela Round', sans-serif;
    }
</style>
