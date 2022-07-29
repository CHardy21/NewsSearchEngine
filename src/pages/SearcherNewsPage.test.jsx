import SearcherNewsPage from "./SearcherNewsPage";
import { render, screen, waitFor } from '@testing-library/react';

describe('<SearcherNewsPage />', () => {

    it("Debe renderizarse ", async () => {
        // Arrange
        // Act
        render(<SearcherNewsPage />)
        // Assert
        expect(screen.getByRole('searcher-news-page')).toBeInTheDocument()
    })
    
    
});
