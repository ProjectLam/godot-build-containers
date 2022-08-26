ARG img_version
FROM godot-fedora:${img_version}

ENV EMSCRIPTEN_VERSION=3.1.20

RUN git clone --branch ${EMSCRIPTEN_VERSION} --progress https://github.com/emscripten-core/emsdk && \
    emsdk/emsdk install ${EMSCRIPTEN_VERSION} && \
    emsdk/emsdk activate ${EMSCRIPTEN_VERSION}

CMD /bin/bash
