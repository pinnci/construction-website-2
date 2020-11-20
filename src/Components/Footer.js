import React from 'react';

//Styles
import './Footer.scss';

function Footer(){

    //Scroll back to top
    function scrollToTop(){
        window.scrollTo(0,0);
    }
    return(
        <div className="footer">
            <div className="container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21293.917988859735!2d17.859605039550782!3d48.153822399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssk!2ssk!4v1605897055710!5m2!1ssk!2ssk" width="80%" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                <div className="column-wrapper">
                    <div className="column">
                        <h4>Navigácia</h4>
                        <a href="#">Domov</a>
                        <a href="#">O nás</a>
                        <a href="#">Portfólio</a>
                        <a href="#">Kontakt</a>
                    </div>

                    <div className="column">
                        <h4>Kontakt</h4>
                        <a href="#">0900 000 000</a>
                        <a href="#">email@company.com</a>
                    </div>

                    <div className="column">
                        <h4>Prenájom techniky</h4>
                        <a href="#">0900 000 000</a>
                        <a href="#">email@company.com</a>
                    </div>

                    <div className="column">
                        <h4>Adresa</h4>
                        <p>Sama Chalupku 564/5</p>
                        <p>927 00</p>
                        <p>Narnia</p>
                    </div>
                </div>
                
                <div className="copyright">
                    <p>&copy; Company name</p>

                    <p onClick={scrollToTop}>Späť na vrch</p>    
                </div> 
            </div> 
        </div>
    )
}

export default Footer;