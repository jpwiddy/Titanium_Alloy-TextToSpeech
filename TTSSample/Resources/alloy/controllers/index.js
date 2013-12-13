function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.content = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "#d9c09e",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "content"
    });
    $.__views.index.add($.__views.content);
    $.__views.label = Ti.UI.createLabel({
        top: "10dp",
        bottom: "18dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        text: "This app showcases the ability to use Google Translate's TTS",
        id: "label"
    });
    $.__views.content.add($.__views.label);
    $.__views.define = Ti.UI.createButton({
        width: Ti.UI.FILL,
        height: "38dp",
        right: "12dp",
        left: "12dp",
        borderRadius: "8dp",
        borderColor: "transparent",
        bottom: "8dp",
        color: "white",
        title: "Define",
        backgroundColor: "#67bdc3",
        id: "define"
    });
    $.__views.content.add($.__views.define);
    $.__views.scenic = Ti.UI.createButton({
        width: Ti.UI.FILL,
        height: "38dp",
        right: "12dp",
        left: "12dp",
        borderRadius: "8dp",
        borderColor: "transparent",
        bottom: "8dp",
        color: "white",
        title: "Scenic Area",
        backgroundColor: "#67c39c",
        id: "scenic"
    });
    $.__views.content.add($.__views.scenic);
    $.__views.trex = Ti.UI.createButton({
        width: Ti.UI.FILL,
        height: "38dp",
        right: "12dp",
        left: "12dp",
        borderRadius: "8dp",
        borderColor: "transparent",
        bottom: "8dp",
        color: "white",
        title: "T-Rex",
        backgroundColor: "#c36f67",
        id: "trex"
    });
    $.__views.content.add($.__views.trex);
    $.__views.anything = Ti.UI.createButton({
        width: Ti.UI.FILL,
        height: "38dp",
        right: "12dp",
        left: "12dp",
        borderRadius: "8dp",
        borderColor: "transparent",
        bottom: "8dp",
        color: "white",
        title: "Anything",
        backgroundColor: "#6f67c3",
        id: "anything"
    });
    $.__views.content.add($.__views.anything);
    $.__views.wrapper = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: "38dp",
        right: "12dp",
        left: "12dp",
        bottom: "8dp",
        id: "wrapper"
    });
    $.__views.content.add($.__views.wrapper);
    $.__views.textField = Ti.UI.createTextField({
        top: "0dp",
        borderRadius: "8dp",
        borderColor: "#808080",
        height: "38dp",
        width: "65%",
        backgroundColor: "white",
        color: "#555555",
        hintText: "Enter text here",
        paddingLeft: "4dp",
        id: "textField"
    });
    $.__views.wrapper.add($.__views.textField);
    $.__views.speak = Ti.UI.createButton({
        width: "30%",
        height: "38dp",
        right: "0dp",
        left: "12dp",
        borderRadius: "8dp",
        borderColor: "transparent",
        bottom: "8dp",
        color: "white",
        title: "Speak",
        backgroundColor: "#ffa500",
        id: "speak"
    });
    $.__views.wrapper.add($.__views.speak);
    $.__views.progressBar = Ti.UI.createView({
        height: "15dp",
        left: "12dp",
        right: "12dp",
        width: Ti.UI.FILL,
        borderColor: "#808080",
        backgroundColor: "#FFFFFF",
        borderRadius: "7dp",
        id: "progressBar"
    });
    $.__views.content.add($.__views.progressBar);
    $.__views.progressLine = Ti.UI.createView({
        left: "0dp",
        width: "4.5%",
        backgroundColor: "#ffa500",
        borderRadius: "7dp",
        id: "progressLine"
    });
    $.__views.progressBar.add($.__views.progressLine);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var define = "Speak - to utter words or articulate sounds with ordinary speech modulation";
    var scenic = "There's a scenic area up ahead";
    var trex = "On the left is the T-Rex, from the upper Cretaceous Period";
    var anything = "Any text up to 100 characters for TTS";
    var flag = false;
    var doDictate = function(string) {
        var name = string;
        var googleUrl = "http://translate.google.com/translate_tts?tl=en&q=" + name;
        var xhr = Titanium.Network.createHTTPClient();
        xhr.open("GET", googleUrl);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send();
        xhr.onerror = function() {
            alert("On Error");
        };
        xhr.onload = function() {
            var player = Ti.Media.createSound({
                url: googleUrl
            });
            player.play();
        };
    };
    var animateBar = function() {
        if (flag) {
            var anim = Ti.UI.createAnimation({
                width: "4.5%",
                duration: 400
            });
            flag = false;
        } else {
            var anim = Ti.UI.createAnimation({
                width: "75%",
                duration: 400
            });
            flag = true;
        }
        $.progressLine.animate(anim);
    };
    $.define.addEventListener("click", function() {
        doDictate(define);
        animateBar();
    });
    $.scenic.addEventListener("click", function() {
        doDictate(scenic);
        animateBar();
    });
    $.trex.addEventListener("click", function() {
        doDictate(trex);
        animateBar();
    });
    $.anything.addEventListener("click", function() {
        doDictate(anything);
        animateBar();
    });
    $.speak.addEventListener("click", function() {
        animateBar();
        null == $.textField.getValue() || "" == $.textField.getValue() ? alert("Text field was empty. Please enter text to be spoken") : doDictate($.textField.getValue());
        $.textField.setValue("");
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;