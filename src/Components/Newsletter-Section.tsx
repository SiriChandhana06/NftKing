

export function NewsletterSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Never miss a drop!</h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our super-exclusive drop list and be the first to know about upcoming drops
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-gray-800 border-gray-700"
            />
            <button className="bg-blue-600 hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

