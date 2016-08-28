import React from 'react'
import PokemonDetailsImageView from './PokemonDetailsImageView'

const PokemonDetailsImages = ({
  sprites,
  isFemale,
}) => {
    const gender = isFemale ? "F": "M"
    return (
        sprites ?
        <div className="row">
              <PokemonDetailsImageView
                  name="Front View"
                  imgUrl={ isFemale ? sprites.front_female : sprites.front_default }
                  gender={gender}
              />
              <PokemonDetailsImageView
                  name="Shiny Front"
                  imgUrl={ isFemale ? sprites.front_shiny_female: sprites.front_shiny }
                  gender={gender}
              />
              <PokemonDetailsImageView
                  name="Back View"
                  imgUrl={ isFemale ? sprites.back_female : sprites.back_default }
                  gender={gender}
              />
              <PokemonDetailsImageView
                  name="Shiny Back"
                  imgUrl={isFemale ? sprites.back_shiny_female : sprites.back_shiny}
                  gender={gender}
              />
        </div> : null
    )
}

export default PokemonDetailsImages
