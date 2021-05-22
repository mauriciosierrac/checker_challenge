import React from 'react'

export const About = () => {
    return (
        <>
            <div className="container">
                <h1>About Us</h1>

                <div className="row">
                    <div className="card border-light mb-3 col-md-3 m-2" style={{ maxWidth: '20rem' }}>
                        <div className="card-header">Front End</div>
                        <div className="card-body">
                            <h4 className="card-title">Mauricio Sierra Cifuentes</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card border-light mb-3 col-md-3 m-2" style={{ maxWidth: '20rem' }}>
                        <div className="card-header">Front End</div>
                        <div className="card-body">
                            <h4 className="card-title">Victor Plaza</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card border-light mb-3 col-md-3 m-2" style={{ maxWidth: '20rem' }}>
                        <div className="card-header">Back End</div>
                        <div className="card-body">
                            <h4 className="card-title">Soren Acevedo</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card border-light mb-3 col-md-3 m-2" style={{ maxWidth: '20rem' }}>
                        <div className="card-header">Back End</div>
                        <div className="card-body">
                            <h4 className="card-title">Nicolas Herrera</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}