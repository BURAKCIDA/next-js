import React from 'react'
import Image from "next/image";
export default function page() {
    return (
        <div class=" max-w-screen-xl mx-10 lg:grid-cols-3   overflow-hidden  text-center  grid gap-8 justify-items-center  mx-10 my-12">
            <div ><Image class="h-52 mx-auto lg:w-full mb-7 " src="/images/fetih-1453.jpg" alt="uzay-yolcuları" width={350} height={150} />
                <h3 class="mb-3" >CONQUEST 1453</h3>
                <p>Filmin adından da anlaşıldığı gibi Fetih 1453 filmi 1453 senesinde istanbulda meydana gelen olayları konu almaktadır. Film 1451 yılında ikinci defa tahta geçen Osmanlı padişahı Sultan Mehmet Han'in Konstantinopolis'i fetih planlarını yaptığı andan itibaren başlıyor. Bu zamandan 1453'te İstanbul'un fethine kadar olan süreci kapsayan film aynı zamanda Fatih Sultan Mehmet'in çocukken aldığı eğitimleri de işliyor. Filmin hikayesi Fatih Sultan Mehmet ve İstanbul surlarına Osmanlı bayrağını ilk diken Türk sipahi Ulubatlı Hasan'ın çevresinde gerçekleşiyor</p>
            </div>
            <div ><Image class="h-52 mx-auto lg:w-full mb-7" src="/images/midway.jpg" alt="uzay-yolcuları" width={350} height={150} />
                <h3 class="mb-3" >MİDWAY</h3>
                <p>Midway, II. Dünya Savaşı sırasında Amerika Birleşik Devletleri ve Japonya İmparatorluğu arasında yapılan Midway Muharebesi'ni konu ediniyor. Filmde, savaşın seyrini değiştiren askerlerin kahramanlık hikayesine odaklanılıyor. Midway Muharebesi, 2. Dünya Savaşı için bir dönüm noktası kabul ediliyor. Liderlerin ve askerlerin, içgüdüleri ve cesaretleriyle verdikleri mücadele, Pasifik Cephesi'ndeki savaşın seyrinin değişmesine neden olur.</p>
            </div>
            <div ><Image class="h-52 mx-auto lg:w-full mb-7" src="/images/fury.jpeg" alt="uzay-yolcuları" width={350} height={150} />
                <h3 class="mb-3" >FURY</h3>
                <p>Fury, İkinci Dünya Savaşı'nın son günlerinde geçiyor ve Komutan Wardaddy, topçu Boyd Swan, yükleyici Grady Travis, şoför Trini Garcia ve yardımcı şoför Norman'dan oluşan müfrezenin, 300 düşman askeriyle karşılaştığı ve imkansızlıklarla savaşmak zorunda kaldığı 24 saati konu alıyor. Beş askerden oluşan küçük ekip, zırhlı tanklarıyla, Almanya'da savaşın ortasında kalır ve bu ekip bölgede kalan son Amerikan ordusu askerlerinden oluşur. Birlik az sayıda askerden oluşmasının yanı sıra cephane anlamında da zor durumdadır. Gruba komuta eden Çavuş Wardaddy'nin Avrupa'nın tamamını yıkıma uğratan bu savaştaki son görevi, askerlerini Nazi birliklerinin kuşatması altında olan bu bölgeden canlı çıkarabilmektir</p>
            </div>

        </div >
    )
}
