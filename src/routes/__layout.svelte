<script lang="ts">
    import Nav from "$components/nav.svelte";
</script>

<div class="head sticky top-0 bg-white">
    <h1 class="main-title text-4xl text-center mx-8 text-orange-500">SvelteKit PokéDex</h1>
    <Nav/>
</div>

<slot>

</slot>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .head {
        @apply pt-4;
    }
</style>