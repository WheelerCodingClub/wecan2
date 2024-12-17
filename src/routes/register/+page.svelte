<script lang="ts">
    import "$lib/styles/forms.css";
    import type { ActionData } from "./$types";
    import SolidButton from "$lib/components/SolidButton.svelte";
    import { enhance } from "$app/forms";
    import { fly } from "svelte/transition";
    import { page } from "$app/stores";

    export let form: ActionData;

    let showPassword: boolean;

    const joinRedirect: boolean = $page.url.searchParams.has('joinRedirect');
</script>

<svelte:head>
    <title>Register</title>
</svelte:head>
{#if joinRedirect}
    <h3 style="text-align: center; margin-bottom: 15px;">You must register or log in to join a club.</h3>
{/if}
<form method="POST" class="card" use:enhance>
    <h2>Register</h2>
    {#if form?.error}
        <p id="error" transition:fly={{x:20, duration:200}}>{form.error}</p>
    {/if}
    <label class="bold">
        Name
        <input name="name" type="text" required value={form?.name ?? ""} placeholder="Name"/>
    </label>
    <label class="bold">
        Email
        <input name="email" type="email" required value={form?.email ?? ""} placeholder="Email"/>
    </label>
    <label class="bold">
        Password
        <input name="password" type={showPassword ? "text" : "password"} required placeholder="Password"/>
    </label>
    <label class="bold">
        Confirm Password
        <input name="confirmPassword" type={showPassword ? "text" : "password"} required placeholder="Confirm Password"/>
    </label>
    <label>
        <input type="checkbox" bind:checked={showPassword}/>
        Show Password
    </label>
    <label>
        <input name="remember" type="checkbox" />
        Remember Me
    </label>
    <SolidButton --button-width="100%" --button-margin="10px 0px 0px 0px">Submit</SolidButton>
</form>
{#if form?.success}
    <p>Registered successfully.</p>
{/if}
