import Container from '@/components/ui/container';

export default function IletisimPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="text-page-intro text-page-intro-small relative h-64 lg:h-80 bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: 'url(/contact-bg.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-page-intro-title text-3xl lg:text-5xl font-bold text-white uppercase tracking-wider mb-4">İletişim</h1>
          <ul className="text-page-breadcrumbs page-header-breadcrumbs flex items-center justify-center space-x-2 text-sm">
            <li><a href="/anasayfa" className="text-white hover:text-gray-200 transition-colors" title="Ana Sayfa">ANASAYFA</a></li>
            <li className="text-white">/</li>
            <li className="item-id-6043"><a href="/iletisim" className="text-gray-200 hover:text-white transition-colors" title="İletişim">İLETİŞİM</a></li>
          </ul>
        </div>
      </div>

      {/* Contact Info Section - Overlapping Hero */}
      <div className="container container-1455 mx-auto lg:px-4 lg:-mt-16 relative z-20">
        <div className="product-page-filter contact bg-white rounded-lg shadow-lg p-6 lg:p-8">
          <ul className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Phone */}
            <li>
              <div className="a flex items-start space-x-4">
                <img src="/Icon_Phone.png" alt="Phone icon" className="w-8 h-8 lg:w-10 lg:h-10" />
                <span className="text-lg font-semibold text-gray-800">
                  Telefon:<a style={{fontWeight: 400}} href="tel:0(222) 236 91 56" className="text-[#f07c01] hover:text-[#d46a01]"> 0(222) 236 91 56</a>
                  <span className="block text-sm text-gray-600 mt-2">Sorularınız ya da bilgi almak için telefon ile irtibata geçiniz.</span>
                </span>
              </div>
            </li>

            {/* Email */}
            <li>
              <div className="a flex items-start space-x-4">
                <img src="/Icon_Mail.png" alt="Mail icon" className="w-8 h-8 lg:w-10 lg:h-10" />
                <span className="text-lg font-semibold text-gray-800">
                  E-Posta: &nbsp; <a href="mailto:info@novatechpvc.com.tr" className="text-[#f07c01] hover:text-red-800">info@novatechpvc.com.tr</a>
                  <span className="block text-sm text-gray-600 mt-2">Dilerseniz e-posta ile soru ya da önerilerinizi bizimle paylaşın.</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Form and Address Section */}
      <div className="bg-gray-50 py-12 max-lg:px-4">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Address and Social Media */}
            <div className="contact-bottom-left">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Novatech PVC İletişim Bilgileri</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg width="16" height="16" fill="#f07c01" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="mt-1"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                    <p className="text-gray-700">Güzelburç Mahallesi – Antakya/HATAY</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <svg width="16" height="16" fill="#f07c01" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="mt-1"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                    <a href="mailto:info@novatechpvc.com.tr" className="">info@novatechpvc.com.tr</a>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <svg width="16" height="16" fill="#f07c01" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="mt-1"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.7L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.7-46.3l-40-96z"/></svg>
                    <a href="tel:+905456779025" className="">+90 545 677 90 25</a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Bizi Takip Edin</h3>
                <div className="flex gap-4">
                    <a href="javascript:void(0);" className="flex items-center justify-center text-white text-decoration-none transition-transform hover:scale-110" style={{width: '40px', height: '40px', backgroundColor: '#3b5998', fontSize: '18px', borderRadius: '4px'}} target="_blank" aria-label="Facebook">
                        <svg width="18" height="18" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"/></svg>
                    </a>
                    <a href="javascript:void(0);" className="flex items-center justify-center text-white text-decoration-none transition-transform hover:scale-110" style={{width: '40px', height: '40px', backgroundColor: '#e1306c', fontSize: '18px', borderRadius: '4px'}} target="_blank" aria-label="Instagram">
                        <svg width="18" height="18" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </a>
                    <a href="javascript:void(0);" className="flex items-center justify-center text-white text-decoration-none transition-transform hover:scale-110" style={{width: '40px', height: '40px', backgroundColor: '#ff0000', fontSize: '18px', borderRadius: '4px'}} target="_blank" aria-label="YouTube">
                        <svg width="18" height="18" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"/></svg>
                    </a>
                    <a href="javascript:void(0);" className="flex items-center justify-center text-white text-decoration-none transition-transform hover:scale-110" style={{width: '40px', height: '40px', backgroundColor: '#0077b5', fontSize: '18px', borderRadius: '4px'}} target="_blank" aria-label="LinkedIn">
                        <svg width="18" height="18" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z"/></svg>
                    </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-bottom-right">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Bilgi & İletişim Formu</h3>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="ad"
                    placeholder="Adınız Soyadınız"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f07c01] focus:border-[#f07c01] outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="posta"
                    placeholder="E-Posta Adresiniz"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f07c01] focus:border-[#f07c01] outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="tel"
                    placeholder="Telefon Numaranız"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f07c01] focus:border-[#f07c01] outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <textarea
                    name="mesaj"
                    placeholder="Mesajınız"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f07c01] focus:border-[#f07c01] outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button
                    type="button"
                    className="w-full lg:w-auto px-8 py-3 bg-[#f07c01] text-white font-semibold rounded-lg hover:bg-[#d46a01] transition-colors cursor-pointer"
                  >
                    Mesajı Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>

      {/* Google Maps */}
      <div className="w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3217.773054178236!2d36.21686650820541!3d36.24500657336488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1769721261003!5m2!1sen!2str" 
          width="100%"
          height="450"
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>        
      </div>
    </>
  );
}
