<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit";

    export const load: Load = async ({ params }) => {
        const id = params.id;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        return { props: { pokemon: data } };
    };
</script>

<script lang="ts">
    import type { PokemonDetails } from "$lib/PokemonDetails";
    import { fade } from "svelte/transition";

    export let pokemon: PokemonDetails;
    console.log(pokemon);

    const sprites = [
        pokemon.sprites.front_default,
        pokemon.sprites.back_default,
        pokemon.sprites.front_shiny,
        pokemon.sprites.back_shiny,
    ];

    const info = [
        ["type", pokemon.types[0].type.name],
        ["height", pokemon.height],
        ["weight", pokemon.weight],
    ];

    const moves = [...pokemon.moves]
        .slice(0, 5)
        .map((move) => [move.move.name, move.move.url]);
</script>

<div class="card mx-auto max-w-xs w-full mb-5 px-4 py-2 aspect-[3/4.4]
    bg-amber-200 rounded-lg border-8 border-yellow-600"
    transition:fade={{duration: 200}}>
    <h1 class="rounded-full w-full px-4 py-1 mb-2
    text-2xl text-left font-semibold bg-yellow-800 text-amber-200"
    >
        {pokemon.name}
    </h1>
    <div class="img-grid grid grid-cols-2 grid-rows-2 place-items-center">
        <img src={sprites[0]} alt="front_default" />
        <img src={sprites[1]} alt="back_default" />
        <img src={sprites[2]} alt="front_shiny" />
        <img src={sprites[3]} alt="back_shiny" />
    </div>
    <div class="info flex flex-wrap gap-1 my-4">
        {#each info as line}
            <span class="pokemon-pill">
                {line[0]}&nbsp;&bull;&nbsp;{line[1]}
            </span>
        {/each}
    </div>
    <hr
        class="bg-yellow-800 h-1 border-none my-5 overflow-visible before:bg-yellow-800 rounded-full relative"
    />
    <div class="info flex flex-wrap gap-1 my-4">
        {#each moves as move}
            <a
                class="pokemon-pill"
                href={move[1]}
                target="_blank"
                rel="external">{move[0]}</a
            >
        {/each}
    </div>
</div>

<style>
    .pokemon-pill {
        @apply rounded-full font-semibold bg-yellow-800 text-amber-200 px-4;
    }
    hr::before {
        @apply text-amber-200 font-semibold rounded-full px-2;
        content: "First 5 moves:";
        position: absolute;
        top: 0;
        left: 50%;
        display: block;
        transform: translate(-50%, -50%);
    }
    .card {
        box-shadow: 0 1px 5px #00000099;
    }
</style>
