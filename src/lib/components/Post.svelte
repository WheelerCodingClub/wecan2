<script lang="ts">
    export let title: string;
    export let description: string;
    export let images: {src: string, alt: string}[] = [ ];
    export let club: string;

    import '$lib/styles/forms.css';

    import Gallery from '$lib/components/Gallery.svelte';
</script>

<div class="card">
    <h2>{title}</h2>
    <p>{description}</p>
    <Gallery {images} />
    <p>Club: {club}</p>
</div>