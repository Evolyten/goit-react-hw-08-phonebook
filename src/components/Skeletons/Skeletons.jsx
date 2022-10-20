import styled from 'styled-components';
import React from 'react';
import ContentLoader from 'react-content-loader';

const Wrap = styled.div`
  text-align: center;
`;

const FormLoader = styled(ContentLoader)`
  display: flex;
  margin: 0 auto;
`;
const MyLoader = props => (
  <Wrap>
    <FormLoader
      speed={2}
      width={476}
      height={124}
      viewBox="0 0 476 124"
      backgroundColor="#dcdada"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="157" y="49" rx="3" ry="3" width="176" height="19" />
      <rect x="208" y="110" rx="3" ry="3" width="78" height="17" />
      <rect x="158" y="79" rx="3" ry="3" width="176" height="19" />
    </FormLoader>
  </Wrap>
);

export default MyLoader;
