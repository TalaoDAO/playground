'use strict';

const {
  keyToDID,
  issueCredential,
  keyToVerificationMethod,
  verifyCredential,
} = require('@spruceid/didkit-wasm-node');

// const { talaoCredential } = require('../constant/credential');
const { secp256k1 } = require('../constant/keys');
const qr = require('qrcode');
// const { formatDate } = require('../utils/date');

async function sendQrcode(req, res) {
  const key = JSON.stringify(secp256k1);

  const did = keyToDID('ethr', key);

  qr.toDataURL(
    `http://192.168.1.34:3034/wallet/test/wallet_credential/urn:uuid:8930fe9c-0e22-11ec-9ef1-f37fc4c32c40?issuer=${did}`,
    (err, src) => {
      if (err) res.send('Error occured');
      res.render('qrcode', { src });
    },
  );
}

async function verifyMethod() {
  const key = JSON.stringify(secp256k1);

  // const issuanceDate = formatDate();
  // const credential = talaoCredential;

  // credential.id = 'did:example:xxxxx';
  // credential.issuer = did;
  // credential.issuanceDate = issuanceDate;

  try {
    const verificationMethod = await keyToVerificationMethod(
      'ethr',
      key,
    );
    return verificationMethod;
  } catch (err) {
    console.log('ERROR', err);
  }
}

async function verifyIssuer(req, res) {
  const vc = '';
  // const vc = await issueCredential(
  //   JSON.stringify(credential),
  //   JSON.stringify({
  //     proofPurpose: 'assertionMethod',
  //     verificationMethod: verificationMethod,
  //   }),
  //   key,
  // );
  try {
    const verify = await verifyCredential(vc, '{}');
    res.send(verify);
  } catch (err) {
    console.log('ERROR', err);
  }
}

async function verifyPresentation() {
  // const { key, did, verificationMethod } = initDidKit();
  // const presentation = DIDKit.issuePresentation(
  //   {
  //     '@context': ['https://www.w3.org/2018/credentials/v1'],
  //     id: 'http://example.org/presentations/3731',
  //     type: ['VerifiablePresentation'],
  //     holder: did,
  //     verifiableCredential: {
  //       '@context': 'https://www.w3.org/2018/credentials/v1',
  //       id: 'http://example.org/credentials/3731',
  //       type: ['VerifiableCredential'],
  //       issuer: 'did:example:30e07a529f32d234f6181736bd3',
  //       issuanceDate: '2020-08-19T21:41:50Z',
  //       credentialSubject: {
  //         id: 'did:example:d23dd687a7dc6787646f2eb98d0',
  //       },
  //     },
  //   },
  //   {
  //     proofPurpose: 'authentication',
  //     verificationMethod: verificationMethod,
  //   },
  //   key,
  // );
  // const verifyResult = DIDKit.verifyPresentation(presentation, {
  //   proofPurpose: 'authentication',
  // });
  // console.log('verifyResult', verifyResult);
  // return verifyResult;
}

async function DidResolve() {
  // const did =
  //   'did:key:z6MkiVpwA241guqtKWAkohHpcAry7S94QQb6ukW3GcCsugbK';
  // const result = DIDKit.didResolve(did, {});
  // return result;
}

module.exports = {
  sendQrcode,
  verifyIssuer,
  verifyPresentation,
  DidResolve,
  verifyMethod,
};
