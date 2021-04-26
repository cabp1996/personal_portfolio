import React from 'react'

export const PortfolioItem = ({ title, description, frontend, backend, images, cover, gallery }) => {
    return (
        <div className="work-box">
            <a href={cover} data-lightbox={gallery}>
                <div className="work-img">
                    <img src={cover} alt={title} className="img-fluid" />
                </div>
                <div className="work-content">
                    <div className="row">
                        <div className="col-sm-10">
                            <h2 className="w-title">{title}</h2>
                            <div className="w-more mt-3">
                                <span className="w-ctegory">
                                    {description}
                                </span>
                            </div>
                            <span className="text-secondary" style={{ fontSize: 12 }}>
                                <strong>
                                    Developed with:
                                </strong>

                                <ul>
                                    <li> {frontend}</li>
                                    {backend && <li> {backend}</li>}
                                </ul>

                            </span>
                        </div>
                        <div className="col-sm-2">
                            <div className="w-like">
                                <span className="ion-ios-plus-outline"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            {
                images.map((image) => {
                    return (
                        <a
                            href={image}
                            data-lightbox={gallery}
                            style={{ display: "none" }}
                        >
                            jsx-a11y/anchor-has-content warning
                        </a>
                    );
                })
            }


        </div>
    );
}
