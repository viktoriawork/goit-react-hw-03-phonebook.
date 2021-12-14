import styled from "styled-components";

const FilterStyled = styled.div`
  text-align: center;

  .title {
    color: white;
    margin-bottom: 10px;
  }

  .finde-input {
    display: block;
    padding: 5px;
    text-align: center;
    margin: 0 auto;
    color: #bc0dad;
    outline: none;
  }

  input:focus {
    box-shadow: 1px 1px 2px 0 #bc0dad;
    border: 1px solid #bc0dad;
  }
`;
export default FilterStyled;
