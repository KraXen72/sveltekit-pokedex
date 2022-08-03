<div class="mx-auto px-5 max-w-7xl w-full mb-5 font-semibold text-slate-700">
    <blockquote>
        the website to view unimportant virtual & nonexistent animals
    </blockquote>
    <ul class="list-disc px-5">
        <li>i don't even know any pokemon apart from like pikachu i didn't collect the cards as a child</li>
        <li>this site uses the Pokemon API to build a pokedex</li>
        <li>
            <a href="https://www.youtube.com/watch?v=UU7MgYIbtAk" rel="external" target="_blank">this</a> is the tutorial for anyone wanting to build it themselves
        </li>
        <li>made by KraXen72</li>
    </ul>
    <blockquote>
        yes i made a wholeass blockquote style i can use it how much i want
    </blockquote>
    <blockquote>
        still don't know nearly anything about pokemon after the completion of this project but for whatever reason most of them have an attack called <em>mega punch</em> lol
    </blockquote>
</div>


<svelte:head>
    <title>SvelteKit PokeDex: About</title>
</svelte:head>

<style>
    
    blockquote {
        @apply border-l-4 border-slate-500 px-5 relative py-2 bg-slate-200 my-1;
    }
    blockquote::before {
        @apply content-['>'] absolute left-1 font-bold text-lg leading-tight;
    }
    a[href] {
        @apply underline decoration-solid decoration-purple-500 decoration-2;
    }
</style>