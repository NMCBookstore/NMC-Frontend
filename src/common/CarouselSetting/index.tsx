export const bannerSettings = {
    autoplay: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
};

export const cateSettings = {
    autoplay: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    rows: 2,
    autoplaySpeed:2000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

export const productListSettings = {
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed:3000,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
};

export const productListCate = {
    autoplay:false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
};

export const productTabsListSettings = {
    autoplay:true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed:2000,
    rows:2,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 2,
                rows:1,
                dots:false
            }
        }
    ]
};

export const servicesCarousel = {
    autoplay:true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed:1000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                dots:false
            }
        }
    ]
};