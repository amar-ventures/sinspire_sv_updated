<script>
  import { siteData } from '$lib/data/site';
</script>

<svelte:head>
  <title>Blog | {siteData.name}</title>
  <meta name="description" content="Read our latest insights on education, innovation, and sustainable development.">
</svelte:head>

<div class="pt-24 pb-16">
  <!-- Hero Section -->
  <div class="relative h-[60vh] mb-16">
    <img 
      src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1920"
      alt="Blog Header" 
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
    <div class="absolute inset-0 flex items-center justify-center text-center">
      <div class="max-w-3xl px-6">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">Our Blog</h1>
        <p class="text-xl text-gray-200">
          Discover stories of innovation and impact
        </p>
      </div>
    </div>
    <div class="absolute bottom-4 right-4 text-white/70 text-sm">
      Photo by <a href="https://unsplash.com/@andrewtneel" class="underline">Andrew Neel on Unsplash</a>
    </div>
  </div>

  <div class="max-w-3xl mx-auto px-6 text-center">
    <div class="bg-white p-12 rounded-3xl shadow-xl">
      <i class="fas fa-newspaper text-5xl text-blue-500 mb-6"></i>
      <h2 class="text-3xl font-bold mb-4">Coming Soon!</h2>
      <p class="text-gray-600 mb-8">
        We're working on bringing you insightful articles about education, innovation, 
        and sustainable development. Stay tuned!
      </p>
      <div class="space-y-4">
        <p class="text-gray-600">
          Meanwhile, follow us on social media for updates:
        </p>
        <div class="flex justify-center gap-4">
          <a 
            href={siteData.social.linkedin}
            class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition"
          >
            <i class="fab fa-linkedin-in text-xl"></i>
          </a>
          <a 
            href={siteData.social.twitter}
            class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition"
          >
            <i class="fab fa-twitter text-xl"></i>
          </a>
          <a 
            href={siteData.social.instagram}
            class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition"
          >
            <i class="fab fa-instagram text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>