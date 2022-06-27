import styled from "@emotion/styled";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-right: 0.8rem;
  }
  width: 20rem;
  margin: 2px auto;
  padding-bottom: 50px;
  padding-top: 50px;
`;

export const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 50px;
  img {
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(175deg)
      brightness(121%) contrast(114%);
  }
  ${(props) => (props.disabled ? disabled : enabled)};
`;

export const PaginationFirstPageButton = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border: 1px solid #e1e1e1;
  img {
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(175deg)
      brightness(121%) contrast(114%);
  }
  ${(props) => (props.disabled ? disabled : enabled)};
`;

export const PaginationLastPageButton = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border: 1px solid #e1e1e1;
  img {
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(175deg)
      brightness(121%) contrast(114%);
  }
  ${(props) => (props.disabled ? disabled : enabled)};
`;

export const enabled = `
cursor: pointer;
background-color: var(--color-primary);
transition: background-color 0.2s;

&:hover {
  background-color: black;
  color: white;
}

&:active {
  background-color: blue;
}
`;

export const disabled = `
  background: white;
`;

export const PaginationLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
`;
