

const creators = [
  {
    id: "1",
    name: "Holostar",
    followers: "27.2K",
    image: "/placeholder.svg?height=100&width=100",
    isFollowing: true,
  },
  {
    id: "2",
    name: "Tukiyo",
    followers: "21.6K",
    image: "/placeholder.svg?height=100&width=100",
    isFollowing: false,
  },
  {
    id: "3",
    name: "Akaikaz",
    followers: "14.9K",
    image: "/placeholder.svg?height=100&width=100",
    isFollowing: true,
  },
  {
    id: "4",
    name: "Yue Jun",
    followers: "11.3K",
    image: "/placeholder.svg?height=100&width=100",
    isFollowing: false,
  },
]

export function CreatorSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Top List Creator</h2>
        <div className="flex gap-2 mb-8">
          <button className="bg-blue-600 hover:bg-blue-700">
            Popular
          </button>
          <button >Following</button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {creators.map((creator) => (
            <div
              key={creator.id}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0">
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Background"
                //   fill
                  className="object-cover opacity-50"
                />
              </div>
              <div className="relative p-6">
                <img
                  src={creator.image}
                  alt={creator.name}
                  width={60}
                  height={60}
                  className="rounded-full mb-4"
                />
                <h3 className="font-semibold text-white">{creator.name}</h3>
                <p className="text-sm text-gray-300 mb-4">{creator.followers} Followers</p>
                <button
                //   variant={creator.isFollowing ? "outline" : "default"}
                  className="w-full"
                >
                  {creator.isFollowing ? "Followed" : "Follow"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

