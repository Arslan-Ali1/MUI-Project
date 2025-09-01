import React from 'react'

import Content from './Content'
import Cards from './Cards'
import Main from './Main'
import Charts from './Charts'

export default function Dashboard() {
  return (
    <div  >
      <Cards/>
      <Main/>
      <Charts/>
      <Content/>
    </div>
  )
}
