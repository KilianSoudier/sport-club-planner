FROM php:8.2-cli

RUN apt-get update && apt-get install -y \
    git unzip libzip-dev libicu-dev libonig-dev libxml2-dev \
    && docker-php-ext-install pdo_mysql

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

COPY . /var/www

RUN if [ -f composer.json ]; then composer install --no-interaction --prefer-dist --optimize-autoloader || true; fi
EXPOSE 8000

# Use the artisan serve command; in dev we mount the source so changes appear instantly.
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
