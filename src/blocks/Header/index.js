import React from 'react';

import H1 from '../../elements/H1';
import Div from '../../elements/Div';

const Header = ({ title }) => {
  return (
    <Div>
      <H1>
        {title}
      </H1>
    </Div>
  );
}

export default Header;