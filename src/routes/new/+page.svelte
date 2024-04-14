<script lang="ts">
    import type { ActionData } from "./$types";
    import { enhance } from "$app/forms";

    import SolidButton from "$lib/components/SolidButton.svelte";

    export let form: ActionData;
</script>

<form method="POST" use:enhance>
    <h2>Create a New Club</h2>
    <label>
        Name
        <input name="name" type="text" required value={form?.name ?? ""} placeholder="Name of Club">
    </label>
    <label>
        Description
        <br>
        <textarea name="description" rows="4" cols="50" placeholder="Description of Club">{form?.description ?? ""}</textarea>
    </label>
    <SolidButton --button-width="100%" --button-margin="10px 0px 0px 0px">Submit</SolidButton>
</form>

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
    textarea
    {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        resize: none;
    }

    textarea::placeholder,
    input::placeholder {
        font-family: 'Varela Round', sans-serif;
        font-size: 1rem;
    }

    textarea {
        height: 10rem;
    }

</style>
