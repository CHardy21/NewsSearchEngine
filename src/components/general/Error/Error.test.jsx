import Error from "./index";
import { fireEvent, queryByRole, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

const NEWS_STUB_ERR = {
    "status": "error",
    "code": "maximumResultsReached",
    "message": "You have requested too many results. Developer accounts are limited to a max of 100 results. You are trying to request results 1890 to 1900. Please upgrade to a paid plan if you need more results."
};

describe("<Error />", () => {

    it("Click en closeButton Debe cerrar mensaje y recargar la pagina", async () => {
        // Arrange
        // Eliminar location y volver a crear reload como un simulacro
        const { location } = window;
        delete window.location;
        window.location = { reload: jest.fn() };
       
        // Act
        render(<Error data={NEWS_STUB_ERR} />);
        const errorAlert = screen.getByRole('error-alert');
        act(() => {
            fireEvent.click(screen.getByLabelText('Close alert'))
            //stopPropagation()
        });
        // Assert
        expect(errorAlert).not.toBeInTheDocument()
        expect(window.location.reload).toHaveBeenCalled();

        window.location = location;
    })
});
