<script lang="ts">
    import type { ActionData } from "./$types";
    import type { Error } from "./error";
    import { enhance } from "$app/forms";

    export let form: ActionData;

    // TODO: better presentation of these hints (please feel free to tear this out, it sucks)
    const errorMessages: Record<Error, string> = {
        name_missing: "Name is required.",
        name_invalid: "Invalid name.",
        name_long: "That name is too long.",
        email_missing: "Email address is required.",
        email_invalid: "Invalid email address.",
        email_long: "That email address is too long.",
        email_taken: "That email address is already registered.",
        password_missing: "Password is required.",
        password_invalid: "Invalid password.",
        password_short: "That password is too short.",
        password_long: "That password is too long.",
        password_confirm: "Password does not match.",
        confirmPassword_missing: "Password confirmation is required.",
        confirmPassword_invalid: "Invalid password confirmation.",
    };
</script>

<form method="POST" use:enhance>
    {#if form?.error}
        <p>{errorMessages[form.error]}</p>
    {/if}
    <label>
        Name
        <input name="name" type="text" required value={form?.name ?? ""} />
    </label>
    <label>
        Email
        <input name="email" type="email" required value={form?.email ?? ""} />
    </label>
    <label>
        Password
        <input name="password" type="password" required />
    </label>
    <label>
        Confirm password
        <input name="confirmPassword" type="password" required />
    </label>
    <button>Register</button>
</form>
{#if form?.success}
    <p>Registered successfully.</p>
{/if}
