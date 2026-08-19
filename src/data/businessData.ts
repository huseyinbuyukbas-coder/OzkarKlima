export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  ctaText: string;
  ctaType: 'whatsapp' | 'call';
  whatsappMessage: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date?: string;
  text: string;
  highlight: string;
  category: 'montaj' | 'bakim' | 'tamir' | 'alim-satim' | 'genel';
}

export interface ProblemItem {
  id: string;
  title: string;
  symptom: string;
  possibleCause: string;
  recommendation: string;
  whatsappMessage: string;
}

export const BUSINESS_INFO = {
  name: 'Klima Teknik Servis Özkar',
  shortName: 'Özkar Klima',
  slogan: 'Klima Alım Satım • Arıza • Bakım • Montaj • Teknik Servis',
  description: 'Klima alım satım arıza ve yedek parça teknik hizmet',
  phoneDisplay: '0530 147 45 03',
  phoneRaw: '+905301474503',
  phoneTel: 'tel:+905301474503',
  whatsappUrl: 'https://wa.me/905301474503',
  address: 'Siyavuşpaşa, Barboros 2. Sokağı No:26, 34182 Bahçelievler / İstanbul',
  addressShort: 'Siyavuşpaşa, Bahçelievler / İstanbul',
  workingHours: 'Her gün 09:00 - 19:00',
  workingHoursShort: '09:00 - 19:00',
  googleScore: '5.0',
  googleScoreFull: '5.0 / 5',
  googleReviewCount: '52',
  googleReviewCountText: '52 Müşteri Yorumu',
  googleMapsQueryUrl: 'https://www.google.com/maps/search/?api=1&query=Klima+Teknik+Servis+%C3%96zkar+Siyavu%C5%9Fpa%C5%9Fa+Barboros+2+Soka%C4%9F%C4%B1+No:26+Bah%C3%A7elievler+%C4%B0stanbul',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Siyavu%C5%9Fpa%C5%9Fa,%20Barboros%202.%20Soka%C4%9F%C4%B1%20No:26,%2034182%20Bah%C3%A7elievler%20%C4%B0stanbul&t=&z=15&ie=UTF8&iwloc=&output=embed',
  neighborhoods: [
    'Bahçelievler',
    'Siyavuşpaşa',
    'Şirinevler',
    'Kocasinan',
    'Soğanlı',
    'Yenibosna',
    'Hürriyet',
    'Zafer',
    'Çobançeşme',
    'Cumhuriyet'
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'ariza-tamir',
    title: 'Klima Arıza ve Tamir',
    shortDesc: 'Klimalarda meydana gelen arızaların tespiti, onarımı ve gerekli parça değişim işlemleri.',
    fullDesc: 'Klimanızın çalışmaması, ısıtmama/soğutmama, gaz kaçağı veya elektriksel arızaların yerinde tespiti yapılarak titizlikle tamir edilir.',
    iconName: 'Wrench',
    ctaText: 'Servis Talep Et',
    ctaType: 'whatsapp',
    whatsappMessage: 'Merhaba Klima Teknik Servis Özkar, klimamda bir arıza var. Arıza tespiti ve tamir için servis talep etmek istiyorum.',
    features: ['Hızlı arıza tespiti', 'Orijinal uyumlu parça değişimi', 'Yerinde tamir imkanı', 'Gaz dolumu ve kaçak testi']
  },
  {
    id: 'klima-bakimi',
    title: 'Klima Bakımı',
    shortDesc: 'Klimanın daha verimli ve sağlıklı çalışması için bakım ve temizlik hizmetleri.',
    fullDesc: 'İç ve dış ünite detaylı temizliği, filtre dezenfeksiyonu, drenaj hattı kontrolü ve gaz basınç kontrolleri ile maksimum verim sağlanır.',
    iconName: 'Sparkles',
    ctaText: 'Bakım İçin WhatsApp\'tan Ulaş',
    ctaType: 'whatsapp',
    whatsappMessage: 'Merhaba Klima Teknik Servis Özkar, klima periyodik bakımı ve detaylı temizliği için randevu almak istiyorum.',
    features: ['İç ve dış ünite temizliği', 'Filtre antibakteriyel temizlik', 'Drenaj hattı açma', 'Gaz basınç kontrolü']
  },
  {
    id: 'klima-montaji',
    title: 'Klima Montajı',
    shortDesc: 'Yeni klima montajı, profesyonel bağlantı ve devreye alma hizmetleri.',
    fullDesc: 'Her marka ve model split klimanın doğru yere konumlandırılması, vakumlama işlemi ve estetik borulama ile profesyonel montajı.',
    iconName: 'Cpu',
    ctaText: 'Montaj İçin Ara',
    ctaType: 'call',
    whatsappMessage: 'Merhaba Klima Teknik Servis Özkar, yeni aldığım klimanın montajı ve kurulumu için bilgi ve randevu almak istiyorum.',
    features: ['Doğru konumlandırma', 'Vakumlama ve gaz ayarı', 'Estetik borulama & kablo kanalı', 'Temiz ve düzenli çalışma']
  },
  {
    id: 'sokme-takma',
    title: 'Klima Sökme & Takma',
    shortDesc: 'Taşınma veya klima değişikliği durumlarında klimanın güvenli sökülmesi ve yeniden montajı.',
    fullDesc: 'Klimanın gazı dış üniteye hapsedilerek güvenle sökülür, taşınacağı yeni mekanda yeniden montajı ve testi titizlikle gerçekleştirilir.',
    iconName: 'Repeat',
    ctaText: 'Servis Talep Et',
    ctaType: 'whatsapp',
    whatsappMessage: 'Merhaba Klima Teknik Servis Özkar, klimamın sökülüp yeni yerine takılması (demontaj / montaj) için servis talebim var.',
    features: ['Gaz kaybı olmadan söküm', 'Güvenli taşıma hazırlığı', 'Yeni adreste kusursuz montaj', 'Çalışır vaziyette teslim']
  },
  {
    id: 'klima-tasima',
    title: 'Klima Taşıma',
    shortDesc: 'Mevcut klimanın farklı bir konuma taşınması için teknik servis desteği.',
    fullDesc: 'Evden eve nakliye veya oda değişikliklerinde klimanızın hasar görmeden uzman ellerde sökülüp taşınması sağlanır.',
    iconName: 'Truck',
    ctaText: 'Taşıma İçin WhatsApp\'tan Ulaş',
    ctaType: 'whatsapp',
    whatsappMessage: 'Merhaba Klima Teknik Servis Özkar, klima taşıma ve aktarma hizmeti hakkında bilgi ve randevu almak istiyorum.',
    features: ['Hasarsız söküm ve paketleme', 'Güvenli nakil desteği', 'Yeni lokasyonda montaj seçeneği', 'Deneyimli ekip']
  },
  {
    id: 'alim-satim',
    title: 'Klima Alım Satım',
    shortDesc: 'Yeni ve ikinci el klima alım satım hizmetleri.',
    fullDesc: 'Eski klimanızı değerinde satmak veya bakımları yapılmış, kontrol edilmiş güvenilir ikinci el/yeni klima satın almak için bize ulaşın.',
    iconName: 'ShoppingBag',
    ctaText: 'Alım Satım İçin Ulaş',
    ctaType: 'whatsapp',
    whatsappMessage: 'Merhaba Klima Teknik Servis Özkar, klima alım / satım konusunda görüşmek ve teklif almak istiyorum.',
    features: ['Eski klimanızı değerinde nakit alma', 'Kontrol edilmiş 2. el klimalar', 'Yeni klima seçenekleri', 'Montaj dahil teslim']
  },
  {
    id: 'yedek-parca',
    title: 'Yedek Parça & Teknik Destek',
    shortDesc: 'Klima arızalarında gerekli yedek parça ve teknik servis desteği.',
    fullDesc: 'Kompresör, fan motoru, anakart, 4 yollu vana, sensör ve kumanda gibi kritik klima yedek parçalarının temini ve montajı.',
    iconName: 'Settings',
    ctaText: 'Yedek Parça Sor',
    ctaType: 'whatsapp',
    whatsappMessage: 'Merhaba Klima Teknik Servis Özkar, klimam için yedek parça ve teknik destek almak istiyorum.',
    features: ['Kaliteli ve uyumlu parçalar', 'Kumanda ve elektronik kartlar', 'Fan motoru ve kondansatörler', 'Birebir değişim ve montaj']
  },
  {
    id: 'teknik-servis',
    title: 'Teknik Servis',
    shortDesc: 'Klima sistemlerinde arıza tespiti, bakım, onarım ve genel teknik servis hizmetleri.',
    fullDesc: 'Bireysel ve kurumsal klima sistemlerinde genel kontrol, performans ölçümü ve kesintisiz teknik danışmanlık.',
    iconName: 'ShieldCheck',
    ctaText: 'Hemen Ara',
    ctaType: 'call',
    whatsappMessage: 'Merhaba Klima Teknik Servis Özkar, genel teknik servis hizmeti için bilgi almak istiyorum.',
    features: ['Profesyonel işçilik', 'Güler yüzlü esnaflık', 'Hızlı randevu', 'Uygun ve şeffaf fiyatlandırma']
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Hacı Burak DİKİCİ',
    rating: 5,
    highlight: 'Mükemmel işçilik titizlik güler yüz ve uygun fiyat',
    text: 'Mükemmel işçilik titizlik güler yüz ve uygun fiyat kesinlikle tavsiye ederim',
    category: 'genel'
  },
  {
    id: 'rev-2',
    author: 'Kadem Basaran',
    rating: 5,
    highlight: 'Her şey konuşulduğu ve planlandığı gibi yapıldı',
    text: 'Her şey konuşulduğu ve planlandığı gibi yapıldı. Güzel bir çalışma yaptılar, memnun kaldık. Oğuzhan beye ayrıca çok teşekkür ederiz. Ekstra birkaç sorun çıktı hepsiyle de tek tek ilgilendi elinize emeğinize sağlık.',
    category: 'tamir'
  },
  {
    id: 'rev-3',
    author: 'azat aktaş',
    rating: 5,
    highlight: 'Bu devirde böyle ustaya can kurban, fiyatı en uygun',
    text: 'Bu devirde böyle ustaya can kurban, fiyatı en uygun olacak şekilde ayarladı, halden anlıyor şişirmiş fiyatlar söylemiyor. Eline emeğine sağlık.',
    category: 'genel'
  },
  {
    id: 'rev-4',
    author: 'furkan isabas',
    rating: 5,
    highlight: 'Çok düzgün güzel iş çıkardılar, esnaflığı da işi de güzel',
    text: 'Klimamı taktı çok düzgün güzel iş çıkardılar ellerine sağlık esnaflığı da işi de güzel teşekkür ederim.',
    category: 'montaj'
  },
  {
    id: 'rev-5',
    author: 'Nevin Demir',
    rating: 5,
    highlight: 'Ustanın eli hızlı ve titiz çevreme önerdim',
    text: 'Klimadan çok memnunum ustanın eli hızlı ve titiz çevreme önerdim kendisini teşekkürler.',
    category: 'bakim'
  },
  {
    id: 'rev-6',
    author: 'oyun zamanı',
    rating: 5,
    highlight: 'Klima aldım kurulum için iletişime geçtim temiz çalışıldı',
    text: 'Klima aldım ve teknik servis ve kurulum için Klima Özkar ile iletişime geçtim gerçekten temiz çalışıldı memnun kaldım teşekkür ederim.',
    category: 'alim-satim'
  },
  {
    id: 'rev-7',
    author: 'erkan şahin',
    rating: 5,
    highlight: 'Arızalı parçalarını değiştirdi ve tüm bakımlarını yaptı',
    text: 'Profesyonel ve kaliteli işçiliğinden dolayı çok memnun kaldık. Teknisyen arkadaş klimamızın arızalı parçalarını değiştirdi ve tüm bakımlarını yaptı. İşinin ehli bir servis.',
    category: 'tamir'
  },
  {
    id: 'rev-8',
    author: 'Büşra Nur Demir',
    rating: 5,
    highlight: 'Uzun zamandır süren sorunumuzu giderdiler',
    text: 'Kaliteli teknik servis için teşekkür ederiz. Uzun zamandır süren sorunumuzu giderdiler tavsiye ederim.',
    category: 'tamir'
  },
  {
    id: 'rev-9',
    author: 'Damla Kurt',
    rating: 5,
    highlight: 'Klima taşıması yaptılar, eski klimayı satın aldılar',
    text: 'Bir klima taşıması yaptılar aynı zamanda eski klimayı satın aldılar. Gayet kibar, işini bilen ve zamanında gelen çalışanları vardı. Memnun kaldık tavsiye ederim.',
    category: 'alim-satim'
  },
  {
    id: 'rev-10',
    author: 'meli',
    rating: 5,
    highlight: 'Montajını da bakımlarını da tamirini de dört dörtlük yaptılar',
    text: 'Evimdeki klimanın montajını da bakımlarını da tamirini de dört dörtlük yaptılar. Diğer klimacılara nazaran çok daha ilgililer. Temiz ve hızlı işçilik. Herkese öneriyorum.',
    category: 'bakim'
  },
  {
    id: 'rev-11',
    author: 'Serkan Hançer',
    rating: 5,
    highlight: 'Klima sökülmesi ve montaj işlerimiz vardı, işinin ehli',
    text: 'Özkar Klima\'ya çok teşekkür ederim klima sökülmesi ve montaj işlerimiz vardı. Ustamız işinin ehli gerçekten.',
    category: 'montaj'
  },
  {
    id: 'rev-12',
    author: 'Mahmut Şekeroğlu',
    rating: 5,
    highlight: 'İşini itina ile yapıyor güleryüzlü ilgili bir firma',
    text: 'İşini itina ile yapıyor güleryüzlü ilgili bir firma.',
    category: 'genel'
  },
  {
    id: 'rev-13',
    author: 'Koray Baştuğ',
    rating: 5,
    highlight: 'Eski klimamı satın aldılar, çok ilgili ve hızlılar',
    text: 'Eski klimamı satın aldılar, çok ilgili ve hızlılar.',
    category: 'alim-satim'
  },
  {
    id: 'rev-14',
    author: 'Sezer Serkan Arpa',
    rating: 5,
    highlight: 'Tereddütsüz arayın',
    text: 'Tereddütsüz arayın.',
    category: 'genel'
  },
  {
    id: 'rev-15',
    author: 'Kürşad ALTUNBULAK',
    rating: 5,
    highlight: 'Uygun fiyata, çok iyi iş yapıyor',
    text: 'Uygun fiyata, çok iyi iş yapıyor. Tavsiye edilir.',
    category: 'genel'
  }
];

export const COMMON_PROBLEMS: ProblemItem[] = [
  {
    id: 'sogutmuyor',
    title: 'Klima Soğutmuyor',
    symptom: 'Klima çalışıyor fakat üflediği hava ılık veya ortamı soğutmuyor.',
    possibleCause: 'Gaz eksikliği, filtre tıkanıklığı, kompresör veya kondanser arızası.',
    recommendation: 'Cihazı kapatıp gaz kaçağı ve filtre kontrolü için servis talep edin.',
    whatsappMessage: 'Merhaba Klima Teknik Servis Özkar, klimam çalışıyor fakat hiç soğutmuyor. Servis desteği rica ediyorum.'
  },
  {
    id: 'isヴェtmuyor',
    title: 'Klima Isıtmıyor',
    symptom: 'Kış modunda sıcak hava üflemiyor veya yetersiz ısıtıyor.',
    possibleCause: '4 yollu vana arızası, sensör hatası, gaz basınç düşüklüğü veya defrost döngüsü.',
    recommendation: 'Teknisyen kontrolünde 4 yollu vana ve gaz basıncı ölçümü yapılmalıdır.',
    whatsappMessage: 'Merhaba Klima Teknik Servis Özkar, klimam kış modunda ısıtmıyor. Arıza tespiti için ulaşmak istedim.'
  },
  {
    id: 'su-akitiyor',
    title: 'Klima Su Akıtıyor',
    symptom: 'İç üniteden oda içerisine veya duvardan su damlıyor.',
    possibleCause: 'Drenaj hortumu tıkanıklığı, tahliye eğim hatası veya petek donması.',
    recommendation: 'Elektronik kısımların zarar görmemesi için klimayı durdurup servis çağırın.',
    whatsappMessage: 'Merhaba Klima Teknik Servis Özkar, klimam iç üniteden su damlatıyor / akıtıyor. Acil servis randevusu alabilir miyim?'
  },
  {
    id: 'calismiyor',
    title: 'Klima Çalışmıyor',
    symptom: 'Klimanın ışıkları yanmıyor veya açma komutuna hiçbir tepki vermiyor.',
    possibleCause: 'Anakart arızası, sigorta/besleme hattı problemi veya alıcı göz bozulması.',
    recommendation: 'Elektrik bağlantılarını kontrol ettikten sonra teknik müdahale gerekir.',
    whatsappMessage: 'Merhaba Klima Teknik Servis Özkar, klimam hiç çalışmıyor ve açılmıyor. Tamir için servis talep ediyorum.'
  },
  {
    id: 'ses-yapiyor',
    title: 'Klima Ses Yapıyor',
    symptom: 'İç veya dış üniteden tıkırtı, uğultu veya aşırı titreşim sesi geliyor.',
    possibleCause: 'Fan balans bozulması, motor rulmanı aşınması veya montaj gevşekliği.',
    recommendation: 'Mekanik hasar büyümeden fan ve motor kontrolü yapılmalıdır.',
    whatsappMessage: 'Merhaba Klima Teknik Servis Özkar, klimamdan anormal ses ve uğultu geliyor. Kontrol ve tamir için destek rica ediyorum.'
  },
  {
    id: 'kotu-koku',
    title: 'Klima Kötü Koku Yapıyor',
    symptom: 'Klima açıldığında ortama rutubet, toz veya rahatsız edici koku yayılıyor.',
    possibleCause: 'İç ünite peteklerinde ve drenaj tavasında bakteri, küf ve toz birikmesi.',
    recommendation: 'Özel antibakteriyel ilaçlar ile detaylı iç ünite bakımı gereklidir.',
    whatsappMessage: 'Merhaba Klima Teknik Servis Özkar, klimam çalışırken kötü koku yayıyor. Detaylı hijyenik bakım için randevu almak istiyorum.'
  },
  {
    id: 'yetersiz-sogutma',
    title: 'Klima Yeterince Soğutmuyor',
    symptom: 'Hava hafif soğuk üflüyor ancak odayı istenilen dereceye getiremiyor.',
    possibleCause: 'Kısmi gaz kaçağı, kirli petekler veya dış ünite hava sirkülasyon problemi.',
    recommendation: 'Gaz basınç testi ve petek temizliği ile performans ilk günkü haline getirilir.',
    whatsappMessage: 'Merhaba Klima Teknik Servis Özkar, klimamın soğutma performansı çok düştü. Gaz kontrolü ve bakım için servis talep ediyorum.'
  },
  {
    id: 'surekli-duruyor',
    title: 'Klima Sürekli Duruyor',
    symptom: 'Klima çalıştıktan birkaç dakika sonra kendi kendine kapanıyor veya duraklıyor.',
    possibleCause: 'Termistör (oda/boru sensörü) arızası, kompresör termiği veya aşırı ısınma.',
    recommendation: 'Sensör değerleri ve voltaj dengesi teknisyen tarafından ölçülmelidir.',
    whatsappMessage: 'Merhaba Klima Teknik Servis Özkar, klimam çalıştıktan hemen sonra duruyor / kendini kapatıyor. Servis talebim var.'
  },
  {
    id: 'hata-veriyor',
    title: 'Klima Hata Veriyor / Işık Yanıp Sönüyor',
    symptom: 'Dijital ekranda arıza kodu (E1, E2, F1, H6 vb.) görünüyor veya ışıklar yanıp sönüyor.',
    possibleCause: 'Sistem güvenlik kilidi, fan motoru geri bildirimi veya elektronik arıza.',
    recommendation: 'Hata kodunu teknisyenimize ileterek kesin teşhis alabilirsiniz.',
    whatsappMessage: 'Merhaba Klima Teknik Servis Özkar, klimam ekranda hata kodu veriyor ve çalışmıyor. Arıza tespiti için ulaşmak istedim.'
  },
  {
    id: 'bakim-istiyor',
    title: 'Klima Bakım İstiyor',
    symptom: 'Uzun süredir bakım yapılmadı, hava debisi düştü veya elektrik tüketimi arttı.',
    possibleCause: 'Periyodik bakım zamanının gelmesi, toz tabakası ve filtre kirliliği.',
    recommendation: 'Yıllık en az bir kez mevsim öncesi periyodik bakım yaptırılmalıdır.',
    whatsappMessage: 'Merhaba Klima Teknik Servis Özkar, klimama periyodik genel bakım yaptırmak istiyorum. Uygun bir zamana randevu rica ediyorum.'
  },
  {
    id: 'kumanda-cevapsiz',
    title: 'Klima Kumandaya Cevap Vermiyor',
    symptom: 'Kumandadan tuşlara basıldığında klimada hiçbir bip sesi veya işlem olmuyor.',
    possibleCause: 'Kumanda pili, kumanda vericisi veya iç ünite alıcı göz kartı arızası.',
    recommendation: 'Pil değişimine rağmen düzelmezse alıcı kart veya yedek kumanda temini gerekir.',
    whatsappMessage: 'Merhaba Klima Teknik Servis Özkar, klimam kumandadan komut almıyor. Alıcı kart / kumanda desteği rica ediyorum.'
  }
];

export const WHY_US_FEATURES = [
  {
    title: 'Güvenilir Hizmet',
    description: 'Müşteriler tarafından güvenilir ve profesyonel servis olarak öne çıkan hizmet anlayışı.',
    iconName: 'ShieldCheck',
    badge: 'Müşteri Onaylı'
  },
  {
    title: 'Temiz ve Titiz İşçilik',
    description: 'Montaj ve servis işlemlerinde temiz, düzenli ve özenli çalışma prensibi.',
    iconName: 'Sparkles',
    badge: 'Özenli Çalışma'
  },
  {
    title: 'Uygun Fiyat',
    description: 'Müşteri yorumlarında sıkça vurgulanan uygun ve makul fiyat anlayışı.',
    iconName: 'BadgePercent',
    badge: 'Şeffaf Fiyat'
  },
  {
    title: 'Hızlı Çözüm',
    description: 'Arıza ve servis taleplerinde hızlı ve çözüm odaklı yaklaşım.',
    iconName: 'Zap',
    badge: 'Hızlı Müdahale'
  },
  {
    title: 'Tecrübeli Teknik Ekip',
    description: 'Klima montajı, bakım, arıza ve onarım konusunda deneyimli teknik servis.',
    iconName: 'Users',
    badge: 'İşinin Ehli'
  },
  {
    title: 'Müşteri Memnuniyeti',
    description: '5.0 Google puanı ve 52 müşteri yorumu ile güçlü müşteri memnuniyeti.',
    iconName: 'Star',
    badge: '5.0 / 5 Puan'
  }
];
