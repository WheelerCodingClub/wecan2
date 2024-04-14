<script lang="ts">
    import type { ActionData } from "./$types";
    import { enhance } from "$app/forms";
    import { fly } from 'svelte/transition';

    import SolidButton from "$lib/components/SolidButton.svelte";

    export let form: ActionData;

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

<style>
    form {
        border-radius: 10px;
        box-shadow: 1px 1px 5px rgb(148,157,166);
        padding: 1%;
        margin: auto;
        width: 30%;
    }
    
    #error {
        color: red;
        font-weight: bold;
    }

    form h2 {
        text-align: center;
        margin-top: 0;
    }

    input[type=email],
    input[type=password],
    input[type=text]
    {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

</style>

