<script lang="ts">
    import type { ActionData } from "./$types";
    import { enhance } from "$app/forms";

    import SolidButton from '$lib/components/SolidButton.svelte';

    export let form: ActionData;

    let showPassword: boolean;
</script>

<form method="POST" use:enhance>
    <h2>Register</h2>
    {#if form?.error}
        <p>{form.error}</p>
    {/if}
    <label>
        Name
        <input name="name" type="text" required value={form?.name ?? ""} placeholder="Name"/>
    </label>
    <label>
        Email
        <input name="email" type="email" required value={form?.email ?? ""} placeholder="Name"/>
    </label>
    <label>
        Password
        <input name="password" type={showPassword ? "text" : "password"} required placeholder="Password"/>
    </label>
    <label>
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

<style>
    form {
        border-radius: 10px;
        box-shadow: 1px 1px 5px rgb(148,157,166);
        padding: 1%;
        margin: auto;
        width: 30%;
    }

    form h2 {
        text-align: center;
        margin-top: 0;
    }

    input[type=text],
    input[type=email],
    input[type=password]
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
