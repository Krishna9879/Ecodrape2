import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

  // Product data - includes all women's products
  const productData = {
    // Original products
    1: {
      id: 1,
      name: "Botanical Silk Scarf",
      price: "₹2,999",
      description: "A luxurious silk scarf featuring delicate leaf prints created through our eco-printing process. Each piece is unique, showcasing the natural beauty of botanical elements pressed into the fabric.",
      images: ["/assets/aboutimg1.jpg", "/assets/aboutimg2.jpg", "/assets/aboutimg3.jpg"],
      sizes: ["One Size"],
      materials: "100% Natural Silk",
      careInstructions: "Hand wash in cold water, air dry in shade",
      dimensions: "90cm x 90cm",
      features: ["100% Natural Silk", "Eco-printed with real leaves", "Zero chemical dyes", "Handcrafted", "Unique pattern - no two pieces alike"]
    },
    2: {
      id: 2,
      name: "Eco Print Cotton Dress",
      price: "₹4,499",
      description: "A flowing cotton dress adorned with beautiful botanical prints. The natural dyeing process creates stunning, earthy tones that celebrate the beauty of nature.",
      images: ["/assets/aboutimg4.jpg", "/assets/aboutimg5.jpg", "/assets/aboutimg6.jpg"],
      sizes: ["XS", "S", "M", "L", "XL"],
      materials: "100% Organic Cotton",
      careInstructions: "Machine wash cold, tumble dry low",
      dimensions: "Various lengths available",
      features: ["100% Organic Cotton", "Natural botanical prints", "Comfortable fit", "Sustainable production", "Breathable fabric"]
    },
    3: {
      id: 3,
      name: "Linen Eco Print Top",
      price: "₹3,299",
      description: "A breathable linen top with stunning leaf impressions. Perfect for casual wear, this piece combines comfort with sustainable fashion.",
      images: ["/assets/aboutimg1.jpg", "/assets/aboutimg3.jpg", "/assets/aboutimg5.jpg"],
      sizes: ["XS", "S", "M", "L", "XL"],
      materials: "100% Pure Linen",
      careInstructions: "Hand wash preferred, iron while damp",
      dimensions: "Regular fit",
      features: ["100% Pure Linen", "Breathable fabric", "Natural leaf prints", "Eco-friendly dyeing", "Comfortable casual wear"]
    },
    // Women's New Arrivals
    33: {
      id: 33,
      name: "Botanical Print Maxi Dress",
      price: "₹7,599",
      description: "Flowing maxi with hand-printed leaves. This elegant dress features intricate botanical patterns created through our sustainable eco-printing process.",
      images: ["/assets/img33.jpg", "/assets/aboutimg1.jpg", "/assets/aboutimg2.jpg"],
      sizes: ["XS", "S", "M", "L", "XL"],
      materials: "100% Organic Cotton",
      careInstructions: "Hand wash cold, air dry",
      dimensions: "Floor length maxi dress",
      features: ["Hand-printed botanical designs", "Organic cotton fabric", "Sustainable production", "Unique eco-print patterns", "Comfortable fit"]
    },
    34: {
      id: 34,
      name: "Organic Silk Blouse",
      price: "₹7,199",
      description: "Luxurious silk with floral eco-prints. This sophisticated blouse combines elegance with sustainability.",
      images: ["/assets/img34.jpg", "/assets/aboutimg3.jpg", "/assets/aboutimg4.jpg"],
      sizes: ["XS", "S", "M", "L", "XL"],
      materials: "100% Peace Silk",
      careInstructions: "Dry clean or hand wash cold",
      dimensions: "Regular fit blouse",
      features: ["Peace silk fabric", "Floral eco-prints", "Professional styling", "Sustainable luxury", "Wrinkle resistant"]
    },
    35: {
      id: 35,
      name: "Natural Cotton Cardigan",
      price: "₹5,799",
      description: "Cozy cardigan with botanical patterns. Perfect for layering with sustainable style.",
      images: ["/assets/img35.jpg", "/assets/aboutimg5.jpg", "/assets/aboutimg6.jpg"],
      sizes: ["XS", "S", "M", "L", "XL"],
      materials: "100% Organic Cotton",
      careInstructions: "Machine wash cold, lay flat to dry",
      dimensions: "Regular fit cardigan",
      features: ["Organic cotton knit", "Botanical print details", "Open front design", "Sustainable materials", "All-season wear"]
    },
    36: {
      id: 36,
      name: "Eco-Printed Wrap Top",
      price: "₹4,699",
      description: "Versatile wrap top with nature prints. This flattering design works for both casual and dressy occasions.",
      images: ["/assets/img36.jpg", "/assets/aboutimg1.jpg", "/assets/aboutimg3.jpg"],
      sizes: ["XS", "S", "M", "L", "XL"],
      materials: "100% Natural Cotton",
      careInstructions: "Hand wash cold, air dry",
      dimensions: "Wrap style top",
      features: ["Wrap design", "Nature-inspired prints", "Versatile styling", "Natural cotton fabric", "Eco-friendly dyeing"]
    },
    37: {
      id: 37,
      name: "Organic Linen Skirt",
      price: "₹5,499",
      description: "Elegant skirt with natural dye patterns. This midi-length skirt features beautiful earth-tone botanical prints.",
      images: ["/assets/img37.jpg", "/assets/aboutimg2.jpg", "/assets/aboutimg4.jpg"],
      sizes: ["XS", "S", "M", "L", "XL"],
      materials: "100% Organic Linen",
      careInstructions: "Hand wash, iron while damp",
      dimensions: "Midi length skirt",
      features: ["Organic linen fabric", "Natural dye patterns", "A-line silhouette", "Breathable material", "Timeless design"]
    }
    // Continue with more products as needed...
  };

  const product = productData[productId];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light text-neutral-800 mb-4">Product not found</h2>
          <button 
            onClick={() => navigate('/catalog')}
            className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Back to Catalog
          </button>
        </div>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    if (product.sizes.length > 1 && !selectedSize) {
      alert('Please select a size before ordering');
      return;
    }
    
    const message = `Hi! I'm interested in ordering the ${product.name} (${product.price})${selectedSize ? ` in size ${selectedSize}` : ''}. Please provide more details about availability and shipping.`;
    const phoneNumber = "919876543210"; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-sage-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <nav className="flex items-center space-x-2 text-sm text-neutral-600">
          <button onClick={() => navigate('/')} className="hover:text-emerald-600 transition-colors">
            Home
          </button>
          <span>/</span>
          <button onClick={() => navigate('/catalog')} className="hover:text-emerald-600 transition-colors">
            Catalog
          </button>
          <span>/</span>
          <span className="text-neutral-800">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-neutral-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Image Thumbnails */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                      selectedImage === index 
                        ? 'ring-2 ring-emerald-600 shadow-lg' 
                        : 'hover:shadow-md opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-light text-neutral-800 mb-4">
                {product.name}
              </h1>
              <div className="w-16 h-0.5 bg-emerald-600 mb-6"></div>
              <p className="text-3xl font-light text-emerald-600 mb-6">
                {product.price}
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            {product.sizes.length > 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-neutral-800">Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                        selectedSize === size
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                          : 'border-neutral-300 hover:border-emerald-400 text-neutral-700'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {!selectedSize && (
                  <p className="text-sm text-neutral-500">Please select a size</p>
                )}
              </div>
            )}

            {/* Order Button */}
            <div className="space-y-4">
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Order on WhatsApp</span>
              </button>
            </div>

            {/* Product Details */}
            <div className="space-y-6 pt-8 border-t border-neutral-200">
              <div>
                <h3 className="text-xl font-medium text-neutral-800 mb-3">Product Details</h3>
                <div className="space-y-2 text-neutral-600">
                  <p><span className="font-medium">Materials:</span> {product.materials}</p>
                  <p><span className="font-medium">Dimensions:</span> {product.dimensions}</p>
                  <p><span className="font-medium">Care:</span> {product.careInstructions}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-neutral-800 mb-3">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-neutral-600">
                      <svg className="w-4 h-4 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-neutral-600 hover:text-emerald-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Previous Page</span>
            </button>
          </div>
        </div>

        {/* Related Products Section (Optional) */}
        <div className="mt-24 pt-12 border-t border-neutral-200">
          <h2 className="text-3xl font-light text-neutral-800 text-center mb-12">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* You can add related products here */}
            <div className="text-center text-neutral-500">
              <p>Related products will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;