import React from 'react'
import './App.css'
import tw from 'twin.macro'
import styled from 'styled-components'
import TopSection from './containers/TopSection'

const AppContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
  `}
`

function App() {
  return (
    <AppContainer>
      <TopSection />
    </AppContainer>
  )
}

export default App
