Revision.grammaire = (function () {
    'use strict';

    return {
        "particules": {
            "の": [
                "Particule de liaison : Elle permet d'exprimer la possession.",
                "Particule de liaison : Elle permet de lier un objet/lieu avec un repère spatial.",
                "Particule syntaxique : Elle permet d'exprimer la notion de “avec” si utilisée seule lorsqu'il s'agit d'un être vivant.",
            ],
            "と": [
                "Particule de liaison : Elle permet d'exprimer l'énumération (équivalent du et en français). Il se place entre 2 noms (mais pas entre 2 adjectifs ou 2 verbes).",
            ],
            "との": [
                "Particule de liaison : Elle permet d'exprimer l'énumération quelqu'un et moi (avec).",
            ],
            "とは": [
                "Particule de liaison : Elle permet de donner une définition.",
            ],
            "や": [
                "Particule de liaison : Elle permet d'exprimer l'énumération non exhaustive. Il se place entre 2 noms (mais pas entre 2 adjectifs ou 2 verbes).",
            ],
            "やら": [
                "Particule de liaison : Elle permet d'exprimer l'énumération non exhaustive et se place après chaque éléments.",
            ],
            "だの": [
                "Particule de liaison : Elle permet d'exprimer l'énumération non exhaustive et se place après chaque éléments.",
            ],
            "か": [
                "Particule de liaison : Elle permet de dresser un choix dans une liste.",
                "Particule de fin de phrases : Elle permet de poser une question \"totale\" (réponse oui/non).",
            ],
            "なり": [
                "Particule de liaison : Elle permet de dresser un choix non exhaustif dans une liste.",
            ],
            "に": [
                "Particule de liaison : Elle permet de dresser des énumérations par paire ou bien dans l'idée d'ajout successif.",
                "Particule syntaxique : Elle permet de désigner un lieu où il ne se passe rien. Il va de pair avec un verbe de présence.",
                "Particule syntaxique : Elle permet de désigner le point d'arrivé lors d'un mouvement.",
                "Particule syntaxique : Elle permet de désigner le COI de la phrase (vis à vis de quoi est faite l'action, à qui ?, pour qui ?, contre qui ?).",
                "Particule syntaxique : Elle permet de désigner le changement.",
                "Particule syntaxique : Elle permet de désigner la personne que l'on rencontre.",
                "Particule syntaxique : Elle permet de désigner le complément de temps quand il s'agit d'un point ou d'une période précise (ex : le 6 août, à 6h, etc).",
            ],
            "で": [
                "Particule syntaxique : Elle permet d'exprimer les lieux où il se passe quelque chose.",
                "Particule syntaxique : Elle permet de préciser le moyen utilisé pour effectuer une action.",
            ],
            "へ": [
                "Particule syntaxique : Elle permet d'indiquer la direction avec un verbe de mouvement directionnel.",
            ],
            "への": [
                "Particule syntaxique : Elle permet d'indiquer la direction de quelque chose.",
            ],
            "を": [
                "Particule syntaxique : Elle permet d'indiquer le COD de la phrase (qui subit l'action du verbe).",
                "Particule syntaxique : Elle permet d'exprimer un lieu dans une idée de parcours (avec un verbe de mouvement).",
            ],
            "から": [
                "Particule syntaxique : Elle permet d'exprimer le point de départ (avec une idée de “limite” / “jusqu'à”).",
                "Particule conjonctive : Elle permet d'exprimer la cause entre 2 propositions dans une idée subjective (puisque, comme, car).",
            ],
            "まで": [
                "Particule syntaxique : Elle permet d'exprimer le point d'arrivé (avec une idée de “limite” / “jusqu'à”).",
            ],
            "からの": [
                "Particule syntaxique : Elle permet d'exprimer l'origine (d'un objet, d'un animal, etc).",
            ],
            "が": [
                "Particule syntaxique : Elle permet d'exprimer le sujet du verbe.",
                "Particule syntaxique : Elle permet d'exprimer le verbe avoir.",
                "Particule conjonctive : Elle permet d'exprimer la concession entre 2 propositions sous une forme plus soutenue.",
                "Particule conjonctive : Elle permet d'introduire une seconde proposition sans idée de concession.",
            ],
            "より": [
                "Particule syntaxique : Elle permet de préciser le point de départ sous une forme plus soutenue.",
                "Particule syntaxique : Elle permet d'indiquer la base pour une comparaison (par rapport à, comparé à, etc).",
            ],
            "だけ": [
                "Particule adverbiale : Elle permet d'exprimer le caractère unique.",
            ],
            "のみ": [
                "Particule adverbiale : Elle permet d'exprimer le caractère unique sous une forme plus soutenue.",
            ],
            "しか": [
                "Particule adverbiale : Elle permet d'exprimer le caractère unique sous une forme négative.",
            ],
            "ばかり": [
                "Particule adverbiale : Elle permet d'exprimer le caractère unique sous une forme péjorative.",
            ],
            "くらい": [
                "Particule adverbiale : Elle permet d'exprimer une approximation dans le temps.",
            ],
            "ころ": [
                "Particule adverbiale : Elle permet d'exprimer une approximation dans le temps lorsque le point est fixe dans le temps.",
            ],
            "ほど": [
                "Particule adverbiale : Elle permet d'exprimer une approximation dans une idée de comparaison.",
            ],
            "など": [
                "Particule adverbiale : Elle permet d'exprimer la non-exhaustivité et ainsi d'appuyer l'utilisation de や.",
            ],
            "なんか": [
                "Particule adverbiale : Elle permet d'exprimer la non-exhaustivité et ainsi d'appuyer l'utilisation de や sous une forme familière.",
            ],
            "は": [
                "Particule d'emphase : Elle permet d'exprimer le thème de la phrase.",
            ],
            "も": [
                "Particule d'emphase : Elle permet d'introduire dans une phrase, une chose identique à une autre précédemment énoncée (aussi, de même, etc).",
            ],
            "こそ": [
                "Particule d'emphase : Elle permet d'exprimer la détermination (pour sûr !) et vient remplacer は.",
            ],
            "さえ": [
                "Particule d'emphase : Elle permet d'indiquer quelque chose d'étonnant dans une idée négative et vient remplacer は.",
            ],
            "でも": [
                "Particule d'emphase : Elle permet d'indiquer quelque chose d'extrême dans une idée de moquerie et vient remplacer は.",
                "Particule d'emphase : Elle permet de proposer autre chose lors d'un choix (ou autre).",
            ],
            "よ": [
                "Particule de fin de phrases : Elle permet d'accentuer sa phrase. On peut le représenter par un “!” en français. Cela permet d'affirmer son avis.",
            ],
            "ね": [
                "Particule de fin de phrases : Elle permet de confirmer (baisser l'intonation) ou demander une confirmation (monter l'intonation). C'est plutôt utilisé par les femmes.",
            ],
            "な": [
                "Particule de fin de phrases : Elle permet de souligner son opinion à soi-même. La particule est plutôt utilisée par les hommes dans un sens familier.",
            ],
            "わ": [
                "Particule de fin de phrases : Elle permet d'exprimer son entente, qu'on est favorable. C'est plutôt utilisé par les femmes.",
            ],
            "ぜ": [
                "Particule de fin de phrases : Elle permet d'exprimer son entente, qu'on est favorable. C'est plutôt utilisé par les hommes et sous une forme familier.",
                "Particule de fin de phrases : Elle permet d'accentuer sa phrase sous une forme vulgaire.",
            ],
            "とも": [
                "Particule de fin de phrases : Elle permet d'exprimer une évidence.",
            ],
            "ぞ": [
                "Particule de fin de phrases : Elle permet d'accentuer sa phrase de manière forte. Peut être utilisé pour donner un ordre ou indiquer un danger. C'est surtout utilisé par les hommes sous une forme familière.",
            ],
            "さ": [
                "Particule de fin de phrases : Elle permet d'accentuer sa phrase tout en attirant l'attention de l'interlocuteur. C'est surtout utilisé par les hommes sous une forme familière.",
            ],
            "かしら": [
                "Particule de fin de phrases : Elle permet d'indiquer une incertitude, de se questionner soi-même. C'est plus utilisé par les femmes.",
            ],
            "けれども": [
                "Particule conjonctive : Elle permet d'exprimer la concession entre 2 propositions sous une douce.",
            ],
            "のに": [
                "Particule conjonctive : Elle permet d'exprimer la concession entre 2 propositions dans un sens de surprise, regret ou mécontentement.",
            ],
            "ので": [
                "Particule conjonctive : Elle permet d'exprimer la cause entre 2 propositions dans une idée objective (puisque, comme, car).",
            ],
            "のだ": [
                "Tournure explicative : Placé en fin de phrase (juste après le verbe), elle permet de donner une explication.",
            ],
            "のか": [
                "Tournure explicative : Placé en fin de phrase (juste après le verbe), elle permet de demander une explication.",
            ],
        }
    };
})();