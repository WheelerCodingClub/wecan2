<script lang="ts">
    import type { ActionData } from "./$types";
    import { enhance } from "$app/forms";

    export let form: ActionData;
</script>

<form method="POST" use:enhance>
    {#if form?.missing}
        <p>Missing required fields.</p>
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
