FROM python:3.10

RUN apt-get update
RUN apt-get install -y ruby-full && gem install bundler
RUN python -m pip install --upgrade pip

COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle install

COPY .devcontainer/requirements.txt .devcontainer/requirements.txt
RUN pip install --no-cache-dir -r .devcontainer/requirements.txt
