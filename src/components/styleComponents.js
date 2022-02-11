import styled from 'styled-components';

export const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  @media (max-width: 768px) {
    margin-top: 3rem;
    justify-content: flex-start;
  }
`;

export const LeftAlignDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  text-align: left;
`;

export const MainAppStyle = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
  background-color: rgb(250, 250, 250);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
