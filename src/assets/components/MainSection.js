import React from 'react';

const HeroSection = () => (
    <section id="hero-section">
        <div className="hero h-100 d-flex align-items-center">
            <div className="">
                <h1 className="display-4 fw-bold">Government Polytechnic</h1>
                <h2 className="lead fw-normal">Ahmedabad</h2>
                <a className="btn btn-outline-light btn-lg mt-3 text-danger" href="#" role="button">About Us</a>
            </div>
        </div>
    </section>
)

const NewsSection = () => (
    <section id="news-section">
        <div className="news">
            <h2 className="text-start mb-4">News & Updates</h2>

            <div className="d-none d-lg-block">
                <div className="row w-100">
                    <div className="col-md-3 p-2">
                        <div className="card bg-transparent mb-4">
                            <div className="card-body">
                                <h5 className="card-title">News Title I</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                    convallis.</p>
                                <a href="#" className="btn btn-outline-light">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-2">
                        <div className="card bg-transparent mb-4">
                            <div className="card-body">
                                <h5 className="card-title">News Title II</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                    convallis.</p>
                                <a href="#" className="btn btn-outline-light">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-2">
                        <div className="card bg-transparent mb-4">
                            <div className="card-body">
                                <h5 className="card-title">News Title III</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                    convallis.</p>
                                <a href="#" className="btn btn-outline-light">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-2">
                        <div className="card bg-transparent mb-4">
                            <div className="card-body">
                                <h5 className="card-title">News Title IV</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                    convallis.</p>
                                <a href="#" className="btn btn-outline-light">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="newsCarousel" className="carousel slide d-lg-none" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#newsCarousel" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#newsCarousel" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#newsCarousel" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#newsCarousel" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card bg-transparent mb-4">
                            <div className="card-body">
                                <h5 className="card-title">News Title I</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                    convallis.</p>
                                <a href="#" className="btn btn-outline-light">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card bg-transparent mb-4">
                            <div className="card-body">
                                <h5 className="card-title">News Title II</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                    convallis.</p>
                                <a href="#" className="btn btn-outline-light">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card bg-transparent mb-4">
                            <div className="card-body">
                                <h5 className="card-title">News Title III</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                    convallis.</p>
                                <a href="#" className="btn btn-outline-light">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card bg-transparent mb-4">
                            <div className="card-body">
                                <h5 className="card-title">News Title IV</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                    convallis.</p>
                                <a href="#" className="btn btn-outline-light">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

const AboutSection = () =>(
    <section className="AboutSection" id={"AboutSection"}>
        <h1>About Section</h1>
    </section>
)

const MainSection = () => (
    <main id="main-section">
        <HeroSection />
        <NewsSection />
        <AboutSection />
    </main>
)

export default MainSection;