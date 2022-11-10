import {Card} from '../CardNome/Nome'

export function Cards(props) {
    return (
        <div>
            {
                props.cores.map((color, i) => {
                    return (
                        <Card key={i} corData={color} />
                    )
                })
            }
        </div>
    )
}