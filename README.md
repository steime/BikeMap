# CC-Bikers

## Build and run the container
* Build Command `docker-compose up --build`  
* Run command `docker-compose up`

## Access DB
`docker exec -it 92af1a15f91a68e5724da3fe35767e76098471eea98de3bef94b1fa0c6894006 psql -U your-username -d your-database`

## Datastructure
* Gebiet
    * UUID (Primary Key) *
    * Öffnungszeiten * 
    * Datum *
    * Name *
    * x-Koordinate *
    * y-Koordinate *
    * Anlagen [Liste] (Foreign Key) *
    * Anzahl Anlagen
    * Bewertung
    * Region
    * Webseite
    * Preis
    * Crawler Table (Foreign Key) *
  
* Anlage
    * UUID (Primary Key) *
    * Betriebszeit *
    * Betriebsdaten () *
    * Biketransport (True/False)
    * Name *
    * Status (in Betrieb/geschlossen)
    * Trails [List] (Foreign Key) *

* Trail
    * UUID (Primary Key) * 
    * Name
    * Status (offen/zu) *
    * Länge
    * Tiefenmeter
    * Schwierigkeit
    * Bewertung
    * Trailart ()

* Crawling Links
    * UUID (Primary Key) *
    * BaseURL *
    * XPath *
    * ...
