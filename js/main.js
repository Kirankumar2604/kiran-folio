(function ($) {
    "use strict";
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 30
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    

//     // news script
//  document.addEventListener('DOMContentLoaded', () => {
//     const API_KEY = '';
//     const API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;
// // category=technology&
//     async function fetchNews() {
//         try {
//             const response = await fetch(API_URL);
//             if (!response.ok) {
//                 throw new Error('Failed to fetch news');
//             }
//             const data = await response.json();
//             displayNews(data.articles);
//         } catch (error) {
//             const container = document.getElementById('news-container');
//             container.innerHTML = '<p>Unable to load news at the moment.</p>';
//             console.error(error);
//         }
//     }

//     function displayNews(articles) {
//         const container = document.getElementById('news-container');
//         container.innerHTML = ''; // Clear the loading message

//         if (articles.length === 0) {
//             container.innerHTML = '<p>No news available at the moment.</p>';
//             return;
//         }

//         articles.forEach((article) => {
//             const newsItem = document.createElement('div');
//             newsItem.className = 'news-item';
//             newsItem.innerHTML = `
//                 <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
//                 <p>${article.description || 'Click the headline to read more.'}</p>
//                 <small>Source: ${article.source.name}</small>
//             `;
//             container.appendChild(newsItem);
//         });
//     }

//     fetchNews(); // Fetch news when the DOM is loaded
// });
    // Typed Initiate
    if ($('.header h2').length == 1) {
        var typed_strings = $('.header .typed-text').text();
        var typed = new Typed('.header h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Porfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Review slider
    // $('.review-slider').slick({
    //     autoplay: true,
    //     dots: false,
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // });
    // document.getElementById("reviewForm").addEventListener("submit", function (event) {
    //     event.preventDefault(); // Prevent form from refreshing the page
    
    //     // Retrieve values from form fields
    //     const name = document.getElementById("name").value;
    //     const profession = document.getElementById("profession").value;
    //     const email = document.getElementById("email").value;
    //     const reviewText = document.getElementById("reviewText").value;
    //     const imageUpload = document.getElementById("imageUpload").files[0];
    
        // Create image URL if a file was uploaded, else use a default image
    //     let imageURL = "img/default-review.jpg"; // default image
    //     if (imageUpload) {
    //         imageURL = URL.createObjectURL(imageUpload); // create a temporary URL for the uploaded image
    //     }
    
    //     // Clear the form fields after submission
    //     document.getElementById("reviewForm").reset();
    
    //     // Create a new review element
    //     const reviewContainer = document.getElementById("reviewSlider");
    //     const reviewItem = document.createElement("div");
    //     reviewItem.classList.add("col-md-12");
    //     reviewItem.innerHTML = `
    //         <div class="review-slider-item">
    //             <div class="review-text">
    //                 <p>${reviewText}</p>
    //             </div>
    //             <div class="review-img">
    //                 <img src="${imageURL}" alt="User Image">
    //                 <div class="review-name">
    //                     <h3>${name}</h3>
    //                     <p>${profession}</p>
    //                     <p>${email}</p>
    //                 </div>
    //             </div>
    //         </div>
    //     `;
    
    //     // Add the new review to the slider
    //     reviewContainer.appendChild(reviewItem);
    // });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);

