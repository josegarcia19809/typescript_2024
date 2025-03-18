type PokemonCardProps = {
    id: number;
    name: string;
    sprites: string[];
}

function PokemonCard({id, name, sprites = []}: PokemonCardProps) {
    return (
        <>
            <section style={{height: 200}}
                     className="text-capitalize">
                #{id} - {name}
                <div>
                    {sprites.map((sprite, i) => (
                        <img key={i} src={sprite} alt=""/>
                    ))}
                </div>
            </section>

        </>
    );
}

export default PokemonCard;