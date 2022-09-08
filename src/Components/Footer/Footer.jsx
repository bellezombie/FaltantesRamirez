import React from 'react';
import './Footer.scss'

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content-container">
          <h3 className="website-logo">RRecords</h3>
          <span className="footer-info">333 666 999</span>
          <span className="footer-info">RRecords@RR.com</span>
        </div>
        <div className="footer-menus">
          <div className="footer-content-container">
            <span className="menu-title">Horarios</span>
            <a className="menu-item-footer">
              Lun a Vie
            </a>
            <a className="menu-item-footer">
              10 a 20 hs.
            </a>
          </div>
        </div>

        <div className="footer-content-container">
          <span className="menu-title">Encontranos en:</span>
          <div className="social-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.330214998569!2d-118.35948048482835!3d34.06104838060355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b922c9d993db%3A0xa6d5a0124cb9dc2e!2s750%20S%20Spaulding%20Ave%2C%20Los%20Angeles%2C%20CA%2090036%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1662592449052!5m2!1ses-419!2sar"></iframe>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <small className="copyright">Belle Ramirez</small>
      </div>
    </footer>
  );
}
