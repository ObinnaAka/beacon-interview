import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FEF7EA] flex items-center justify-center p-4">
      <div className="text-center">
        <Image
          src="/logo.256.png"
          alt="Beacon Health Logo"
          width={200}
          height={200}
          className="mx-auto mb-8 shadow-xl transition-all duration-300 hover:scale-105 rounded-3xl hover:shadow-2xl"
          priority
        />
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to your Beacon interview!
        </h1>
      </div>
    </div>
  );
}
