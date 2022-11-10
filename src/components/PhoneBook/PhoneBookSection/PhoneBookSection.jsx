import PropTypes from 'prop-types';
import { PhoneBookSection, Title } from './PhoneBookSection.style';

export const Section = ({ title = '', children }) => {
  return (
    <PhoneBookSection>
      <Title>{title}</Title>
      {children}
    </PhoneBookSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
