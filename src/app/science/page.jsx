import React from 'react'
import Image from "next/image";
export default function page() {
    return (
        <div class=" max-w-screen-xl mx-10 lg:grid-cols-3   overflow-hidden  text-center  grid gap-8 justify-items-center  my-12">
            <div ><Image class="h-52 mx-auto lg:w-full mb-7 " src="/images/uzay-yolcuları.jpg" alt="uzay-yolcuları" width={350} height={150} />
                <h3 class="mb-3">PASSENGERS</h3>
                <p>Avalon adlı uzay gemisi, Homestead II adında çok uzak bir koloniye 5000'den fazla kişiyi götürmek üzere, 120 yıl sürecek bir yolculuk yapmaktadır. Giden kişiler bu yolculuk sonunda sağlıklı bir şekilde hayatlarına devam edebilmek için özel tasarlanmış "uyku kapsüllerinde" uyutulmaktadırlar. Ancak yaşanan teknik bir sorun nedeniyle tamirci Jim Preston (Chris Pratt) ve yazar Aurora Dunn'ın (Jennifer Lawrence) kapsülleri olması gerekenden önce açılır. Gemide bir başlarına kalan ikilinin önünde, hala 90 yıllık bir yol bulunmaktadır.</p>
            </div>
            <div ><Image class="h-52 mx-auto lg:w-full mb-7" src="/images/marslı.jpg" alt="uzay-yolcuları" width={350} height={150} />
                <h3 class="mb-3">MARTİAN</h3>
                <p>2035 yılında Ares III mürettebatı Mars yüzeyine sefer düzenlemektedir. Güneş zamanı ile 31 gün sürmesi gereken seferin 18. gününde çıkan şiddetli toz fırtınası astronotları görevi iptal etmeye ve geri dönmeye zorlar. Ares III görev komutanı Melissa Lewis (Jessica Chastain) acil durum kalkışının hazırlanmasını emrederek görevi iptal eder. Tahliye sırasında kuvvetli fırtına birincil iletişim anteninin parçasını kırarak astronot Mark Watney'in (Matt Damon) karnına şiddetli bir şekilde çarparak uzay giysisini de deler ve onu uzağa fırlatarak kaybolmasına neden oldur. Öldüğünü düşünen ekip arkadaşları onu bırakıp Dünya'ya döner. NASA müdürü Theodore Sandres (Jeff Daniels) Mark Watney'in enkazda kalarak öldüğüyle ilgili bir basın toplantısı düzenler.</p>
            </div>
            <div ><Image class="h-52 mx-auto lg:w-full mb-7" src="/images/dune.jpg" alt="uzay-yolcuları" width={350} height={150} />
                <h3 class="mb-3">DUNE</h3>
                <p>Gelecekte geçen "Dune", ailesi çöl gezegeni Arrakis’in kontrolüne sahip olan Paul Atreides’in hikayesini anlatıyor. Galaksinin farklı noktalarındaki gezegenler, rakip feodal aileler tarafından yönetilmektedir. Değerli bir kaynağın tek üreticisi olan çöl gezegeni Arrakis'in kontrolü asil aileler arasında talep görmektedir. "Baharat" adı verilen bu kaynak, yüksek bilinç ve uzun bir yaşam süresi sunarken, beraberinde çok ciddi yan etkileri de getirmektedir. Ayrıca yıldızlararası yollarda gezinmeye yardımcı olan kaynak da bu "baharat"tır. Bu kaynağı elde etmek isteyen feodal rakiplerden Harkonen ailesi tarafından Paul ve ailesine tuzak kurulur. Bu tuzağın sonucunda Paul'un ailesi darmadağın olarak firari hale gelir. Paul, ailesinin Arrakis kontrolünü yeniden kazanması için isyan başlatırken, tüm evrenin seyrini değiştirebilme ihtimalini yakalayacaktır.</p>
            </div>

        </div >
    )
}
