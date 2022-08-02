import { render, screen } from '@testing-library/react';
import Error404 from "./Error404.jsx"


describe("<Error404 />", () => {

    it("Debe renderizarse los componentes (App, MyHeader y MyFooter)", async () => {
      // Arrange
      // Act
      render(<Error404 />)
    
      // Assert
      expect(screen.getByRole('error-404')).toBeInTheDocument()
    })
});