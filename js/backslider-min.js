!function(i){i(document).ready(function(){i("body").append('<div id="supersized-loader"></div><ul id="supersized"></ul>')}),i.supersized=function(e){var s="#supersized",t=this;t.$el=i(s),t.el=s,vars=i.supersized.vars,t.$el.data("supersized",t),api=t.$el.data("supersized"),t.init=function(){i.supersized.vars=i.extend(i.supersized.vars,i.supersized.themeVars),i.supersized.vars.options=i.extend({},i.supersized.defaultOptions,i.supersized.themeOptions,e),t.options=i.supersized.vars.options,t._build()},t._build=function(){for(var e,s=0,n="",a="",o="";s<=t.options.slides.length-1;){switch(t.options.slide_links){case"num":e=s;break;case"name":e=t.options.slides[s].title;break;case"blank":e=""}n=n+'<li class="slide-'+s+'"></li>',s==t.options.start_slide-1?(t.options.slide_links&&(a=a+'<li class="slide-link-'+s+' current-slide"><a>'+e+"</a></li>"),t.options.thumb_links&&(o=o+'<li class="thumb'+s+' current-thumb"><img src="'+(t.options.slides[s].thumb?t.options.slides[s].thumb:t.options.slides[s].image)+'"/></li>')):(t.options.slide_links&&(a=a+'<li class="slide-link-'+s+'" ><a>'+e+"</a></li>"),t.options.thumb_links&&(o=o+'<li class="thumb'+s+'"><img src="'+(t.options.slides[s].thumb?t.options.slides[s].thumb:t.options.slides[s].image)+'"/></li>')),s++}t.options.slide_links&&i(vars.slide_list).html(a),t.options.thumb_links&&vars.thumb_tray.length&&i(vars.thumb_tray).append('<ul id="'+vars.thumb_list.replace("#","")+'">'+o+"</ul>"),i(t.el).append(n),t.options.thumbnail_navigation&&(vars.current_slide-1<0?prevThumb=t.options.slides.length-1:prevThumb=vars.current_slide-1,i(vars.prev_thumb).show().html(i("<img/>").attr("src",t.options.slides[prevThumb].image)),vars.current_slide==t.options.slides.length-1?nextThumb=0:nextThumb=vars.current_slide+1,i(vars.next_thumb).show().html(i("<img/>").attr("src",t.options.slides[nextThumb].image))),t._start()},t._start=function(){t.options.start_slide?vars.current_slide=t.options.start_slide-1:vars.current_slide=Math.floor(Math.random()*t.options.slides.length);var e=t.options.new_window?' target="_blank"':"";if(3==t.options.performance?t.$el.addClass("speed"):1!=t.options.performance&&2!=t.options.performance||t.$el.addClass("quality"),t.options.random){arr=t.options.slides;for(var s,n,a=arr.length;a;s=parseInt(Math.random()*a),n=arr[--a],arr[a]=arr[s],arr[s]=n);t.options.slides=arr}if(t.options.slides.length>1){if(t.options.slides.length>2){vars.current_slide-1<0?loadPrev=t.options.slides.length-1:loadPrev=vars.current_slide-1;var o=t.options.slides[loadPrev].url?"href='"+t.options.slides[loadPrev].url+"'":"",l=i('<img src="'+t.options.slides[loadPrev].image+'"/>'),r=t.el+" li:eq("+loadPrev+")";l.appendTo(r).wrap("<a "+o+e+"></a>").parent().parent().addClass("image-loading prevslide"),l.load(function(){i(this).data("origWidth",i(this).width()).data("origHeight",i(this).height()),t.resizeNow()})}}else t.options.slideshow=0;o=api.getField("url")?"href='"+api.getField("url")+"'":"";var d=i('<img src="'+api.getField("image")+'"/>'),p=t.el+" li:eq("+vars.current_slide+")";if(d.appendTo(p).wrap("<a "+o+e+"></a>").parent().parent().addClass("image-loading activeslide"),d.load(function(){t._origDim(i(this)),t.resizeNow(),t.launch(),"undefined"!=typeof theme&&"function"==typeof theme._init&&theme._init()}),t.options.slides.length>1){vars.current_slide==t.options.slides.length-1?loadNext=0:loadNext=vars.current_slide+1,o=t.options.slides[loadNext].url?"href='"+t.options.slides[loadNext].url+"'":"";var h=i('<img src="'+t.options.slides[loadNext].image+'"/>'),v=t.el+" li:eq("+loadNext+")";h.appendTo(v).wrap("<a "+o+e+"></a>").parent().parent().addClass("image-loading"),h.load(function(){i(this).data("origWidth",i(this).width()).data("origHeight",i(this).height()),t.resizeNow()})}t.$el.css("visibility","hidden"),i(".load-item").hide()},t.launch=function(){t.$el.css("visibility","visible"),i("#supersized-loader").remove(),"undefined"!=typeof theme&&"function"==typeof theme.beforeAnimation&&theme.beforeAnimation("next"),i(".load-item").show(),t.options.keyboard_nav&&i(document.documentElement).keyup(function(e){return!vars.in_animation&&(!i(document.activeElement).is("input, textarea")&&void(37==e.keyCode||40==e.keyCode?(clearInterval(vars.slideshow_interval),t.prevSlide()):39==e.keyCode||38==e.keyCode?(clearInterval(vars.slideshow_interval),t.nextSlide()):32!=e.keyCode||vars.hover_pause||(clearInterval(vars.slideshow_interval),t.playToggle())))}),t.options.slideshow&&t.options.pause_hover&&i(t.el).hover(function(){if(vars.in_animation)return!1;vars.hover_pause=!0,vars.is_paused||(vars.hover_pause="resume",t.playToggle())},function(){"resume"==vars.hover_pause&&(t.playToggle(),vars.hover_pause=!1)}),t.options.slide_links&&i(vars.slide_list+"> li").click(function(){return index=i(vars.slide_list+"> li").index(this),targetSlide=index+1,t.goTo(targetSlide),!1}),t.options.thumb_links&&i(vars.thumb_list+"> li").click(function(){return index=i(vars.thumb_list+"> li").index(this),targetSlide=index+1,api.goTo(targetSlide),!1}),t.options.slideshow&&t.options.slides.length>1&&(t.options.autoplay&&t.options.slides.length>1?vars.slideshow_interval=setInterval(t.nextSlide,t.options.slide_interval):vars.is_paused=!0,i(".load-item img").bind("contextmenu mousedown",function(){return!1})),i(window).resize(function(){t.resizeNow()})},t.resizeNow=function(){return t.$el.each(function(){return i("img",t.el).each(function(){thisSlide=i(this);var e=(thisSlide.data("origHeight")/thisSlide.data("origWidth")).toFixed(2),s=t.$el.width(),n=t.$el.height();function a(i){i?(thisSlide.width()<s||thisSlide.width()<t.options.min_width)&&(thisSlide.width()*e>=t.options.min_height?(thisSlide.width(t.options.min_width),thisSlide.height(thisSlide.width()*e)):o()):t.options.min_height>=n&&!t.options.fit_landscape?s*e>=t.options.min_height||s*e>=t.options.min_height&&e<=1?(thisSlide.width(s),thisSlide.height(s*e)):e>1?(thisSlide.height(t.options.min_height),thisSlide.width(thisSlide.height()/e)):thisSlide.width()<s&&(thisSlide.width(s),thisSlide.height(thisSlide.width()*e)):(thisSlide.width(s),thisSlide.height(s*e))}function o(i){i?thisSlide.height()<n&&(thisSlide.height()/e>=t.options.min_width?(thisSlide.height(t.options.min_height),thisSlide.width(thisSlide.height()/e)):a(!0)):t.options.min_width>=s?n/e>=t.options.min_width||e>1?(thisSlide.height(n),thisSlide.width(n/e)):e<=1&&(thisSlide.width(t.options.min_width),thisSlide.height(thisSlide.width()*e)):(thisSlide.height(n),thisSlide.width(n/e))}t.options.fit_always?n/s>e?a():o():n<=t.options.min_height&&s<=t.options.min_width?n/s>e?t.options.fit_landscape&&e<1?a(!0):o(!0):t.options.fit_portrait&&e>=1?o(!0):a(!0):s<=t.options.min_width?n/s>e?t.options.fit_landscape&&e<1?a(!0):o():t.options.fit_portrait&&e>=1?o():a(!0):n<=t.options.min_height?n/s>e?t.options.fit_landscape&&e<1?a():o(!0):t.options.fit_portrait&&e>=1?o(!0):a():n/s>e?t.options.fit_landscape&&e<1?a():o():t.options.fit_portrait&&e>=1?o():a(),thisSlide.parents("li").hasClass("image-loading")&&i(".image-loading").removeClass("image-loading"),t.options.horizontal_center&&i(this).css("left",(s-i(this).width())/2),t.options.vertical_center&&i(this).css("top",(n-i(this).height())/2)}),t.options.image_protect&&i("img",t.el).bind("contextmenu mousedown",function(){return!1}),!1})},t.nextSlide=function(){if(vars.in_animation||!api.options.slideshow)return!1;vars.in_animation=!0,clearInterval(vars.slideshow_interval);t.options.slides;var e=t.$el.find(".activeslide");i(".prevslide").removeClass("prevslide"),e.removeClass("activeslide").addClass("prevslide"),vars.current_slide+1==t.options.slides.length?vars.current_slide=0:vars.current_slide++;var s=i(t.el+" li:eq("+vars.current_slide+")");t.$el.find(".prevslide");1==t.options.performance&&t.$el.removeClass("quality").addClass("speed"),loadSlide=!1,vars.current_slide==t.options.slides.length-1?loadSlide=0:loadSlide=vars.current_slide+1;var n=t.el+" li:eq("+loadSlide+")";if(!i(n).html()){var a=t.options.new_window?' target="_blank"':"";imageLink=t.options.slides[loadSlide].url?"href='"+t.options.slides[loadSlide].url+"'":"";var o=i('<img src="'+t.options.slides[loadSlide].image+'"/>');o.appendTo(n).wrap("<a "+imageLink+a+"></a>").parent().parent().addClass("image-loading").css("visibility","hidden"),o.load(function(){t._origDim(i(this)),t.resizeNow()})}switch(1==t.options.thumbnail_navigation&&(vars.current_slide-1<0?prevThumb=t.options.slides.length-1:prevThumb=vars.current_slide-1,i(vars.prev_thumb).html(i("<img/>").attr("src",t.options.slides[prevThumb].image)),nextThumb=loadSlide,i(vars.next_thumb).html(i("<img/>").attr("src",t.options.slides[nextThumb].image))),"undefined"!=typeof theme&&"function"==typeof theme.beforeAnimation&&theme.beforeAnimation("next"),t.options.slide_links&&(i(".current-slide").removeClass("current-slide"),i(vars.slide_list+"> li").eq(vars.current_slide).addClass("current-slide")),s.css("visibility","hidden").addClass("activeslide"),t.options.transition){case 0:case"none":s.css("visibility","visible"),vars.in_animation=!1,t.afterAnimation();break;case 1:case"fade":s.css({opacity:0,visibility:"visible"}).animate({opacity:1,avoidTransforms:!1},t.options.transition_speed,function(){t.afterAnimation()});break;case 2:case"slideTop":s.css({top:-t.$el.height(),visibility:"visible"}).animate({top:0,avoidTransforms:!1},t.options.transition_speed,function(){t.afterAnimation()});break;case 3:case"slideRight":s.css({left:t.$el.width(),visibility:"visible"}).animate({left:0,avoidTransforms:!1},t.options.transition_speed,function(){t.afterAnimation()});break;case 4:case"slideBottom":s.css({top:t.$el.height(),visibility:"visible"}).animate({top:0,avoidTransforms:!1},t.options.transition_speed,function(){t.afterAnimation()});break;case 5:case"slideLeft":s.css({left:-t.$el.width(),visibility:"visible"}).animate({left:0,avoidTransforms:!1},t.options.transition_speed,function(){t.afterAnimation()});break;case 6:case"carouselRight":s.css({left:t.$el.width(),visibility:"visible"}).animate({left:0,avoidTransforms:!1},t.options.transition_speed,function(){t.afterAnimation()}),e.animate({left:-t.$el.width(),avoidTransforms:!1},t.options.transition_speed);break;case 7:case"carouselLeft":s.css({left:-t.$el.width(),visibility:"visible"}).animate({left:0,avoidTransforms:!1},t.options.transition_speed,function(){t.afterAnimation()}),e.animate({left:t.$el.width(),avoidTransforms:!1},t.options.transition_speed)}return!1},t.prevSlide=function(){if(vars.in_animation||!api.options.slideshow)return!1;vars.in_animation=!0,clearInterval(vars.slideshow_interval);t.options.slides;var e=t.$el.find(".activeslide");i(".prevslide").removeClass("prevslide"),e.removeClass("activeslide").addClass("prevslide"),0==vars.current_slide?vars.current_slide=t.options.slides.length-1:vars.current_slide--;var s=i(t.el+" li:eq("+vars.current_slide+")");t.$el.find(".prevslide");1==t.options.performance&&t.$el.removeClass("quality").addClass("speed"),loadSlide=vars.current_slide;var n=t.el+" li:eq("+loadSlide+")";if(!i(n).html()){var a=t.options.new_window?' target="_blank"':"";imageLink=t.options.slides[loadSlide].url?"href='"+t.options.slides[loadSlide].url+"'":"";var o=i('<img src="'+t.options.slides[loadSlide].image+'"/>');o.appendTo(n).wrap("<a "+imageLink+a+"></a>").parent().parent().addClass("image-loading").css("visibility","hidden"),o.load(function(){t._origDim(i(this)),t.resizeNow()})}switch(1==t.options.thumbnail_navigation&&(0==loadSlide?prevThumb=t.options.slides.length-1:prevThumb=loadSlide-1,i(vars.prev_thumb).html(i("<img/>").attr("src",t.options.slides[prevThumb].image)),vars.current_slide==t.options.slides.length-1?nextThumb=0:nextThumb=vars.current_slide+1,i(vars.next_thumb).html(i("<img/>").attr("src",t.options.slides[nextThumb].image))),"undefined"!=typeof theme&&"function"==typeof theme.beforeAnimation&&theme.beforeAnimation("prev"),t.options.slide_links&&(i(".current-slide").removeClass("current-slide"),i(vars.slide_list+"> li").eq(vars.current_slide).addClass("current-slide")),s.css("visibility","hidden").addClass("activeslide"),t.options.transition){case 0:case"none":s.css("visibility","visible"),vars.in_animation=!1,t.afterAnimation();break;case 1:case"fade":s.css({opacity:0,visibility:"visible"}).animate({opacity:1,avoidTransforms:!1},t.options.transition_speed,function(){t.afterAnimation()});break;case 2:case"slideTop":s.css({top:t.$el.height(),visibility:"visible"}).animate({top:0,avoidTransforms:!1},t.options.transition_speed,function(){t.afterAnimation()});break;case 3:case"slideRight":s.css({left:-t.$el.width(),visibility:"visible"}).animate({left:0,avoidTransforms:!1},t.options.transition_speed,function(){t.afterAnimation()});break;case 4:case"slideBottom":s.css({top:-t.$el.height(),visibility:"visible"}).animate({top:0,avoidTransforms:!1},t.options.transition_speed,function(){t.afterAnimation()});break;case 5:case"slideLeft":s.css({left:t.$el.width(),visibility:"visible"}).animate({left:0,avoidTransforms:!1},t.options.transition_speed,function(){t.afterAnimation()});break;case 6:case"carouselRight":s.css({left:-t.$el.width(),visibility:"visible"}).animate({left:0,avoidTransforms:!1},t.options.transition_speed,function(){t.afterAnimation()}),e.css({left:0}).animate({left:t.$el.width(),avoidTransforms:!1},t.options.transition_speed);break;case 7:case"carouselLeft":s.css({left:t.$el.width(),visibility:"visible"}).animate({left:0,avoidTransforms:!1},t.options.transition_speed,function(){t.afterAnimation()}),e.css({left:0}).animate({left:-t.$el.width(),avoidTransforms:!1},t.options.transition_speed)}return!1},t.playToggle=function(){return!(vars.in_animation||!api.options.slideshow)&&(vars.is_paused?(vars.is_paused=!1,"undefined"!=typeof theme&&"function"==typeof theme.playToggle&&theme.playToggle("play"),vars.slideshow_interval=setInterval(t.nextSlide,t.options.slide_interval)):(vars.is_paused=!0,"undefined"!=typeof theme&&"function"==typeof theme.playToggle&&theme.playToggle("pause"),clearInterval(vars.slideshow_interval)),!1)},t.goTo=function(e){if(vars.in_animation||!api.options.slideshow)return!1;var s=t.options.slides.length;if(e<0?e=s:e>s&&(e=1),e=s-e+1,clearInterval(vars.slideshow_interval),"undefined"!=typeof theme&&"function"==typeof theme.goTo&&theme.goTo(),vars.current_slide==s-e)return vars.is_paused||(vars.slideshow_interval=setInterval(t.nextSlide,t.options.slide_interval)),!1;s-e>vars.current_slide?(vars.current_slide=s-e-1,vars.update_images="next",t._placeSlide(vars.update_images)):s-e<vars.current_slide&&(vars.current_slide=s-e+1,vars.update_images="prev",t._placeSlide(vars.update_images)),t.options.slide_links&&(i(vars.slide_list+"> .current-slide").removeClass("current-slide"),i(vars.slide_list+"> li").eq(s-e).addClass("current-slide")),t.options.thumb_links&&(i(vars.thumb_list+"> .current-thumb").removeClass("current-thumb"),i(vars.thumb_list+"> li").eq(s-e).addClass("current-thumb"))},t._placeSlide=function(e){var s=t.options.new_window?' target="_blank"':"";if(loadSlide=!1,"next"==e){vars.current_slide==t.options.slides.length-1?loadSlide=0:loadSlide=vars.current_slide+1;var n=t.el+" li:eq("+loadSlide+")";if(!i(n).html()){s=t.options.new_window?' target="_blank"':"";imageLink=t.options.slides[loadSlide].url?"href='"+t.options.slides[loadSlide].url+"'":"",(a=i('<img src="'+t.options.slides[loadSlide].image+'"/>')).appendTo(n).wrap("<a "+imageLink+s+"></a>").parent().parent().addClass("image-loading").css("visibility","hidden"),a.load(function(){t._origDim(i(this)),t.resizeNow()})}t.nextSlide()}else if("prev"==e){vars.current_slide-1<0?loadSlide=t.options.slides.length-1:loadSlide=vars.current_slide-1;n=t.el+" li:eq("+loadSlide+")";if(!i(n).html()){var a;s=t.options.new_window?' target="_blank"':"";imageLink=t.options.slides[loadSlide].url?"href='"+t.options.slides[loadSlide].url+"'":"",(a=i('<img src="'+t.options.slides[loadSlide].image+'"/>')).appendTo(n).wrap("<a "+imageLink+s+"></a>").parent().parent().addClass("image-loading").css("visibility","hidden"),a.load(function(){t._origDim(i(this)),t.resizeNow()})}t.prevSlide()}},t._origDim=function(i){i.data("origWidth",i.width()).data("origHeight",i.height())},t.afterAnimation=function(){return 1==t.options.performance&&t.$el.removeClass("speed").addClass("quality"),vars.update_images&&(vars.current_slide-1<0?setPrev=t.options.slides.length-1:setPrev=vars.current_slide-1,vars.update_images=!1,i(".prevslide").removeClass("prevslide"),i(t.el+" li:eq("+setPrev+")").addClass("prevslide")),vars.in_animation=!1,!vars.is_paused&&t.options.slideshow&&(vars.slideshow_interval=setInterval(t.nextSlide,t.options.slide_interval),t.options.stop_loop&&vars.current_slide==t.options.slides.length-1&&t.playToggle()),"undefined"!=typeof theme&&"function"==typeof theme.afterAnimation&&theme.afterAnimation(),!1},t.getField=function(i){return t.options.slides[vars.current_slide][i]},t.init()},i.supersized.vars={thumb_tray:"#thumb-tray",thumb_list:"#thumb-list",slide_list:"#slide-list",current_slide:0,in_animation:!1,is_paused:!1,hover_pause:!1,slideshow_interval:!1,update_images:!1,options:{}},i.supersized.defaultOptions={slideshow:1,autoplay:1,start_slide:1,stop_loop:0,random:0,slide_interval:5e3,transition:1,transition_speed:750,new_window:1,pause_hover:0,keyboard_nav:1,performance:1,image_protect:1,fit_always:0,fit_landscape:0,fit_portrait:1,min_width:0,min_height:0,horizontal_center:1,vertical_center:1,slide_links:1,thumb_links:1,thumbnail_navigation:0},i.fn.supersized=function(e){return this.each(function(){new i.supersized(e)})}}(jQuery);