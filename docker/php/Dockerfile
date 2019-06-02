FROM php:7.3-fpm

RUN apt-get update -y && apt-get install -y sendmail libpng-dev zlib1g-dev \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libgd-dev

RUN docker-php-ext-install pdo_mysql mysqli \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install gd

RUN pecl install xdebug