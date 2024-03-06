import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <main>
      <h1 >SCIENCE FICTION</h1>
      <div class=" max-w-screen-xl  group relative overflow-hidden mx-auto grid md:grid-cols-3 gap-4 justify-items-center  mx-10 my-12">


        <a href="#" class="img hover:scale-110 hover:opacity-50 duration-500 " ><Image src="/images/uzay-yolcuları.jpg" alt="uzay-yolcuları" width={350} height={150} />
          <div class="link ">
            <h3 >SPACE TRAVELERS</h3>
            <p>Avalon adlı uzay gemisi, Homestead II adında çok uzak bir koloniye 5000'den fazla kişiyi götürmek üzere, 120 yıl sürecek bir yolculuk yapmaktadır...</p>
          </div>
        </a>

        <a href="#" class="img hover:scale-110 hover:opacity-50 duration-500 "><Image class="min-h-full" src="/images/marslı.jpg" alt="marslı" width={350} height={150} />
          <div class="link ">
            <h3 >MARTİAN</h3>
            <p>Mars gezegenine astronotların gönderildiği bir görevde, Mark Watney isimli astronot şiddetli bir fırtına sonrası öldü sanılarak ekibi tarafından terk edilir...</p>
          </div></a>
        <a href="#" class="img hover:scale-110 hover:opacity-50 duration-500 "><Image class="min-h-full" src="/images/dune.jpg" alt="dune" width={350} height={150} />
          <div class="link ">
            <h3 >DUNE</h3>
            <p>Dune, çeşitli soylu hanedanların gezegen tımarlarını kontrol ettiği feodal bir yıldızlararası toplumun ortasındaki uzak bir gelecekte geçmektedir...</p>
          </div></a>
      </div >
      <h1>HISTORY</h1>
      <div class=" max-w-screen-xl group relative overflow-hidden mx-auto grid md:grid-cols-3 gap-4 justify-items-center mx-10 my-12">
        <a href="#" class="img hover:scale-110 hover:opacity-50 duration-500 "><Image class="min-h-full" src="/images/fetih-1453.jpg" alt="fetih-1453" width={350} height={150} />
          <div class="link ">
            <h3 >CONQUEST 1453</h3>
            <p>Fetih 1453, İstanbul'un Fethi'ni konu alan ve Ulubatlı Hasan'ın hayat hikâyesi çevresinde kurgulanan 2012 yapımı tarihî drama ve savaş türündeki Türk sinema filmidir...</p>
          </div></a>
        <a href="#" class="img hover:scale-110 hover:opacity-50 duration-500 "><Image class="min-h-full" src="/images/midway.jpg" alt="midway" width={350} height={150} />
          <div class="link ">
            <h3 >MİDWAY</h3>
            <p>Filmde, savaşın seyrini değiştiren askerlerin kahramanlık hikayesine odaklanılıyor...</p>
          </div></a>
        <a href="#" class="img hover:scale-110 hover:opacity-50 duration-500 "><Image src="/images/fury.jpeg" alt="fury" width={350} height={150} />
          <div class="link ">
            <h3 >FURY</h3>
            <p>Fury, II. Dünya Savaşı'nın Avrupa sahnesinin son haftalarında Nazi Almanyası'nda savaşan ABD tank ekiplerini tasvir ediyor...</p>
          </div></a>
      </div >
      <h1>MARVEL</h1>
      <div class=" max-w-screen-xl group relative overflow-hidden mx-auto grid md:grid-cols-3 gap-4 justify-items-center mx-10 my-12">
        <a href="#" class="img hover:scale-110 hover:opacity-50 duration-500 "><Image class="min-h-full" src="/images/yenilmezler.jpg" alt="yenilmezler" width={350} height={150} />
          <div class="link ">
            <h3 >AVENGERS</h3>
            <p>SHIELD adıyla tanınan uluslararası barış örgütünün başındaki isim Nick Fury, tüm dünyanın güvenliğine karşı büyük bir tehdit oluşturan düşmanla karşı karşıya kalır...</p>
          </div></a>
        <a href="#" class="img hover:scale-110 hover:opacity-50 duration-500 "><Image class="min-h-full" src="/images/kaptan-amerika.jpg" alt="kaptan-amerika" width={350} height={150} /><div class="link ">
          <h3 >CAPTAIN AMERICA</h3>
          <p>Kaptan Amerika, 4 Temmuz 1920'de fakir bir ailenin çocuğu olarak doğmuştur. Annesi Sarah ve babası Joseph Rogers'dır. Bir dönem gazete dağıtıcısı olarak çalışmıştır ve Sanat Okulu okumuştur...</p>
        </div></a>
        <a href="#" class="img hover:scale-110 hover:opacity-50 duration-500 "><Image src="/images/demir-adam.jpg" alt="demir-adam" width={350} height={150} />
          <div class="link ">
            <h3 >IRON MAN</h3>
            <p>Tony Stark, hem bir mühendislik dahisi hem de tam bir playboydur. Kendi ülkesinde teknoloji harikası füzeler ve silahlar üretmektedir..</p>
          </div></a>
      </div >
    </main >
  );
}
