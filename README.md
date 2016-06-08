# TgM MegaMenu

Die Extension stellt die lib.megamenu zu Verfügung, welche ein Menü der root level Seiten generiert. Die Submenüs der einzelnen Menüpunkte bestehen aus den Inhalten der in den Konstanten
angegebenen colPos.
Die Extension bindet schon das nötige js und less ein (siehe Configuration/TypoScript/Setup.txt) (ws_less 1.4.1 oder höher wird benötigt). Wenn kein less compiler vorhanden ist, dann bitte direkt das CSS einbinden. Das JS und LESS/CSS muss an die jeweilige Seite angepasst werden.

Wenn die Seite mit einem Mobilgerät aufgerufen wird, wird ein normales Menü generiert.

Das Menü kann in eine Bootstrap umgebung eingegliedert werden.


## Voraussetzungen

* TYPO3 7.6
* EXT:lvmobile
* ggf. ws_less > 1.4.0

## Installation
Extension installieren, aktuelles Menü durch die lib.megamenu ersetzten und JS und LESS/CSS Konfigurieren

## Gut zu Wissen
Das mitgelieferte LESS/CSS stylt auch schon die mitgelieferte 3 spaltige gridelement Vorlage. Zu finden unter Resources/Private/Ext/Gridelements. Unter Resources/Private/Ext/DCE ist auch die tmpl und SQL vorlage für ein TEXT mit Bild element. erstellt mit DCE V.1.3.3