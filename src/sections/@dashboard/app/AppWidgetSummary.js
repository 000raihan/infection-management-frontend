// @mui
import PropTypes from 'prop-types';
import { Card, Typography } from '@mui/material';

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({ title, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        py: 2,
        px: 1,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: 0,
        textAlign: 'center',
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h3" style={{ lineHeight: 1.2 }}>
        {title}
      </Typography>
    </Card>
  );
}
