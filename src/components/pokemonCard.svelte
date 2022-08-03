<script lang="ts">
    import type { Pokemon } from "$types";
    import { fade } from "svelte/transition";
    export let pokemon: Pokemon.Enriched;
</script>

<div class="group transition pokemon-card bg-cyan-100 hover:bg-cyan-200 rounded-lg text-center w-52" transition:fade={{duration: 200}}>
    <a href={`/pokemon/${pokemon.id}`} class="group-hover:text-slate-100">
        <img src={pokemon.image} alt={pokemon.name}>
        <div class="info transition bg-sky-300 group-hover:bg-sky-500 p-2 rounded-b-lg font-sans">
            <span class="pokemon-id">{pokemon.id}</span>
            &bull;
            <span class="pokemon-name">{pokemon.name}</span>
        </div>
        
    </a>
</div>

<style>
    img {
        width: 96px;
        height: 96px;
        @apply mx-auto;
    }
    a {
        @apply text-slate-700;
    }
    span {
        @apply font-semibold;
    }
</style>