var models = [
    {
        name : 'BMW 418d',
        image : 'img/bmw.jpg',
        link : 'www.google.com'
    },
    {
        name : 'HONDA',
        image : 'img/honda.jpg',
        link : 'www.google.com'
    },
    {
        name : 'MAZDA',
        image : 'img/mazda.jpg',
        link : 'www.google.com'
    },
    {
        name : 'SKODA',
        image : 'img/skoda.jpg',
        link : 'www.google.com'
    },
    {
        name : 'VOLVO',
        image : 'img/volvo.jpg',
        link : 'www.google.com'
    },
];
var index = 0;//başlangıcı ilk resime ayarladım.
var slaytCount = models.length;//slide sayısı için obje element sayısını aldık
// slider ayarları
var interval;

var settings = {
    duration: '2000',
    random: false
};

init(settings); //açılışta slider'ın ilk ayarları. settings'den alıyoruz.

//sol butona eventlistener ekleme
document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);//yeni index'i tekrar gönderiyorum
    console.log(index);

});
 
//sağ butona eventlistener ekleme
document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){

    index++;
    showSlide(index);// yeni index'i yeniden gönderiyorum
    console.log(index);

});

// arrow class'lı oklara erişiyorum. 
document.querySelectorAll('.arrow').forEach(function(item){//arrow class'lı herbir item için
    item.addEventListener('mouseenter',function(){ // mouse enter olduğunda
        clearInterval(interval); //daha önceki interval'ı temizle.
    })
})

// arrow class'lı okları mouse terk edince interval'a geri dön.

document.querySelectorAll('.arrow').forEach(function(item){//arrow class'lı herbir item için
    item.addEventListener('mouseleave',function(){ // mouse ayrıldığında 
        init(settings); //daha önceki interval'ı tekrar çağır.
    })
})

function init(settings){ // açılış fonksiyonu
    var prev; // daha önce oluşan index'i tutatacak. 
   interval=setInterval(function(){ // bu fonksiyon index'İ değiştirmek için. interval değişkenine atadım. 
   //bu sayede bu interval işlemine dışarıdan ulaşabileceğim.

        if(settings.random){
            //random index oluştur
            do{
                index = Math.floor(Math.random() * slaytCount);//yeni bir index oluştur (döngü aşağıda başladı)
            }while(index==prev)//index prev'e eşit ise
            prev = index; //eşit olan index'i prev'de sakla
            
        }else{
            //artan index. random değil. sırayla artan.
            if(index == slaytCount){ // son slayta gelindiyse.
                index = 0; //index'i başa aldık.
            } 
            showSlide(index);
            console.log(index);
            index++ // index'i sırayla  arttır.  
        }
       
        showSlide(index);//setInterval ile index 2 sn'de bir değişiyor

    },settings.duration)
}


function showSlide(a){ //buraya gelen RAKAMMMM!!!! 0'dan küçük slaytCount'tan büyük olabilir dikkat et.
    
if(a<0){ //0'dan küçük ise tekrar son slayt'a gidiyorum
        index = slaytCount - 1;
    }
    if(a>=slaytCount){ // son elemanı geçersem tekrar ilk elemana (0)'a dönüyorum
        index = 0;
    }

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    document.querySelector('.card-title').textContent=models[index].name;
    document.querySelector('.card-link').setAttribute('href',models[index].link);

}




