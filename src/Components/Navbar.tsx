// import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-8">
          <a href="#" className="text-xl font-bold">
            NFTKING
          </a>
          <div className="hidden md:flex gap-6">
            <a href="#" className="text-sm ">
              Marketplace
            </a>
            <a href="#" className="text-sm ">
              Creators
            </a>
            <a href="#" className="text-sm ">
              Community
            </a>
          </div>
        </div>
        <button  className="bg-blue-600 hover:bg-blue-700">
          Connect Wallet
        </button>
      </div>
    </nav>
  )
}

