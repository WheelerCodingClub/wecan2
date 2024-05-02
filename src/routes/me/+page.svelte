<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h1>My Awesome Account Settings Page</h1>
<div style = "border: 2px solid black; width:480px; padding: 5px;">
    <dl style = "margin-left: 1em; margin-right: 1em;">
        <dt>ID</dt>
        <dd><code>{data.id}</code></dd>
        <dt>Name</dt>
        <dd><code>{data.name}</code></dd>
        <dt>Email</dt>
        <dd><code>{data.email}</code></dd>
        <dt>Created at</dt>
        <dd><code>{data.created}</code></dd>
    </dl>
</div>
