FROM mongo

COPY init.json /init.json
CMD mongoimport --host mongodb --db hermes --collection branches --type json --file /init.json --jsonArray --drop