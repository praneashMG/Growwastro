document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="bg-[#f6e9b4] text-[#7F1D1D] w-full">

  <!-- MAIN FOOTER -->
 <div class="max-w-7xl mx-auto px-6 py-14">

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

    <!-- ABOUT PLATFORM -->
    <div>
     <h1 class="text-2xl font-bold ">
      <a href="index.html" class="transition">
        Groww Astro
      </a>
    </h1>

      <p class="mt-3 text-sm leading-relaxed">
        Discover your destiny through Astrology & Tarot.
        Get accurate guidance, daily horoscopes, and personalized readings.
      </p>

      <div class="flex gap-4 mt-4 text-lg">
        <a href="#"><i class="bi bi-facebook"></i></a>
        <a href="#"><i class="bi bi-instagram"></i></a>
        <a href="#"><i class="bi bi-youtube"></i></a>
      </div>
    </div>

    <!-- ASTROLOGY SERVICES -->
    <div>
      <h3 class="text-xl font-semibold mb-4">
        Astrology Services
      </h3>
      <ul class="space-y-2 text-sm">
        <li><a href="#">Birth Chart Analysis</a></li>
        <li><a href="#">Kundli Report</a></li>
        <li><a href="#">Planetary Transits</a></li>
        <li><a href="#">Zodiac Compatibility</a></li>
      </ul>
    </div>

     <!-- QUICK LINKS -->
      <div>
        <h3 class="text-xl font-semibold mb-4">
          Quick Links
        </h3>
        <ul class="space-y-2 text-sm">
          <li><a href="about.html" >About</a></li>
          <li><a href="astro.html" >Astrology</a></li>
          <li><a href="tarot.html" >Tarot</a></li>
          <li><a href="contact.html" >Contact</a></li>
        </ul>
      </div>

    <!-- CONTACT INFO -->
    <div>
      <h3 class="text-xl font-semibold mb-4">
        Contact Us
      </h3>

      <ul class="space-y-3 text-sm">
        <li class="flex items-start gap-2">
          <i class="bi bi-geo-alt-fill"></i>
          <span>Chennai, Tamil Nadu, India</span>
        </li>
        <li class="flex items-center gap-2">
          <i class="bi bi-telephone-fill"></i>
          <span>+91 98765 43210</span>
        </li>
        <li class="flex items-center gap-2">
          <i class="bi bi-envelope-fill"></i>
          <span>support@Growwastro.com</span>
        </li>
      </ul>
    </div>

  </div>

</div>
  <!-- BOTTOM BAR -->
  <div class="border-t border-[#7F1D1D] py-6 text-center text-xs px-4">
    © ${new Date().getFullYear()} Groww Astro. All Rights Reserved.
  </div>

</footer>
`;
});