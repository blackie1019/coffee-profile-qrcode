import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const Main = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <AppBar title="My AppBar" />
  </MuiThemeProvider>
);

export default Main;
