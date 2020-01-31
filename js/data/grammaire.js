Revision.grammaire = (function () {
    'use strict';

    return {
        "particules": {
            "の": {
                "exprimer la possession": [
                    "possesseurのpossédé",
                    "リンクの馬 : le cheval de Link"
                ],
                "lier un objet/lieu avec un repère spatial": [
                    "ベッドの上 : Sur le lit",
                    "ベッドの後ろ : Derrière le lit"
                ]
            },
            "と": {
                "exprimer l’énumération": [
                    "Il se place entre 2 noms (mais pas entre 2 adjectifs ou 2 verbes).",
                    "マリオの犬と猫と魚 : le chien, le chat et le poisson"
                ],
                "exprimer la notion de “avec quelqu'un” si utilisée seule": [
                    "マリオと : avec Mario"
                ]
            },
            "や": {
                "exprimer l’énumération non exhaustive": [
                    "Cette particule s’utilise comme と mais sous entend que la liste n’est pas complète.",
                    "マリオやルイージ : Mario et Luigi, etc."
                ]
            },
            "は": {
                "exprimer le thème de la phrase": [
                    "On va la prononcer comme わ sous sa forme particule.",
                    "Il s’agit d’un nom ou groupe nominal, toujours placé en début de phrase et qui indique le sujet de la phrase.",
                    "Dans le cas où plusieurs phrases s’enchaînent avec le même thème, ce dernier n’a pas besoin d’être répété.",
                    "Si le thème est sous-entendu par le contexte, il n’est pas nécessaire de le mentionner.",
                    "リンクは男だ : Au sujet de Link, c’est un homme.",
                    "私は男だ。: Je suis un homme.",
                    "Le thème peut correspondre au sujet du verbe : 私は",
                    "Le thème peut correspondre un lieu où il se passe quelque chose : 日本では",
                    "Le thème peut correspondre un lieu où il ne se passe rien : 日本には",
                    "Le thème peut correspondre une direction : 日本へは",
                    "Le thème peut correspondre un complément de temps : 今日は",
                    "Le thème peut correspondre un point de départ : ２時からは",
                    "Le thème peut correspondre un point d’arrivé : フランスまでは",
                    "Le thème peut correspondre un COD (pas de particule を ici) : ミルクは"
                ]
            },
            "に": {
                "Désigner un lieu où il ne se passe rien": [
                    "Il va de pair avec un verbe de présence (いる / ある)",
                    "私はホテルにいる。: Je suis à l’hôtel.",
                    "本は空港にある。: Le livre est à l’aéroport."
                ],
                "Désigner le point d’arrivé lors d’un mouvement": [
                    "ナルトはレストランに行く。: Naruto va au restaurant."
                ],
                "Désigner le COI": [
                    "vis à vis de quoi est faite l’action, à qui ?, pour qui ?, contre qui ?",
                    "ブルマはヤマチャにカプセルを売る。: Bulma vend des capsules à Yamada."
                ],
                "Désigner le changement": [
                    "ナメック星は火山に変わる。: La planète Namek se change en volcan."
                ],
                "Désigner la personne que l’on rencontre": [
                    "ピっコロはセルに会う。: Picolo rencontre Cell."
                ],
                "Désigner le complément de temps quand il s’agit d’un point ou d’une période précise": [
                    "6時に : à 6h",
                    "19世紀に : au XIXème siècle"
                ]
            },
            "で": {
                "Exprimer les lieux où il se passe quelque chose": [
                    "ナルトはレストランで食べる。: Naruto mange au restaurant.",
                    "ひなたは銀行でサスケとテンテンと話す。: Hinata parle avec Sasuke et Tenten à la banque.",
                    "イタチとサスケは神社の前で飲む。: Itachi et Sasuke boivent devant le temple."
                ],
                "Le moyen utilisé pour effectuer une action.": [
                    "私はタクシーで行く。: Je vais en taxi.",
                    "サクラはバスで来る。: Sakura vient en bus.",
                    "ナルトはスプーンで食べる。: Naruto mange avec une cuillère."
                ]
            },
            "へ": {
                "Indiquer la direction avec un verbe de mouvement directionnel.": [
                    "On va la prononcer comme え sous sa forme particule.",
                    "ナルトはレストランへ行く。: Naruto va en direction du restaurant.",
                    "トランクスはバイクで西の都へ行く。: Trunks va en direction de la capitale de l’ouest en moto.",
                    "A noter qu’en japonais, on ne se dirige pas vers quelqu’un mais vers le lieu de cette personne.",
                    "クリリンはナルトの所へ向かう。: Krilin se dirige vers Naruto."
                ]
            },
            "を": {
                "indiquer le COD": [
                    "qui subit l’action du verbe",
                    "私はミルクを飲む。: Je bois du lait.",
                    "Le COD, comme en français, se trouve toujours au plus proche du verbe."
                ],
                "Exprimer un lieu dans une idée de parcours (avec un verbe de mouvement)": [
                    "鳥は空を飛ぶ。: L’oiseau vole dans le ciel.",
                    "私は公園を歩く。: Je marche dans le parc.",
                    "魚は海を泳ぐ。: Le poisson nage dans la mer."
                ]
            },
            "から": {
                "Exprimer le point de départ": [
                    "avec une idée de limite / jusqu’à",
                    "から est placée devant まで si les 2 sont préentes",
                    "Lは電車で大阪から広島まで行く。: L va d’Osaka à Hiroshima en train.",
                    "Lの授業は１０時半までだ。: Le cours de L termine à 10h30.",
                    "Lは心から祈る。: L prie de tout son coeur."
                ]
            },
            "まで": {
                "Exprimer le point d’arrivé": [
                    "avec une idée de limite / jusqu’à",
                    "から est placée devant まで si les 2 sont préentes",
                    "Lは電車で大阪から広島まで行く。: L va d’Osaka à Hiroshima en train.",
                    "Lの授業は１０時半までだ。: Le cours de L termine à 10h30.",
                    "Lは心から祈る。: L prie de tout son coeur."
                ]
            },
            "が": {
                "Exprimer le sujet du verbe": [
                    "On l’utilise lorsque le thème est différent du sujet du verbe. (日本では熊が猿を食べる。: Au Japon, les ours mangent des singes.)",
                    "Dans une phrase sans thème, pour forcer sur le sujet du verbe ou donner une nouvelle information. (サンがもののけ姫だ。: C’est San qui est la princesse Mononoké. / イノシシが来る！: Les sangliers arrivent !)"
                ],
                "Exprimer une présence": [
                    "木の前にはライオンがいる。: Devant l’arbre, il y a un lion.",
                    "ライオンがいる。: Il y a un lion."
                ],
                "Exprimer le verbe avoir": [
                    "Il n’y a pas de verbe dédié.",
                    "キリンは角がある。: La girafe a des cornes.",
                    "私は妹がいる。: J’ai une petite soeur."
                ]
            }
        }
    };
})();