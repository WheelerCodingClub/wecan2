<script lang="ts">
    import type { ActionData } from "./$types";
    import { enhance } from "$app/forms";

    export let form: ActionData;
</script>

<form method="POST" use:enhance>
    {#if form?.error}
        <p>{form.error}</p>
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
    <label>
        Remember me
        <input name="remember" type="checkbox" />
    </label>
    <button>Register</button>
</form>
{#if form?.success}
    <p>Registered successfully.</p>
{/if}
