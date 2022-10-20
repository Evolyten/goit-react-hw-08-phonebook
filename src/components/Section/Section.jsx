import { PropTypes } from 'prop-types';
import { SectionHead } from './Sectiom.styled';
export function Section({ title, children }) {
  return (
    <section>
      <SectionHead>{title}</SectionHead>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
