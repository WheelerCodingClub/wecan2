<script lang="ts">
    import "$lib/styles/forms.css";
    import type { ActionData } from "./$types";
    import SolidButton from "$lib/components/SolidButton.svelte";
    import { enhance } from "$app/forms";
    import { fly } from "svelte/transition";
    import { page } from "$app/state";
    export let form: ActionData;

    let showPassword: boolean;
    const joinRedirect: boolean = page.url.searchParams.has('joinRedirect');
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

{#if joinRedirect}
    <h3>You must log in to join a club.</h3>
{/if}

<form method="POST" class="card" use:enhance>
    <h2>Sign In</h2>
    {#if form?.error}
        <p id="error" transition:fly={{x:20, duration:200}}>{form.error}</p>
    {/if}
    <label class="bold">
        Email
        <input name="email" type="email" value={form?.email ?? ""} required placeholder="Email Address"/>
    </label>
    <label class="bold">
        Password
        <input name="password" type={showPassword ? "text" : "password"} required placeholder="Password"/>
    </label>
    <label>
        <input type="checkbox" bind:checked={showPassword}/>
        Show Password
    </label>
    <label>
        <input name="remember" type="checkbox"/>
        Remember Me
    </label>
    <SolidButton --button-width="100%" --button-margin="10px 0px 0px 0px">Log In</SolidButton>
</form>
{#if form?.success}
    <p>Logged in successfully.</p>
{/if}
