<script>
  import Tailwindcss from "./Tailwind.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import Navbar from "./components/Navbar.svelte";
</script>

<style>
  main {
    @apply max-w-4xl mx-auto;
  }

</style>

<Tailwindcss />

<Navbar />
<main>
  <Router {routes} />
</main>
