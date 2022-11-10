import { Card } from "../src/components/Cards/Index"

export function Cards(cores) {
    return (
        <div>
            {
                cores.cores.map((cor, i) => {
                    return (
                        <Card key={i} corData={cor} />
                    )
                })
            }
        </div>
    )
}
