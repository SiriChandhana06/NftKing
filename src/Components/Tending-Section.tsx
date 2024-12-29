

interface TrendingCard {
  id: string
  title: string
  price: string
  image: string
}

const trendingItems: TrendingCard[] = [
  {
    id: "1",
    title: "Miles Grogosters",
    price: "4.99 ETH",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "2",
    title: "Reox Fancxy",
    price: "3.27 ETH",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "3",
    title: "Miles Grogosters",
    price: "4.20 ETH",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "4",
    title: "Tuinz Rey",
    price: "2.99 ETH",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export function TrendingSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Trending This Week</h2>
        <p className="text-gray-400 mb-12">
          Various kinds of artwork categories that are trending this week. The trend will be reset every week. Don't miss out on the best artworks every week
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trendingItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg bg-gray-900">
              <img
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                className="w-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.price}</p>
                <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700">
                  Collect Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

