FROM python:3.12

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    USER=compiler

RUN useradd --create-home --shell /bin/bash $USER && \
    chown -R $USER /home/$USER

WORKDIR /home/$USER/site

# Install mise (to manage Node.js) https://mise.jdx.dev/mise-cookbook/docker.html#docker-image-with-mise
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
ENV MISE_DATA_DIR="/home/$USER/mise"
ENV MISE_CONFIG_DIR="/home/$USER/mise"
ENV MISE_CACHE_DIR="/home/$USER/mise/cache"
ENV MISE_INSTALL_PATH="/usr/local/bin/mise"
ENV PATH="/home/$USER/mise/shims:$PATH"

RUN curl https://mise.run | sh

RUN apt-get update

# Install Python dependencies
COPY .devcontainer/requirements.txt .devcontainer/requirements.txt
RUN python -m pip install --upgrade pip
RUN pip install --no-cache-dir -r .devcontainer/requirements.txt

USER $USER
ENV PATH "$PATH:/home/$USER/.local/bin"
