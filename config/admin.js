module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '498f28402f189f6bc7d71817433cd157'),
  },
});
