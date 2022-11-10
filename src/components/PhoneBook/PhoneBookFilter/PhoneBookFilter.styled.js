import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.spacing(3)};
  font-size: ${props => props.theme.spacing(6)};
  font-weight: bold;
`;

export const Input = styled.input`
  width: ${props => props.theme.spacing(75)};
  height: ${props => props.theme.spacing(6)};
  border-radius: ${props => props.theme.radii.standard};
`;
