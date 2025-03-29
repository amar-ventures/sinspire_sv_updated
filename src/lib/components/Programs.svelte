<script>
  const programs = [
    {
      icon: "fa-person-walking-luggage",
      title: "Youth Employment Initiatives",
      description: "Internships, apprenticeships, and job placement services, providing practical experience and networking opportunities."
    },
    {
      icon: "fa-chalkboard",
      title: "Educational Engagements",
      description: "Partnerships with schools, colleges, and online learning platforms, offering various educational opportunities."
    },
    // Add more programs
  ];
</script>

<section id="programs" class="py-24 px-6 bg-white">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        Key Programs
      </h2>
      <p class="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
        Empowering through focused initiatives and sustainable programs
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each programs as program}
        <div class="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
          <div class="mb-6 text-blue-500 bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition duration-500">
            <i class="fa-solid {program.icon} text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-gray-900">{program.title}</h3>
          <p class="text-gray-600 leading-relaxed">{program.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>