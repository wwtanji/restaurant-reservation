export default function MainText() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f59e0b] to-[#ef4444] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-4xl py-12 px-4 sm:py-16 md:py-24 lg:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="mx-auto max-w-fit rounded-full border border-gray-200 bg-white px-3 py-1 text-xs leading-5 text-gray-600 shadow-sm mb-6 sm:mb-8">
              🎉 Simplifying event venue reservations for everyone
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
              Transform How You 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Reserve Event Spaces
              </span>
            </h1>
            
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9 max-w-3xl mx-auto px-4">
              Whether you're organizing business meetings, celebrations, or company parties, 
              find and reserve the perfect restaurant venue effortlessly. We connect event organizers 
              with restaurants to maximize space utilization and create memorable experiences.
            </p>

            {/* Dual CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <a
                href="#"
                className="w-full sm:w-auto rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 sm:px-8 text-sm sm:text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Find Event Venues
              </a>
              <a
                href="#"
                className="w-full sm:w-auto rounded-lg border-2 border-gray-300 bg-white px-6 py-3 sm:px-8 text-sm sm:text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
              >
                List Your Restaurant
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 sm:mt-12 text-center px-4">
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                Trusted by event organizers and restaurants across the city
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-gray-400">
                <div className="flex items-center space-x-2">
                  <span className="text-xl sm:text-2xl">🏢</span>
                  <span className="text-xs sm:text-sm font-medium">500+ Venues</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl sm:text-2xl">🎪</span>
                  <span className="text-xs sm:text-sm font-medium">10K+ Events</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl sm:text-2xl">⭐</span>
                  <span className="text-xs sm:text-sm font-medium">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          <div className="mx-auto max-w-2xl lg:text-center mb-12 sm:mb-16">
            <h2 className="text-sm sm:text-base font-semibold leading-7 text-orange-600">Everything you need</h2>
            <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Streamlined venue booking for every occasion
            </p>
            <p className="mt-4 sm:mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 px-4">
              Our platform bridges the gap between event organizers and restaurants, 
              making venue reservation fast, efficient, and hassle-free.
            </p>
          </div>

          <div className="mx-auto max-w-2xl sm:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {/* For Event Organizers */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center">
                  <span className="text-xl sm:text-2xl mr-3">🎯</span>
                  For Event Organizers
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-medium text-gray-900">Advanced Search & Filtering</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Find venues by capacity, cuisine, location, and amenities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-medium text-gray-900">Instant Booking & Confirmation</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Skip lengthy negotiations and book venues immediately</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-medium text-gray-900">Secure Online Payments</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Handle deposits and payments securely through our platform</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* For Restaurants */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center">
                  <span className="text-xl sm:text-2xl mr-3">🍽️</span>
                  For Restaurants
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-medium text-gray-900">Maximize Space Utilization</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Fill empty slots and increase revenue during off-peak hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-medium text-gray-900">Comprehensive Reservation Management</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Track bookings, manage availability, and handle cancellations</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-medium text-gray-900">Direct Access to Event Market</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Connect with corporate clients and event organizers easily</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#f59e0b] to-[#ef4444] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
