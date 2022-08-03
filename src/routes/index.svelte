<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit";

    export const load: Load = async ({ params }) => {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=150`
        const response = await fetch(url)
        const data = await response.json()

        const loadedPokemon: Pokemon.Enriched[] = data.results.map(
            (data: Pokemon.Basic, i: number) => {
            return {
                name: data.name,
                id: i + 1,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    i + 1
                }.png`
            } as Pokemon.Enriched
        })

        return { props: { pokemon: loadedPokemon } }
    }
</script>

<script lang="ts">
    import type { Pokemon } from '$types';
    import PokemonCard from '$components/pokemonCard.svelte';

    export let pokemon: Pokemon.Enriched[];

    let searchTerm = "";
    let filteredPokemon = pokemon
    
    function handleSearch() {
        if (searchTerm) {
            let _searchTerm = searchTerm.toLowerCase() // new var as to not override input value
            filteredPokemon = pokemon.filter(({name}) => name.includes(_searchTerm) )
        } else {
            filteredPokemon = [ ...pokemon ]
        }
    }
</script>

<svelte:head>
    <title>SvelteKit PokeDex</title>
</svelte:head>

<div class="search-hold px-10 my-5 sticky z-10 top-28 py-2 bg-white max-w-7xl mx-auto">
    <input type="text" name="search" id="search" 
    bind:value={searchTerm} on:input={handleSearch}
    class="search w-full bg-fuchsia-200 p-3 rounded-lg font-semibold text-slate-700" autocomplete="off" spellcheck="false" placeholder="Search pokemon..."/>
</div>


<div class="poke-wrap flex justify-center flex-wrap align-top mx-auto gap-5 px-5 max-w-7xl w-full mb-5">
    {#each filteredPokemon as item}
        <PokemonCard pokemon={item} />
    {/each}
</div>

<style>
    .poke-wrap {
        grid-auto-columns: calc( 100% / 5 );
    }
</style>



