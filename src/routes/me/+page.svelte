<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Account Info</title>
</svelte:head>

<h1>My Awesome Account Settings Page</h1>
<div style="border: 2px solid black; width:480px; padding: 5px;">
    <dl style="margin-left: 1em; margin-right: 1em;">
        <dt>ID</dt>
        <dd><code>{data.id}</code></dd>
        <dt>Name</dt>
        <dd><code>{data.name}</code></dd>
        <dt>Email</dt>
        <dd><code>{data.email}</code></dd>
        <dt>Created at</dt>
        <dd><code>{data.createdAt}</code></dd>
    </dl>
</div>
