import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import MyHeader from "./components/general/MyHeader";
import MyFooter from "./components/general/MyFooter";
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe("<App />", () => {

it("Debe renderizarse los componentes (App, MyHeader y MyFooter)", async () => {
  // Arrange
  // Act
  render(<App />)

  // Assert
  expect(screen.getByRole('main')).toBeInTheDocument()
  expect(screen.getByRole('MyHeader')).toBeInTheDocument()
  expect(screen.getByRole('MyFooter')).toBeInTheDocument()
})

});