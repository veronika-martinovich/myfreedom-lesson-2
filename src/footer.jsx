import React from "react";
import { FooterArrowUpIcon } from "./footer-arrow-up-icon";
import { FooterVegefoods } from "./footer-vegefoods";
import { FooterMenu } from "./footer-menu";
import { FooterHelp } from "./footer-help";
import { FooterQuestions } from "./footer-questions";
import { FooterCopyright } from "./footer-copyright";

export const Footer = () => (
  <footer className="ftco-footer ftco-section">
    <div className="container">
      <FooterArrowUpIcon />
      <div className="row mb-5">
        <FooterVegefoods />
        <FooterMenu />
        <FooterHelp />
        <FooterQuestions />
      </div>
      <FooterCopyright />
    </div>
  </footer>
);
