var define = "Speak - to utter words or articulate sounds with ordinary speech modulation";
var scenic = "There's a scenic area up ahead";
var trex = "On the left is the T-Rex, from the upper Cretaceous Period";
var anything = "Any text up to 100 characters for TTS";
var input = "";

//
var doDictate = function(string) {
    var name = string;
    
    var googleUrl = 'http://translate.google.com/translate_tts?tl=en&q=' + name;
    var xhr = Titanium.Network.createHTTPClient();
    xhr.open("GET", googleUrl);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();

    xhr.onerror = function(e) {
        alert('On Error'); 
    };

    xhr.onload = function() {
        var player = Ti.Media.createSound({
            url : googleUrl
        });
        player.play();
    };
};

$.define.addEventListener("click",function(e) {
	doDictate(define);
});
$.scenic.addEventListener("click",function(e) {
	doDictate(scenic);
});
$.trex.addEventListener("click",function(e) {
	doDictate(trex);
});
$.anything.addEventListener("click",function(e) {
	doDictate(anything);
});
$.speak.addEventListener("click",function(e) {
	if($.textField.getValue() == null || $.textField.getValue() == ""){
		alert("Text field was empty. Please enter text to be spoken");
	}else
		doDictate($.textField.getValue());
		$.textField.setValue("");
});

$.index.open();
