import React from 'react';

//Navlink
import { NavLink } from 'react-router-dom';

//Styles
import './Rental.scss'

//SVG icons
import Dots from '../Icons/Dots';
import Square from '../Icons/Square';
import Circle from '../Icons/Circle';

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

//Components
import RentalSlider from '../Components/RentalSlider';

import introImage from '../Img/rental-intro-excavator.jpg';

function Rental(){
    return(
        <div className="rental">
            <div className="intro">
                <div className="container">
                    <p>Špičkové stroje za super ceny</p>
                    <h1>Prenájom techniky</h1>

                    <NavLink to="/contact">Kontakt</NavLink>
                    
                    <div className="image">
                        <img src={introImage} alt="rental-intro" />
                        <Square />
                    </div>
                </div>

                <Circle />
            </div>

            <div className="ourMachinery">
                <div className="container">
                    <h2>Naša technika <Dots /></h2>

                    <div className="container-inner">
                        <p>Bonbon carrot cake sweet icing topping. Danish sweet lollipop cake pudding. Danish drageé lollipop dessert sweet lollipop dessert sweet souffleé marshmallow cookie danish. Cheesecake chocolate danish.</p>

                        <div className="machine-container">
                            <div className="machine">
                                <div className="description">
                                    <h3>CATERPILLAR 320F L <Square /> </h3>
                                    <p>Hydraulický bager</p>

                                    <div className="list">
                                        <div className="list-item">
                                            <div className="dot"></div>
                                            <p>Rok výroby: 2018</p>
                                        </div>

                                        <div className="list-item">
                                            <div className="dot"></div>
                                            <p>Značka: Caterpillar</p>
                                        </div>

                                        <div className="list-item">
                                            <div className="dot"></div>
                                            <p>Km/Motohodín: 5000</p>
                                        </div>
                                        
                                        <div className="list-item">
                                            <div className="dot"></div>
                                            <p>Popis:</p>
                                        </div>
                                        
                                        <p className="desc">Croissant chocolate bar marzipan ice cream cheesecake. Liquirice brownie sesame snaps cotton candy tart powder cupcake cheesecake fruitcake</p>
                                    </div>

                                    <p className="showMore">Zobraziť viac <span><FontAwesomeIcon icon={faLongArrowAltRight} /></span></p>
                                </div>
                                
                                <div className="slider">
                                    <RentalSlider />
                                </div>
                                
                            </div>

                            <div className="machine">
                                <div className="description">
                                    <h3>CATERPILLAR 320F L <Square /> </h3>
                                    <p>Hydraulický bager</p>

                                    <div className="list">
                                        <div className="list-item">
                                            <div className="dot"></div>
                                            <p>Rok výroby: 2018</p>
                                        </div>

                                        <div className="list-item">
                                            <div className="dot"></div>
                                            <p>Značka: Caterpillar</p>
                                        </div>

                                        <div className="list-item">
                                            <div className="dot"></div>
                                            <p>Km/Motohodín: 5000</p>
                                        </div>
                                        
                                        <div className="list-item">
                                            <div className="dot"></div>
                                            <p>Popis:</p>
                                        </div>
                                        
                                        <p className="desc">Croissant chocolate bar marzipan ice cream cheesecake. Liquirice brownie sesame snaps cotton candy tart powder cupcake cheesecake fruitcake</p>
                                    </div>

                                    <p className="showMore">Zobraziť viac <span><FontAwesomeIcon icon={faLongArrowAltRight} /></span></p>
                                </div>
                                
                                <div className="slider">
                                    <RentalSlider />
                                </div>
                                
                            </div>

                            <div className="machine">
                                <div className="description">
                                    <h3>CATERPILLAR 320F L <Square /> </h3>
                                    <p>Hydraulický bager</p>

                                    <div className="list">
                                        <div className="list-item">
                                            <div className="dot"></div>
                                            <p>Rok výroby: 2018</p>
                                        </div>

                                        <div className="list-item">
                                            <div className="dot"></div>
                                            <p>Značka: Caterpillar</p>
                                        </div>

                                        <div className="list-item">
                                            <div className="dot"></div>
                                            <p>Km/Motohodín: 5000</p>
                                        </div>
                                        
                                        <div className="list-item">
                                            <div className="dot"></div>
                                            <p>Popis:</p>
                                        </div>
                                        
                                        <p className="desc">Croissant chocolate bar marzipan ice cream cheesecake. Liquirice brownie sesame snaps cotton candy tart powder cupcake cheesecake fruitcake</p>
                                    </div>

                                    <p className="showMore">Zobraziť viac <span><FontAwesomeIcon icon={faLongArrowAltRight} /></span></p>
                                </div>
                                
                                <div className="slider">
                                    <RentalSlider />
                                </div>
                                
                            </div>

                            <div className="machine">
                                <div className="description">
                                    <h3>CATERPILLAR 320F L <Square /> </h3>
                                    <p>Hydraulický bager</p>

                                    <div className="list">
                                        <div className="list-item">
                                            <div className="dot"></div>
                                            <p>Rok výroby: 2018</p>
                                        </div>

                                        <div className="list-item">
                                            <div className="dot"></div>
                                            <p>Značka: Caterpillar</p>
                                        </div>

                                        <div className="list-item">
                                            <div className="dot"></div>
                                            <p>Km/Motohodín: 5000</p>
                                        </div>
                                        
                                        <div className="list-item">
                                            <div className="dot"></div>
                                            <p>Popis:</p>
                                        </div>
                                        
                                        <p className="desc">Croissant chocolate bar marzipan ice cream cheesecake. Liquirice brownie sesame snaps cotton candy tart powder cupcake cheesecake fruitcake</p>
                                    </div>

                                    <p className="showMore">Zobraziť viac <span><FontAwesomeIcon icon={faLongArrowAltRight} /></span></p>
                                </div>
                                
                                <div className="slider">
                                    <RentalSlider />
                                </div>
                                
                            </div>

                            <div className="machine">
                                <div className="description">
                                    <h3>CATERPILLAR 320F L <Square /> </h3>
                                    <p>Hydraulický bager</p>

                                    <div className="list">
                                        <div className="list-item">
                                            <div className="dot"></div>
                                            <p>Rok výroby: 2018</p>
                                        </div>

                                        <div className="list-item">
                                            <div className="dot"></div>
                                            <p>Značka: Caterpillar</p>
                                        </div>

                                        <div className="list-item">
                                            <div className="dot"></div>
                                            <p>Km/Motohodín: 5000</p>
                                        </div>
                                        
                                        <div className="list-item">
                                            <div className="dot"></div>
                                            <p>Popis:</p>
                                        </div>
                                        
                                        <p className="desc">Croissant chocolate bar marzipan ice cream cheesecake. Liquirice brownie sesame snaps cotton candy tart powder cupcake cheesecake fruitcake</p>
                                    </div>

                                    <p className="showMore">Zobraziť viac <span><FontAwesomeIcon icon={faLongArrowAltRight} /></span></p>
                                </div>
                                
                                <div className="slider">
                                    <RentalSlider />
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="price-list">
                        <div className="container-inner">
                            <h3>Cenník <Square /> </h3>

                            <p>Powder jujubes sugar plum bonbon. Caramels gingerbread tootsie roll tart cupcake. Tiramisu sweet roll gummies gingerbread.</p>

                            <p className="price">Zobraziť cenník</p>
                        </div>
                    </div>

                    <div className="reservation">
                        <div className="container-inner">
                            <h3>Rezervácia strojov <Square /> </h3>


                            <h1>+421 900 000 000</h1>
                            <p>email@company.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rental;