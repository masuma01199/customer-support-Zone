import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="footer sm:footer-horizontal bg-neutral text-neutral-content p-22">
        <nav>
          <h1>CS — Ticket System</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            expedita, ipsa autem, sequi doloribus voluptas magni dolorum,
            incidunt tenetur ducimus sit soluta natus. Maxime maiores ducimus,
            corporis iste aperiam provident voluptate accusamus accusantium
            dolorum obcaecati a expedita tempore sit aliquam sed consectetur.
            Possimus distinctio laboriosam reprehenderit nihil eligendi in a!
          </p>
        </nav>
        <nav>
          <h6 class="footer-title">Company</h6>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Our mission</a>
          <a class="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 class="footer-title">Services</h6>
          <a class="link link-hover">Products & Services</a>
          <a class="link link-hover">Customer Stories</a>
          <a class="link link-hover">Download Apps</a>
        </nav>

        <nav>
          <h6 class="footer-title">Information</h6>
          <a class="link link-hover">Terms & Conditions</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 class="footer-title">Social Links</h6>
          <a class="link link-hover">
            <i class="fa-brands fa-x-twitter"></i> @CS — Ticket System
          </a>
          <a class="link link-hover">
            <i class="fa-brands fa-facebook"></i> @CS — Ticket System
          </a>
          <a class="link link-hover">
            <i class="fa-brands fa-square-linkedin"></i> @CS — Ticket System
          </a>
          <a class="link link-hover">
            <i class="fa-regular fa-envelope"></i> support@cst.com
          </a>
        </nav>
      </footer>
      <footer class="footer footer-center  sm:footer-horizontal bg-neutral text-neutral-content p-22 border-t-2">
        <aside>
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
