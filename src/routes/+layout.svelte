<script>
//   import "../app.css";
  import { onMount } from 'svelte';
  import Navbar from '../lib/components/Navbar.svelte';
  import Footer from '../lib/components/Footer.svelte';

  onMount(() => {
    // Initialize any required functionality
  });
</script>

<div class="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
  <Navbar />
  <main class="flex-grow">
    <slot></slot>
  </main>
  <Footer />
</div>