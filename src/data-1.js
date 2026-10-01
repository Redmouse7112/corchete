/* Corchete · contenidos · Unidades 1 a 3
   Formato de texto: _cursiva_ (ejemplos), **negrita**.
   En "ej", una línea que empieza con * es agramatical.  */
window.CORCHETE = window.CORCHETE || { units: [], analysis: [], trees: [] };

CORCHETE.units.push({
  id: "u1",
  n: 1,
  title: "Nociones sintácticas",
  short: "Sintaxis",
  blurb: "Constituyentes, sintagmas, funciones y papeles temáticos, sujeto y clases de verbos.",
  sources: ["Ciapuscio y Ferrari (2004), cap. 2", "Di Tullio, Manual, caps. III–VI", "Giammatteo, cap. 2"],
  sections: [
    {
      t: "Qué estudia la sintaxis",
      p: [
        "La sintaxis estudia cómo se combinan las palabras: el orden, los vínculos entre ellas y lo que unas **exigen** de otras. La oración no es una cadena de palabras sueltas: tiene **estructura jerárquica**. Las palabras forman grupos (constituyentes) y esos grupos forman otros mayores.",
        "Para saber si un grupo de palabras es un constituyente se aplican **pruebas**: sustitución por un pronombre, conmutación, desplazamiento, coordinación, interrogación y omisión. Si el grupo se comporta en bloque, es un constituyente."
      ],
      k: [
        "Expansión: agregar modificadores sin cambiar la estructura.",
        "Reducción: reemplazar un grupo entero por un pronombre.",
        "Interrogación: la respuesta a una pregunta es siempre un constituyente."
      ],
      ej: [
        "_El bibliotecario puso el libro viejo en el estante._",
        "_El bibliotecario de guardapolvo azul puso el libro viejo en el estante._ (expansión)",
        "_Él puso el libro viejo en el estante._ (reducción por sustitución pronominal)",
        "_¿Dónde lo puso? En el estante._"
      ],
      src: "Ciapuscio y Ferrari, cap. 2 §1"
    },
    {
      t: "Los sintagmas",
      p: [
        "Cada palabra léxica es **núcleo** de un sintagma y le da su categoría: si el núcleo es un sustantivo, el grupo es un sintagma nominal (SN); si es un verbo, un SV; y así con el adjetivo (SAdj), el adverbio (SAdv) y la preposición (SP).",
        "El núcleo puede reemplazar a todo el sintagma, salvo en el SP: la preposición necesita siempre un **término** (_*Voy hacia_). Por eso la preposición es una clase atípica entre las léxicas.",
        "El **potencial funcional** es el conjunto de funciones que puede cumplir un sintagma. Un SN, por ejemplo, puede ser sujeto, objeto directo o término de preposición."
      ],
      ej: [
        "SN: _la [casa] grande_",
        "SV: _[come] mucho_",
        "SAdj: _bastante [grande]_",
        "SAdv: _muy [lentamente]_",
        "SP: _[hacia] el río_"
      ],
      src: "Giammatteo, cap. 2 §1 · Di Tullio, cap. IV"
    },
    {
      t: "Función sintáctica y papel temático",
      p: [
        "La **función sintáctica** es la relación formal de un constituyente con los demás: sujeto, objeto directo, objeto indirecto, etc. El **papel temático** es el modo en que ese participante interviene en el evento: agente, tema o paciente, experimentante, beneficiario, origen, meta, locativo, instrumento.",
        "Función y papel **no coinciden necesariamente**. El sujeto es muchas veces agente, pero también puede ser tema (en la pasiva o con verbos inacusativos) o experimentante (con verbos de sentimiento)."
      ],
      ej: [
        "_El árbitro_ (agente) _suspendió el partido_ (tema).",
        "_La boda_ (tema) _fue pospuesta por el novio_ (agente).",
        "_Surgieron problemas de organización._ (sujeto tema, pospuesto)",
        "_Los estudiantes_ (experimentante) _sentimos pena_ (tema) _por la renuncia._"
      ],
      src: "Ciapuscio y Ferrari, cap. 2 §3"
    },
    {
      t: "Sujeto y predicado",
      p: [
        "La marca formal del sujeto es la **concordancia** en número y persona con el verbo. Por la rica flexión verbal del español, el sujeto puede quedar **tácito** (desinencial): _Llegamos tarde_.",
        "Algunas oraciones no tienen sujeto: los verbos meteorológicos (_Llueve_), **haber** existencial (_Hay muchos indagados_) y **hacer** temporal o climático (_Hace frío_, _Hace años_).",
        "Un SN plural que designa personas puede concordar en 1.ª o 2.ª persona si incluye al hablante o al oyente: _Los padres no siempre sabemos lo que es bueno para los hijos_."
      ],
      src: "Di Tullio, cap. VI · RAE, Manual §4.2.3"
    },
    {
      t: "Estructura argumental y clases de verbos",
      p: [
        "El verbo es un predicado que **selecciona argumentos**: el argumento externo se realiza como sujeto y los internos como complementos. Los **adjuntos** no son seleccionados: agregan circunstancias y se pueden omitir.",
        "Según sus argumentos, los verbos se agrupan así:"
      ],
      k: [
        "**Transitivos**: piden objeto directo (_leer un libro_).",
        "**Ditransitivos**: OD + OI (_dar, decir, pedir algo a alguien_).",
        "**Inergativos**: intransitivos de actividad controlada por el sujeto (_trabajar, suspirar, rugir_).",
        "**Inacusativos**: intransitivos cuyo sujeto es tema o afectado, no agente (_llegar, surgir, faltar, crecer_). Admiten sujeto pospuesto sin determinante: _Llegaron invitados_.",
        "**Copulativos**: ser, estar, parecer + atributo.",
        "**Preposicionales**: piden complemento de régimen (_confiar en, abusar de_)."
      ],
      src: "Di Tullio, cap. VI · PPT clase 27/8"
    },
    {
      t: "El sintagma nominal",
      p: [
        "El SN se organiza alrededor de un núcleo sustantivo, con determinante opcional y complementos: sintagmas adjetivos, preposicionales o proposiciones relativas.",
        "Los complementos pueden ser **restrictivos** (sin pausa; reducen la referencia: de todos los policías, solo los separados de sus cargos) o **no restrictivos** (entre comas; agregan información sin recortar). La **aposición** es un SN que se suma a otro para identificarlo o describirlo."
      ],
      ej: [
        "_Los policías separados de sus cargos interpusieron recursos legales._ (restrictivo)",
        "_Los policías, separados de sus cargos, interpusieron recursos legales._ (no restrictivo)",
        "_El Louvre, museo de ensueño, se halla en refacción._ (aposición)"
      ],
      src: "Ciapuscio y Ferrari, cap. 2 §4"
    }
  ],
  cards: [
    { f: "¿Qué prueba muestra que _el libro viejo_ es un constituyente en _Puso el libro viejo en el estante_?", b: "Se reemplaza en bloque por un pronombre: _Lo puso en el estante_." },
    { f: "Diferencia entre función sintáctica y papel temático", b: "La función es la relación formal (sujeto, OD…). El papel temático es cómo participa en el evento (agente, tema, experimentante…). No coinciden necesariamente." },
    { f: "¿Cuál es la marca formal del sujeto?", b: "La concordancia en número y persona con el verbo." },
    { f: "Verbo inacusativo", b: "Intransitivo cuyo sujeto es tema o afectado, no agente: _llegar, surgir, faltar_. Suele llevar sujeto pospuesto: _Faltan vacunas_." },
    { f: "Verbo inergativo", b: "Intransitivo de actividad causada y controlada por el sujeto: _trabajar, suspirar, rugir_." },
    { f: "¿Qué es un argumento?", b: "Un participante seleccionado por el predicado. El externo es el sujeto; los internos, los complementos." },
    { f: "¿Qué es un adjunto?", b: "Un modificador no seleccionado por el verbo: agrega circunstancias y es omisible." },
    { f: "¿Por qué la preposición es atípica entre las clases léxicas?", b: "Su núcleo no puede reemplazar al sintagma: siempre exige un término (_*Voy hacia_)." },
    { f: "Tres construcciones sin sujeto", b: "Verbos meteorológicos (_llueve_), _haber_ existencial (_hay gente_) y _hacer_ temporal (_hace años_)." },
    { f: "Complemento restrictivo vs. no restrictivo del nombre", b: "El restrictivo va sin pausa y recorta la referencia. El no restrictivo va entre comas y solo agrega información." },
    { f: "Aposición", b: "SN que acompaña a otro SN para identificarlo o describirlo: _El Louvre, museo de ensueño, …_" },
    { f: "Papel temático del sujeto en _Los estudiantes sentimos pena_", b: "Experimentante." }
  ],
  quiz: [
    { q: "En _La boda fue pospuesta por el novio_, ¿qué papel temático tiene el sujeto?", o: ["Agente", "Tema", "Experimentante", "Beneficiario"], a: 1, x: "El sujeto de la pasiva es lo afectado por la acción: tema. El agente aparece en el complemento _por el novio_." },
    { q: "¿Cuál de estos verbos es inacusativo?", o: ["trabajar", "suspirar", "surgir", "cantar"], a: 2, x: "_Surgir_ tiene un sujeto tema que no controla el evento y suele ir pospuesto: _Surgieron problemas_." },
    { q: "¿Cuál de estas oraciones no tiene sujeto?", o: ["Se aproximan las elecciones.", "Hay muchos indagados.", "Aumentan los evacuados.", "Llegaron los alumnos."], a: 1, x: "_Haber_ existencial es impersonal: _muchos indagados_ es su objeto directo (_los hay_)." },
    { q: "En _Los policías, separados de sus cargos, interpusieron recursos_, el grupo entre comas es:", o: ["Un complemento restrictivo", "Un complemento no restrictivo", "El objeto directo", "Un complemento de régimen"], a: 1, x: "Va entre pausas y no recorta el conjunto de policías: agrega información sobre todos ellos." },
    { q: "¿Qué sintagma no puede ser reemplazado por su núcleo?", o: ["SN", "SAdj", "SAdv", "SP"], a: 3, x: "La preposición exige un término: _hacia el río_, pero no _*hacia_." },
    { q: "¿Qué NO es una prueba para reconocer constituyentes?", o: ["Sustituir por un pronombre", "Contar las sílabas", "Hacer una pregunta", "Desplazar el grupo"], a: 1, x: "Las pruebas miran el comportamiento sintáctico del grupo, no su extensión." },
    { q: "En _Juan resolvió los problemas_, _los problemas_ es:", o: ["Argumento externo", "Argumento interno", "Adjunto", "Aposición"], a: 1, x: "Es seleccionado por el verbo y se realiza como complemento: argumento interno (OD)." },
    { q: "_Los padres no siempre sabemos…_ El verbo va en 1.ª persona porque:", o: ["Es un error de concordancia", "El SN incluye al hablante", "El sujeto es tácito", "Es una construcción impersonal"], a: 1, x: "Un SN plural de personas puede concordar en 1.ª persona cuando el hablante se incluye." }
  ]
});

CORCHETE.units.push({
  id: "u2",
  n: 2,
  title: "Clases de palabras",
  short: "Palabras",
  blurb: "Léxicas y funcionales: sustantivo, adjetivo, pronombre, verbo, adverbio, preposición, determinativos y conjunciones.",
  sources: ["Giammatteo, caps. 2–4 (TP2–TP6, TP9)", "RAE, Manual caps. 12 y 13", "Di Tullio, Manual cap. X", "Demonte, GDLE §3.6", "Alcina y Blecua, §4.9"],
  sections: [
    {
      t: "Palabras léxicas y funcionales",
      p: [
        "Las **palabras léxicas** tienen significado propio y son núcleos de sintagma. Morfológicamente se dividen en **flexionales** (sustantivo, adjetivo, verbo) y **no flexionales** (adverbio y preposición).",
        "Las **palabras funcionales** tienen significado gramatical: se precisa en relación con otras palabras. Son los **determinativos** (especifican al sustantivo: _el árbol_) y las **conjunciones** (conectan: _gatos y perros_). Las de naturaleza pronominal pueden aparecer solas: _Vinieron pocos_."
      ],
      src: "Giammatteo, caps. 2 y 4"
    },
    {
      t: "El sustantivo",
      p: [
        "Nombra entidades de todo tipo: personas, cosas, sentimientos, acciones. Admite género y número y forma SN."
      ],
      k: [
        "**Comunes y propios**: el común clasifica (_mujer, país_); el propio identifica sin describir (_Paula, Colombia_) y no se traduce.",
        "**Contables y no contables**: los contables admiten plural y numerales (_tres mesas_); los no contables, _mucho/poco_ en singular (_mucha arena_) y el adjetivo _abundante_. Contraste: _Compraré pan / Compraré libros / *Compraré libro_.",
        "**Colectivos**: en singular designan un conjunto (_rebaño, profesorado_). Admiten _numeroso_. La concordancia en plural (_Toda la familia iban_) se recomienda evitar.",
        "**Cuantificativos**: acotadores (_una brizna de hierba_), de medida (_un litro de leche_) y de grupo (_un montón de regalos_). **Clasificativos**: _clase, tipo, especie_.",
        "**Abstractos**: se forman con sufijos como _-ura, -ez/-eza, -ía_ (cualidades) o _-ción, -miento, -aje_ (acciones).",
        "**Eventivos**: pueden ser sujeto de _tener lugar_ o término de _durante_ (_la reunión, la batalla_)."
      ],
      ej: [
        "_un corcho, dos cristales_ (no contable usado como contable)",
        "_Es una belleza._ (no contable que pasa a designar una persona)"
      ],
      src: "RAE, Manual cap. 12 · Giammatteo, cap. 2 §2"
    },
    {
      t: "El adjetivo",
      p: [
        "Modifica al sustantivo y concuerda con él. Hay tres grandes clases:"
      ],
      k: [
        "**Calificativos**: asignan propiedades, son graduables (_muy alto, altísimo_), tienen antónimos y pueden anteponerse.",
        "**Relacionales**: vinculan el sustantivo con un ámbito, ‘perteneciente o relativo a’ (_línea telefónica, visita papal_). No se gradúan, van pospuestos y no son atributos salvo en contraste (_El problema es político_). Incluyen los gentilicios.",
        "**Adverbiales**: equivalen a un adverbio en _-mente_. Intensionales o modales (_presunto asesino, posible novia, verdadero amigo, mero trámite_), circunstanciales (_antiguo acuerdo, futuro presidente_) y aspectuales (_constantes viajes_)."
      ],
      ej: [
        "_cartelera teatral_ (relacional) / _gesto teatral_ (calificativo)",
        "_una simple mentira_ / _una mentira simple_",
        "_la antigua casa_ (la de antes) / _la casa antigua_ (vieja)",
        "_un seguro acuerdo_ (cierto) / _un acuerdo seguro_ (firme)"
      ],
      src: "RAE, Manual §13.5 · Demonte, GDLE §3.6"
    },
    {
      t: "Posición del adjetivo",
      p: [
        "La posición **posnominal** es la no marcada: allí van los adjetivos restrictivos (calificativos, relacionales). En posición **prenominal** van los no restrictivos (epítetos) y los adverbiales.",
        "Delante del sustantivo se admiten adjetivos con modificador de grado (_su muy digno discípulo_) o coordinados (_un cómodo y lujoso coche_), pero no los que llevan complemento (_*un fácil de arreglar problema_)."
      ],
      src: "RAE, Manual §13.6 · Demonte, GDLE §3.6"
    },
    {
      t: "Los pronombres",
      p: [
        "Son una subclase cerrada del sustantivo, con significado gramatical. Se interpretan en relación con la situación o el texto:"
      ],
      k: [
        "**Deixis**: señalan la situación de habla (_Yo no te veía por aquí_).",
        "**Anáfora**: remiten a algo dicho antes (_Juan resolvió los problemas pero la maestra no lo felicitó_).",
        "**Catáfora**: anticipan algo que viene después (_Juan necesita eso, que lo quieran_)."
      ],
      ej: [
        "Personales tónicos (_yo, vos, usted, él_) y átonos o clíticos (_me, te, lo, la, le, se_).",
        "Solo en 3.ª persona se distinguen acusativo (_lo, la_) y dativo (_le_), y oblicuo (_lo_) y reflexivo (_se_).",
        "Demostrativos (_este, ese, aquel_), posesivos (_mi, tuyo_), relativos (_que, quien, cual, cuyo_), interrogativos y exclamativos, indefinidos (_alguien, nada, cualquiera_)."
      ],
      src: "Di Tullio, cap. X · Giammatteo, cap. 4"
    },
    {
      t: "El verbo",
      p: [
        "Es el núcleo de la predicación. Sus formas son **finitas** (con tiempo, modo, aspecto, número y persona) o **no finitas** (infinitivo, participio, gerundio).",
        "Los tiempos **absolutos** o deícticos se miden desde el momento del habla: _canto, canté, cantaré_. Los **relativos** o anafóricos toman como referencia otro momento: _cantaba, había cantado, cantaría_ respecto de un pasado; _he cantado, habré cantado_ respecto del presente o el futuro. _Habría cantado_ es relativo de tercer grado.",
        "El **aspecto** es interno: dice cómo ocurre el evento (terminado, en curso, repetido). El tiempo lo ubica desde afuera."
      ],
      ej: [
        "_Cuando llegué al colegio, la maestra se retiraba._ (simultáneo a un pasado)",
        "_Cuando llegué al colegio, la maestra ya se había retirado._ (anterior a un pasado)",
        "_La maestra anunció que se retiraría temprano._ (posterior a un pasado)"
      ],
      src: "Giammatteo, cap. 3 (TP9)"
    },
    {
      t: "El adverbio",
      p: [
        "Es invariable. Modifica a un verbo, un adjetivo, otro adverbio o toda la oración (_Realmente, no es fácil distinguir una de otra_)."
      ],
      k: [
        "**Cualificativos**: _bien, mal_, los terminados en _-mente_ y los adjetivos adverbializados (_hablar bajo, pisar fuerte_).",
        "**Proporcionales**: _pronto, temprano, tarde_.",
        "**Prepositivos**: _cerca/lejos, delante/detrás, encima/debajo_. Admiten término con _de_ (_delante de mí_) y se posponen al nombre (_calle arriba_).",
        "**Pronominales**: _aquí, ahora, así_; relativos (_donde, cuando, como_) e interrogativos.",
        "**De polaridad**: _sí, no, también, tampoco_.",
        "**Locuciones adverbiales**: _a sabiendas, a hurtadillas, de vez en cuando_."
      ],
      ej: [
        "_Las hijas contestaron alegre y expresivamente._ (solo el último lleva _-mente_)",
        "_recién pintado, casi vacía, medio caídos_ (usos prefijales)"
      ],
      src: "Alcina y Blecua §4.9 · Giammatteo, cap. 3"
    },
    {
      t: "Preposiciones, determinativos y conjunciones",
      p: [
        "La **preposición** encabeza un SP y exige término. Puede tener significado pleno (_sobre la mesa_) o estar vacía cuando la rige el verbo (_confiar en_).",
        "Los **determinativos** (artículos, demostrativos, posesivos, cuantificadores) dan referencia al sustantivo. Las **conjunciones** coordinantes (_y, ni, o, pero, sino_) unen elementos del mismo nivel; las subordinantes (_que, si, porque, aunque_) incluyen una proposición en otra."
      ],
      src: "Giammatteo, caps. 3 y 4"
    }
  ],
  cards: [
    { f: "Palabras léxicas flexionales y no flexionales", b: "Flexionales: sustantivo, adjetivo, verbo. No flexionales: adverbio y preposición." },
    { f: "¿Qué son las palabras funcionales?", b: "Palabras de significado gramatical que se precisa en relación con otras: determinativos y conjunciones." },
    { f: "Prueba del adjetivo _abundante_", b: "Se combina típicamente con sustantivos no contables: _agua abundante, abundante bibliografía_." },
    { f: "Prueba del adjetivo _numeroso_", b: "Detecta sustantivos colectivos en singular: _familia numerosa, público numeroso_." },
    { f: "Tres clases de sustantivos cuantificativos", b: "Acotadores (_una brizna de hierba_), de medida (_un litro de agua_) y de grupo (_un montón de regalos_)." },
    { f: "Sustantivo eventivo", b: "Designa un suceso: puede ser sujeto de _tener lugar_ o término de _durante_ (_la reunión tuvo lugar…_)." },
    { f: "Adjetivo relacional", b: "‘Perteneciente o relativo a’: _línea telefónica_. No graduable, pospuesto, no atributo salvo contraste." },
    { f: "Adjetivo intensional (adverbial)", b: "Modifica cómo se aplica el concepto, no al objeto: _presunto asesino, verdadero amigo_. Va antepuesto." },
    { f: "_la antigua casa_ vs. _la casa antigua_", b: "Antepuesto: ‘la que fue casa antes’ (circunstancial). Pospuesto: ‘casa vieja’ (calificativo)." },
    { f: "Deixis, anáfora y catáfora", b: "Deixis: señala la situación. Anáfora: remite a lo dicho antes. Catáfora: anticipa lo que sigue." },
    { f: "¿En qué persona se distinguen _lo_ (acusativo) y _le_ (dativo)?", b: "Solo en 3.ª persona. En las demás hay una forma única de caso objetivo (_me, te, nos_)." },
    { f: "Tiempos absolutos del indicativo", b: "Presente (_canto_), pretérito perfecto simple (_canté_) y futuro (_cantaré_): se miden desde el momento del habla." },
    { f: "¿Por qué _cantaba_ es un tiempo relativo?", b: "Indica simultaneidad respecto de otro momento pasado, no del momento del habla." },
    { f: "Adverbios prepositivos", b: "Admiten término con _de_ y se oponen en pares: _delante/detrás, cerca/lejos, encima/debajo_." },
    { f: "Adverbios de polaridad", b: "_sí, no, también, tampoco_." },
    { f: "Conjunción coordinante vs. subordinante", b: "La coordinante une elementos del mismo nivel (_y, pero_). La subordinante incluye una proposición en otra (_que, si, porque_)." }
  ],
  quiz: [
    { q: "¿Cuál de estas clases es léxica pero no flexional?", o: ["Sustantivo", "Adjetivo", "Adverbio", "Verbo"], a: 2, x: "Adverbio y preposición son léxicas no flexionales." },
    { q: "¿Qué oración muestra un sustantivo no contable?", o: ["Compraré libros.", "Compraré pan.", "Compraré tres mesas.", "Compraré varias sillas."], a: 1, x: "_Pan_ aparece en singular sin determinante en posición de OD, como los contables en plural." },
    { q: "¿Qué adjetivo detecta mejor un sustantivo colectivo?", o: ["abundante", "numeroso", "copioso", "cuantioso"], a: 1, x: "_Numeroso_ se aplica a pluralidades de individuos: _familia numerosa_." },
    { q: "En _visita papal_, el adjetivo es:", o: ["Calificativo", "Relacional", "Intensional", "Aspectual"], a: 1, x: "Relaciona _visita_ con el Papa: equivale a ‘la visita del Papa’ (relacional argumental)." },
    { q: "¿Cuál es un adjetivo intensional?", o: ["rojo", "presunto", "telefónico", "frecuente"], a: 1, x: "_Presunto_ no asigna una propiedad al referente: modifica cómo se aplica el concepto _asesino_." },
    { q: "_Juan necesita eso, que lo quieran._ El pronombre _eso_ funciona:", o: ["Deícticamente", "Anafóricamente", "Catafóricamente", "Como relativo"], a: 2, x: "Anticipa la proposición que sigue: es una catáfora." },
    { q: "¿Cuál es un tiempo relativo (anafórico)?", o: ["canté", "cantaré", "había cantado", "canto"], a: 2, x: "El pluscuamperfecto expresa anterioridad respecto de otro pasado." },
    { q: "¿Qué adverbio es prepositivo?", o: ["temprano", "delante", "ahora", "también"], a: 1, x: "_Delante_ admite término con _de_: _delante de la casa_." },
    { q: "_*un fácil de arreglar problema_ es agramatical porque:", o: ["Los calificativos no se anteponen", "No se antepone un adjetivo con complemento", "_Fácil_ es relacional", "Falta el artículo"], a: 1, x: "Se anteponen adjetivos con grado o coordinados, pero no con complemento." },
    { q: "¿Qué palabra es funcional?", o: ["casa", "correr", "el", "lindo"], a: 2, x: "El artículo tiene significado gramatical: especifica referencia, género y número." }
  ]
});

CORCHETE.units.push({
  id: "u3",
  n: 3,
  title: "Flexión verbal",
  short: "Flexión",
  blurb: "Raíz y desinencia, temas verbales, paradigma, voseo y verbos irregulares.",
  sources: ["RAE, Manual cap. 4", "Giammatteo, cap. 3 (TP9)", "Di Tullio, Manual cap. XIII"],
  sections: [
    {
      t: "Raíz y desinencia",
      p: [
        "La forma verbal tiene una **raíz** (significado léxico) y una **desinencia** (información gramatical). La desinencia se divide en tres segmentos: **vocal temática** (VT), **tiempo-modo** (TM) y **persona-número** (PN).",
        "La VT indica la conjugación: _-a-_ (1.ª, _amar_), _-e-_ (2.ª, _temer_), _-i-_ (3.ª, _partir_). La 1.ª agrupa cerca del 90 % de los verbos y es la única productiva: a ella van los verbos nuevos en _-ear, -izar, -ificar_.",
        "Cuando un segmento no tiene forma visible se postula un segmento nulo (Ø): _cant-Ø-e-mos_."
      ],
      ej: [
        "_mir-a-ba-s_ = raíz + VT + TM + PN",
        "_cant-á-ba-mos_",
        "_cant-Ø-o-Ø_ (1.ª persona del presente)"
      ],
      src: "RAE, Manual §4.1–4.2"
    },
    {
      t: "Los tres temas",
      k: [
        "**Tema de presente**: presente de indicativo, presente de subjuntivo e imperativo.",
        "**Tema de pretérito**: pretérito perfecto simple, imperfecto y futuro de subjuntivo, participio y gerundio.",
        "**Tema de futuro**: futuro, condicional e infinitivo. El futuro y el condicional vienen de una perífrasis latina gramaticalizada (_amar he_ > _amaré_)."
      ],
      src: "RAE, Manual §4.2.1–4.2.2"
    },
    {
      t: "El paradigma",
      p: [
        "Nombres de la RAE y, entre paréntesis, de Andrés Bello, que aparecen en la bibliografía de la cátedra:"
      ],
      table: {
        head: ["Forma", "RAE", "Bello"],
        rows: [
          ["canto", "Presente", "Presente"],
          ["canté", "Pretérito perfecto simple", "Pretérito"],
          ["cantaba", "Pretérito imperfecto", "Copretérito"],
          ["cantaré", "Futuro simple", "Futuro"],
          ["cantaría", "Condicional simple", "Pospretérito"],
          ["he cantado", "Pret. perfecto compuesto", "Antepresente"],
          ["había cantado", "Pret. pluscuamperfecto", "Antecopretérito"],
          ["hube cantado", "Pretérito anterior", "Antepretérito"],
          ["habré cantado", "Futuro compuesto", "Antefuturo"],
          ["habría cantado", "Condicional compuesto", "Antepospretérito"],
          ["cante", "Presente de subjuntivo", "Presente"],
          ["cantara / cantase", "Pret. imperfecto de subjuntivo", "Pretérito"],
          ["cantare", "Futuro de subjuntivo", "Futuro"]
        ]
      },
      src: "RAE, Manual §4.1.3 y §4.9"
    },
    {
      t: "El voseo",
      p: [
        "Es el uso de _vos_ para un solo interlocutor, con sus formas verbales propias. En el Río de la Plata es la forma de confianza general.",
        "Hay **voseo pronominal** (uso de _vos_) y **voseo flexivo** (desinencias propias). Pueden darse juntos (_vos tenés_) o por separado (_tú tenés_, _vos tienes_)."
      ],
      k: [
        "Presente: _cantás, temés, partís_.",
        "Imperativo: acento final y sin _-d_: _cantá, comé, salí, vení, decí_.",
        "Subjuntivo, sobre todo en negativos: _No digás, No llamés_.",
        "Pretérito: _cantaste_. Las formas _*cantastes, *dijistes_ se consideran incorrectas.",
        "_Ir_ no tiene imperativo voseante: se usa _andá_."
      ],
      src: "RAE, Manual §4.3.2"
    },
    {
      t: "Verbos irregulares",
      p: [
        "Son irregulares los que no siguen los modelos _amar, temer, partir_. Los cambios ortográficos regulares (_saco/saque_) no cuentan como irregularidad."
      ],
      k: [
        "**Vocálicas**: _acertar → acierto_ (e/ie), _contar → cuento_ (o/ue), _pedir → pido_ (e/i), _adquirir → adquiero_, _jugar → juego_. _Sentir_ y _dormir_ combinan dos: _siento/sintió, duermo/durmió_.",
        "**Consonánticas**: _agradezco, luzco, conduzco_ (-zc-); _salgo, tengo, vengo_ (-g-); _caigo, traigo_ (-ig-).",
        "**Mixtas**: _hacer → hago_, _decir → digo_, _caber → quepo_, _saber → sepa_.",
        "**Futuro irregular**: _sabré, podré, querré_; con _d_ epentética: _pondré, saldré, tendré, vendré_; reducido: _haré, diré_.",
        "**Pretéritos fuertes** (acento en la raíz): _hice, dije, quise, pude, puse, supe, tuve, anduve, traje, conduje_.",
        "**Supletivos**: varias raíces. _Ir_: _voy, fui, iba_. _Ser_: _soy, fui, era_.",
        "**Defectivos**: conjugación incompleta: _llover, soler, acaecer, balbucir_."
      ],
      src: "RAE, Manual §4.4–4.8"
    },
    {
      t: "Participios irregulares",
      p: [
        "Heredados del latín, llevan el acento en la raíz: _abierto, cubierto, dicho, escrito, hecho, muerto, puesto, roto, visto, vuelto_.",
        "Algunos verbos tienen dos participios. El irregular se prefiere como adjetivo y el regular en los tiempos compuestos, con variación según la zona: _impreso/imprimido, frito/freído, electo/elegido, provisto/proveído, preso/prendido_. En Argentina, Uruguay y Paraguay se usan _inscripto, descripto_."
      ],
      src: "RAE, Manual §4.6.2"
    },
    {
      t: "Formas que la norma recomienda evitar",
      ej: [
        "*_dijistes, cantastes_ → _dijiste, cantaste_",
        "*_márchensen, cállensen_ → _márchense, cállense_",
        "*_pásemos, véngamos_ → _pasemos, vengamos_",
        "*_dijieron, trajieron_ → _dijeron, trajeron_",
        "*_Me apreta el zapato_ → _Me aprieta el zapato_",
        "*_preveemos_ → _prevemos_"
      ],
      src: "RAE, Manual §4.2.3, §4.3.3, §4.4.3, §4.6.1"
    }
  ],
  cards: [
    { f: "Segmentá _cantábamos_", b: "_cant_ (raíz) + _á_ (VT) + _ba_ (TM) + _mos_ (PN)." },
    { f: "¿Qué indica la vocal temática?", b: "La conjugación: _-a-_ 1.ª, _-e-_ 2.ª, _-i-_ 3.ª. No aporta significado." },
    { f: "¿Qué conjugación es productiva?", b: "La 1.ª (_-ar_): reúne cerca del 90 % de los verbos y recibe los nuevos." },
    { f: "Formas del tema de futuro", b: "Futuro (_amaré_), condicional (_amaría_) e infinitivo (_amar_)." },
    { f: "_cantaba_ según Bello", b: "Copretérito." },
    { f: "_cantaría_ según Bello", b: "Pospretérito." },
    { f: "_había cantado_ según Bello", b: "Antecopretérito." },
    { f: "_he cantado_ según Bello", b: "Antepresente." },
    { f: "Imperativo voseante de _salir_, _decir_ y _venir_", b: "_salí, decí, vení_." },
    { f: "Imperativo voseante de _ir_", b: "No tiene forma propia: se usa _andá_." },
    { f: "¿Qué es un pretérito fuerte?", b: "Un pretérito con acento en la raíz en 1.ª y 3.ª del singular: _hice, hizo; pude, pudo_." },
    { f: "Verbo supletivo", b: "Usa raíces distintas en su conjugación: _ir_ (_voy, fui, iba_), _ser_ (_soy, fui, era_)." },
    { f: "Verbo defectivo", b: "Le faltan formas del paradigma: _soler, llover, balbucir_." },
    { f: "Participio irregular de _romper_, _volver_ y _escribir_", b: "_roto, vuelto, escrito_." },
    { f: "¿Cuál es correcta: _trajeron_ o _trajieron_?", b: "_Trajeron_. En los pretéritos de _decir, traer, conducir_ el diptongo se reduce a _-e-_." }
  ],
  quiz: [
    { q: "En _mirabas_, ¿qué segmento es _-ba-_?", o: ["Vocal temática", "Tiempo-modo", "Persona-número", "Raíz"], a: 1, x: "_mir-a-ba-s_: _-ba-_ marca imperfecto de indicativo (TM)." },
    { q: "¿Cómo llama Bello a _cantaría_?", o: ["Copretérito", "Pospretérito", "Antepresente", "Antefuturo"], a: 1, x: "Posterior a un pasado: pos-pretérito." },
    { q: "Imperativo voseante de _comer_:", o: ["comé", "comed", "comés", "comas"], a: 0, x: "Acento final y sin _-d_: _comé_." },
    { q: "¿Qué forma es correcta?", o: ["dijistes", "dijiste", "dijieron", "decí (pretérito)"], a: 1, x: "La 2.ª persona del pretérito no lleva _-s_: _dijiste_." },
    { q: "¿Qué verbo tiene pretérito fuerte?", o: ["cantar", "poner", "vivir", "temer"], a: 1, x: "_puse, puso_: acento en la raíz." },
    { q: "_agradezco_ muestra una irregularidad:", o: ["Vocálica", "Consonántica (epéntesis de /k/)", "Supletiva", "Defectiva"], a: 1, x: "Los verbos en _-ecer_ agregan /k/: _agradezco, agradezcas_." },
    { q: "¿Cuál es un verbo supletivo?", o: ["ir", "pedir", "contar", "lucir"], a: 0, x: "_Ir_ usa tres raíces: _i-_ (iré), _v-_ (voy), _fu-_ (fui)." },
    { q: "Futuro de _salir_:", o: ["saliré", "salré", "saldré", "salgo"], a: 2, x: "Se pierde la VT y se agrega una _d_ epentética: _sal-d-ré_." },
    { q: "¿Qué formas pertenecen al tema de pretérito?", o: ["Presente de subjuntivo", "Futuro y condicional", "Imperfecto de subjuntivo y gerundio", "Imperativo"], a: 2, x: "Tema de pretérito: perfecto simple, imperfecto y futuro de subjuntivo, participio y gerundio." },
    { q: "¿Cuál es la variante recomendada?", o: ["pásemos", "pasemos", "pasémonos", "pásamos"], a: 1, x: "En el presente de subjuntivo el acento pasa a la sílaba siguiente con _-mos_: _pasemos_." }
  ]
});
