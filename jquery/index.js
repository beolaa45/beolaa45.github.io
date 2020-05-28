// (function($){
//     $(document).ready(function() {
//         $('.card').click(function(e){
//             e.preventDefault();
//             console.log('ok')
//             $(this).addClass('active');

//         })
//     })
// })(jQuery)

(function($) {
    $(document).ready(function() {
        let count = 0;
        let card1 = null;
        let card2 = null;

        //event click class card
        $('.card').click(function(e){
            e.preventDefault();
        // add class 'active'
            $(this).addClass('active');
            count += 1;
        
            if(count === 1){
                card1 =  $(this).data('card');
                console.log(card1)

            }else if(count === 2){
                card2 = $(this).data('card');
                console.log(card2)
                if(card2 === card1){
                    setTimeout(() => {
                        $('.active').css('display', 'none');
                        
                        count = 0;
                        card2 = card1 = 0
                    }, 1000)
                }else {
                    setTimeout(() => {
                        $('.card').removeClass('active');
                        count = 0;
                        card2 = card1 = 0
                    },1000)
                 
                 
                }
            }
           
         
          
        })
    })
})(jQuery)

