<script lang="ts">
    export let href: string;
</script>
<a {href}><slot></slot></a>
<style>
    a {
        display: block;
        border: 3px solid #4E9CAF;
        width: 60px;
        padding: 5px;
        text-align: center;
        border-radius: 5px;
        color: black;
        text-decoration: none;
    }
</style>