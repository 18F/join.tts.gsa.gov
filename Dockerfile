FROM ruby:3.1.3

RUN apt-get update && \
  apt-get install --reinstall -y build-essential -y locales && \
  sed -i 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen && \
  locale-gen en_US.UTF-8


# Bundle install first for a simple gem cache
COPY Gemfile* /tmp/
WORKDIR /tmp
RUN gem install bundler
RUN bundle install

# Set app working direcotry and copy app there.
ENV app /jointts
RUN mkdir $app
WORKDIR $app
ADD . $app

# Set some other necessary ENVs
ENV LC_ALL=C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US

# --force-polling supports Windows users
CMD bundle exec jekyll serve --host 0.0.0.0 --livereload --force-polling
