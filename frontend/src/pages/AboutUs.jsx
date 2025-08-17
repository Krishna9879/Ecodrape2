import React from 'react';
import { useNavigate } from 'react-router-dom';

// Images from public/assets folder
const aboutimg1 = '/assets/aboutimg1.jpg';
const aboutimg2 = '/assets/aboutimg2.jpg';
const aboutimg3 = '/assets/aboutimg3.jpg';
const aboutimg4 = '/assets/aboutimg4.jpg';
const aboutimg5 = '/assets/aboutimg5.jpg';
const aboutimg6 = '/assets/aboutimg6.jpg';
const heroImage = '/assets/hero_img17.jpg'; // Updated hero image

const AboutUs = () => {
  const navigate = useNavigate();

  const processSteps = [
    {
      title: "Collection of Natural Materials",
      image: aboutimg1,
      content: "I begin with gathering fallen leaves, flower petals, bark, onion skins, and other natural elements from our surroundings. These materials are carefully chosen based on their color potential and imprint strength. Each plant brings its own unique texture, pigment, and story to the fabric. This step reflects our deep respect for nature and its seasonal offerings."
    },
    {
      title: "Fabric Preparation",
      image: aboutimg2,
      content: "We use natural fabrics like cotton, silk, and linen — breathable and biodegradable. The fabric is cleaned thoroughly to remove any starch or residue, then soaked in a mordant. Mordants are plant-safe substances (like alum or iron water) that help fix the plant colors onto the fabric. This pre-treatment ensures that every botanical impression stays vivid and long-lasting."
    },
    {
      title: "Arranging the Plants",
      image: aboutimg3,
      content: "Each leaf and flower is carefully arranged by hand, almost like composing a natural artwork. Placement matters — symmetry, flow, and space are all thoughtfully considered. This step is where intuition, patience, and creativity come together. No two arrangements are ever alike, making each fabric a one-of-a-kind creation."
    },
    {
      title: "Steaming the Fabric",
      image: aboutimg4,
      content: "Once arranged, the fabric is rolled tightly and bundled, often wrapped in cotton or paper. It's then steamed for several hours using minimal water — a sustainable alternative to chemical dyeing. The heat allows the pigments and tannins in the leaves to transfer into the fabric fibers. This is the most magical part — where nature literally imprints itself onto the cloth."
    },
    {
      title: "Unwrapping the Magic",
      image: aboutimg5,
      content: "After the steaming, the bundle is slowly opened to reveal the imprints. This is always an exciting moment — the results are unpredictable and organic. Each piece is a surprise, with leaf veins, edges, and colors beautifully transferred. The prints are soft, earthy, and carry the soul of the plant that created them."
    },
    {
      title: "Final Washing & Drying",
      image: aboutimg6,
      content: "The printed fabric is gently washed to remove excess dye or plant residue. We use natural soaps and air-dry the fabric under sunlight — avoiding electricity wherever possible. The colors deepen and settle as the fabric dries, enhancing the botanical patterns. This final wash also ensures the fabric is soft, clean, and ready for use."
    },
    {
      title: "Transformation into Products",
      image: aboutimg3,
      content: "Once the fabric is ready, it's stitched into scarves, dresses, tops, or accessories. Each product is crafted to preserve the beauty of the print and its placement. We design minimal silhouettes to let the natural art speak for itself. Every finished piece is not just wearable — it's a story of the Earth, told in color and texture.",
      product: {
        id: 1,
        name: "Botanical Print Scarf",
        description: "Handcrafted scarf with eco-printed botanical patterns. Made from 100% natural silk and plant pigments. Each scarf is unique, carrying the imprint of real leaves and flowers, and crafted with sustainable practices.",
        price: "89.99"
      }
    }
  ];

  const handleCardClick = (step) => {
    if (step.product) {
      navigate(`/product/${step.product.id}`, { 
        state: { 
          product: {
            ...step.product,
            image: step.image
          } 
        } 
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Enhanced Hero Section */}
      <section className="relative h-[78vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-transparent z-10"></div>
        <img
          src={heroImage}
          alt="Eco-friendly clothing collection"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-6">
          <div className="space-y-6 animate-fadeIn">
            <div className="inline-flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-0.5 bg-emerald-400"></div>
              <span className="text-emerald-400 font-light tracking-widest">SUSTAINABLE FASHION</span>
              <div className="w-12 h-0.5 bg-emerald-400"></div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight">
              About <span className="font-serif italic text-emerald-50">Eco Drape</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-emerald-100 max-w-2xl mx-auto leading-relaxed mt-8">
              Where Nature's Beauty Meets Ethical Fashion
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="pt-10 pb-14 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-800 mb-8">
              Our <span className="font-serif italic text-emerald-600">Story</span>
            </h2>
            <div className="w-16 h-0.5 bg-emerald-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
                At Eco Drape, we believe that fashion should tell a story — not just of style, but of sustainability, 
                craftsmanship, and respect for nature. Our journey began with a simple yet profound realization: 
                the most beautiful patterns already exist in nature, waiting to be discovered and shared.
              </p>
              <div className="pt-8">
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-light text-emerald-600">100%</div>
                    <div className="text-sm uppercase tracking-wider text-neutral-500">Natural</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-light text-emerald-600">Zero</div>
                    <div className="text-sm uppercase tracking-wider text-neutral-500">Waste</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-light text-emerald-600">Hand</div>
                    <div className="text-sm uppercase tracking-wider text-neutral-500">Crafted</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/assets/about_1.jpg"
                  alt="Natural eco printing process"
                  className="block w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-800 mb-8">
              Our <span className="font-serif italic text-emerald-600">Process</span>
            </h2>
            <div className="w-16 h-0.5 bg-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light">
              Every piece tells a story of careful craftsmanship and sustainable practices
            </p>
          </div>

          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} ${step.product ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}`}
                onClick={() => step.product && handleCardClick(step)}
              >
                <div className="lg:w-1/2 relative group">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-xl border border-neutral-100">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-contain p-4 group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center shadow-lg border border-neutral-100">
                    <span className="text-2xl font-light text-emerald-600">{index + 1}</span>
                  </div>
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-light text-neutral-800 leading-tight">
                      {step.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-emerald-600"></div>
                  </div>
                  <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
                    {step.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-36 -translate-x-36"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8">
            Our <span className="font-serif italic text-emerald-100">Mission</span>
          </h2>
          <div className="w-16 h-0.5 bg-white/80 mx-auto mb-12"></div>
          
          <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed mb-16 max-w-4xl mx-auto font-light">
            We are committed to creating beautiful, sustainable fashion that honors both the artisan and the earth. 
            Every piece we make is a testament to the belief that fashion can be a force for good — 
            supporting local communities, preserving traditional techniques, and protecting our environment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                title: "Sustainability",
                description: "Zero waste production using only natural, biodegradable materials",
                icon: "🌱"
              },
              {
                title: "Artistry",
                description: "Preserving traditional crafts while embracing innovation",
                icon: "🎨"
              },
              {
                title: "Community",
                description: "Supporting local artisans and ethical production practices",
                icon: "🤝"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-light text-white mb-4">{item.title}</h3>
                <p className="text-emerald-100 font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-800 mb-8">
            Join Our <span className="font-serif italic text-emerald-600">Journey</span>
          </h2>
          <div className="w-16 h-0.5 bg-emerald-600 mx-auto mb-12"></div>
          
          <p className="text-xl md:text-2xl text-neutral-600 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
            Every purchase supports sustainable fashion and helps preserve traditional craftsmanship. 
            Together, we can make fashion more beautiful, more meaningful, and more sustainable.
          </p>
          
          <button className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-medium text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">Explore Our Collection</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  )
}

export default AboutUs;