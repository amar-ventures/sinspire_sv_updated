<script>
  import { siteData } from '$lib/data/site';

  const jobs = [
    {
      title: "Education Program Manager",
      department: "Education",
      location: "Kerala, India",
      type: "Full-time",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
      imageCredit: "Surface on Unsplash",
      description: "Lead and develop educational programs that transform lives."
    },
    {
      title: "Sustainability Consultant",
      department: "Environmental",
      location: "Remote",
      type: "Full-time",
      image: "https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?q=80&w=800",
      imageCredit: "Kouji Tsuru on Unsplash",
      description: "Drive our environmental initiatives and sustainable development programs."
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Hybrid",
      type: "Full-time",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
      imageCredit: "Austin Distel on Unsplash",
      description: "Create impactful digital campaigns that showcase our mission."
    }
  ];

  const benefits = [
    {
      icon: "fa-heart",
      title: "Health & Wellness",
      description: "Comprehensive medical coverage and wellness programs"
    },
    {
      icon: "fa-book",
      title: "Learning & Development",
      description: "Continuous learning opportunities and skill development"
    },
    {
      icon: "fa-clock",
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options"
    }
  ];
</script>

<svelte:head>
  <title>Careers | {siteData.name}</title>
  <meta name="description" content="Join S-Inspire Global Ventures and be part of our mission to transform lives through innovation and education.">
</svelte:head>

<div class="pt-24 pb-16">
  <!-- Hero Section -->
  <div class="relative h-[60vh] mb-16">
    <img 
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1920"
      alt="Team collaboration" 
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
    <div class="absolute inset-0 flex items-center justify-center text-center">
      <div class="max-w-3xl px-6">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">Join Our Mission</h1>
        <p class="text-xl text-gray-200">
          Be part of a team that's transforming lives and building a sustainable future
        </p>
      </div>
    </div>
    <div class="absolute bottom-4 right-4 text-white/70 text-sm">
      Photo by <a href="https://unsplash.com/@brooke" class="underline">Brooke Cagle on Unsplash</a>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-6">
    <!-- Culture Section -->
    <div class="mb-24">
      <h2 class="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        Our Culture
      </h2>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <img 
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800"
          alt="Team meeting" 
          class="rounded-2xl shadow-2xl"
        />
        <div class="space-y-6">
          <h3 class="text-2xl font-bold">Where Innovation Meets Purpose</h3>
          <p class="text-gray-600 leading-relaxed">
            At S-Inspire, we believe in creating an environment where creativity flourishes,
            ideas are valued, and every team member has the opportunity to make a real impact.
            Our culture is built on collaboration, continuous learning, and a shared commitment
            to transforming lives through innovation.
          </p>
          <div class="text-xs text-gray-500">
            Photo by <a href="https://unsplash.com/@myke" class="underline">Myke Simon on Unsplash</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Benefits Section -->
    <div class="mb-24">
      <h2 class="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        Benefits & Perks
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        {#each benefits as benefit}
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div class="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <i class="fas {benefit.icon} text-2xl text-blue-500"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">{benefit.title}</h3>
            <p class="text-gray-600">{benefit.description}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Open Positions -->
    <div class="mb-24">
      <h2 class="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        Open Positions
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each jobs as job}
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
            <div class="relative h-48">
              <img 
                src={job.image} 
                alt={job.title}
                class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div class="absolute bottom-2 right-2 text-white/70 text-xs">
                Photo by {job.imageCredit}
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{job.title}</h3>
              <div class="flex gap-4 mb-4">
                <span class="text-sm text-blue-500">{job.department}</span>
                <span class="text-sm text-gray-500">•</span>
                <span class="text-sm text-gray-500">{job.location}</span>
              </div>
              <p class="text-gray-600 mb-6">{job.description}</p>
              <a 
                href={`/careers/${job.title.toLowerCase().replace(/ /g, '-')}`}
                class="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition"
              >
                Learn More
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Application CTA -->
    <div class="text-center">
      <h2 class="text-3xl font-bold mb-6">Don't See Your Perfect Role?</h2>
      <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
        We're always looking for talented individuals who share our vision. 
        Send us your resume and we'll keep you in mind for future opportunities.
      </p>
      <a 
        href="mailto:{siteData.contact.email}" 
        class="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition transform hover:scale-105"
      >
        <i class="fas fa-paper-plane"></i>
        <span>Send Your Resume</span>
      </a>
    </div>
  </div>
</div>