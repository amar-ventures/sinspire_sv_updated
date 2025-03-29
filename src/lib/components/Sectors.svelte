<script>
  const sectors = [
    {
      title: "Employment",
      image: "/images/employment.jpeg",
      description: "S Inspire collaborates with leading companies to provide job opportunities that align with young people's skills and interests."
    },
    {
      title: "Education",
      image: "/images/education.jpg",
      description: "Recognizing the power of education in driving change, S Inspire offers learning opportunities through partnerships with educational institutions."
    },
    {
      title: "Arts and Culture",
      image: "/images/arts.jpeg",
      description: "S Inspire acknowledges the importance of arts and culture in shaping society and supports initiatives that promote artistic activities."
    },
    // Add more sectors here
  ];
</script>

<section id="sectors" class="py-24 px-6 bg-gray-50">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        Diverse Opportunities For The Young Generation
      </h2>
      <p class="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
        Creating opportunities across multiple sectors, we empower young people with unique pathways for growth
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each sectors as sector}
        <div class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
          <div class="relative h-64 overflow-hidden">
            <img src={sector.image} 
                 alt={sector.title} 
                 class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                 loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold mb-4 text-gray-900">{sector.title}</h3>
            <p class="text-gray-600 leading-relaxed">{sector.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>