export default function MenuButton() {
    return (
        <button
            type="button"
            aria-label="Abrir menu"
            className="flex flex-col cursor-pointer text-white justify-center items-center gap-1.5 w-10 h-10 rounded-md border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 transition lg:hidden"
        >
            <span className="block w-5 h-0.5 bg-white rounded-full" />
            <span className="block w-5 h-0.5 bg-white rounded-full" />
            <span className="block w-5 h-0.5 bg-white rounded-full" />
        </button>
    )
}
