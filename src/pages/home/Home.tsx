export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white p-4">

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-[220px_1fr_220px]">

                <section className="bg-gray-900 p-6 rounded-xl order-1 lg:order-2">
                    <h1 className="text-2xl font-bold mb-4">
                        Lorem Ipsum
                    </h1>

                    <p className="text-gray-400 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
                            Card 1
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
                            Card 2
                        </div>
                    </div>
                </section>

                <aside className="bg-gray-900 p-4 rounded-xl order-2 lg:order-1">
                    <h2 className="font-bold mb-3 text-white">Menu</h2>

                    <ul className="flex flex-col gap-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer transition">Lorem</li>
                        <li className="hover:text-white cursor-pointer transition">Ipsum</li>
                        <li className="hover:text-white cursor-pointer transition">Dolor</li>
                    </ul>
                </aside>


                <aside className="bg-gray-900 p-4 rounded-xl order-3">
                    <h2 className="font-bold mb-3 text-white">Info</h2>

                    <p className="text-gray-400 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </aside>

            </div>
        </div>
    );
}