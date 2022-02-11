import React from 'react';
import PropTypes from 'prop-types';
import { CONSTANTS } from 'bootstrap/constants';
import { Button } from '@mui/material';

export default function ReTitleButton({ children, ...restProps }) {
  return (
    <Button
      size="large"
      variant="contained"
      {...restProps}
      style={{ backgroundColor: CONSTANTS.STRAVA_ORANGE }}>
      {children}
    </Button>
  );
}
ReTitleButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};
