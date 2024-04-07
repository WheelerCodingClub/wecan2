<script lang="ts">
    import type { LayoutData } from "./$types";

    export let data: LayoutData;
</script>

<nav>
    <div class="container">
        <a href="/">
            <span class="title">Wecan2</span>
        </a>
        <ul class="links-left">
            <li><a href="/">Home</a></li>
            <li><a href="/#">About</a></li>
            <li><a href="/#">Contact Us</a></li>
        </ul>
        <ul class="links-right">
            <li><a href="/#">Join a Club</a></li>
            <li><a href="/#">Register School</a></li>
            {#if data.user}
                <li><a href="/logout">Log Out</a></li>
            {:else}
                <li><a href="/login">Log In</a></li>
                <li><a href="/register">Register</a></li>
            {/if}
        </ul>
    </div>
</nav>

<main>
    <slot />
</main>

<style>
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
    a {
        text-decoration: none;
    }
    .title {
        text-align: left;
        font-size: 30px;
    }
    .links-left {
        text-align: left;
    }
    .links-right {
        text-align: right;
    }
    ul {
        width: fit-content;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    li {
        margin: auto 0;
        display: inline;
        list-style-type: none;
    }
</style>
