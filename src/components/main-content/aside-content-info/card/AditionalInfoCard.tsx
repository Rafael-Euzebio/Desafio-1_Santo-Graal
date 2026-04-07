import { CardTitle } from "./CardTitle"

export const AditionalInfoCard = ({title, image, altImage}) => {
    return (
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <aside className="rounded-2xl border border-zinc-400/20 bg-zinc-100/95 p-5 text-zinc-900 shadow-lg">
            <CardTitle title={title || ""} />

                <div className="space-y-4">
                    <article className="flex gap-4 border-b border-zinc-300 pb-4">
                        <img
                            src={image}
                            alt={altImage}
                            className="h-16 w-16 rounded-lg object-cover"
                        />

                        <div>
                            <h3 className="text-2xl font-bold">Incidente de Shibuya</h3>
                            <p className="mt-1 text-base text-zinc-700">
                                Resumo dos eventos do arco do Incidente de Shibuya e seu impacto
                                direto no início do Jogo do Abate.
                            </p>
                        </div>
                    </article>

                    <article className="flex gap-4">
                        <img
                            src="/images/characters/nobara.png"
                            alt="Nobara Kugisaki"
                            className="h-16 w-16 rounded-lg object-cover"
                        />

                        <div>
                            <h3 className="text-2xl font-bold">Novos episódios lançados!</h3>
                            <p className="mt-1 text-base text-zinc-700">
                                O arco amplia a escala da história com novas batalhas, regras
                                mais perigosas e conflitos cada vez mais intensos.
                            </p>
                        </div>
                    </article>
                </div>
            </aside>

            <aside className="rounded-2xl border border-zinc-400/20 bg-zinc-100/95 p-5 text-zinc-900 shadow-lg">
                <div className="mb-4 flex items-center gap-2 border-b border-zinc-300 pb-3">
                    <span className="text-sm font-semibold text-zinc-600">
                        Próxima temporada
                    </span>
                </div>

                <div className="space-y-4">
                    <article className="flex gap-4 border-b border-zinc-300 pb-4">
                        <img
                            src="/images/characters/megumi.png"
                            alt="Megumi Fushiguro"
                            className="h-16 w-16 rounded-lg object-cover"
                        />

                        <div>
                            <h3 className="text-xl font-bold">Foco em Megumi Fushiguro</h3>
                            <p className="mt-1 text-base text-zinc-700">
                                A próxima fase tende a aprofundar o papel de Megumi e sua ligação
                                com eventos decisivos para o futuro do mundo jujutsu.
                            </p>
                        </div>
                    </article>

                    <article className="flex gap-4">
                        <img
                            src="/images/characters/todo.png"
                            alt="Aoi Todo"
                            className="h-16 w-16 rounded-lg object-cover"
                        />

                        <div>
                            <h3 className="text-xl font-bold">Batalhas ainda mais intensas</h3>
                            <p className="mt-1 text-base text-zinc-700">
                                A expectativa é de confrontos mais sombrios, técnicas mais
                                avançadas e consequências cada vez mais pesadas para os
                                protagonistas.
                            </p>
                        </div>
                    </article>
                </div>
            </aside>
        </div>
    )
}