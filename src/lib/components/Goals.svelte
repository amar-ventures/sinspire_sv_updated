<script>
  const goals = [
    {
      number: "01",
      title: "Expansion into new markets",
      description: "S Inspire plans to expand its operations into both domestic and international markets, creating wider opportunities for young talent."
    },
    {
      number: "02",
      title: "Enhancement of digital platforms",
      description: "By improving digital platforms and incorporating AI-driven solutions, S Inspire aims to provide more accessible resources for young people."
    },
    {
      number: "03",
      title: "Increased focus on sustainability",
      description: "We're committed to incorporating sustainable development practices across all our initiatives and programs."
    },
    {
      number: "04",
      title: "Policy advocacy",
      description: "S Inspire intends to actively participate in promoting policies that support youth development and social welfare."
    },
    {
      number: "05",
      title: "Strengthening Global Networks",
      description: "Building strong relationships with international organizations, think tanks, and academic institutions to create global opportunities."
    }
  ];
</script>

<section id="goals" class="py-24 px-6 bg-gray-50">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        Future Goals
      </h2>
      <p class="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
        Our roadmap for creating lasting impact and sustainable growth
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each goals as { number, title, description }}
        <div class="group relative h-[320px]">
          <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
          <div class="relative p-8 bg-white rounded-2xl h-full flex flex-col">
            <div class="text-5xl font-bold text-blue-500/20 mb-4">{number}</div>
            <h4 class="text-2xl font-bold mb-4 text-gray-900">{title}</h4>
            <p class="text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>