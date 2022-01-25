const talaoCredential = {
  '@context': [
    'https://www.w3.org/2018/credentials/v1',
    {
      name: 'https://schema.org/name',
      description: 'https://schema.org/description',
      EmailPass: {
        '@id':
          'https://github.com/TalaoDAO/context/blob/main/README.md#emailpass',
        '@context': {
          '@version': 1.1,
          '@protected': true,
          schema: 'https://schema.org/',
          id: '@id',
          type: '@type',
          email: 'schema:email',
          issuedBy: {
            '@id': 'schema:issuedBy',
            '@context': {
              '@version': 1.1,
              '@protected': true,
              logo: { '@id': 'schema:image', '@type': '@id' },
              name: 'schema:name',
            },
          },
        },
      },
    },
  ],
  id: '',
  type: ['VerifiableCredential', 'EmailPass'],
  name: [
    {
      '@value': 'Email Proof',
      '@language': 'en',
    },
    {
      '@value': 'E-Mail-Beweis',
      '@language': 'de',
    },
    {
      '@value': "Preuve d'email",
      '@language': 'fr',
    },
  ],
  description: [
    {
      '@language': 'en',
      '@value':
        'This signed electronic credential is proof that you are the owner of this email address.',
    },
    {
      '@language': 'de',
      '@value':
        'Dieses signierte elektronische Zertifikat ist der Beweis dafür, dass Sie der Inhaber dieser E-Mail-Adresse sind.',
    },
    {
      '@language': 'fr',
      '@value':
        'Cette attestation électronique signée est la preuve que vous êtes le propriétaire de cette adresse email.',
    },
  ],
  issuer: '',
  issuanceDate: '',
  credentialSubject: {
    type: 'EmailPass',
    email: '',
    issuedBy: {
      name: 'Talao',
      logo: 'https://talao.mypinata.cloud/ipfs/QmNwbEEupT7jR2zmrA87FsN4hUS8eXnCxM8DsL9RXc25cu',
    },
  },
};

module.exports = {
  talaoCredential,
};
