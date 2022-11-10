import styled from '@emotion/styled';

export const ContactList = styled.ul`
  padding: 0;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const ContactItemInfo = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: bold;
`;

export const RemoveButton = styled.button`
  width: ${props => props.theme.spacing(17.5)};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: bold;
  cursor: pointer;
  border-radius: ${props => props.theme.radii.standard};
  :hover {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.red};
  }
`;
