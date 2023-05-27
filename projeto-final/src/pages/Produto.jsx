import Golf from '../assets/golf.jpg'
import Porsche from '../assets/porsche911.jpg'
import Mclaren from '../assets/mclaren-720s.jpg'
import Lambo from '../assets/lamborghini.jpg'
import Estoque from '../assets/estoque.png'
import Audi from '../assets/audir8.jpg'
import Civic from '../assets/honda-civic.jpg'
import Gli from '../assets/jetta.jpg'
import Taycan from '../assets/taycan.jpg'
import Volvo from '../assets/volvoxc90.jpg'
import Tucson from '../assets/tucson.jpg'
import Roma from '../assets/ferrari-roma.jpg'
import Senna from '../assets/mclaren-senna.jpg'
function Produto() {
    return (
        <> 
        <div>
            <img src={Estoque}/>
        </div>
        <div className='galeria'>
            <div className='title'>
            <h1>Veículos em Estoque</h1>
            </div>
            <div className='galeria'>
                <div className='carousel-products'>
                    <div className='product-single'>
                        <div className='img-prod'>
                            <img src={Golf} alt="Imagem de um Golf" />
                        </div>

                        <div className='nomes'>
                            <h1>Golf</h1>
                            <h3>R$ 120.000</h3>
                            <p>Modelo: Golf GTI MK7</p>
                            <p>2000 KM - 2020/2021</p>
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
            </div>
        </div>
        <div className='galeria'>
            <div className='galeria'>
                <div className='carousel-products'>
                    <div className='product-single'>
                        <div className='img-prod'>
                            <img src={Taycan} />
                        </div>

                        <div className='nomes'>
                            <h1>Porsche</h1>
                            <h3>R$ 980.000</h3>
                            <p>Modelo: Porsche Taycan</p>
                            <p>1000 KM - 2020/2021</p>
                        </div>
                    </div>


                    <div className='product-single'>
                        <div className='img-prod'>
                            <img src={Tucson}/>
                        </div>
                        <div className='nomes'>
                            <h1>Hyundai</h1>
                            <h3>R$ 180.000</h3>
                            <p>Modelo:Tucson</p>
                            <p>1500 KM - 2022/2023</p>
                        </div>
                    </div>

                    <div className='product-single'>
                        <div className='img-prod'>
                            <img src={Senna}/>
                        </div>
                        <div className='nomes'>
                            <h1>McLaren</h1>
                            <h3>R$ 6.500.000</h3>
                            <p>Modelo: Mclaren Senna</p>
                            <p>900 KM - 2022/2023</p>
                        </div>
                    </div>

                    <div className='product-single'>
                        <div className='img-prod'>
                            <img src={Roma}/>
                        </div>
                        <div className='nomes'>
                            <h1>Ferrari</h1>
                            <h3>R$ 3.000.000</h3>
                            <p>Modelo: Ferrari Roma</p>
                            <p>3000 KM - 2022/2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='galeria'>
            <div className='galeria'>
                <div className='carousel-products'>
                    <div className='product-single'>
                        <div className='img-prod'>
                            <img src={Audi}/>
                        </div>

                        <div className='nomes'>
                            <h1>Audi</h1>
                            <h3>R$ 1.000.000</h3>
                            <p>Modelo:Audi R8 </p>
                            <p>2000 KM - 2020/2021</p>
                        </div>
                    </div>


                    <div className='product-single'>
                        <div className='img-prod'>
                            <img src={Civic}/>
                        </div>
                        <div className='nomes'>
                            <h1>Honda</h1>
                            <h3>R$ 120.000</h3>
                            <p>Modelo: Honda Civic</p>
                            <p>1500 KM - 2022/2023</p>
                        </div>
                    </div>

                    <div className='product-single'>
                        <div className='img-prod'>
                            <img src={Gli}/>
                        </div>
                        <div className='nomes'>
                            <h1>volkswagen</h1>
                            <h3>R$ 200.000</h3>
                            <p>Modelo: Jetta GLI</p>
                            <p>900 KM - 2022/2023</p>
                        </div>
                    </div>

                    <div className='product-single'>
                        <div className='img-prod'>
                            <img src={Volvo}/>
                        </div>
                        <div className='nomes'>
                            <h1>Volvo</h1>
                            <h3>R$ 300.000</h3>
                            <p>Modelo: Volvo XC90</p>
                            <p>400 KM - 2022/2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}
export default Produto;