<script lang="ts">
    export let href: string = "/#";
</script>
<a {href}><slot>button</slot></a>
<style>
    a {
        display: block;
        background: #4E9CAF;
        padding: 8px;
        text-align: center;
        border-radius: 5px;
        color: white;
        text-decoration: none;
        font-weight: bold;
    }
</style>