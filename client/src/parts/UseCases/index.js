import React from 'react';
import { Container, Image } from 'react-bootstrap';
import {
  startPlayingImg,
  hatImg,
  pencilImg,
  caseCardIcon,
  diplomaCaseIcon,
  downloadStudentIcon,
  employerCaseIcon,
  certificateIcon,
  discountCaseIcon,
  discountCardImg,
  checkIcon,
} from '../../assets/images';
import './styles.scss';

const UseCases = () => {
  return (
    <div className="use-cases-container">
      <Container>
        <div className="d-flex align-items-center mb-59">
          <Image className="mr-5" src={startPlayingImg} />
          <h3 className="text-blue-dark mb-0">Use Cases</h3>
        </div>

        <div className="use-cases-list">
          <div className="use-cases-item">
            <Image src={diplomaCaseIcon} className="mb-10" />
            <p className="text-2xl text-bold mb-16">Download a diploma</p>

            <div className="use-case-card diploma-card">
              <div className="d-flex align-items-center justify-content-between mb-5">
                <div className="flex-1">
                  <p className="card-title">Diploma</p>
                  <p className="card-description">University of web design</p>
                </div>
                <div className="flex-shrink-0">
                  <Image className="flex-shrink-0 ml-20" src={hatImg} />
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <Image src={caseCardIcon} />

                <div className="approved-info">
                  <div className="approve-icon-container mr-2 flex-shrink-0">
                    <Image src={checkIcon} />
                  </div>
                  <span className="approved-info__text">APPROVED</span>
                </div>
              </div>
            </div>
          </div>

          <div className="use-cases-item">
            <Image src={downloadStudentIcon} className="mb-10" />
            <p className="text-2xl text-bold mb-16">Download your student card</p>

            <div className="use-case-card diploma-card">
              <div className="d-flex align-items-center justify-content-between mb-5">
                <div className="flex-1">
                  <p className="card-title">Student card</p>
                  <p className="card-description">University of web design</p>
                </div>
                <div className="flex-shrink-0">
                  <Image className="flex-shrink-0 ml-20" src={pencilImg} />
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <Image src={caseCardIcon} />

                <div className="approved-info">
                  <div className="approve-icon-container mr-2 flex-shrink-0">
                    <Image src={checkIcon} />
                  </div>
                  <span className="approved-info__text">APPROVED</span>
                </div>
              </div>
            </div>
          </div>

          <div className="use-cases-item">
            <Image src={employerCaseIcon} className="mb-10" />
            <p className="text-2xl text-bold mb-16">Request an employer certificate</p>

            <div className="use-case-card certificate-card">
              <div className="d-flex align-items-start justify-content-between mb-5">
                <div className="flex-1 card-info">
                  <p className="card-title">Employer certificate</p>
                  <p className="card-description">
                  This certificate proves that the owner is employed by the company.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Image className="flex-shrink-0 ml-20" src={certificateIcon} />
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <Image src={caseCardIcon} />

                <div className="approved-info">
                  <div className="approve-icon-container mr-2 flex-shrink-0">
                    <Image src={checkIcon} />
                  </div>
                  <span className="approved-info__text">APPROVED</span>
                </div>
              </div>
            </div>
          </div>

          <div className="use-cases-item">
            <Image src={discountCaseIcon} className="mb-10" />
            <p className="text-2xl text-bold mb-16">Use a discount coupon</p>

            <div className="use-case-card discount-card">
              <Image src={discountCardImg} className="discount-card-img" />

              <div>
                <p className="card-title">NFT MARKET PLACE</p>
                <div className="d-flex align-items-start">
                  <span className="discount-number">15</span>
                  <div>
                    <p className="discount-percent">%</p>
                    <p className="discount-off">OFF</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UseCases;
