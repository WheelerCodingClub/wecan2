<script lang="ts">
    import "$lib/styles/forms.css";
    import Gallery from "$lib/components/Gallery.svelte";

    interface Props {
        title: string;
        description: string;
        images?: {
        src: string;
        alt: string;
    }[];
        club: string;
    }

    let {
        title,
        description,
        images = [],
        club
    }: Props = $props();
</script>

<div class="card">
    <h2>{title}</h2>
    <p>{description}</p>
    <Gallery {images} />
    <p>Club: {club}</p>
</div>
