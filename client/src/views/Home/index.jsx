import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

import Search from '#src/components/Search'

const query = gql`
  query($searchTitle: String!) {
    mangas(searchTitle: $searchTitle) {
      id
      title
    }
  }
`

export default function Home() {
  const [ searchQuery, setSearchQuery ] = useState('')
  const { data, loading } = useQuery(query, {
    variables: { searchTitle: searchQuery },
  })
  // console.log(data)

  return (
    <div className="main-search-container">
      <Search onChange={searchQuery => setSearchQuery(searchQuery)} />
      {console.log(searchQuery)}
      {console.log(data)}
    </div>
  )
}
