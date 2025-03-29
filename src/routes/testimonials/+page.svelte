<script>
  import { siteData } from '$lib/data/site';

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Education Innovator",
      organization: "Delhi Public Schools",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800",
      imageCredit: "Christina @ wocintechchat.com",
      quote: "Working with S-Inspire has been transformative for our educational initiatives. Their innovative approach to blending technology with traditional learning methods has helped us reach over 5,000 students across rural India. The impact we've seen on student engagement and learning outcomes has been remarkable. Their dedication to quality and continuous improvement sets them apart.",
      impact: "Implemented digital learning programs reaching 5000+ students",
      rating: 5
    },
    {
      name: "Mohammed Rizwan",
      role: "Agricultural Entrepreneur",
      organization: "Green Fields Initiative",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800",
      imageCredit: "Clem Onojeghuo",
      quote: "S-Inspire's agricultural sustainability program provided the perfect foundation for our farming cooperative. Their expertise in combining traditional farming wisdom with modern sustainable practices helped us increase crop yields by 40% while reducing water consumption. The mentorship and support we received went far beyond our expectations. They truly care about creating lasting impact in rural communities.",
      impact: "40% increase in crop yield, 30% reduction in water usage",
      rating: 5
    },
    {
      name: "Sarah Thomas",
      role: "Youth Development Coordinator",
      organization: "Future Leaders Foundation",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=800",
      imageCredit: "Tamarcus Brown",
      quote: "The youth empowerment program developed by S-Inspire has been a game-changer for our community. We've seen remarkable transformations in young people who previously lacked direction. The comprehensive approach, combining skill development with mental wellness and career guidance, has helped over 200 youth secure meaningful employment. The ripple effect on their families and our community has been profound.",
      impact: "200+ youth placed in sustainable career paths",
      rating: 5
    },
    {
      name: "Raj Malhotra",
      role: "Tech Entrepreneur",
      organization: "InnovateHub",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800",
      imageCredit: "Foto Sushi",
      quote: "S-Inspire's incubation program provided exactly what our startup needed. Their holistic approach to entrepreneurship development, focusing not just on business skills but also on sustainable practices and social impact, helped us build a more resilient business model. The networking opportunities and mentor connections were invaluable. Two years later, we've scaled from a team of 3 to 30, and our social impact metrics have exceeded all expectations.",
      impact: "Scaled team from 3 to 30, reaching 100k+ beneficiaries",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Success Stories" },
    { number: "50+", label: "Partner Organizations" },
    { number: "15+", label: "States Reached" },
    { number: "100k+", label: "Lives Impacted" }
  ];
</script>

<svelte:head>
  <title>Success Stories | {siteData.name}</title>
  <meta name="description" content="Discover how S-Inspire Global Ventures is transforming lives and communities through innovation and sustainable development.">
</svelte:head>

<div class="pt-24 pb-16">
  <!-- Hero Section -->
  <div class="relative h-[60vh] mb-16">
    <img 
      src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1920"
      alt="Diverse group of people collaborating" 
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
    <div class="absolute inset-0 flex items-center justify-center text-center">
      <div class="max-w-3xl px-6">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">Success Stories</h1>
        <p class="text-xl text-gray-200">
          Real stories of transformation and impact from our community
        </p>
      </div>
    </div>
    <div class="absolute bottom-4 right-4 text-white/70 text-sm">
      Photo by <a href="https://unsplash.com/@krakenimages" class="underline">Krakenimages on Unsplash</a>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-6">
    <!-- Stats Section -->
    <div class="mb-24">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        {#each stats as stat}
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
            <div class="text-gray-600">{stat.label}</div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Testimonials Grid -->
    <div class="space-y-24">
      {#each testimonials as testimonial, i}
        <div class="grid md:grid-cols-2 gap-12 items-center {i % 2 === 1 ? 'md:flex-row-reverse' : ''}">
          <div class="relative">
            <div class="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full"></div>
            <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full"></div>
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              class="relative rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover"
            />
            <div class="absolute bottom-4 right-4 text-white/70 text-xs">
              Photo by {testimonial.imageCredit}
            </div>
          </div>
          <div class="space-y-6">
            <div class="flex gap-1 mb-4">
              {#each Array(testimonial.rating) as _}
                <i class="fas fa-star text-yellow-400"></i>
              {/each}
            </div>
            <blockquote class="text-xl text-gray-600 italic leading-relaxed">
              "{testimonial.quote}"
            </blockquote>
            <div class="pt-6 border-t border-gray-100">
              <div class="font-bold text-xl mb-1">{testimonial.name}</div>
              <div class="text-blue-500">{testimonial.role}</div>
              <div class="text-gray-500">{testimonial.organization}</div>
            </div>
            <div class="bg-blue-50 p-4 rounded-xl">
              <div class="font-medium text-blue-700">Impact Highlight:</div>
              <div class="text-blue-600">{testimonial.impact}</div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- CTA Section -->
    <div class="mt-24 text-center">
      <h2 class="text-3xl font-bold mb-6">Ready to Write Your Success Story?</h2>
      <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
        Join our community of changemakers and be part of the transformation journey.
      </p>
      <a 
        href="/contact" 
        class="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition transform hover:scale-105"
      >
        <i class="fas fa-handshake"></i>
        <span>Partner With Us</span>
      </a>
    </div>
  </div>
</div>