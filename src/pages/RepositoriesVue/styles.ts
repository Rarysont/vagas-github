import styled from 'styled-components';

export const Header = styled.header`

  h1 {
    color: black;
    font-size: 35px;
    text-align: center;
  }
`;

export const Form = styled.form`
  margin-top: 50px;
  max-width: 700px;
  height: 50px;
  display: flex;

  input {
    border-radius: 55px solid #FFFFFF;
    width: 100%;
    flex: 1;
    padding:0 20px;

    &::placeholder {
      color: #817B7B;
    }

  }


  button {
    width: 20%;
  }
`;


export const Repositories = styled.div`

  margin-top: 80px;
  max-width: 700px;

  a{
    background: #FFF;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;


    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img{
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 0 16px;
      flex: 1;
      padding: 17px;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }

      p {
        font-size: 18px;
        color: #A8A8B3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #CBCBD6;
    }

  }

`;
