<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { page } from '$app/stores';
  import { pageTransition } from '$lib/stores/transition';

  onMount(() => {
    // Initialize any required functionality
  });
</script>

<div class="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
  <Navbar />
  <main class="flex-grow">
    {#key $page.url.pathname}
      <div transition:pageTransition>
        <slot />
      </div>
    {/key}
  </main>
  <Footer />
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }

  :global(.page-transition) {
    position: relative;
    will-change: opacity;
  }
</style>

