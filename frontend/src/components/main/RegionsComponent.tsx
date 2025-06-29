import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegionsComponent: React.FC = () => {
  const navigate = useNavigate();

  const regions = [
    'Bratislavský kraj',
    'Trnavský kraj',
    'Trenčiansky kraj',
    'Nitriansky kraj',
    'Žilinský kraj',
    'Banskobystrický kraj',
    'Prešovský kraj',
    'Košický kraj'
  ];

  const regionRoutes: { [key: string]: string } = {
    'Bratislavský kraj': 'bratislava',
    'Trnavský kraj': 'trnava',
    'Trenčiansky kraj': 'trencin',
    'Nitriansky kraj': 'nitra',
    'Žilinský kraj': 'zilina',
    'Banskobystrický kraj': 'banskabystrica',
    'Prešovský kraj': 'presov',
    'Košický kraj': 'kosice'
  };

  const goToRegion = (regionName: string) => {
    const routeName = regionRoutes[regionName];
    if (routeName) {
      navigate(`/${routeName}`);
    } else {
      console.warn(`No route defined for ${regionName}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
          <div className="col-span-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-black text-transparent bg-clip-text">
              Choose Your Location
            </h1>
          </div>

          <div className="col-span-full mb-10">
            <p className="text-gray-800 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              Reserve tables at over
              <span className="font-semibold text-blue-600"> 8,000 restaurants</span> across
              <span className="font-semibold text-blue-600"> 8 regions</span> in Slovakia.
            </p>
          </div>

          {regions.map((region) => (
            <div
              key={region}
              onClick={() => goToRegion(region)}
              className="group bg-white border border-gray-400 hover:border-blue-500 shadow-sm hover:shadow-md
                rounded-2xl h-20 sm:h-24 p-4 flex items-center justify-center cursor-pointer
                transform transition-all duration-300 hover:-translate-y-2"
            >
              <span className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {region}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegionsComponent; 