# CC-Bikers

## Build and run the container
* Build Command `docker-compose up --build`  
* Run command `docker-compose up`

## Datastructure
* Gebiet
    * UUID (Primary Key)
    * Öffnungszeiten
    * Datum
    * Name
    * x-Koordinate
    * y-Koordinate
    * Anlagen [Liste] (Foreign Key)
    * Anzahl Anlagen
    * Bewertung
    * Region
    * Webseite
    * Preis
    * Crawler Table (Foreign Key)
  
* Anlage
    * UUID (Primary Key)
    * Betriebszeit
    * Betriebsdaten ()
    * Biketransport (True/False)
    * Name
    * Status (in Betrieb/geschlossen)
    * Trails [List] (Foreign Key)

* Trails
    * UUID (Primary Key)
    * Name
    * Status (offen/zu)
    * Länge
    * Tiefenmeter
    * Schwierigkeit
    * Bewertung
    * Trailart ()

* Crawling Links
    * UUID (Primary Key)
    * BaseURL
    * XPath
    * ...
