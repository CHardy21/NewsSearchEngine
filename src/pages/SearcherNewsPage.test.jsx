import SearcherNewsPage from "./SearcherNewsPage";
import Searcher from "../components/general/Searcher";
import NewsList from "../components/news/NewsList";
import { render, screen, waitFor,act,fireEvent } from '@testing-library/react';

const onSearchMock = jest.fn();

describe('<SearcherNewsPage />', () => {

    it("Debe renderizarse <SearcherNewsPage /> ", async () => {
        // Arrange
        // Act
        render(<SearcherNewsPage />)
        // Assert
        expect(screen.getByRole('searcher-news-page')).toBeInTheDocument()
    })
    
        // loading (Duda aqui... Estaria bien?)
    it("Debe mostrar Loading mientras espero respuesta del servicio", async () => {
        // Arange
        // Act
        render(<NewsList busqueda="bitcoin"/>);
        // Assert
        expect(screen.getByRole('progressbar')).toBeInTheDocument()
    })

    it("Debe aparecer una lista de noticias", async () => {
        // Arrange
        // Act
        render(<SearcherNewsPage />);
        const searcherInput = screen.getByRole('textbox');
        const searcherButton = screen.getByRole('button');

        act(() => {
            fireEvent.change(searcherInput, { target: { value: 'test' }});
            fireEvent.click(searcherButton);
            //expect(onSearch).toHaveBeenCalled();
        });
             await waitFor(() => {
            expect(screen.getByRole('news-list')).toBeInTheDocument();
        });
    })

});
