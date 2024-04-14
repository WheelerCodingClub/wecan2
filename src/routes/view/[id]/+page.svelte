<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h1>{data.club.name}</h1>
<p>{data.club.description}</p>
<hr>
<dl>
    <dt>ID</dt>
    <dd><code>{data.club.id}</code></dd>
    <dt>Owner</dt>
    <dd>
        <dl>
            <dt>ID</dt>
            <dd><code>{data.club.owner}</code></dd>
            <dt>Name</dt>
            <dd><code>{data.owner.name}</code></dd>
        </dl>
    </dd>
    <dt>Visibility</dt>
    <dd><code>{data.club.visibility}</code></dd>
    <dt>Created at</dt>
    <dd><code>{data.club.created}</code></dd>
</dl>
