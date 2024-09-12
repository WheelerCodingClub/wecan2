<script lang="ts">
    import { ClubVisibility } from "$lib/db/types";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h1>{data.name}</h1>
<p>{data.description}</p>
<hr>
<dl>
    <dt>ID</dt>
    <dd><code>{data.id}</code></dd>
    <dt>Owner</dt>
    <dd>
        <dl>
            <dt>ID</dt>
            <dd><code>{data.owner.id}</code></dd>
            <dt>Name</dt>
            <dd><code>{data.owner.name}</code></dd>
        </dl>
    </dd>
    <dt>Visibility</dt>
    <dd><code>{ClubVisibility[data.visibility]}</code></dd>
    <dt>Created at</dt>
    <dd><code>{data.createdAt}</code></dd>
</dl>
<h2>Posts</h2>
<ul>
    {#each data.posts as post (post.id)}
        <li>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <dl>
                <dt>ID</dt>
                <dd><code>{post.id}</code></dd>
                <dt>Created at</dt>
                <dd><code>{post.createdAt}</code></dd>
            </dl>
        </li>
    {/each}
</ul>
