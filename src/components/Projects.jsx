import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaUserTie, FaChevronLeft, FaChevronRight, FaSearch } from 'react-icons/fa';
import { IoMdHeartEmpty } from "react-icons/io";
import { CgArrowsExchange } from "react-icons/cg";
import moment from 'moment';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const NextArrow = ({ onClick }) => (
  <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all" onClick={onClick}>
    <FaChevronRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all" onClick={onClick}>
    <FaChevronLeft />
  </div>
);

const Projects = () => {
  const [properties, setProperties] = useState([]);
  const [allProperties, setAllProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageLoading, setImageLoading] = useState({});
  const [activeCity, setActiveCity] = useState('Dubai');
  const [searchQuery, setSearchQuery] = useState('');

  const handleImageLoad = (imageId) => {
    setImageLoading(prev => ({
      ...prev,
      [imageId]: false
    }));
  };

  const fetchProperties = async (filterValue = '') => {
    try {
      setLoading(true);
      const url = '/api/properties';
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setAllProperties(data);

      if (filterValue) {
        const filteredData = data.filter(property =>
          property.title.toLowerCase().includes(filterValue.toLowerCase()) ||
          property.description.toLowerCase().includes(filterValue.toLowerCase()) ||
          property.address.toLowerCase().includes(filterValue.toLowerCase())
        );
        setProperties(filteredData);
      } else {
        setProperties(data);
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filteredData = allProperties.filter(property =>
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setProperties(filteredData);
    } else {
      setProperties(allProperties);
    }
  }, [searchQuery, allProperties]);

  const handleCityClick = (city) => {
    setActiveCity(city);
    setSearchQuery('');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots !bottom-2",
    customPaging: () => (
      <div className="w-2 h-2 bg-white/50 rounded-full mt-2" />
    ),
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const cities = ['Abhu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'Ras Al Khaima'];

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchProperties(searchQuery.trim() || activeCity);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery, activeCity]);

  return (
    <section className="container mx-auto py-6 sm:py-8 md:py-12 px-3 sm:px-4">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-10 text-center">Browse New Projects in the UAE</h2>

   
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
        {cities.map((city) => (
          <button
            key={city}
            className={`px-3 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base rounded-md transition ${activeCity === city && !searchQuery ? 'bg-[#284e7e] text-white hover:bg-blue-700' : 'border border-gray-300 hover:bg-gray-100'}`}
            onClick={() => handleCityClick(city)}
          >
            {city}
          </button>
        ))}
      </div>

    
      <form 
        onSubmit={handleSearchSubmit} 
        className="max-w-2xl mx-auto mb-6 sm:mb-10"
      >
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search properties..."
            className="w-full px-3 sm:px-4 py-2 sm:py-3 pl-10 sm:pl-12 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <FaSearch className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#284e7e] text-white px-3 sm:px-4 py-1 sm:py-1.5 text-sm sm:text-base rounded-md hover:bg-blue-700 transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {loading && (
        <div className="flex justify-center items-center mt-8 sm:mt-12">
          <div className="animate-spin rounded-full h-10 sm:h-14 w-10 sm:w-14 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      )}

      {!loading && !error && (
        properties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {properties.map((property, index) => (
              <div
                key={property.id || property._id}
                className="bg-white rounded-md border border-gray-200 overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-lg"
                style={{
                  borderRadius: "16px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                }}
              >
                <div className="relative h-48 sm:h-56 md:h-64">
                  <style jsx global>{`
                    .slick-slider {
                      height: 100%;
                    }
                    .slick-list, .slick-track {
                      height: 100%;
                    }
                    .slick-slide > div {
                      height: 100%;
                    }
                    .slick-dots {
                      bottom: 8px;
                      z-index: 10;
                    }
                    .slick-dots li button:before {
                      color: white;
                      opacity: 0.5;
                      font-size: 8px;
                    }
                    .slick-dots li.slick-active button:before {
                      color: white;
                      opacity: 1;
                    }
                    .slick-prev, .slick-next {
                      z-index: 10;
                    }
                    .slick-prev:before, .slick-next:before {
                      display: none;
                    }
                  `}</style>
                  <Slider {...sliderSettings}>
                    {property.images?.map((image, index) => {
                      const imageId = `${property.id}-${index}`;
                      return (
                        <div key={index} className="h-48 sm:h-56 md:h-64 relative">
                          {imageLoading[imageId] !== false && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                              <div className="animate-spin rounded-full h-6 sm:h-8 w-6 sm:w-8 border-4 border-blue-500 border-t-transparent"></div>
                            </div>
                          )}
                          <img
                            src={image}
                            alt={`${property.title} - Image ${index + 1}`}
                            className="w-full h-48 sm:h-56 md:h-64 object-cover"
                            onLoad={() => handleImageLoad(imageId)}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = '/placeholder.jpg';
                              handleImageLoad(imageId);
                            }}
                          />
                        </div>
                      );
                    })}
                  </Slider>
                  {property.verified && (
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-green-600 text-white text-xs font-semibold px-2 sm:px-4 py-0.5 sm:py-1 rounded flex items-center gap-1 z-20" style={{ borderBottomRightRadius: "20px" }}>
                      Verified
                    </div>
                  )}
                </div>

                <div className="p-3 sm:p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-black line-clamp-1">{property.title}</h3>
                    <p className="text-base sm:text-lg font-bold text-gray-900">
                      ₹ {property.price.toLocaleString()}
                    </p>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm mb-2 sm:mb-3 flex-grow line-clamp-2">{property.description}</p>
                  <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                      <p className="text-xs text-gray-800">{property.condition}</p>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                      <p className="text-xs text-gray-800">{property.type}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <div className="p-1.5 sm:p-2 bg-gray-100 border border-gray-200 rounded-xm">
                        <FaUserTie className="text-gray-600 text-sm sm:text-base" />
                      </div>
                      <div>
                        <p className='text-xs text-gray-500'>
                          <span className='text-xs text-gray-700' style={{ textTransform: "capitalize" }}>
                            {property.postedBy}
                          </span>
                          : {moment(property.posted).fromNow()}
                        </p>
                        <p>
                          <span className='text-xs font-bold text-black' style={{ textTransform: "capitalize" }}>
                            {property.seller?.name || property.postedBy}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm mb-2 sm:mb-3 pt-2 sm:pt-3 border-t border-gray-300">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <FaMapMarkerAlt className="text-black text-sm sm:text-base" />
                      <span className="text-black font-medium line-clamp-1">{property.address}</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <IoMdHeartEmpty className="text-black text-lg sm:text-xl hover:text-red-500 cursor-pointer transition-colors" />
                      <CgArrowsExchange className="text-black text-lg sm:text-xl hover:text-gray-600 cursor-pointer transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-8 sm:mt-16 text-gray-600">
            <div className="text-7xl sm:text-8xl md:text-9xl mb-6 sm:mb-8">🏠</div>
            <p className="text-base sm:text-lg font-medium">No properties were found matching your criteria.</p>
          </div>
        )
      )}
    </section>
  );
};

export default Projects;
