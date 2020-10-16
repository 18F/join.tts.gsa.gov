FROM ruby:2.7

# for USWDS
# https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

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

# --force-polling supports Windows users
CMD bundle exec jekyll serve --host 0.0.0.0 --livereload --force-polling
