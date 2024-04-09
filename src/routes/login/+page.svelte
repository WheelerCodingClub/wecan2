<script lang="ts">
    import type { ActionData } from "./$types";
    import type { Error } from "./error";
    import { enhance } from "$app/forms";

    export let form: ActionData;

    const errorMessages: Record<Error, string> = {
        email_missing: "Email address is required.",
        email_invalid: "Invalid email address.",
        password_missing: "Password is required.",
        password_invalid: "Invalid password.",
        unauthorized: "Invalid credentials.",
    };
</script>

<form method="POST" use:enhance>
    {#if form?.error}
        <p>{errorMessages[form.error]}</p>
    {/if}
    <label>
        Email
        <input name="email" type="email" value={form?.email ?? ""} />
    </label>
    <label>
        Password
        <input name="password" type="password" />
    </label>
    <button>Log in</button>
</form>
{#if form?.success}
    <p>Logged in successfully.</p>
{/if}
