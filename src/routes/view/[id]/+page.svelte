<script lang="ts">
    import { ClubVisibility } from "$lib/db/types";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h1 class="padded">{data.name}</h1>
<p class="padded">{data.description}</p>
<hr style="margin: 5px 0px;"/>
<dl>
    <dt class="padded">ID</dt>
    <dd class="padded"><code>{data.id}</code></dd>
    <dt class="padded">Owner</dt>
    <dd class='padded"'>
        <dl>
            <dt class="padded">ID</dt>
            <dd class="padded"><code>{data.owner.id}</code></dd>
            <dt class="padded">Name</dt>
            <dd class="padded"><code>{data.owner.name}</code></dd>
        </dl>
    </dd>
    <dt class="padded">Visibility</dt>
    <dd class="padded"><code>{ClubVisibility[data.visibility]}</code></dd>
    <dt class="padded">Created at</dt>
    <dd class="padded"><code>{data.createdAt}</code></dd>
</dl>
<h2 class="padded">Posts</h2>
<ul>
    {#each data.posts as post (post.id)}
        <li>
            <h3 class="padded">{post.title}</h3>
            <p class="padded">{post.content}</p>
            <dl>
                <dt class="padded">ID</dt>
                <dd class="padded"><code>{post.id}</code></dd>
                <dt class="padded">Created at</dt>
                <dd class="padded"><code>{post.createdAt}</code></dd>
            </dl>
        </li>
    {/each}
</ul>

<style>
.padded {
    margin-left: 5px;
}
</style>