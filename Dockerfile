# Docker integration file

FROM nodesource/trusty:6.0.0

RUN mkdir -p /usr/share/hap-web/

WORKDIR /usr/share/hap-web/

# copy files including package.json

COPY . .

EXPOSE 4000

CMD node index.js