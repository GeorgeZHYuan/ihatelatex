import React from 'react';
import styled from 'styled-components'

const S = {}

S.Resume = styled.div`
  border-style: solid;

  > div {
    -webkit-print-color-adjust:exact;
  }
`
S.Title = styled.div`
`
S.Section = styled.div`
`

const Title = () => {
  
}

const App = () => {
  return (
    <S.Resume>
      <S.Title>
        George Yuan
      </S.Title>
      <S.Section>
        Work Experience
      </S.Section>
      <S.Section>
        Noteable Projects
      </S.Section>
      <S.Section>
        Skills
      </S.Section>
    </S.Resume>
  );
}

export default App;
