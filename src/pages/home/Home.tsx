import LeftAside from "../../components/aside/LeftAside";
import RightAside from "../../components/aside/RightAside";

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white p-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-[220px_1fr_220px]">
                <main className="bg-gray-900 p-6 rounded-xl order-1 md:order-1 lg:order-2">
                    <h1 className="text-2xl font-bold mb-4">Lorem Ipsum</h1>
                    <p className="text-gray-400 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <section className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
                            Card 1
                        </section>
                        <section className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
                            Card 2
                        </section>
                    </div>
                </main>
                <LeftAside />
                <RightAside />
            </div>
        </div>
    );
}