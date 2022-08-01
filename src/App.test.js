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
describe("<Searcher />", () => {

it("Debe renderizarse los componentes (App, MyHeader y MyFooter)", async () => {
  // Arrange
  // Act
  render(<App />)

  // Assert
  expect(screen.getByRole('main')).toBeInTheDocument()
  expect(screen.getByRole('MyHeader')).toBeInTheDocument()
  expect(screen.getByRole('MyFooter')).toBeInTheDocument()
})

// app.test.js
it("clicking filter links updates product query params", () => {
  let testHistory, testLocation;
  render(
    <MemoryRouter initialEntries={["/my/initial/route"]}>
      <App />
      <Route
        path="*"
        render={({ history, location }) => {
          testHistory = history;
          testLocation = location;
          return null;
        }}
      />
    </MemoryRouter>,
    node
  );

  act(() => {
    // example: click a <Link> to /products?id=1234
  });

  // assert about url
  expect(testLocation.pathname).toBe("/products");
  const searchParams = new URLSearchParams(testLocation.search);
  expect(searchParams.has("id")).toBe(true);
  expect(searchParams.get("id")).toEqual("1234");
});
});