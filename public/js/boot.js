/* jshint ignore:start */
/* jshint unused:false */
window.debug=(function(){var i=this,b=Array.prototype.slice,d=i.console,h={},f,g,m=9,c=['error','warn','info','debug','log'],l='assert clear count dir dirxml exception group groupCollapsed groupEnd profile profileEnd table time timeEnd trace'.split(' '),j=l.length,a=[];while(--j>=0){(function(n){h[n]=function(){m!==0&&d&&d[n]&&d[n].apply(d,arguments)}})(l[j])}j=c.length;while(--j>=0){(function(n,o){h[o]=function(){var q=b.call(arguments),p=[o].concat(q);a.push(p);e(p);if(!d||!k(n)){return}d.firebug?d[o].apply(i,q):d[o]?d[o](q):d.log(q)}})(j,c[j])}function e(n){if(f&&(g||!d||!d.log)){f.apply(i,n)}}h.setLevel=function(n){m=typeof n==='number'?n:9};function k(n){return m>0?m>n:c.length+m<=n}h.setCallback=function(){var o=b.call(arguments),n=a.length,p=n;f=o.shift()||null;g=typeof o[0]==='boolean'?o.shift():false;p-=typeof o[0]==='number'?o.shift():n;while(p<n){e(a[p++])}};return h})();
/* jshint ignore:end */
//config
requirejs.config({
	'paths': {
		jquery: '../vendor/jquery/dist/jquery.min',
	},
	shim: {
		handlebars: {
			exports:'Handlebars'
		},
		bootstrap: {
			deps: ['jquery']
		}
	}
});
//init of application
require(
['jquery','../vendor/doormat/doormat.js'],
function ($,Doormat) {

	$(document).ready(function () {
		
		// var myMultDoormat = new Doormat(document.getElementsByTagName('ol')[0], true);
		// debug.log('APP READY',myMultDoormat);
		debug.log('APP READY');
	});

});
	
