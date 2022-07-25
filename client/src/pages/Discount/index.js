import React from 'react';
import { REACT_APP_NODE_LOCAL, ROUTES } from '../../constants';
import UseCases from '../../parts/UseCases';
import DesktopProgress from '../../parts/DesktopProgress';

import step051 from '../../assets/images/v1/pages/discount/Image-discount-coupon-scan-qrcode.webp';
import step061 from '../../assets/images/v1/pages/discount/Image-discount-coupon-accpet-certifiacte-wallet.svg';
import { acceptDiscountCertificate } from '../../assets/images';

const downloadSteps = [
  {
    img: step051,
    title: 'Scan the <br/>  QR Code',
  },
  {
    img: acceptDiscountCertificate,
    title: 'Accept the new <br/>  certificate',
  },
];

const Discount = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(REACT_APP_NODE_LOCAL)
      .then((res) =>  res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <main>
      <div className="bg-blue-dark py-47">
        <h1 className="mb-0 text-center text-white">
          Get a discount coupon
        </h1>
      </div>
      <DesktopProgress progressItems={downloadSteps} link={ROUTES.DISCOUNT_DEMO} />
      <UseCases />
    </main>
  );
}

export default Discount;
