import Link from "next/link";
import CocktailList from "@/js/cocktailList";

export default function Home() {
    return (
      <body>
        <nav className="navbar navbar-expand-lg bg-white shadow-lg">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <a className="navbar-brand" href="index.html">
                    Crispy Kitchen
                </a>

                <div className="d-lg-none">
                    <button type="button" className="custom-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#BookingModal">Reservation</button>
                </div>

                <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
              <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link href="about" className="nav-link">
                  Story
                </Link>
              </li>

              <li className="nav-item">
                <Link href="menu" className="nav-link">
                  Menu
                </Link>
              </li>

              <li className="nav-item">
                <Link href="news" className="nav-link">
                    Our Updates
                </Link>
              </li>

              <li className="nav-item">
                <Link href="contact" className="nav-link">
                    Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link href="cocktail" className="nav-link">
                    Cocktails
                </Link>
              </li>
            </ul>
          </div>

                <div className="d-none d-lg-block">
                    <button type="button" className="custom-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#BookingModal">Reservation</button>
                </div>

            </div>
        </nav>

        <main>

            <header className="site-header site-menu-header">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-10 col-12 mx-auto">
                            <h1 className="text-white">Our Cocktails</h1>
                        </div>

                    </div>
                </div>

                <div className="overlay"></div>
            </header>

            <section className="menu section-padding">
                <div className="container">
                    <div className="row">

                        <CocktailList />

                    </div>
                </div>
            </section>

        </main>

        <footer className="site-footer section-padding">
            
            <div className="container">
                
                <div className="row">

                    <div className="col-12">
                        <h4 className="text-white mb-4 me-5">Crispy Kitchen</h4>
                    </div>

                    <div className="col-lg-4 col-md-7 col-xs-12 tooplate-mt30">
                        <h6 className="text-white mb-lg-4 mb-3">Location</h6>

                        <p>121 Einstein Loop N, Bronx, NY 10475, United States</p>

                        <a href="https://goo.gl/maps/wZVGLA7q64uC1s886" className="custom-btn btn btn-dark mt-2">Directions</a>
                    </div>

                    <div className="col-lg-4 col-md-5 col-xs-12 tooplate-mt30">
                        <h6 className="text-white mb-lg-4 mb-3">Opening Hours</h6>

                        <p className="mb-2">Monday - Friday</p>

                        <p>10:00 AM - 08:00 PM</p>

                        <p>Tel: <a href="tel: 010-02-0340" className="tel-link">010-02-0340</a></p>
                    </div>

                    <div className="col-lg-4 col-md-6 col-xs-12 tooplate-mt30">
                        <h6 className="text-white mb-lg-4 mb-3">Social</h6>

                        <ul className="social-icon">
                            <li><a href="#" className="social-icon-link bi-facebook"></a></li>

                            <li><a href="#" className="social-icon-link bi-instagram"></a></li>

                            <li><a href="#" className="social-icon-link bi-twitter"></a></li>

                            <li><a href="#" className="social-icon-link bi-youtube"></a></li>
                        </ul>
                    
                        <p className="copyright-text tooplate-mt60">Copyright © 2022 Crispy Kitchen Co., Ltd.
                        <br/>Design: <a rel="nofollow" href="https://www.tooplate.com/" target="_blank">Tooplate</a></p>
                        
                    </div>

                </div>
                
             </div>
             
        </footer>

      
        <div className="modal fade" id="BookingModal" tabIndex="-1" aria-labelledby="BookingModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="mb-0">Reserve a table</h3>

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body d-flex flex-column justify-content-center">
                        <div className="booking">
                            
                            <form className="booking-form row" role="form" action="#" method="post">
                                <div className="col-lg-6 col-12">
                                    <label htmlFor="name" className="form-label">Full Name</label>

                                    <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" required />
                                </div>

                                <div className="col-lg-6 col-12">
                                    <label htmlFor="email" className="form-label">Email Address</label>

                                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="your@email.com" required/>
                                </div>

                                <div className="col-lg-6 col-12">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>

                                    <input type="telephone" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" placeholder="123-456-7890" />
                                </div>

                                <div className="col-lg-6 col-12">
                                    <label htmlFor="people" className="form-label">Number of persons</label>

                                    <input type="text" name="people" id="people" className="form-control" placeholder="12 persons"/>
                                </div>

                                <div className="col-lg-6 col-12">
                                    <label htmlFor="date" className="form-label">Date</label>

                                    <input type="date" name="date" id="date" defaultValue="" className="form-control"/>
                                </div>

                                <div className="col-lg-6 col-12">
                                    <label htmlFor="time" className="form-label">Time</label>

                                    <select defaultValue="5" className="form-select form-control" name="time" id="time">
                                      <option value="5">5:00 PM</option>
                                      <option value="6">6:00 PM</option>
                                      <option value="7">7:00 PM</option>
                                      <option value="8">8:00 PM</option>
                                      <option value="9">9:00 PM</option>
                                    </select>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="message" className="form-label">Special Request</label>

                                    <textarea className="form-control" rows="4" id="message" name="message" placeholder=""></textarea>
                                </div>

                                <div className="col-lg-4 col-12 ms-auto">
                                    <button type="submit" className="form-control">Submit Request</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="modal-footer"></div>
                    
                </div>
                
            </div>
        </div>
      </body>
    );
  }
  