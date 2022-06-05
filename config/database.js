module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cabhqit0mal94vgtckl0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi_i61l'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'MENAhEeaGlzpzqP78HgbZYiWgPuwCwKU'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});


