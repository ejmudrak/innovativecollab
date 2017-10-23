import React from 'react';

// implements Google Material UI framework:
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderPage from './header/HeaderPage'

export default ({children}) => {
    return (
        <div>
	        <HeaderPage />
	        <MuiThemeProvider>
	          {children}
	      </MuiThemeProvider>
  		</div>
  );
}
