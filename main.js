var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var textbox = $("#textbox");
var instructions = $("#instructions");
var content = '';
recognition.onstart = function(){
    instructions.text("Voice recognition is enabled");
}
$('stop').click(function(event){
    recognition.stop();
    instructions.text("Press start to continue");
})
recognition.onerror= function(){
    instructions.text("unable to recognize the voice")
}
recognition.onresult= function(event){
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    content+=transcript;
    textbox.val(content);
}
recognition.continuous = true;
$("#start").click(function(event){
    if(content.length) {
        content+=''
    }
    recognition.start() 
})