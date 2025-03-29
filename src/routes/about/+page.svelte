<script>
  import { siteData } from '$lib/data/site';

  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Founded with a vision to transform education and empower youth"
    },
    {
      year: "2019",
      title: "First Major Initiative",
      description: "Launched educational programs reaching 1000+ students"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Expanded to virtual learning and remote education solutions"
    },
    {
      year: "2021",
      title: "Community Impact",
      description: "Initiated sustainable development projects in rural areas"
    },
    {
      year: "2022",
      title: "Global Recognition",
      description: "Received awards for innovation in social impact"
    }
  ];

  const team = [
    {
      name: "Muhammed Sinan",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800",
      imageCredit: "Foto Sushi",
      linkedin: "#"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Head of Education",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800",
      imageCredit: "Christina @ wocintechchat.com",
      linkedin: "#"
    },
    {
      name: "Raj Kumar",
      role: "Innovation Director",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800",
      imageCredit: "Clem Onojeghuo",
      linkedin: "#"
    }
  ];

  const values = [
    {
      icon: "fa-lightbulb",
      title: "Innovation",
      description: "Pioneering solutions for tomorrow's challenges"
    },
    {
      icon: "fa-handshake",
      title: "Collaboration",
      description: "Building partnerships for lasting impact"
    },
    {
      icon: "fa-leaf",
      title: "Sustainability",
      description: "Creating positive change that endures"
    }
  ];
</script>

<svelte:head>
  <title>About Us | {siteData.name}</title>
  <meta name="description" content="Learn about S-Inspire's journey, mission, and the team driving innovation and sustainable development.">
</svelte:head>

<div class="pt-24 pb-16">
  <!-- Hero Section -->
  <div class="relative h-[60vh] mb-16">
    <img 
      src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920"
      alt="Team collaboration" 
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
    <div class="absolute inset-0 flex items-center justify-center text-center">
      <div class="max-w-3xl px-6">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">Our Story</h1>
        <p class="text-xl text-gray-200">
          Transforming lives through innovation and sustainable development
        </p>
      </div>
    </div>
    <div class="absolute bottom-4 right-4 text-white/70 text-sm">
      Photo by <a href="https://unsplash.com/@austindistel" class="underline">Austin Distel on Unsplash</a>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-6">
    <!-- Mission & Vision -->
    <div class="grid md:grid-cols-2 gap-16 mb-24">
      <div class="relative">
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800"
          alt="Innovation hub" 
          class="rounded-2xl shadow-2xl"
        />
        <div class="absolute bottom-4 right-4 text-white/70 text-xs">
          Photo by <a href="https://unsplash.com/@wordsmithmedia" class="underline">Christina Wocintech</a>
        </div>
      </div>
      <div class="space-y-8">
        <div>
          <h2 class="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p class="text-gray-600 leading-relaxed">
            At S-Inspire, we are dedicated to empowering the next generation through innovative educational programs, sustainable development initiatives, and transformative solutions. Our mission is to create lasting positive impact in communities across India and beyond.
          </p>
        </div>
        <div>
          <h2 class="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Our Vision
          </h2>
          <p class="text-gray-600 leading-relaxed">
            We envision a world where every individual has access to quality education, sustainable livelihoods, and opportunities for growth. Through innovation and collaboration, we aim to build inclusive communities that thrive on knowledge, creativity, and sustainable practices.
          </p>
        </div>
      </div>
    </div>

    <!-- Values -->
    <div class="mb-24">
      <h2 class="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        Our Values
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        {#each values as value}
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div class="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <i class="fas {value.icon} text-2xl text-blue-500"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">{value.title}</h3>
            <p class="text-gray-600">{value.description}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Timeline -->
    <div class="mb-24">
      <h2 class="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        Our Journey
      </h2>
      <div class="space-y-8">
        {#each timeline as milestone, i}
          <div class="grid md:grid-cols-[1fr,auto,1fr] items-center gap-8">
            <div class={i % 2 === 0 ? "" : "order-3"}>
              <div class="bg-white p-6 rounded-xl shadow-lg">
                <div class="text-3xl font-bold text-blue-500 mb-2">{milestone.year}</div>
                <h3 class="text-xl font-bold mb-2">{milestone.title}</h3>
                <p class="text-gray-600">{milestone.description}</p>
              </div>
            </div>
            <div class="w-4 h-4 bg-blue-500 rounded-full relative z-10 {i % 2 === 0 ? 'order-2' : 'order-2'}">
              <div class="absolute inset-[-8px] border-4 border-blue-500/20 rounded-full"></div>
            </div>
            <div class={i % 2 === 0 ? "order-3" : ""}></div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Team -->
    <div class="mb-24">
      <h2 class="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        Leadership Team
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        {#each team as member}
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
            <div class="relative h-80">
              <img 
                src={member.image} 
                alt={member.name}
                class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div class="absolute bottom-4 right-4 text-white/70 text-xs">
                Photo by {member.imageCredit}
              </div>
            </div>
            <div class="p-6 text-center">
              <h3 class="text-xl font-bold mb-2">{member.name}</h3>
              <p class="text-blue-500 mb-4">{member.role}</p>
              <a 
                href={member.linkedin}
                class="inline-flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Contact CTA -->
    <div class="text-center">
      <h2 class="text-3xl font-bold mb-6">Want to Join Our Mission?</h2>
      <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
        We're always looking for passionate individuals and organizations to collaborate with.
      </p>
      <div class="flex justify-center gap-4">
        <a 
          href="/careers" 
          class="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition transform hover:scale-105"
        >
          <i class="fas fa-briefcase"></i>
          <span>View Careers</span>
        </a>
        <a 
          href="/contact" 
          class="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition transform hover:scale-105"
        >
          <i class="fas fa-envelope"></i>
          <span>Contact Us</span>
        </a>
      </div>
    </div>
  </div>
</div>