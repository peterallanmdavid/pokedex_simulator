import React from 'react'

const PokemonDetailsImageView = ({
  name,
  imgUrl,
  gender,
}) => {
  return(
      <div className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <img src={imgUrl} alt={name} />
        <div className="caption">
          <h5>{name} <span className="label label-primary">{gender}</span></h5>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetailsImageView
