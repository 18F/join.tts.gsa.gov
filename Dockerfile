FROM ruby:2.5

# Bundle install first for a simple gem cache
COPY Gemfile* /tmp/
WORKDIR /tmp
RUN bundle install

# Set app working direcotry and copy app there.
ENV app /jointts
RUN mkdir $app
WORKDIR $app
ADD . $app

EXPOSE 4000
CMD ["bundle exec jekyll serve"]