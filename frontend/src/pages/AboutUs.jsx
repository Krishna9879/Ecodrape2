import aboutimg1 from '../assets/aboutimg1.jpg'
import aboutimg2 from '../assets/aboutimg2.jpg'
import aboutimg3 from '../assets/aboutimg3.jpg'
import aboutimg4 from '../assets/aboutimg4.jpg'
import aboutimg5 from '../assets/aboutimg5.jpg'
import aboutimg6 from '../assets/aboutimg6.jpg'

const AboutUs = () => {
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
      content: "Once the fabric is ready, it's stitched into scarves, dresses, tops, or accessories. Each product is crafted to preserve the beauty of the print and its placement. We design minimal silhouettes to let the natural art speak for itself. Every finished piece is not just wearable — it's a story of the Earth, told in color and texture."
    }
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Natural materials for eco printing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">About Eco Drape</h1>
            <p className="text-xl md:text-2xl text-gray-200">Where Nature Meets Fashion</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 animate-slide-up">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            At Eco Drape, we believe that fashion should tell a story — not just of style, but of sustainability, 
            craftsmanship, and respect for nature. Our journey began with a simple yet profound realization: 
            the most beautiful patterns already exist in nature, waiting to be discovered and shared.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {processSteps.map((step, index) => (
            <div key={index} className={`mb-16 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row items-center gap-12`}>
              <div className="lg:w-1/2 animate-slide-in-left">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-80 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="lg:w-1/2 animate-slide-in-right">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-sage-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 animate-slide-up">
            Our Mission
          </h2>
          <p className="text-xl text-sage-100 leading-relaxed mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            We are committed to creating beautiful, sustainable fashion that honors both the artisan and the earth. 
            Every piece we make is a testament to the belief that fashion can be a force for good — 
            supporting local communities, preserving traditional techniques, and protecting our environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
              <h3 className="text-xl font-semibold text-white mb-3">Sustainability</h3>
              <p className="text-sage-200">Zero waste production using only natural, biodegradable materials</p>
            </div>
            <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
              <h3 className="text-xl font-semibold text-white mb-3">Artistry</h3>
              <p className="text-sage-200">Preserving traditional crafts while embracing innovation</p>
            </div>
            <div className="animate-slide-up" style={{animationDelay: '0.5s'}}>
              <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
              <p className="text-sage-200">Supporting local artisans and ethical production practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 animate-slide-up">
            Join Our Journey
          </h2>
          <p className="text-lg text-gray-600 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Every purchase supports sustainable fashion and helps preserve traditional craftsmanship. 
            Together, we can make fashion more beautiful, more meaningful, and more sustainable.
          </p>
          <button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 transform hover:scale-105 animate-slide-up" style={{animationDelay: '0.4s'}}>
            Explore Our Collection
          </button>
        </div>
      </section>
    </div>
  )
}

export default AboutUs