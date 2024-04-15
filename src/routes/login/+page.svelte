<script lang="ts">
    import type { ActionData } from "./$types";
    import { enhance } from "$app/forms";
    import { fly } from 'svelte/transition';

    import SolidButton from "$lib/components/SolidButton.svelte";

    export let form: ActionData;

    import '$lib/styles/forms.css';

    let showPassword: boolean;
</script>

<form method="POST" use:enhance>
    <h2>Sign In</h2>
    {#if form?.error}
        <p id="error" transition:fly={{x:20, duration:200}}>{form.error}</p>
    {/if}
    <label>
        Email
        <input name="email" type="email" value={form?.email ?? ""} required placeholder="Email Address"/>
    </label>
    <label>
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
