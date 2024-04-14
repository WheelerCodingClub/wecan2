<script lang="ts">
    import type { ActionData } from "./$types";
    import { enhance } from "$app/forms";

    export let form: ActionData;
</script>

<form method="POST" use:enhance>
    <label>
        Name
        <input name="name" type="text" required value={form?.name ?? ""}>
    </label>
    <label>
        Description
        <textarea name="description" rows="4" cols="50">{form?.description ?? ""}</textarea>
    </label>
    <button>Submit</button>
</form>
