<script lang="ts">
    import type { ActionData } from "./$types";
    import type { Error } from "./error";
    import { enhance } from "$app/forms";

    export let form: ActionData;

</script>

<form method="POST" use:enhance>
    {#if form?.error}
        <p>{error}</p>
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
