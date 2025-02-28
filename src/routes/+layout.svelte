<script lang="ts">
    import "$lib/styles/global.css";
    import type { LayoutData } from "./$types";
    import { fly, blur } from "svelte/transition";
    import { beforeNavigate } from "$app/navigation";

    import SolidButton from "$lib/components/SolidButton.svelte";
    import HollowButton from "$lib/components/HollowButton.svelte";

    import hamburgerIcon from "$lib/images/hamburger.svg";

    let mobileDropdown: boolean = false;

    export let data: LayoutData;

    beforeNavigate(() => {
        mobileDropdown = false;
    });
</script>

<nav data-sveltekit-reload>
    <div class="container">
        <ul class="links-left">
            {#if data.loggedIn}
                <li class="title"><a href="/">Wecan2</a></li>
            {:else}
                <li class="title"><a href="/about?joinRedirect">Wecan2</a></li>
            {/if}
        </ul>
        <ul class="links-right desktop">
            {#if data.loggedIn}
                <li class="buttonList"><HollowButton href="/about">About Us</HollowButton></li>
                <li class="buttonList"><HollowButton href="/browse">Join a Club</HollowButton></li>
                <li class="buttonList">
                    <div class="dropdown">
                        <SolidButton>Account</SolidButton>
                        <div class="dropdown-content">
                            <a href="/me">Account Information</a>
                            <a href="/new">Create a Club</a>
                            <a href="/logout">Logout</a>
                        </div>
                    </div>
                </li>
            {:else}
                <li class="buttonList"><HollowButton href="/about">About Us</HollowButton></li>
                <li class="buttonList"><HollowButton href="/register?joinRedirect">Join a Club</HollowButton></li>
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
    </div>
</nav>
{#if mobileDropdown}
<div transition:blur={{amount: 4}}
class="backdropcontainer">
    <div transition:fly={{ duration: 300, y: -250, opacity: 0.5 }}
    class="mobiledropdown">
        <ul class="links-middle" data-sveltekit-reload>
            {#if data.loggedIn}
                <li><a href="/about">About Us</a></li>
                <li><a href="/browse">Join a Club</a></li>
                <li><a href="/me">Account Information</a></li>
                <li><a href="/new">Create a Club</a></li>
                <li><a href="/logout">Logout</a></li>
            {:else}
                <li><a href="/about">About Us</a></li>
                <li><a href="/register?joinRedirect">Join a Club</a></li>
                <li><a href="/login">Log In</a></li>
                <li><a href="/register">Register</a></li>
            {/if}
        </ul>
    </div>
</div>
{/if}

<main class:backdrop={mobileDropdown}>
    <slot />
</main>

<style>
    @media only screen and (min-width: 769px) {
        nav {
            top: 0px;
            padding-top: 1%;
            padding-bottom: 1%;
            width: 100%;
        }

        .container {
            border-radius: 10px;
            padding: 1%;
            margin: 1% auto;
            width: 96%;
        }

        .mobiledropdown {
            display: none;
        }

        main {
            padding-top: 10%;
        }
    }

    @media only screen and (max-width: 768px) {
        nav {
            top: 0px;
            left: 0px;
            padding: none;
            margin: none;
            width: 100%;
            z-index: 20;
        }

        nav .container {
            border-radius: 0 0 10px 10px;
            padding: 1%;
            margin: none;
            border-top: none;
        }

        .backdropcontainer {
            position: fixed;
            top: 0px;
            right: 0px;
            width: 100%;
            height: 100%;
            z-index: 19;
        }

        .backdrop {
            filter: blur(4px);
        }

        .mobiledropdown {
            position: absolute;
            background-color: var(--theme-background, white);
            border-radius: 10px;
            box-shadow: 1px 1px 5px rgb(148,157,166);
            width: 90%;
            height: fit-content;
            top: 12%;
            left: 50%;
            transform: translate(-50%, 0);
            padding: 2%;
            filter: none;
        }

        main {
            padding-top: 15%;
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

    .links-middle {
        clear: both;
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

    .dropdown {
        position: relative;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        top: 36px;
        right: 0px;
        background-color: var(--theme-background, white);
        box-shadow: 1px 1px 5px rgb(148,157,166);
        border-radius: 10px;
    }

    .dropdown-content a {
        display: block;
        margin: 1px;
        border: 1px dotted gray;
        border-radius: inherit;
        color: black;
        padding: 2px;
        text-decoration: none;
        padding: 20px 40px;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .mobiledropdown {
        clear: both;
    }

    * {
        font-family: "Varela Round", sans-serif;
    }
</style>
