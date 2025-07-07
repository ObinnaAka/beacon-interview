import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FEF7EA] flex items-center justify-center p-4">
      <div className="text-center">
        <div className="group perspective-1000 mb-8">
          <div className="relative transform-gpu transition-all duration-300 ease-out group-hover:rotate-y-6">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300 transform scale-110"></div>
            <div className="relative bg-white rounded-full p-8 shadow-2xl group-hover:shadow-3xl transition-shadow duration-300">
              <Image
                src="/logo.256.png"
                alt="Beacon Health Logo"
                width={200}
                height={200}
                className="mx-auto transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to your Beacon interview!
        </h1>
      </div>
    </div>
  );
}
