export default function FeaturesSection() {
    return (
      <section className="w-full bg-[#FAF4F4] py-16">
        <div className="container mx-auto px-5 md:px-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
            <div className="text-left">
              <h2 className="text-2xl font-semibold text-gray-900">Free Delivery</h2>
              <p className="mt-2 text-gray-500">
                For all oders over $50, consectetur adipim scing elit.
              </p>
            </div>
            
            <div className="text-left">
              <h2 className="text-2xl font-semibold text-gray-900">90 Days Return</h2>
              <p className="mt-2 text-gray-500">
                If goods have problems, consectetur adipim scing elit.
              </p>
            </div>
            
            <div className="text-left">
              <h2 className="text-2xl font-semibold text-gray-900">Secure Payment</h2>
              <p className="mt-2 text-gray-500">
                100% secure payment, consectetur adipim scing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  