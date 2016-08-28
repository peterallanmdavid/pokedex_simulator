import React from 'react'
import {Link} from 'react-router'

const uppercase = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const PokeDexListItem = ({
  onShowDetails,
  selected,
  name='',
}) => {
  const url = `/pokemonDetails/${name}`
  return (
    <Link to={url} className ={selected ? 'list-group-item active' : 'list-group-item'}>
        {uppercase(name)}
    </Link>
  )
}

export default PokeDexListItem
