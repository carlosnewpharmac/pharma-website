export default function StatsSection() {
  return (
    <section className="bg-pharma-blue py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-blue-100">Years Experience</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">200+</div>
            <div className="text-blue-100">Successful Projects</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-blue-100">Global Clients</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-blue-100">Compliance Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
