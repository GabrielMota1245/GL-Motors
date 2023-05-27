import Motors from '../assets/gl-motors.png'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';

function Contato() {
    return (
        <>
            <img src={Motors} />
            <div className='topo'>
                <div className='contact'>
                    <h1>Deixe seu Recado</h1>
                    <p>Nós receberemos sua mensagem e iremos responder.</p>
                </div>
                <div className='form'>
                    <form className='form-action'>
                        <TextField id="outlined-basic" label="Nome" variant="outlined" />

                        <TextField id="outlined-basic" label="E-mail" variant="outlined" />

                        <TextField id="outlined-basic" label="Telefone" variant="outlined" />


                        <TextField
                            id="outlined-textarea"
                            label="Deixe sua mensagem"
                            rows={4}
                            multiline
                        />
                        <Stack direction="row" spacing={1}>
                            <Button variant="contained" className='button' endIcon={<SendIcon />}>
                                Enviar
                            </Button>
                        </Stack>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contato;