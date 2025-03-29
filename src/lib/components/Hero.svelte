<script>
  import { fade } from 'svelte/transition';
</script>

<header class="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">
  <!-- Background with overlay -->
  <div class="absolute inset-0 z-0">

    <div class="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-blue-900/95 to-blue-900/90"></div>
  </div>

  <!-- Content -->
  <div class="max-w-7xl flex flex-col md:flex-row items-center w-full relative z-10 gap-16 md:gap-8">
    <div class="md:w-1/2 text-white text-center md:text-left" in:fade>
      <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6">
        <span class="block">Empowering</span>
        <span class="block mt-2 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          The Next Generation
        </span>
      </h1>
      <p class="mt-6 text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0">
        Transforming business, education, and society in a rapidly evolving world through innovation and sustainable development
      </p>
      <div class="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
        <a href="#sectors" class="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition transform hover:scale-105 text-center">
          Explore Sectors
        </a>
        <a href="#vision" class="px-8 py-4 border-2 border-white hover:bg-white/10 rounded-full transition text-center">
          Learn More
        </a>
      </div>
    </div>
  </div>
</header>