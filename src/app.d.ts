/// <reference types="@sveltejs/kit" />
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

declare global {
    namespace App {

    }
}

export namespace Pokemon {
    interface Basic {
        name: string,
        url: string
    }
    interface Enriched extends Basic {
        id: number,
        image: string
    }
}

export type JSONValue =
    | string
    | number
    | boolean
    | { [x: string]: JSONValue }
    | Array<JSONValue>;