<script>
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { platform: 'facebook', icon: 'fa-facebook', color: 'hover:bg-blue-600' },
    { platform: 'youtube', icon: 'fa-youtube', color: 'hover:bg-red-600' },
    { platform: 'whatsapp', icon: 'fa-whatsapp', color: 'hover:bg-green-600' },
    { platform: 'linkedin', icon: 'fa-linkedin', color: 'hover:bg-blue-700' },
    { platform: 'instagram', icon: 'fa-instagram', color: 'hover:bg-pink-600' },
    { platform: 'twitter', icon: 'fa-twitter', color: 'hover:bg-blue-400' }
  ];
</script>

<footer class="bg-gray-900 text-white py-16">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid md:grid-cols-3 gap-12">
      <!-- Contact Information -->
      <div class="space-y-6">
        <h3 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
          Contact Us
        </h3>
        <div class="text-gray-400 space-y-2">
          <p class="font-semibold text-lg text-white">S-Inspire Global Ventures Pvt Ltd</p>
          <p>Village Office Road Kuttiadi<br>
          Calicut, Kerala<br>
          India - 673508</p>
        </div>
        <div class="space-y-3">
          <a href="tel:+918330090850" class="flex items-center gap-3 text-gray-400 hover:text-white transition">
            <i class="fa-solid fa-phone w-5"></i>
            <span>+91 8330090850</span>
          </a>
          <a href="mailto:sigvpl@sinspire.in" class="flex items-center gap-3 text-gray-400 hover:text-white transition">
            <i class="fa-solid fa-envelope w-5"></i>
            <span>sigvpl@sinspire.in</span>
          </a>
        </div>
      </div>

      <!-- Map -->
      <div class="h-[300px] rounded-xl overflow-hidden">
    <iframe 
    src="https://www.google.com/maps/embed/v1/place?q=sinspire+global+ventures&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
    class="w-full h-full"
    style="border:0;"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    title="Location of S-Inspire Global Ventures">
    </iframe>
      </div>

      <!-- Social Links & Quick Links -->
      <div class="space-y-8">
        <div class="space-y-4">
          <h4 class="text-lg font-semibold">Connect With Us</h4>
          <div class="flex flex-wrap gap-4">
            {#each socialLinks as { platform, icon, color }}
              <a 
                href="#{platform}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 {color} hover:text-white transition">
                <i class="fa-brands {icon}"></i>
              </a>
            {/each}
          </div>
        </div>

        <div class="space-y-4">
          <h4 class="text-lg font-semibold">Quick Links</h4>
          <div class="flex flex-wrap gap-4 text-gray-400">
            <a href="#" class="hover:text-white transition">About Us</a>
            <a href="#" class="hover:text-white transition">Brochure</a>
            <a href="#" class="hover:text-white transition">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
      <p>Copyright © {currentYear} by S-Inspire Global Ventures Pvt Ltd. All rights reserved.</p>
    </div>
  </div>
</footer>