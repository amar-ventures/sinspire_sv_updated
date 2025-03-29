<script>
  import { siteData } from '$lib/data/site';
  
  let mobileMenuOpen = false;
  const toggleMenu = () => mobileMenuOpen = !mobileMenuOpen;

  const navItems = [
    { href: "#vision", label: "Vision", icon: "fa-eye" },
    { href: "#sectors", label: "Sectors", icon: "fa-building" },
    { href: "#programs", label: "Programs", icon: "fa-list-check" },
    { href: "#goals", label: "Goals", icon: "fa-flag" },
    { href: "/testimonials", label: "Testimonials", icon: "fa-quote-right" }
  ];
</script>

<nav class="bg-white/80 backdrop-blur-md shadow-lg py-4 px-6 fixed w-full top-0 z-50">
  <div class="max-w-7xl mx-auto flex justify-between items-center">
    <!-- Logo -->
    <div class="flex items-center gap-3">
      <img src="/images/logo.png" alt="{siteData.name} logo" class="h-12">
      <div>
        <h1 class="text-xl md:text-2xl font-bold text-blue-600">{siteData.shortName}</h1>
        <p class="text-sm text-gray-600">Ventures Private Limited</p>
      </div>
    </div>

    <!-- Desktop Menu -->
    <ul class="hidden md:flex space-x-8 items-center">
      {#each siteData.navigation as { href, label }}
        <li>
          <a {href} class="hover:text-blue-500 transition">
            {label}
          </a>
        </li>
      {/each}
      <li>
        <a href="#contact" 
           class="px-6 py-2.5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition transform hover:scale-105">
          Contact Us
        </a>
      </li>
    </ul>

    <!-- Mobile Menu Button -->
    <button 
      class="md:hidden"
      on:click={toggleMenu}
      aria-label="Toggle menu"
    >
      <i class="fa-solid fa-bars text-xl"></i>
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <div class="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-6">
        <ul class="flex flex-col space-y-6 py-8">
          {#each siteData.navigation as { href, label, icon }}
            <li>
              <a 
                {href}
                class="flex items-center gap-3 text-gray-600 hover:text-blue-500 transition"
                on:click={toggleMenu}
              >
                <i class="fa-solid {icon} w-5"></i>
                <span>{label}</span>
              </a>
            </li>
          {/each}
          <li>
            <a 
              href="#contact"
              class="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              on:click={toggleMenu}
            >
              <i class="fa-solid fa-envelope"></i>
              <span>Contact Us</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  {/if}
</nav>