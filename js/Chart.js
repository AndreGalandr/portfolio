window.Chart=function(a){function m(a,b,c){var d=b.steps*b.stepValue,e=a-b.graphMin,f=v(e/d,1,0);return c*b.steps*f}function n(a,b,d,e){function j(){var c=a.animation?v(h(i),null,0):1;f(e),a.scaleOverlay?(d(c),b()):(b(),d(c))}function k(){i+=g,j(),i<=1?o(k):"function"==typeof a.onAnimationComplete&&a.onAnimationComplete()}var g=a.animation?1/v(a.animationSteps,Number.MAX_VALUE,1):1,h=c[a.animationEasing],i=a.animation?0:1;"function"!=typeof b&&(b=function(){}),o(k)}function p(a,b,c,d,e,f){function p(a){return Math.floor(Math.log(a)/Math.LN10)}var g,h,i,j,k,l,m;for(l=d-e,m=p(l),g=Math.floor(e/(1*Math.pow(10,m)))*Math.pow(10,m),h=Math.ceil(d/(1*Math.pow(10,m)))*Math.pow(10,m),i=h-g,j=Math.pow(10,m),k=Math.round(i/j);k<c||k>b;)k<c?(j/=2,k=Math.round(i/j)):(j*=2,k=Math.round(i/j));var o=[];return q(f,o,k,g,j),{steps:k,stepValue:j,graphMin:g,labels:o}}function q(a,b,c,d,e){if(a)for(var f=1;f<c+1;f++)b.push(z(a,{value:(d+e*f).toFixed(w(e))}))}function r(a){return Math.max.apply(Math,a)}function s(a){return Math.min.apply(Math,a)}function t(a,b){return a?a:b}function u(a){return!isNaN(parseFloat(a))&&isFinite(a)}function v(a,b,c){return u(b)&&a>b?b:u(c)&&a<c?c:a}function w(a){return a%1!=0?a.toString().split(".")[1].length:0}function x(a,b){var c={};for(var d in a)c[d]=a[d];for(var d in b)c[d]=b[d];return c}function z(a,b){var c=/\W/.test(a)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+a.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):y[a]=y[a]||z(document.getElementById(a).innerHTML);return b?c(b):c}var b=this,c={linear:function(a){return a},easeInQuad:function(a){return a*a},easeOutQuad:function(a){return-1*a*(a-2)},easeInOutQuad:function(a){return(a/=.5)<1?.5*a*a:-.5*(--a*(a-2)-1)},easeInCubic:function(a){return a*a*a},easeOutCubic:function(a){return 1*((a=a/1-1)*a*a+1)},easeInOutCubic:function(a){return(a/=.5)<1?.5*a*a*a:.5*((a-=2)*a*a+2)},easeInQuart:function(a){return a*a*a*a},easeOutQuart:function(a){return-1*((a=a/1-1)*a*a*a-1)},easeInOutQuart:function(a){return(a/=.5)<1?.5*a*a*a*a:-.5*((a-=2)*a*a*a-2)},easeInQuint:function(a){return 1*(a/=1)*a*a*a*a},easeOutQuint:function(a){return 1*((a=a/1-1)*a*a*a*a+1)},easeInOutQuint:function(a){return(a/=.5)<1?.5*a*a*a*a*a:.5*((a-=2)*a*a*a*a+2)},easeInSine:function(a){return-1*Math.cos(a/1*(Math.PI/2))+1},easeOutSine:function(a){return 1*Math.sin(a/1*(Math.PI/2))},easeInOutSine:function(a){return-.5*(Math.cos(Math.PI*a/1)-1)},easeInExpo:function(a){return 0==a?1:1*Math.pow(2,10*(a/1-1))},easeOutExpo:function(a){return 1==a?1:1*(-Math.pow(2,-10*a/1)+1)},easeInOutExpo:function(a){return 0==a?0:1==a?1:(a/=.5)<1?.5*Math.pow(2,10*(a-1)):.5*(-Math.pow(2,-10*--a)+2)},easeInCirc:function(a){return a>=1?a:-1*(Math.sqrt(1-(a/=1)*a)-1)},easeOutCirc:function(a){return 1*Math.sqrt(1-(a=a/1-1)*a)},easeInOutCirc:function(a){return(a/=.5)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)},easeInElastic:function(a){var b=1.70158,c=0,d=1;if(0==a)return 0;if(1==(a/=1))return 1;if(c||(c=.3),d<Math.abs(1)){d=1;var b=c/4}else var b=c/(2*Math.PI)*Math.asin(1/d);return-(d*Math.pow(2,10*(a-=1))*Math.sin((1*a-b)*(2*Math.PI)/c))},easeOutElastic:function(a){var b=1.70158,c=0,d=1;if(0==a)return 0;if(1==(a/=1))return 1;if(c||(c=.3),d<Math.abs(1)){d=1;var b=c/4}else var b=c/(2*Math.PI)*Math.asin(1/d);return d*Math.pow(2,-10*a)*Math.sin((1*a-b)*(2*Math.PI)/c)+1},easeInOutElastic:function(a){var b=1.70158,c=0,d=1;if(0==a)return 0;if(2==(a/=.5))return 1;if(c||(c=1*(.3*1.5)),d<Math.abs(1)){d=1;var b=c/4}else var b=c/(2*Math.PI)*Math.asin(1/d);return a<1?-.5*(d*Math.pow(2,10*(a-=1))*Math.sin((1*a-b)*(2*Math.PI)/c)):d*Math.pow(2,-10*(a-=1))*Math.sin((1*a-b)*(2*Math.PI)/c)*.5+1},easeInBack:function(a){var b=1.70158;return 1*(a/=1)*a*((b+1)*a-b)},easeOutBack:function(a){var b=1.70158;return 1*((a=a/1-1)*a*((b+1)*a+b)+1)},easeInOutBack:function(a){var b=1.70158;return(a/=.5)<1?.5*(a*a*(((b*=1.525)+1)*a-b)):.5*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},easeInBounce:function(a){return 1-c.easeOutBounce(1-a)},easeOutBounce:function(a){return(a/=1)<1/2.75?1*(7.5625*a*a):a<2/2.75?1*(7.5625*(a-=1.5/2.75)*a+.75):a<2.5/2.75?1*(7.5625*(a-=2.25/2.75)*a+.9375):1*(7.5625*(a-=2.625/2.75)*a+.984375)},easeInOutBounce:function(a){return a<.5?.5*c.easeInBounce(2*a):.5*c.easeOutBounce(2*a-1)+.5}},d=a.canvas.width,e=a.canvas.height;window.devicePixelRatio&&(a.canvas.style.width=d+"px",a.canvas.style.height=e+"px",a.canvas.height=e*window.devicePixelRatio,a.canvas.width=d*window.devicePixelRatio,a.scale(window.devicePixelRatio,window.devicePixelRatio)),this.PolarArea=function(c,d){b.PolarArea.defaults={scaleOverlay:!0,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:!0,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null};var e=d?x(b.PolarArea.defaults,d):b.PolarArea.defaults;return new g(c,e,a)},this.Radar=function(c,d){b.Radar.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:!0,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!1,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,angleShowLineOut:!0,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:12,pointLabelFontColor:"#666",pointDot:!0,pointDotRadius:3,pointDotStrokeWidth:1,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var e=d?x(b.Radar.defaults,d):b.Radar.defaults;return new h(c,e,a)},this.Pie=function(c,d){b.Pie.defaults={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null};var e=d?x(b.Pie.defaults,d):b.Pie.defaults;return new i(c,e,a)},this.Doughnut=function(c,d){b.Doughnut.defaults={segmentShowStroke:!0,segmentStrokeColor:"#2c3e50",segmentStrokeWidth:1,percentageInnerCutout:90,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null};var e=d?x(b.Doughnut.defaults,d):b.Doughnut.defaults;return new j(c,e,a)},this.Line=function(c,d){b.Line.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,bezierCurve:!0,pointDot:!0,pointDotRadius:4,pointDotStrokeWidth:2,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var e=d?x(b.Line.defaults,d):b.Line.defaults;return new k(c,e,a)},this.Bar=function(c,d){b.Bar.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,barShowStroke:!0,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var e=d?x(b.Bar.defaults,d):b.Bar.defaults;return new l(c,e,a)};var f=function(a){a.clearRect(0,0,d,e)},g=function(a,b,c){function o(){f=s([d,e])/2,f-=r([.5*b.scaleFontSize,.5*b.scaleLineWidth]),i=2*b.scaleFontSize,b.scaleShowLabelBackdrop&&(i+=2*b.scaleBackdropPaddingY,f-=1.5*b.scaleBackdropPaddingY),j=f,i=t(i,5)}function u(){for(var a=0;a<h.steps;a++)if(b.scaleShowLine&&(c.beginPath(),c.arc(d/2,e/2,g*(a+1),0,2*Math.PI,!0),c.strokeStyle=b.scaleLineColor,c.lineWidth=b.scaleLineWidth,c.stroke()),b.scaleShowLabels){c.textAlign="center",c.font=b.scaleFontStyle+" "+b.scaleFontSize+"px "+b.scaleFontFamily;var f=h.labels[a];if(b.scaleShowLabelBackdrop){var i=c.measureText(f).width;c.fillStyle=b.scaleBackdropColor,c.beginPath(),c.rect(Math.round(d/2-i/2-b.scaleBackdropPaddingX),Math.round(e/2-g*(a+1)-.5*b.scaleFontSize-b.scaleBackdropPaddingY),Math.round(i+2*b.scaleBackdropPaddingX),Math.round(b.scaleFontSize+2*b.scaleBackdropPaddingY)),c.fill()}c.textBaseline="middle",c.fillStyle=b.scaleFontColor,c.fillText(f,d/2,e/2-g*(a+1))}}function v(f){var i=-Math.PI/2,j=2*Math.PI/a.length,k=1,l=1;b.animation&&(b.animateScale&&(k=f),b.animateRotate&&(l=f));for(var n=0;n<a.length;n++)c.beginPath(),c.arc(d/2,e/2,k*m(a[n].value,h,g),i,i+l*j,!1),c.lineTo(d/2,e/2),c.closePath(),c.fillStyle=a[n].color,c.fill(),b.segmentShowStroke&&(c.strokeStyle=b.segmentStrokeColor,c.lineWidth=b.segmentStrokeWidth,c.stroke()),i+=l*j}function w(){for(var b=Number.MIN_VALUE,c=Number.MAX_VALUE,d=0;d<a.length;d++)a[d].value>b&&(b=a[d].value),a[d].value<c&&(c=a[d].value);var e=Math.floor(j/(.66*i)),f=Math.floor(j/i*.5);return{maxValue:b,minValue:c,maxSteps:e,minSteps:f}}var f,g,h,i,j,k,l;o(),k=w(),l=b.scaleShowLabels?b.scaleLabel:null,b.scaleOverride?(h={steps:b.scaleSteps,stepValue:b.scaleStepWidth,graphMin:b.scaleStartValue,labels:[]},q(l,h.labels,h.steps,b.scaleStartValue,b.scaleStepWidth)):h=p(j,k.maxSteps,k.minSteps,k.maxValue,k.minValue,l),g=f/h.steps,n(b,u,v,c)},h=function(a,b,c){function o(f){var i=2*Math.PI/a.datasets[0].data.length;c.save(),c.translate(d/2,e/2);for(var j=0;j<a.datasets.length;j++){c.beginPath(),c.moveTo(0,f*(-1*m(a.datasets[j].data[0],h,g)));for(var k=1;k<a.datasets[j].data.length;k++)c.rotate(i),c.lineTo(0,f*(-1*m(a.datasets[j].data[k],h,g)));if(c.closePath(),c.fillStyle=a.datasets[j].fillColor,c.strokeStyle=a.datasets[j].strokeColor,c.lineWidth=b.datasetStrokeWidth,c.fill(),c.stroke(),b.pointDot){c.fillStyle=a.datasets[j].pointColor,c.strokeStyle=a.datasets[j].pointStrokeColor,c.lineWidth=b.pointDotStrokeWidth;for(var l=0;l<a.datasets[j].data.length;l++)c.rotate(i),c.beginPath(),c.arc(0,f*(-1*m(a.datasets[j].data[l],h,g)),b.pointDotRadius,2*Math.PI,!1),c.fill(),c.stroke()}c.rotate(i)}c.restore()}function u(){var i=2*Math.PI/a.datasets[0].data.length;if(c.save(),c.translate(d/2,e/2),b.angleShowLineOut){c.strokeStyle=b.angleLineColor,c.lineWidth=b.angleLineWidth;for(var j=0;j<a.datasets[0].data.length;j++)c.rotate(i),c.beginPath(),c.moveTo(0,0),c.lineTo(0,-f),c.stroke()}for(var k=0;k<h.steps;k++){if(c.beginPath(),b.scaleShowLine){c.strokeStyle=b.scaleLineColor,c.lineWidth=b.scaleLineWidth,c.moveTo(0,-g*(k+1));for(var l=0;l<a.datasets[0].data.length;l++)c.rotate(i),c.lineTo(0,-g*(k+1));c.closePath(),c.stroke()}if(b.scaleShowLabels){if(c.textAlign="center",c.font=b.scaleFontStyle+" "+b.scaleFontSize+"px "+b.scaleFontFamily,c.textBaseline="middle",b.scaleShowLabelBackdrop){var m=c.measureText(h.labels[k]).width;c.fillStyle=b.scaleBackdropColor,c.beginPath(),c.rect(Math.round(-m/2-b.scaleBackdropPaddingX),Math.round(-g*(k+1)-.5*b.scaleFontSize-b.scaleBackdropPaddingY),Math.round(m+2*b.scaleBackdropPaddingX),Math.round(b.scaleFontSize+2*b.scaleBackdropPaddingY)),c.fill()}c.fillStyle=b.scaleFontColor,c.fillText(h.labels[k],0,-g*(k+1))}}for(var n=0;n<a.labels.length;n++){c.font=b.pointLabelFontStyle+" "+b.pointLabelFontSize+"px "+b.pointLabelFontFamily,c.fillStyle=b.pointLabelFontColor;var o=Math.sin(i*n)*(f+b.pointLabelFontSize),p=Math.cos(i*n)*(f+b.pointLabelFontSize);i*n==Math.PI||i*n==0?c.textAlign="center":i*n>Math.PI?c.textAlign="right":c.textAlign="left",c.textBaseline="middle",c.fillText(a.labels[n],o,-p)}c.restore()}function w(){f=s([d,e])/2,i=2*b.scaleFontSize;for(var g=0,h=0;h<a.labels.length;h++){c.font=b.pointLabelFontStyle+" "+b.pointLabelFontSize+"px "+b.pointLabelFontFamily;var k=c.measureText(a.labels[h]).width;k>g&&(g=k)}f-=r([g,b.pointLabelFontSize/2*1.5]),f-=b.pointLabelFontSize,f=v(f,null,0),j=f,i=t(i,5)}function x(){for(var b=Number.MIN_VALUE,c=Number.MAX_VALUE,d=0;d<a.datasets.length;d++)for(var e=0;e<a.datasets[d].data.length;e++)a.datasets[d].data[e]>b&&(b=a.datasets[d].data[e]),a.datasets[d].data[e]<c&&(c=a.datasets[d].data[e]);var f=Math.floor(j/(.66*i)),g=Math.floor(j/i*.5);return{maxValue:b,minValue:c,maxSteps:f,minSteps:g}}var f,g,h,i,j,k,l;a.labels||(a.labels=[]),w();var k=x();l=b.scaleShowLabels?b.scaleLabel:null,b.scaleOverride?(h={steps:b.scaleSteps,stepValue:b.scaleStepWidth,graphMin:b.scaleStartValue,labels:[]},q(l,h.labels,h.steps,b.scaleStartValue,b.scaleStepWidth)):h=p(j,k.maxSteps,k.minSteps,k.maxValue,k.minValue,l),g=f/h.steps,n(b,u,o,c)},i=function(a,b,c){function i(h){var i=-Math.PI/2,j=1,k=1;b.animation&&(b.animateScale&&(j=h),b.animateRotate&&(k=h));for(var l=0;l<a.length;l++){var m=k*(a[l].value/f*(2*Math.PI));c.beginPath(),c.arc(d/2,e/2,j*g,i,i+m),c.lineTo(d/2,e/2),c.closePath(),c.fillStyle=a[l].color,c.fill(),b.segmentShowStroke&&(c.lineWidth=b.segmentStrokeWidth,c.strokeStyle=b.segmentStrokeColor,c.stroke()),i+=m}}for(var f=0,g=s([e/2,d/2])-5,h=0;h<a.length;h++)f+=a[h].value;n(b,null,i,c)},j=function(a,b,c){function j(i){var j=-Math.PI/2,k=1,l=1;b.animation&&(b.animateScale&&(k=i),b.animateRotate&&(l=i));for(var m=0;m<a.length;m++){var n=l*(a[m].value/f*(2*Math.PI));c.beginPath(),c.arc(d/2,e/2,k*g,j,j+n,!1),c.arc(d/2,e/2,k*h,j+n,j,!0),c.closePath(),c.fillStyle=a[m].color,c.fill(),b.segmentShowStroke&&(c.lineWidth=b.segmentStrokeWidth,c.strokeStyle=b.segmentStrokeColor,c.stroke()),j+=n}}for(var f=0,g=s([e/2,d/2])-5,h=g*(b.percentageInnerCutout/100),i=0;i<a.length;i++)f+=a[i].value;n(b,null,j,c)},k=function(a,b,c){function w(d){function j(b,c){return u-d*m(a.datasets[b].data[c],h,g)}function k(a){return t+o*a}for(var e=0;e<a.datasets.length;e++){c.strokeStyle=a.datasets[e].strokeColor,c.lineWidth=b.datasetStrokeWidth,c.beginPath(),c.moveTo(t,u-d*m(a.datasets[e].data[0],h,g));for(var f=1;f<a.datasets[e].data.length;f++)b.bezierCurve?c.bezierCurveTo(k(f-.5),j(e,f-1),k(f-.5),j(e,f),k(f),j(e,f)):c.lineTo(k(f),j(e,f));if(c.stroke(),b.datasetFill?(c.lineTo(t+o*(a.datasets[e].data.length-1),u),c.lineTo(t,u),c.closePath(),c.fillStyle=a.datasets[e].fillColor,c.fill()):c.closePath(),b.pointDot){c.fillStyle=a.datasets[e].pointColor,c.strokeStyle=a.datasets[e].pointStrokeColor,c.lineWidth=b.pointDotStrokeWidth;for(var i=0;i<a.datasets[e].data.length;i++)c.beginPath(),c.arc(t+o*i,u-d*m(a.datasets[e].data[i],h,g),b.pointDotRadius,0,2*Math.PI,!0),c.fill(),c.stroke()}}}function x(){c.lineWidth=b.scaleLineWidth,c.strokeStyle=b.scaleLineColor,c.beginPath(),c.moveTo(d-r/2+5,u),c.lineTo(d-r/2-s-5,u),c.stroke(),v>0?(c.save(),c.textAlign="right"):c.textAlign="center",c.fillStyle=b.scaleFontColor;for(var e=0;e<a.labels.length;e++)c.save(),v>0?(c.translate(t+e*o,u+b.scaleFontSize),c.rotate(-(v*(Math.PI/180))),c.fillText(a.labels[e],0,0),c.restore()):c.fillText(a.labels[e],t+e*o,u+b.scaleFontSize+3),c.beginPath(),c.moveTo(t+e*o,u+3),b.scaleShowGridLines&&e>0?(c.lineWidth=b.scaleGridLineWidth,c.strokeStyle=b.scaleGridLineColor,c.lineTo(t+e*o,5)):c.lineTo(t+e*o,u+3),c.stroke();c.lineWidth=b.scaleLineWidth,c.strokeStyle=b.scaleLineColor,c.beginPath(),c.moveTo(t,u+5),c.lineTo(t,5),c.stroke(),c.textAlign="right",c.textBaseline="middle";for(var f=0;f<h.steps;f++)c.beginPath(),c.moveTo(t-3,u-(f+1)*g),b.scaleShowGridLines?(c.lineWidth=b.scaleGridLineWidth,c.strokeStyle=b.scaleGridLineColor,c.lineTo(t+s+5,u-(f+1)*g)):c.lineTo(t-.5,u-(f+1)*g),c.stroke(),b.scaleShowLabels&&c.fillText(h.labels[f],t-8,u-(f+1)*g)}function y(){var e=1;if(b.scaleShowLabels){c.font=b.scaleFontStyle+" "+b.scaleFontSize+"px "+b.scaleFontFamily;for(var f=0;f<h.labels.length;f++){var g=c.measureText(h.labels[f]).width;e=g>e?g:e}e+=10}s=d-e-r,o=Math.floor(s/(a.labels.length-1)),t=d-r/2-s,u=j+b.scaleFontSize/2}function z(){f=e,c.font=b.scaleFontStyle+" "+b.scaleFontSize+"px "+b.scaleFontFamily,r=1;for(var g=0;g<a.labels.length;g++){var h=c.measureText(a.labels[g]).width;r=h>r?h:r}d/a.labels.length<r?(v=45,d/a.labels.length<Math.cos(v)*r?(v=90,f-=r):f-=Math.sin(v)*r):f-=b.scaleFontSize,f-=5,i=b.scaleFontSize,f-=i,j=f}function A(){for(var b=Number.MIN_VALUE,c=Number.MAX_VALUE,d=0;d<a.datasets.length;d++)for(var e=0;e<a.datasets[d].data.length;e++)a.datasets[d].data[e]>b&&(b=a.datasets[d].data[e]),a.datasets[d].data[e]<c&&(c=a.datasets[d].data[e]);var f=Math.floor(j/(.66*i)),g=Math.floor(j/i*.5);return{maxValue:b,minValue:c,maxSteps:f,minSteps:g}}var f,g,h,i,j,k,l,o,r,s,t,u,v=0;z(),k=A(),l=b.scaleShowLabels?b.scaleLabel:"",b.scaleOverride?(h={steps:b.scaleSteps,stepValue:b.scaleStepWidth,graphMin:b.scaleStartValue,labels:[]},q(l,h.labels,h.steps,b.scaleStartValue,b.scaleStepWidth)):h=p(j,k.maxSteps,k.minSteps,k.maxValue,k.minValue,l),g=Math.floor(j/h.steps),y(),n(b,x,w,c)},l=function(a,b,c){function x(d){c.lineWidth=b.barStrokeWidth;for(var e=0;e<a.datasets.length;e++){c.fillStyle=a.datasets[e].fillColor,c.strokeStyle=a.datasets[e].strokeColor;for(var f=0;f<a.datasets[e].data.length;f++){var i=t+b.barValueSpacing+o*f+v*e+b.barDatasetSpacing*e+b.barStrokeWidth*e;c.beginPath(),c.moveTo(i,u),c.lineTo(i,u-d*m(a.datasets[e].data[f],h,g)+b.barStrokeWidth/2),c.lineTo(i+v,u-d*m(a.datasets[e].data[f],h,g)+b.barStrokeWidth/2),c.lineTo(i+v,u),b.barShowStroke&&c.stroke(),c.closePath(),c.fill()}}}function y(){c.lineWidth=b.scaleLineWidth,c.strokeStyle=b.scaleLineColor,c.beginPath(),c.moveTo(d-r/2+5,u),c.lineTo(d-r/2-s-5,u),c.stroke(),w>0?(c.save(),c.textAlign="right"):c.textAlign="center",c.fillStyle=b.scaleFontColor;for(var e=0;e<a.labels.length;e++)c.save(),w>0?(c.translate(t+e*o,u+b.scaleFontSize),c.rotate(-(w*(Math.PI/180))),c.fillText(a.labels[e],0,0),c.restore()):c.fillText(a.labels[e],t+e*o+o/2,u+b.scaleFontSize+3),c.beginPath(),c.moveTo(t+(e+1)*o,u+3),c.lineWidth=b.scaleGridLineWidth,c.strokeStyle=b.scaleGridLineColor,c.lineTo(t+(e+1)*o,5),c.stroke();c.lineWidth=b.scaleLineWidth,c.strokeStyle=b.scaleLineColor,c.beginPath(),c.moveTo(t,u+5),c.lineTo(t,5),c.stroke(),c.textAlign="right",c.textBaseline="middle";for(var f=0;f<h.steps;f++)c.beginPath(),c.moveTo(t-3,u-(f+1)*g),b.scaleShowGridLines?(c.lineWidth=b.scaleGridLineWidth,c.strokeStyle=b.scaleGridLineColor,c.lineTo(t+s+5,u-(f+1)*g)):c.lineTo(t-.5,u-(f+1)*g),c.stroke(),b.scaleShowLabels&&c.fillText(h.labels[f],t-8,u-(f+1)*g)}function z(){var e=1;if(b.scaleShowLabels){c.font=b.scaleFontStyle+" "+b.scaleFontSize+"px "+b.scaleFontFamily;for(var f=0;f<h.labels.length;f++){var g=c.measureText(h.labels[f]).width;e=g>e?g:e}e+=10}s=d-e-r,o=Math.floor(s/a.labels.length),v=(o-2*b.scaleGridLineWidth-2*b.barValueSpacing-(b.barDatasetSpacing*a.datasets.length-1)-(b.barStrokeWidth/2*a.datasets.length-1))/a.datasets.length,t=d-r/2-s,u=j+b.scaleFontSize/2}function A(){f=e,c.font=b.scaleFontStyle+" "+b.scaleFontSize+"px "+b.scaleFontFamily,r=1;for(var g=0;g<a.labels.length;g++){var h=c.measureText(a.labels[g]).width;r=h>r?h:r}d/a.labels.length<r?(w=45,d/a.labels.length<Math.cos(w)*r?(w=90,f-=r):f-=Math.sin(w)*r):f-=b.scaleFontSize,f-=5,i=b.scaleFontSize,f-=i,j=f}function B(){for(var b=Number.MIN_VALUE,c=Number.MAX_VALUE,d=0;d<a.datasets.length;d++)for(var e=0;e<a.datasets[d].data.length;e++)a.datasets[d].data[e]>b&&(b=a.datasets[d].data[e]),a.datasets[d].data[e]<c&&(c=a.datasets[d].data[e]);var f=Math.floor(j/(.66*i)),g=Math.floor(j/i*.5);return{maxValue:b,minValue:c,maxSteps:f,minSteps:g}}var f,g,h,i,j,k,l,o,r,s,t,u,v,w=0;A(),k=B(),l=b.scaleShowLabels?b.scaleLabel:"",b.scaleOverride?(h={steps:b.scaleSteps,stepValue:b.scaleStepWidth,graphMin:b.scaleStartValue,labels:[]},q(l,h.labels,h.steps,b.scaleStartValue,b.scaleStepWidth)):h=p(j,k.maxSteps,k.minSteps,k.maxValue,k.minValue,l),g=Math.floor(j/h.steps),z(),n(b,y,x,c)},o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),y={}};