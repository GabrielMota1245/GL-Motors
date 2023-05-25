import Carousel from 'react-material-ui-carousel'
import Button from '@mui/material/Button';
import Logo from '../assets/logo.png';
import Golf from '../assets/golf.jpg'
import Porsche from '../assets/porsche911.jpg'
import Mclaren from '../assets/mclaren-720s.jpg'
import Lambo from '../assets/lamborghini.jpg'
import Ferrari from '../assets/ferrari-roma.jpg'
import Jetta from '../assets/jetta.jpg'
import Hrv from '../assets/hrv-verde.jpg'
import { useNavigate } from "react-router-dom";



function Home() {
    const navigate = useNavigate();
    return (
        <>
            <img src={Logo} alt="Logo da minha empresa" />
            <div className='title'>
                <h1>Nossos Veículos</h1>
            </div>

            <div className='galeria'>

                <Carousel>
                    <div className='carousel-products'>
                        <div className='product-single'>
                            <div className='img-prod'>
                                <img src={Golf} alt="Imagem de um Golf" />
                            </div>
                            <div className='nomes'>
                                <h1>Golf</h1>
                                <h3>R$ 120.000</h3>
                                <p>Modelo: Golf GTI MK7</p>
                                <p>200 KM - 2022/2023</p>
                            </div>
                        </div>


                        <div className='product-single'>
                            <div className='img-prod'>
                                <img src={Porsche} alt="Imagem de um Porsche" />
                            </div>
                            <div className='nomes'>
                                <h1>Porsche</h1>
                                <h3>R$ 1.000.000</h3>
                                <p>Modelo: Porsche Carrera</p>
                                <p>1500 KM - 2022/2023</p>
                            </div>
                        </div>

                        <div className='product-single'>
                            <div className='img-prod'>
                                <img src={Mclaren} alt="Imagem de um McLaren" />
                            </div>
                            <div className='nomes'>
                                <h1>McLaren</h1>
                                <h3>R$ 3.500.000</h3>
                                <p>Modelo: Mclaren 720s</p>
                                <p>900 KM - 2022/2023</p>
                            </div>
                        </div>

                        <div className='product-single'>
                            <div className='img-prod'>
                                <img src={Lambo} alt="Imagem de um Lamborghini" />
                            </div>
                            <div className='nomes'>
                                <h1>Lamborghini</h1>
                                <h3>R$ 5.000.000</h3>
                                <p>Modelo: Lamborghini Aventador </p>
                                <p>3000 KM - 2022/2023</p>
                            </div>
                        </div>
                    </div>



                    <div className='carousel-products'>
                        <div className='product-single'>
                            <div className='img-prod'>
                                <img src={Ferrari} alt="Imagem de um Ferrari" />
                            </div>
                            <div className='nomes'>
                                <h1>Ferrari</h1>
                                <h3>R$ 3.000.000</h3>
                                <p>Modelo: Ferrari Roma</p>
                                <p>2500 KM - 2022/2023</p>
                            </div>
                        </div>


                        <div className='product-single'>
                            <div className='img-prod'>
                                <img src={Jetta} alt="Imagem de um Jetta" />
                            </div>
                            <div className='nomes'>
                                <h1>Jetta</h1>
                                <h3>R$ 200.000</h3>
                                <p>Modelo: Jetta GTI</p>
                                <p>5000 KM - 2022/2023</p>
                            </div>
                        </div>

                        <div className='product-single'>
                            <div className='img-prod'>
                                <img src={Hrv} alt="Imagem de um Hrv" />
                            </div>
                            <div className='nomes'>
                                <h1>Honda</h1>
                                <h3>R$ 190.000</h3>
                                <p>Modelo: HRV</p>
                                <p>3000 KM - 2022/2023</p>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
           
            <div className='botao'>
            <Button variant="contained" onClick={() => navigate("/produto")}>Ver todo o Estoque</Button>
            </div>
        </>

    )
}

export default Home;