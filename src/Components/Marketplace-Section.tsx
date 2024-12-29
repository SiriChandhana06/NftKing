

const categories = [
  "Collections",
  "Art",
  "Gaming",
  "Sports",
  "Photography",
  "Music",
  "Virtual Worlds",
  "Trading Cards",
]

const items = [
  {
    id: "1",
    title: "Inception",
    price: "0.8 ETH",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "2",
    title: "Sink Love",
    price: "1.4 ETH",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "3",
    title: "Moonshine",
    price: "0.5 ETH",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "4",
    title: "Petition",
    price: "1.3 ETH",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "5",
    title: "Metamorph",
    price: "1.0 ETH",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "6",
    title: "Castel Sand",
    price: "0.7 ETH",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "7",
    title: "Nuckle",
    price: "1.3 ETH",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "8",
    title: "Inoublast",
    price: "1.1 ETH",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export function MarketplaceSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Explore Marketplace</h2>
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
            //   variant="outline"
              className="flex-shrink-0 rounded-full"
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-lg bg-gray-900 p-3"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                //   fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.price}</p>
              <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700">
                Collect Now
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button >View More</button>
        </div>
      </div>
    </section>
  )
}

