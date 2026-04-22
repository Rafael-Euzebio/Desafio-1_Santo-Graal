import { MoreInfoAditional } from "./aside-content-info/MoreInfoAditional";
import { ExplicativeSeason } from "./ExplicativeSeason";

export function MainContent() {
    return (
        <section className="grid h-full grid-cols-1 gap-4">
            <ExplicativeSeason />
            <MoreInfoAditional />
        </section>
    );
}