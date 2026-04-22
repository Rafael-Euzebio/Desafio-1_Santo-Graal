
interface RankingDataProps {
    ranking: string;
}

export const RankingData = ({ ranking }: RankingDataProps) => {
    return (
        <div className="border-b border-zinc-700 pb-3">
            <p className="text-base font-semibold ">
                Ranking:{' '}
                <span className="font-normal ">{ranking}</span>
            </p>
        </div>
    )
}