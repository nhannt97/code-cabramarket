import React from 'react';
import { Modal } from '@redq/reuse-modal';
import styled from 'styled-components';
import { SEO } from 'components/seo';
import Footer from 'layouts/footer';

const Heading = styled.h3`
  font-size: 21px;
  font-weight: 700;
  color: #0d1136;
  line-height: 1.2;
  margin-bottom: 25px;
  width: 100%;
  text-align: center;
`;

const HelpPageWrapper = styled.div`
  background-color: #f7f7f7;
  position: relative;
  padding: 130px 0 60px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 989px) {
    padding-top: 70px;
  }
`;

export const HelpPageContainer = styled.div`
  background-color: transparent;
  padding: 0;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  line-height: 26px;

  @media (min-width: 990px) {
    width: 870px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 989px) {
    padding: 30px;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  color: #0d1136;
  line-height: 1.2;
  margin-bottom: 25px;
  width: 100%;
`;

const UlStyle = styled.ul`
    display: block;
    list-style: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`;

const LiStyle = styled.li`
  display: list-item;
  list-style: disc;
`;

export default function Policy() {
  return (
    <Modal>
      <SEO title="Policy - PickBazar" description="Policy Details" />
      <HelpPageWrapper>
        <HelpPageContainer>
          <Heading>Policy</Heading>
          <Title>Who we are</Title>
          <br />
          <p>Our website address is: https://cabramarket.com.</p>
          <br />
          <p><strong>Dong Hai Fresh Produce</strong>Dong Hai Produce is committed to providing you with the highest level of customer service. This includes protecting your privacy. On 12 March 2014 amendments to the Commonwealth Privacy Act 1988 came into force, setting out several “Australian Privacy Principles” concerning the protection of your personal information.This document provides some information about your privacy rights along with some details about our general rights and obligations. We recommend that you keep this leaflet for future reference.We may, from time to time, review and update this Privacy Policy, including taking into account new laws, regulations, practices, and technology. All personal information held by us will be governed by our most recent privacy policy, posted on our website at www.cabramarket.com, or available by contacting us in any of the ways set out in&nbsp;<strong><em>“Contacting us”</em></strong>, below.<strong>What personal information does Dong Hai Produce hold?</strong>“Personal information” is information or an opinion, whether true or not, and whether recorded in a material form or not, about an identified individual or a reasonably identifiable individual.We collect your personal information to allow us to conduct our business functions, to keep you informed of industry and site news, to market and sell our products and services, and otherwise for the specified purposes set out in this privacy policy.Personal information collected and held by Dong Hai Fresh Produce may include (but is not limited to) your name, date of birth, current and previous addresses, telephone/mobile/facsimile numbers, email address and,&nbsp;where appropriate&nbsp;(ie for certain financial transactions), your tax file number, bank account, and credit card details.&nbsp; It may also include, if applicable, details such as your fishing and aquaculture license details and food authority license details.&nbsp; Also, we may collect and hold personal information about your transactions with Dong Hai Fresh ProduceIf you choose not to provide personal information, we may not be able to conduct transactions with you or provide you with the services you require, or the level of service that we wish to provide to you.<strong>How do we collect personal information?</strong>Dong Hai Fresh Produce collects personal information in some ways including:</p>
          <br />
          <UlStyle><LiStyle>Directly from you, when you provide information by phone or in documents such as registration, application or booking form;</LiStyle><LiStyle>From third parties such as credit reporting bodies (as described in our&nbsp;<em><strong>Credit Reporting Policy</strong></em>) or your representatives;</LiStyle><LiStyle>From publicly available sources of information;</LiStyle><LiStyle>From the types of organizations identified below under “When we disclose your personal information”;</LiStyle><LiStyle>From our records of your transactions with Dong Hai Fresh Produce</LiStyle><LiStyle>(e.g. auction sales transactions glossary or Dong Hai Fresh Produce).</LiStyle></UlStyle>
          <br />
          <p>Whenever we request personal information, we will (either at that time or as soon as practicable thereafter) identify who we are and provide our contact details, including our street address, postal address, telephone and facsimile numbers, as well as our e-mail and internet address.Where we engage with you multiple times over a short period concerning the same matter, we may not provide you with a separate notice about privacy each time we engage with you.<strong>Information collected through our Website</strong>We will not collect any personal information about users of our Website except when they knowingly provide it or as otherwise described in this privacy policy.When you look at our Website, our Internet Service Provider makes a record of your visit. The following information is logged for statistical purposes:</p>
          <UlStyle><LiStyle>Your server address (not your email address – see below);</LiStyle><LiStyle>Your top level domain name (for example .com, .gov, .au, etc);</LiStyle><LiStyle>The date and time of your visit to the site;</LiStyle><LiStyle>The pages you accessed and documents downloaded;</LiStyle><LiStyle>The previous site you have visited;</LiStyle><LiStyle>The types of the browser you are using.</LiStyle></UlStyle>
          <br />
          <p>Your e-mail address is recorded only if you send an e-mail message to us. We respect the confidentiality of the information you provide to us or as otherwise described in this privacy policy. As such, any personal information that we collect via the Website will only be used for the purpose for which it has been provided to us.Users should be aware that there are inherent risks in transmitting information across the Internet.<strong>Google Analytics</strong>We may use Google Analytics to help analyze how you use our website. Google Analytics generates statistical and other information about website use utilizing cookies, which are stored on users’ computers. The information generated is used to create reports about the use of our website. Google will store this information. We will not (and will not allow any third party to) use Google Analytics to track or to collect any personal information of visitors to our website. We will not associate any data gathered from this website with any personal information from any source as part of our use of Google Analytics.If you do not want your website visit data reported by Google Analytics, you can install the Google Analytics opt-out browser add-on. For more details on installing and uninstalling the add-on, please visit the Google Analytics opt-out page at&nbsp;<a rel="noreferrer noopener" target="_blank" href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a>.&nbsp;<strong>How do we use your personal information?</strong>We may use your personal information for our business functions and activities, which may include using the information to:</p>
          <UlStyle><LiStyle>Transaction and trade with you by purchasing or selling seafood at auction, direct sale or through SFMlive and to administer and manage our trade with you including invoicing or paying you;</LiStyle><LiStyle>Promote and market our products and services to you or provide you with information that we believe may be of interest to you;</LiStyle><LiStyle>Communicate with you, and inform you of industry and site news, about future events at Dong Hai Produce;</LiStyle><LiStyle>Help us research the needs of our customers and to market our products and services with a better understanding of your needs and the needs of customs generally;</LiStyle><LiStyle>Conduct appropriate credit checks following our Credit Reporting Policy;</LiStyle><LiStyle>Gain an understanding of your needs for us to provide you with better service;</LiStyle><LiStyle>Maintain and develop our business systems;</LiStyle><LiStyle>If you are an employee or other representative of a customer to which we provide our products and services or a supplier or service provider to us, to communicate with you about your or your employer’s engagement with us and otherwise as specified in this privacy policy.</LiStyle></UlStyle>
          <br />
          <p>You consent to us using your personal information in the above ways.We may collect and use your personal information for other purposes not listed above.&nbsp;When do we disclose your personal information?In certain circumstances, we may need to disclose your personal information to organizations outside Dong Hai Produce to provide a high level of service or to comply with our legal and statutory obligations.&nbsp; The organizations to which we disclose information include:</p>
          <UlStyle><LiStyle>Outsourced service providers including:<UlStyle><LiStyle style={{listStyle: 'circle'}}>Mailing providers who distribute our communications to you</LiStyle><LiStyle style={{listStyle: 'circle'}}>Debt recovery agencies</LiStyle><LiStyle style={{listStyle: 'circle'}}>Information technology services</LiStyle><LiStyle style={{listStyle: 'circle'}}>Market research agencies working for Dong Hai Produce;</LiStyle></UlStyle></LiStyle><LiStyle>Your representatives (e.g. your authorized representatives, accountant, co-operative, etc);</LiStyle><LiStyle>Credit reporting bodies (as described in our Credit Reporting Policy)</LiStyle><LiStyle>Our professional advisers, including our accountants, auditors&nbsp;</LiStyle><LiStyle>Government and regulatory authorities such as the Australian Fisheries Management Authority, State fisheries agencies, the NSW Food Authority, etc. and other organizations, as required or authorized by law (including the Australian Privacy Principles under Schedule 1 to the&nbsp;Privacy Act 1988 (Cth).</LiStyle></UlStyle>
          <br />
          <p><strong>Marketing</strong>You consent to us using your Personal Information for sending you information, including promotional material, about us or our products and services, as well as the products and services of our related entities and third parties, now and in the future.&nbsp; You also consent to us sending you such information utilizing direct mail, telemarketing, email, SMS, and MMS messages.&nbsp; You can contact us using the contact details set out in “Contacting us”, below if you do not want to receive marketing information from us.<strong>How can you help us to ensure that we hold accurate information?</strong>Dong Hai Produce takes all reasonable precautions to ensure that the personal information we collect, use, and disclose is accurate, complete, and up to date.&nbsp; However, the accuracy of that information depends largely on the information provided by you. We, therefore, recommend that you tell us:</p>
          <UlStyle><LiStyle>About changes to your personal information such as your address or name; and</LiStyle><LiStyle>If you become aware of any errors in your personal information.</LiStyle></UlStyle>
          <br />
          <p>You can do so by contacting us in any of the ways set out in “Contacting us”, below.<strong>Can you get access to your personal information?</strong>You have a right to access your personal information, subject to some exceptions allowed by law.&nbsp; You can request access to your personal information by contacting us in any of the ways set out in “Contacting us”, below.&nbsp; We will respond to a request for access, as soon as possible, and in any case a maximum of 14 days.Don’t hesitate to contact us if you:</p>
          <UlStyle><LiStyle>have a query or concern about this privacy policy or our personal information handling processes;</LiStyle><LiStyle>wish to make a complaint about a breach of your privacy;</LiStyle><LiStyle>would like to correct your personal information held by us;</LiStyle><LiStyle>wish to obtain a copy of your personal information that we hold about you;</LiStyle><LiStyle>wish to contact us to have your name removed from our distribution lists; or</LiStyle><LiStyle>wish to otherwise&nbsp;opt-out of direct marketing,</LiStyle></UlStyle>
          <br />
          <p>You can contact us in any of the following ways:</p>
          <br />
          <p><strong>The Dong Hai Fresh Produce,Address:</strong>&nbsp;Shop 16, 48-50 Hill St.<br />Cabramatta, NSW 2166 (From 7:00 a.m to 6:00 p.m)</p>
          <br />
          <p><strong>Phone:</strong>0452 553 797 (Ms Hanh)0420 903 883 (Ms Trang)</p>
          <br />
          <p><strong>Email:</strong>&nbsp;sale@cabramarket.com. We will investigate any queries and complaints within a reasonable period of receiving the complaint and will notify you of the outcome of our investigation.</p>
        </HelpPageContainer>
        <Footer />
      </HelpPageWrapper>
    </Modal>
  );
}