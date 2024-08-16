import '@fontsource/jost/300.css';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/700.css';

import "./App.css"
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider } from '@emotion/react';
import { theme } from './utils/theme';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routing />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App