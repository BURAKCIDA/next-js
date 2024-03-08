import React from 'react'
import Image from "next/image";
export default function page() {
    return (
        <div class=" max-w-screen-xl mx-10 lg:grid-cols-3   overflow-hidden  text-center  grid gap-8 justify-items-center  mx-10 my-12">
            <div ><Image class="h-52 mx-auto lg:w-full mb-7  " src="/images/yenilmezler.jpg" alt="uzay-yolcuları" width={350} height={150} />
                <h3 class="mb-3" >AVENGERS</h3>
                <p>Yenilmezler, Marvel’in en çok iz bırakan kahramanlarını bünyesinde topluyor: Demir Adam, Hulk, Thor, Kaptan Amerika, Hawkeye ve Black Widow. Beklenmedik bir düşman su yüzüne çıkıp dünyanın güvenliğini tehdit etmeye başlıyor. S.H.I.E.L.D. adıyla bilinen uluslararası barışı koruma teşkilâtının yöneticisi olan Nick Fury, dünyayı böylesi bir felâketten kurtarmak için bir takıma ihtiyacı olduğunu anlıyor. Takıma adam seçmek için dünyanın dört bir yanını gezmeye başlıyor.</p>
            </div>
            <div ><Image class="h-52 mx-auto lg:w-full mb-7" src="/images/kaptan-amerika.jpg" alt="uzay-yolcuları" width={350} height={150} />
                <h3 class="mb-3" >CAPTAIN AMERICA</h3>
                <p>Marvel Comics tarafından yaratılan çizgi roman karakteri Kaptan Amerika, yani Steve Rogers, bu filmde Kaptan Amerika olarak bilinen süper askere dönüşeceği deneysel bir programa katılmaya gönüllü olduğu zamanlardaki Marvel Evreni’nin ilk günlerine dönüyor. Kaptan Amerika , kötü Red Skull’ın liderliğindeki HYDRA organizasyonuyla savaşmak için Bucky Barnes ve Peggy Carter’la güçlerini birleştiriyor.</p>
            </div>
            <div ><Image class="h-52 mx-auto lg:w-full mb-7" src="/images/demir-adam.jpg" alt="uzay-yolcuları" width={350} height={150} />
                <h3 class="mb-3" >IRON MAN</h3>
                <p>Tony Stark, hem bir mühendislik dahisi hem de tam bir playboydur. Kendi ülkesinde teknoloji harikası füzeler ve silahlar üretmektedir. Afganistan’da yeni bir füzeyi tanıtırken esir düşer ve yaralanır. Onu kaçıranlar, kendileri için bir füze yapmasını isterler. Tony ise bunun yerine zırhlı bir giysi yapar. Bunu yapmaktaki amacı zekasını kullanarak farklı bir kurtuluş yöntemini planlamaktır. Boş zamanlarını kadınlarına ayıran Tony’nin hayatı artık tamamen farklı bir şekle bürünmüştür. Onun bununla nasıl baş edeceği ise esas konudur.</p>
            </div>

        </div >
    )
}
