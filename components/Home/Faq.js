import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const Faq = ({ faqData }) => {
  return (
    <section className="faq-area pt-100">
      <div className="container">
        <div className="section-title">
          <span>FAQ,s</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="faq-accordion">
              <Accordion allowZeroExpanded preExpanded={[faqData[0].id]}>
                {faqData.map((data) => (
                  <AccordionItem uuid={data.id} key={data.id}>
                    <AccordionItemHeading>
                      <AccordionItemButton>{data.nameFaq}</AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>{data.contentFaq}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}

                {/* <AccordionItem uuid="b">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Research Is What Makes An Effective Business Plan?
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="c">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How Achieving Small Business Success?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="d">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Why Business Planing Is Important?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="e">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How Do You Startup?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem> */}
              </Accordion>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="faq-img">
              <img src="/images/faq-img.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
