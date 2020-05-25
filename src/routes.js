import Home from "pages/Home.svelte";

import { ChunkGenerator } from "svelte-spa-chunk";
import ChunkComponent from "svelte-spa-chunk/Chunk.svelte";
const Chunk = ChunkGenerator(ChunkComponent);

const routes = {
  "/": Home,
  "/random": Chunk(() =>  import ('pages/Random.svelte')),
  "/hello/:name?": Chunk(() =>  import ('pages/Hello.svelte')),
};

export default routes;
