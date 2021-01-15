# Omslagsbilder

URL-er til omslagsbilder leveres normalt med MARC 21-postene i to størrelser:

* Originalbilde (`$3 Omslagsbilde`)
* Miniatyrbilde (`$3 Miniatyrbilde`) med høyde opptil 450px

Miniatyrbilde følger ikke med posten i tilfeller der vi ikke har fått tillatelse fra forlaget til å generere og distribuere dette.

Eksempel:

    <datafield tag="856" ind1="4" ind2="1">
        <subfield code="a">aja.bs.no</subfield>
        <subfield code="3">Omslagsbilde</subfield>
        <subfield code="u">https://aja.bs.no/b093e14c-1630-5a57-9530-197fedb51df1/cover/original.jpg</subfield>
        <subfield code="n">Biblioteksentralen, Oslo</subfield>
        <subfield code="q">image/jpeg</subfield>
    </datafield>

    <datafield tag="856" ind1="4" ind2="1">
        <subfield code="a">aja.bs.no</subfield>
        <subfield code="3">Miniatyrbilde</subfield>
        <subfield code="u">https://aja.bs.no/b093e14c-1630-5a57-9530-197fedb51df1/cover/thumbnail.jpg</subfield>
        <subfield code="n">Biblioteksentralen, Oslo</subfield>
        <subfield code="q">image/jpeg</subfield>
    </datafield>

## Planlagt endring

Som følge av [MARC Proposal No. 2020-03](https://loc.gov/marc/mac/2020/2020-03.html) kommer vi til å fjerne `$n`.
Vi planlegger å samtidig fjerne `$a`, siden denne er ment for ressurser som ikke har en URL i `$u`.
856-feltene vil da se slik ut:

    <datafield tag="856" ind1="4" ind2="1">
        <subfield code="3">Omslagsbilde</subfield>
        <subfield code="u">https://aja.bs.no/b093e14c-1630-5a57-9530-197fedb51df1/cover/original.jpg</subfield>
        <subfield code="q">image/jpeg</subfield>
    </datafield>

    <datafield tag="856" ind1="4" ind2="1">
        <subfield code="3">Miniatyrbilde</subfield>
        <subfield code="u">https://aja.bs.no/b093e14c-1630-5a57-9530-197fedb51df1/cover/thumbnail.jpg</subfield>
        <subfield code="q">image/jpeg</subfield>
    </datafield>
