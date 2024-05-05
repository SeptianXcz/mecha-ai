var $messages = $('.messages-content'),
message = 'Hai, aku Mecha AI dan kamu?';

$(window).load(function() {
$messages.mCustomScrollbar();
setTimeout(function() {
fakeMessage();
}, 100);
});

function updateScrollbar() {
$messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
scrollInertia: 10,
timeout: 0
});
}

function setDate(){
var date = new Date();
$('<div class="timestamp">' + date.getHours() + ":" + date.getMinutes() + '</div>').appendTo($('.message:last'));
}

function insertMessage() {
msg = $('.message-input').val();
message = msg;
if ($.trim(msg) == '') {
return false;
}
$('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
setDate();
$('.message-input').val(null);
updateScrollbar();
setTimeout(function() {
fakeMessage();
}, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
insertMessage();

});

$(window).on('keydown', function(e) {
if (e.which == 13) {
insertMessage();
return false;
}
})

async function Lbbai(input) {
const today = new Date();
const date = new Date(today.toLocaleString("en-US", {timeZone: "Asia/Jakarta"}));
const hours = date.getHours();
const minutes = date.getMinutes();
const day = today.getDate();
const month = today.getMonth() + 1; // perhatikan bahwa bulan dimulai dari 0, maka ditambahkan 1.
const year = today.getFullYear();
// mengambil nama hari dalam bahasa Inggris.
const dayOfWeek = today.toLocaleDateString("id-ID", { weekday: "long" });
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
const getTodayDate = `Hari ini adalah ${dayOfWeek}, ${day}/${month}/${year}.`;

const sistem = `kamu Adalah Mecha, Bot WhatsApp dengan program kecerdasan buatan AI (artificial intelligence). jawab setiap pertanyaan dengan jawaban yang edukatif, jika ada yang bertanya tentang waktu kamu jawab yang berkaitan dengan ${timeNow} dan ${getTodayDate}, kamu memiliki sifat dingin dan sedikit tsundere imut, kamu dirancang dan dikembangkan oleh SuryaDev, nama lengkapnya adalah Jabal Surya Ngalam, SuryaDev berasal dari Jepara, lahir pada 21 mei 2005, dia adalah seseorang yang kreatif dan berbakat dalam menciptakan berbagai hal, dia juga memiliki seorang adik cantik yang bernama lindia yang lahir pada 7 desember 2006.`
const messages = [
{ role: "system", content: sistem },
{ role: "user", content: input },
];

try {
const response = await fetch("https://deepenglish.com/wp-json/ai-chatbot/v1/chat", {
method: "POST",
headers: {
Accept: "text/event-stream",
"Content-Type": "application/json",
},
body: JSON.stringify({ messages }),
});

const responseData = await response.json();
return responseData.answer.replace(/```/g, ' ');
} catch (error) {
console.error("Error fetching data:", error);
throw error;
}
}

async function fakeMessage() {
var messages = message;
if (messages != 'Hai, aku Mecha AI dan kamu?') messages = await Lbbai(messages);

if ($('.message-input').val() != '') {
return false;
}
$('<div class="message loading new"><figure class="avatar"><img src="https://telegra.ph/file/6c493c73ab4b4e3537420.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
updateScrollbar();

setTimeout(function() {
$('.message.loading').remove();
$('<div class="message new"><figure class="avatar"><img src="https://telegra.ph/file/6c493c73ab4b4e3537420.jpg" /></figure>' + messages + '</div>').appendTo($('.mCSB_container')).addClass('new');
setDate();
updateScrollbar();
}, 1000);

}