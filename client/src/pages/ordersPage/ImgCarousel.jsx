import React from 'react'

export default function ImgCarousel({ products,id}) {
    let i = 0;
    let j = 0;
    return (
        <div className='w-[12vw] h-[12vh]'>
            <div id={"carouselid" + id} className="carousel slide">
                <div className="carousel-indicators">
                    {
                        products.map((product) => {
                                return <button type="button" data-bs-target={"#carouselid"+id} className={i == 0 ? "active" : ""} aria-current={i == 0 ? "true" : ""} data-bs-slide-to={i++}></button>
                        })
                        
                    }
                    </div>
                <div className="carousel-inner rounded-[0.5rem]">
                    {
                        products.map((product) => {
                            return <div className={"carousel-item" + (j++ == 0 ? " active" : "")}>
                                <img src={product.image} className="d-block w-100" alt="..." />
                            </div>
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={"#carouselid"+id} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={"#carouselid"+id} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
