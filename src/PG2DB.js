/*
*	PhenoGen Genome Data Browser- PG2DB
*	A D3js based Genome Data Browser
*
* 	Author: Spencer Mahaffey
*	for http://phenogen.ucdenver.edu
*	Tabakoff Lab
* 	University of Colorado Denver AMC
* 	Department of Pharmaceutical Sciences Skaggs School of Pharmacy & Pharmaceutical Sciences
*
*	Builds an interactive multilevel view of the genome.
*
*/

PG2DB=function(params){
	var that={};
	//Initial Setup
	//setup internal variables
	that.svgList=[];
	that.svgViewIDList=[];
	that.processAjax=0;
	that.ajaxList=[];
	that.trackInfo=[];
	that.selectedGeneSymbol="";
	that.selectedID="";
	that.trackSettings=[];
	that.overSelectable=0;
	that.zoomUpdateHandle=Math.NaN;
	that.history=[];
	that.history[0]=[];
	that.history[1]=[];

	that.customTrackCount=0;

	that.testChrome=/chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
	that.testSafari=/safari/.test(navigator.userAgent.toLowerCase());
	that.testFireFox=/firefox/.test(navigator.userAgent.toLowerCase());
	that.testIE=/(wow|.net|ie)/.test(navigator.userAgent.toLowerCase());
	if(that.testChrome && that.testSafari){
	    that.testSafari=false;
	}
	if(that.testIE && !that.testChrome && !that.testFireFox && !that.testSafari){
		//TODO: Create a IE warning div and display instead of assuming one is on the page
		$("#IEproblem").show();
	}
	
	//parse parameters

	//setup doc elements
	//setup tooltip text div
		that.tt=d3.select("body").append("div")
	    	.attr("class", "testToolTip")
	    	.style("z-index",1001)
	    	.style("opacity", 0);
	    that.tt.append("span").style("float","right").append("img").attr("src","web/images/icons/close.png").on("click",function(){
			tt.style("opacity",0);
		});

	//Internal Functions

	//Browser Objects
	//Browser Generic
	//Full Browser Implementation
	//Tooltip Browser Implementation

	//Track Objects
	//Track Generic

	//View Menu Objects

	//Track Menu Objects

	//Report Objects

	return that;
}