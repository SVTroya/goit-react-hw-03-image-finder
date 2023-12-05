import React from 'react';
import PropTypes from 'prop-types';
import { MagnifyingGlass } from 'react-loader-spinner';

Loader.propTypes = {
  visible: PropTypes.bool,
};

function Loader({ visible }) {
  return (
    <MagnifyingGlass
      visible={visible}
      height='80'
      width='80'
      ariaLabel='MagnifyingGlass-loading'
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
      glassColor='#c0efff'
      color='#10274f'
    />
  );
}

export default Loader;
