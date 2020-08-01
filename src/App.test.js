import React from 'react';
import { render} from '@testing-library/react';
import App from './App';
import FinalJSApp from './App';
import User from './components/Users/User';
import ReactDOM from 'react-dom'

test('renders learn react link', () => {
//   const { getByText } = render(<FinalJSApp />);
//   const linkElement = getByText(User);
//   expect(linkElement).toBeInTheDocument();
const div = document.createElement('div');
ReactDOM.render(<FinalJSApp />, div);
ReactDOM.unmountComponentAtNode(div);

});
