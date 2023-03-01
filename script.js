'use script';
//random sayı oluşturduk ve sayıyı integera dönüştürdük ve 1 ekledik
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
//skorun başlangıç değeri=20
let highscore = 0;

const displayMessage = function (message) {
    //
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function ()
//butona click özelliğini ekledik ve içerisine ikinci parametre olarak fonksiyon açtık 
{
    //yukarıdaki secretnumber number olduğu için burayıda number olarak atadık
    //queryseelctor ile butonu aldık
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //random sayıya consoldan bakabiliriz
    console.log(secretnumber, typeof secretnumber);

    //input boş girilirse
    if (!guess) {
        displayMessage('bir sayı gir');
    }

    //sayılar eşlesirse kazanırsa
    else if (guess == secretnumber) {
        displayMessage('doğru tahmin');

        //soru işareti yerine bilgiayarın oluşturduğu random sayıyı koyydukk
        document.querySelector('.number').textContent = secretnumber;

        //eğer bilirsek arka plan değişecek 
        document.querySelector('body').style.backgroundColor = 'salmon';

        if (score > highscore) {
            //eğer skorumuz highscore u geçerse high scoreu güncelliyoruz
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    //sayılar birbirlieriyle eşeleşmiyorsa
    else if (guess !== secretnumber) {
        if (score > 1) {
            //eğer tahmin sayıdan büyükse çok yüksek değilse çok düşük yazısını verecek
            displayMessage(guess > secretnumber ? 'çok yüksek' : 'çok düşük');
            //skoru yazdırıyorz
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('oyunu kaybettin');
            //query selector ile score classının sahip olduğu eleemnete erişip textcontent =0 verdik bu sebeple oyunu  kkaybettik
            document.querySelector('.score').textContent = 0;
        }
    }
});

//oyunu baştan başlatak için event ekliyoruz
document.querySelector('.again').addEventListener('click', function () {
    //skor 20 den başlyacak
    score = 20;
    //gizli sayı için secret numberi tekrar ürettik
    secretnumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('tahmin ediliyor...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.quess').value = '';

    //kazandığımızda ekran rengi değişecek
    document.querySelector('.body').style.backgroundColor = 'salmon';
})