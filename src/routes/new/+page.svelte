<script lang="ts">
    import "$lib/styles/forms.css";
    import type { ActionData } from "./$types";
    import SolidButton from "$lib/components/SolidButton.svelte";
    import { enhance } from "$app/forms";

    interface Props {
        form: ActionData;
    }

    let { form }: Props = $props();
</script>

<form method="POST" class="card" use:enhance>
    <h2>Create a New Club</h2>
    <label class="bold">
        Name
        <input name="name" type="text" required value={form?.name ?? ""} placeholder="Name of Club">
    </label>
    <label class="bold">
        Description
        <br>
        <textarea name="description" rows="4" cols="50" placeholder="Description of Club">{form?.description ?? ""}</textarea>
    </label>
    <SolidButton --button-width="100%" --button-margin="10px 0px 0px 0px">Submit</SolidButton>
</form>

<style>
    textarea::placeholder,
    input::placeholder {
        font-family: "Varela Round", sans-serif;
        font-size: 1rem;
    }

    textarea {
        height: 10rem;
    }
</style>
