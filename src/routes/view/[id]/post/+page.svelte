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

<form method="POST" use:enhance>
    <h2>Create a New Post</h2>
    <label class="bold">
        Title
        <input name="title" type="text" required value={form?.title ?? ""} placeholder="Title of Post">
    </label>
    <label class="bold">
        Content
        <br>
        <textarea name="content" rows="4" cols="50" placeholder="Content of Post">{form?.content ?? ""}</textarea>
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
