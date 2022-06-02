FROM jekyll/jekyll:4

RUN apk update
RUN apk add --no-cache python3 py3-pip python3-dev

RUN python3 -m pip install --upgrade pip && \
    pip install pre-commit
