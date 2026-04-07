// LeftAside.tsx
export default function LeftAside() {
    return (
        <aside className="bg-gray-900 p-4 rounded-xl order-2 md:order-2 lg:order-1">
            <h2 className="font-bold mb-3">Menu</h2>
            <ul className="flex flex-col gap-2 text-gray-400">
                <li className="hover:text-white">Lorem</li>
                <li className="hover:text-white">Ipsum</li>
                <li className="hover:text-white">Dolor</li>
            </ul>
        </aside>
    );
}