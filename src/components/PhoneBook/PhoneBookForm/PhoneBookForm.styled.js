import styled from '@emotion/styled';

export const PhoneBookForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.spacing(3)};
  font-size: ${props => props.theme.fontSizes.middle};
  font-weight: bold;
`;

export const Input = styled.input`
  width: ${props => props.theme.spacing(75)};
  height: ${props => props.theme.spacing(6)};
  border-radius: ${props => props.theme.radii.standard};
`;
export const Button = styled.button`
  width: ${props => props.theme.spacing(37.5)};
  height: ${props => props.theme.spacing(9)};
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.small};
  border-radius: ${props => props.theme.radii.standard};
  margin-bottom: ${props => props.theme.spacing(3)};
  cursor: pointer;

  :hover {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.blue};
  }
`;
