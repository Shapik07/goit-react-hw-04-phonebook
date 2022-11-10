import styled from '@emotion/styled';

export const PhoneBookSection = styled.section`
  width: ${props => props.theme.spacing(90)};
  border: 1px solid ${props => props.theme.colors.black};
  margin-bottom: ${props => props.theme.spacing(3)};
  padding-left: ${props => props.theme.spacing(3)};
  padding-right: ${props => props.theme.spacing(3)};
`;

export const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.big};
  margin-top: 0;
`;
