SEMICOLON.Core.getVars.fn.isotope=o=>{const l=SEMICOLON.Core;l.loadJS({file:"plugins.isotope.js",id:"canvas-isotope-js",jsFolder:!0}),l.isFuncTrue(()=>"undefined"!=typeof Isotope).then(t=>!!t&&(l.initFunction({class:"has-plugin-isotope",event:"pluginIsotopeReady"}),(o=l.getSelector(o)).length<1||void o.each(function(){let t=jQuery(this),o=t.attr("data-transition")||"0.65s",e=t.attr("data-layout")||"masonry",i=t.attr("data-stagger")||0,s=t.attr("data-basewidth")||".portfolio-item:not(.wide):eq(0)",a=!0,n,r=(jQuery("body").hasClass("rtl")&&(a=!1),n=t.hasClass("portfolio")||t.hasClass("post-timeline")?t.isotope({layoutMode:e,isOriginLeft:a,transitionDuration:o,stagger:Number(i),percentPosition:!0,masonry:{columnWidth:t.find(s)[0]}}):t.isotope({layoutMode:e,isOriginLeft:a,transitionDuration:o,stagger:Number(i),percentPosition:!0}),t.data("isotope")&&t.addClass("has-init-isotope"),setInterval(function(){t.find(".lazy.lazy-loaded").length==t.find(".lazy").length&&(setTimeout(function(){t.filter(".has-init-isotope").isotope("layout")},800),clearInterval(r))},1e3));jQuery(window).on("lazyLoadLoaded",function(){t.filter(".has-init-isotope").isotope("layout")}),l.getVars.resizers.isotope=()=>{t.filter(".has-init-isotope").isotope("layout")}})))};