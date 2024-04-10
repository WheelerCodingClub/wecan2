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
        Email
        <input name="email" type="email" required value={form?.email ?? ""} />
    </label>
    <label>
        Password
        <input name="password" type="password" required />
    </label>
    <button>Log in</button>
</form>
{#if form?.success}
    <p>Logged in successfully.</p>
{/if}
