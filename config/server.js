module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS') || [
      'fd8b8a6a2d3f4e5c6a7b8c9d0e1f2a3b',
      '9e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b'
    ],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
