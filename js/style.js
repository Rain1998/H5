 var swiper = new Swiper('.swiper-container',{
		direction : 'vertical',
		followFinger : false,
		speed:800,
		mousewheel: true,
		pagination : {
			el:'.swiper-pagination',
		},
		on:{
			init:function(swiper){
		        slide=this.slides.eq(0);
			    slide.addClass('ani-slide');
		    },
			transitionStart: function(){
			    for(i=0;i<this.slides.length;i++){
			    	slide=this.slides.eq(i);
			        slide.removeClass('ani-slide');
				}
		    },
			transitionEnd: function(){
				slide=this.slides.eq(this.activeIndex);
			    slide.addClass('ani-slide');
				
		    },
		}
    });
	
