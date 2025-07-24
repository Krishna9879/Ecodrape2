const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Eco-Printing: A Sustainable Journey",
      excerpt: "Discover the ancient technique of eco-printing and how it's revolutionizing sustainable fashion...",
      image: "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      date: "March 15, 2025",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Natural Dyeing: Colors from Mother Earth",
      excerpt: "Learn about the beautiful colors we can extract from plants, flowers, and natural materials...",
      image: "https://images.pexels.com/photos/4992830/pexels-photo-4992830.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      date: "March 10, 2025",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Sustainable Fashion: Why It Matters",
      excerpt: "Understanding the impact of fast fashion and how sustainable alternatives can make a difference...",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      date: "March 5, 2025",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Behind the Scenes: Our Printing Process",
      excerpt: "Take a look inside our studio and see how each unique piece comes to life through eco-printing...",
      image: "https://images.pexels.com/photos/7679746/pexels-photo-7679746.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      date: "February 28, 2025",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Caring for Your Eco-Printed Garments",
      excerpt: "Tips and tricks to ensure your naturally dyed clothing maintains its beauty for years to come...",
      image: "https://images.pexels.com/photos/5836962/pexels-photo-5836962.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      date: "February 22, 2025",
      readTime: "3 min read"
    },
    {
      id: 6,
      title: "The Story of Each Leaf: Nature's Unique Patterns",
      excerpt: "How every leaf tells a different story and creates unique patterns in our eco-printing process...",
      image: "https://images.pexels.com/photos/7679726/pexels-photo-7679726.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      date: "February 18, 2025",
      readTime: "5 min read"
    }
  ]

  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 animate-slide-up">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            Stories, insights, and inspiration from the world of sustainable fashion and eco-printing
          </p>
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12 animate-fade-in">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="mb-4">
                <span className="bg-sage-100 text-sage-800 px-3 py-1 rounded-full text-sm font-medium">
                  Featured Post
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{blogPosts[0].date} • {blogPosts[0].readTime}</span>
                <button className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <button className="w-full bg-earth-500 hover:bg-earth-600 text-white py-2 rounded-full font-medium transition-colors duration-300">
                  Read Article
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-sage-600 rounded-lg p-8 text-center animate-slide-up">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-sage-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest updates on sustainable fashion, 
            eco-printing techniques, and new blog posts delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-full focus:outline-none focus:ring-2 focus:ring-sage-300"
            />
            <button className="bg-earth-500 hover:bg-earth-600 text-white px-6 py-3 rounded-r-full font-medium transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog