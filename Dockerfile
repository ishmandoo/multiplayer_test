FROM ubuntu

RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN apt-get install -y git
RUN git clone https://github.com/ishmandoo/multiplayer_test.git
RUN cd multiplayer_test && npm install

CMD ["nodejs", "multiplayer_test/server/server.js"]
