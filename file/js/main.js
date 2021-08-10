let $ = a => document.querySelector(a)
function download(file){
window.open(`https://github.com/8G6/TTS-Config-RegKey-Windows/raw/main/tts-reg/${file}`,'_blank')
}
$('#all').addEventListener('click',()=>{
    download('rar/All_in_One.rar')
})