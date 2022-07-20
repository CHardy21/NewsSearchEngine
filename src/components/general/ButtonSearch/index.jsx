import Button from '@mui/material/Button';

function ButtonSearch(props){
    return(
        <Button variant="contained" size="large" onClick={props.onClick}>
            Listar
        </Button>
    )
}

export default ButtonSearch