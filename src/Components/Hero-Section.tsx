

export function HeroSection() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Discover & Collect
            <br />
            <span className="text-yellow-400">Super Rare</span> Digital
            <br />
            Artworks
          </h1>
          <p className="max-w-[600px] text-gray-400 md:text-xl">
            The largest NFT marketplace. Authentic and truly unique digital creation. Signed and issued by the creator, made possible by blockchain technology
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700">
              Let's Explore
            </button>
            <button >
              Sell NFT
            </button>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="Metamask"
              width={40}
              height={40}
              className="rounded-full"
            />
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="Binance"
              width={40}
              height={40}
              className="rounded-full"
            />
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="Coinbase"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-[300px] h-[400px]">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Featured NFT"
                width={300}
                height={400}
                className="rounded-lg shadow-2xl rotate-12"
              />
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Featured NFT"
                width={300}
                height={400}
                className="absolute top-0 left-0 rounded-lg shadow-2xl -rotate-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

