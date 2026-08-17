"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Language = "es" | "en" | "fr" | "de";

type Translation = {
  en: string;
  fr: string;
  de: string;
};

const catalog: Record<string, Translation> = {
  "Domos": { en: "Domes", fr: "Dômes", de: "Kuppeln" },
  "Inicio": { en: "Home", fr: "Accueil", de: "Startseite" },
  "Nosotros": { en: "About us", fr: "À propos", de: "Über uns" },
  "Galería": { en: "Gallery", fr: "Galerie", de: "Galerie" },
  "Todas": { en: "All", fr: "Toutes", de: "Alle" },
  "Naturaleza y entorno": { en: "Nature and surroundings", fr: "Nature et environs", de: "Natur und Umgebung" },
  "Domo 1": { en: "Dome 1", fr: "Dôme 1", de: "Kuppel 1" },
  "Domo 2": { en: "Dome 2", fr: "Dôme 2", de: "Kuppel 2" },
  "Todas nuestras imágenes en un solo lugar": { en: "All our images in one place", fr: "Toutes nos images en un seul endroit", de: "Alle unsere Bilder an einem Ort" },
  "Explora los domos, sus espacios y la naturaleza que forma parte de cada estadía en Macas Moon.": { en: "Explore the domes, their spaces, and the nature that is part of every stay at Macas Moon.", fr: "Découvrez les dômes, leurs espaces et la nature qui accompagne chaque séjour à Macas Moon.", de: "Entdecken Sie die Kuppeln, ihre Räume und die Natur, die jeden Aufenthalt bei Macas Moon begleitet." },
  "Abrir foto": { en: "Open photo", fr: "Ouvrir la photo", de: "Foto öffnen" },
  "Foto anterior": { en: "Previous photo", fr: "Photo précédente", de: "Vorheriges Foto" },
  "Foto siguiente": { en: "Next photo", fr: "Photo suivante", de: "Nächstes Foto" },
  "Foto {current} de {total}": { en: "Photo {current} of {total}", fr: "Photo {current} sur {total}", de: "Foto {current} von {total}" },
  "FAQ": { en: "FAQ", fr: "FAQ", de: "FAQ" },
  "Preguntas frecuentes": { en: "Frequently asked questions", fr: "Questions fréquentes", de: "Häufig gestellte Fragen" },
  "¿Qué tan lejos estamos de Monteverde?": { en: "How far are we from Monteverde?", fr: "À quelle distance sommes-nous de Monteverde ?", de: "Wie weit sind wir von Monteverde entfernt?" },
  "Nos encontramos a 10 minutos en auto del centro.": { en: "We are a 10-minute drive from downtown.", fr: "Nous sommes à 10 minutes en voiture du centre-ville.", de: "Wir sind 10 Autominuten vom Zentrum entfernt." },
  "¿Ofrecen servicios de comida?": { en: "Do you offer food service?", fr: "Proposez-vous un service de restauration ?", de: "Bieten Sie Verpflegung an?" },
  "No, pero Monteverde ofrece múltiples restaurantes de calidad para su comodidad.": { en: "No, but Monteverde offers many quality restaurants for your convenience.", fr: "Non, mais Monteverde compte de nombreux restaurants de qualité pour votre confort.", de: "Nein, aber in Monteverde gibt es zu Ihrer Bequemlichkeit zahlreiche gute Restaurants." },
  "Un rincón creado para compartir Monteverde": { en: "A special place created to share Monteverde", fr: "Un lieu unique créé pour partager Monteverde", de: "Ein besonderer Ort, um Monteverde zu teilen" },
  "Somos los anfitriones detrás de Macas Moon Glamping. Este proyecto nació de nuestro deseo de compartir la tranquilidad de Monteverde y ofrecer un lugar donde cada huésped pueda sentirse bienvenido, descansar y reconectar con la naturaleza.": { en: "We are the hosts behind Macas Moon Glamping. This project grew from our desire to share the tranquility of Monteverde and offer a place where every guest can feel welcome, rest, and reconnect with nature.", fr: "Nous sommes les hôtes de Macas Moon Glamping. Ce projet est né de notre envie de partager la tranquillité de Monteverde et d’offrir un lieu où chaque voyageur peut se sentir bienvenu, se reposer et renouer avec la nature.", de: "Wir sind die Gastgeber hinter Macas Moon Glamping. Dieses Projekt entstand aus unserem Wunsch, die Ruhe Monteverdes zu teilen und einen Ort zu schaffen, an dem sich jeder Gast willkommen fühlt, erholen und wieder mit der Natur verbinden kann." },
  "Nuestra Misión": { en: "Our Mission", fr: "Notre mission", de: "Unsere Mission" },
  "Brindar a nuestros huéspedes una experiencia única de descanso y conexión con la naturaleza, ofreciendo un espacio acogedor, privado y confortable en el entorno de Monteverde.": { en: "To offer our guests a unique experience of rest and connection with nature in a welcoming, private, and comfortable space in Monteverde.", fr: "Offrir à nos hôtes une expérience unique de repos et de connexion avec la nature, dans un espace accueillant, privé et confortable au cœur de Monteverde.", de: "Unseren Gästen ein einzigartiges Erlebnis der Erholung und Naturverbundenheit in einem einladenden, privaten und komfortablen Raum in Monteverde zu bieten." },
  "En Macas Moon Glamping buscamos que cada estadía se convierta en un momento especial, combinando tranquilidad, naturaleza y atención a los detalles para crear recuerdos inolvidables.": { en: "At Macas Moon Glamping, we strive to make every stay a special moment, combining tranquility, nature, and attention to detail to create unforgettable memories.", fr: "Chez Macas Moon Glamping, nous souhaitons faire de chaque séjour un moment privilégié, en associant tranquillité, nature et souci du détail pour créer des souvenirs inoubliables.", de: "Bei Macas Moon Glamping möchten wir jeden Aufenthalt zu einem besonderen Moment machen, indem wir Ruhe, Natur und Liebe zum Detail verbinden, um unvergessliche Erinnerungen zu schaffen." },
  "Domo 1 · Amplio": { en: "Dome 1 · Spacious", fr: "Dôme 1 · Spacieux", de: "Kuppel 1 · Geräumig" },
  "Domo 2 · Romántico": { en: "Dome 2 · Romantic", fr: "Dôme 2 · Romantique", de: "Kuppel 2 · Romantisch" },
  "Hasta {count} huéspedes": { en: "Up to {count} guests", fr: "Jusqu’à {count} voyageurs", de: "Bis zu {count} Gäste" },
  "Comparar ambos domos": { en: "Compare both domes", fr: "Comparer les deux dômes", de: "Beide Kuppeln vergleichen" },
  "Experiencias": { en: "Experiences", fr: "Expériences", de: "Erlebnisse" },
  "Descubre Monteverde": { en: "Discover Monteverde", fr: "Découvrez Monteverde", de: "Monteverde entdecken" },
  "Todas las experiencias": { en: "All experiences", fr: "Toutes les expériences", de: "Alle Erlebnisse" },
  "Reseñas": { en: "Reviews", fr: "Avis", de: "Bewertungen" },
  "Ubicación": { en: "Location", fr: "Localisation", de: "Lage" },
  "Reservar": { en: "Book", fr: "Réserver", de: "Buchen" },
  "Reserva ahora": { en: "Book now", fr: "Réserver maintenant", de: "Jetzt buchen" },
  "Elegir domo": { en: "Choose a dome", fr: "Choisir un dôme", de: "Kuppel wählen" },
  "Seleccionar idioma": { en: "Select language", fr: "Choisir la langue", de: "Sprache wählen" },
  "Español": { en: "Spanish", fr: "Espagnol", de: "Spanisch" },
  "Inglés": { en: "English", fr: "Anglais", de: "Englisch" },
  "Francés": { en: "French", fr: "Français", de: "Französisch" },
  "Alemán": { en: "German", fr: "Allemand", de: "Deutsch" },
  "Saltar al contenido": { en: "Skip to content", fr: "Aller au contenu", de: "Zum Inhalt springen" },
  "Abrir menú": { en: "Open menu", fr: "Ouvrir le menu", de: "Menü öffnen" },
  "Cerrar menú": { en: "Close menu", fr: "Fermer le menu", de: "Menü schließen" },
  "Descansa entre las montañas de Monteverde": { en: "Rest among the mountains of Monteverde", fr: "Reposez-vous au cœur des montagnes de Monteverde", de: "Erholen Sie sich in den Bergen von Monteverde" },
  "Una experiencia entre naturaleza, tranquilidad y comodidad.": { en: "An experience of nature, tranquility, and comfort.", fr: "Une expérience entre nature, tranquillité et confort.", de: "Ein Erlebnis aus Natur, Ruhe und Komfort." },
  "Descubrir los domos": { en: "Discover the domes", fr: "Découvrir les dômes", de: "Die Kuppeln entdecken" },
  "Explorar": { en: "Explore", fr: "Explorer", de: "Entdecken" },
  "Una forma diferente de vivir Monteverde": { en: "A different way to experience Monteverde", fr: "Une autre façon de vivre Monteverde", de: "Monteverde auf eine andere Art erleben" },
  "Dos domos en medio del bosque, pensados para bajar el ritmo, mirar las nubes y quedarse un rato en silencio.": { en: "Two domes in the forest, designed to slow down, watch the clouds, and enjoy the silence.", fr: "Deux dômes au cœur de la forêt, conçus pour ralentir, regarder les nuages et profiter du silence.", de: "Zwei Kuppeln mitten im Wald, um zur Ruhe zu kommen, die Wolken zu beobachten und die Stille zu genießen." },
  "Naturaleza": { en: "Nature", fr: "Nature", de: "Natur" },
  "Rodeado de bosque, aire fresco y tranquilidad.": { en: "Surrounded by forest, fresh air, and tranquility.", fr: "Entouré de forêt, d’air frais et de tranquillité.", de: "Umgeben von Wald, frischer Luft und Ruhe." },
  "Desconexión": { en: "Unwind", fr: "Déconnexion", de: "Auszeit" },
  "Un espacio creado para desconectar del ritmo cotidiano.": { en: "A space created to disconnect from everyday life.", fr: "Un espace conçu pour déconnecter du rythme quotidien.", de: "Ein Ort, um dem Alltag zu entfliehen." },
  "Vive uno de los destinos naturales más especiales de Costa Rica.": { en: "Experience one of Costa Rica’s most remarkable natural destinations.", fr: "Découvrez l’une des destinations naturelles les plus remarquables du Costa Rica.", de: "Erleben Sie eines der außergewöhnlichsten Naturziele Costa Ricas." },
  "Encuentra tu espacio": { en: "Find your space", fr: "Trouvez votre espace", de: "Finden Sie Ihren Ort" },
  "Dos formas de vivir Monteverde.": { en: "Two ways to experience Monteverde.", fr: "Deux façons de vivre Monteverde.", de: "Zwei Arten, Monteverde zu erleben." },
  "Descubrir este domo": { en: "Discover this dome", fr: "Découvrir ce dôme", de: "Diese Kuppel entdecken" },
  "Cerca de Macas Moon": { en: "Near Macas Moon", fr: "Près de Macas Moon", de: "In der Nähe von Macas Moon" },
  "Naturaleza, café y aventura a pocos minutos de los domos.": { en: "Nature, coffee, and adventure just minutes from the domes.", fr: "Nature, café et aventure à quelques minutes des dômes.", de: "Natur, Kaffee und Abenteuer nur wenige Minuten von den Kuppeln entfernt." },
  "Ver todas las experiencias": { en: "View all experiences", fr: "Voir toutes les expériences", de: "Alle Erlebnisse ansehen" },
  "Tours y lugares": { en: "Tours and places", fr: "Excursions et lieux", de: "Touren und Orte" },
  "Experiencias en Monteverde": { en: "Experiences in Monteverde", fr: "Expériences à Monteverde", de: "Erlebnisse in Monteverde" },
  "Ideas para explorar el bosque nuboso, descubrir sabores locales y disfrutar la montaña durante tu estadía.": { en: "Ideas for exploring the cloud forest, discovering local flavors, and enjoying the mountains during your stay.", fr: "Des idées pour explorer la forêt nuageuse, découvrir les saveurs locales et profiter de la montagne pendant votre séjour.", de: "Ideen, um den Nebelwald zu erkunden, lokale Aromen zu entdecken und die Berge während Ihres Aufenthalts zu genießen." },
  "Ver ubicación": { en: "View location", fr: "Voir l’emplacement", de: "Standort ansehen" },
  "Visitar sitio oficial": { en: "Visit official website", fr: "Visiter le site officiel", de: "Offizielle Website besuchen" },
  "Experiencias de nuestros huéspedes": { en: "Guest experiences", fr: "Expériences de nos hôtes", de: "Erfahrungen unserer Gäste" },
  "Palabras de quienes ya se quedaron, publicadas en Google Maps.": { en: "Words from previous guests, published on Google Maps.", fr: "Les mots de nos anciens hôtes, publiés sur Google Maps.", de: "Stimmen früherer Gäste, veröffentlicht auf Google Maps." },
  "Reseña anterior": { en: "Previous review", fr: "Avis précédent", de: "Vorherige Bewertung" },
  "Siguiente reseña": { en: "Next review", fr: "Avis suivant", de: "Nächste Bewertung" },
  "Estamos en Monteverde": { en: "We are in Monteverde", fr: "Nous sommes à Monteverde", de: "Wir sind in Monteverde" },
  "Cómo llegar": { en: "Get directions", fr: "Itinéraire", de: "Anfahrt" },
  "Antes de tu estadía": { en: "Before your stay", fr: "Avant votre séjour", de: "Vor Ihrem Aufenthalt" },
  "Llegada": { en: "Arrival", fr: "Arrivée", de: "Ankunft" },
  "Desde las 3:00 p. m.": { en: "From 3:00 p.m.", fr: "À partir de 15 h", de: "Ab 15:00 Uhr" },
  "Hasta las 11:00 a. m.": { en: "Until 11:00 a.m.", fr: "Jusqu’à 11 h", de: "Bis 11:00 Uhr" },
  "Check-in autónomo": { en: "Self check-in", fr: "Arrivée autonome", de: "Selbstständiger Check-in" },
  "Ver reglas del alojamiento": { en: "View house rules", fr: "Voir le règlement", de: "Hausregeln ansehen" },
  "Reglas del alojamiento": { en: "House rules", fr: "Règlement du logement", de: "Hausregeln" },
  "Tu próxima escapada empieza aquí.": { en: "Your next getaway starts here.", fr: "Votre prochaine escapade commence ici.", de: "Ihr nächster Kurzurlaub beginnt hier." },
  "Elige el espacio que mejor se siente y empieza a imaginar Monteverde desde el bosque.": { en: "Choose the space that feels right and start imagining Monteverde from the forest.", fr: "Choisissez l’espace qui vous convient et imaginez Monteverde depuis la forêt.", de: "Wählen Sie den passenden Ort und stellen Sie sich Monteverde mitten im Wald vor." },
  "Una estadía entre las montañas de Monteverde.": { en: "A stay in the mountains of Monteverde.", fr: "Un séjour dans les montagnes de Monteverde.", de: "Ein Aufenthalt in den Bergen von Monteverde." },
  "Explora": { en: "Explore", fr: "Explorer", de: "Entdecken" },
  "Contacto": { en: "Contact", fr: "Contact", de: "Kontakt" },
  "Domo 2 · Escapada para dos": { en: "Dome 2 · Getaway for two", fr: "Dôme 2 · Escapade à deux", de: "Kuppel 2 · Auszeit zu zweit" },
  "Domo 1 · Más espacio para compartir": { en: "Dome 1 · More room to share", fr: "Dôme 1 · Plus d’espace à partager", de: "Kuppel 1 · Mehr Platz zum Teilen" },
  "ESCAPADA PARA DOS": { en: "GETAWAY FOR TWO", fr: "ESCAPADE À DEUX", de: "AUSZEIT ZU ZWEIT" },
  "MÁS ESPACIO PARA COMPARTIR": { en: "MORE ROOM TO SHARE", fr: "PLUS D’ESPACE À PARTAGER", de: "MEHR PLATZ ZUM TEILEN" },
  "Macas Moon Domo 2 · Romántico": { en: "Macas Moon Dome 2 · Romantic", fr: "Macas Moon Dôme 2 · Romantique", de: "Macas Moon Kuppel 2 · Romantisch" },
  "Macas Moon Domo 1 · Amplio": { en: "Macas Moon Dome 1 · Spacious", fr: "Macas Moon Dôme 1 · Spacieux", de: "Macas Moon Kuppel 1 · Geräumig" },
  "Una escapada para dos": { en: "A getaway for two", fr: "Une escapade à deux", de: "Eine Auszeit zu zweit" },
  "Un espacio para compartir": { en: "A space to share", fr: "Un espace à partager", de: "Ein Ort zum Teilen" },
  "Privacidad, naturaleza y noches bajo las estrellas de Monteverde.": { en: "Privacy, nature, and nights under the stars of Monteverde.", fr: "Intimité, nature et nuits sous les étoiles de Monteverde.", de: "Privatsphäre, Natur und Nächte unter dem Sternenhimmel von Monteverde." },
  "Más espacio, más comodidad y Monteverde alrededor.": { en: "More space, more comfort, and Monteverde all around.", fr: "Plus d’espace, plus de confort et Monteverde tout autour.", de: "Mehr Platz, mehr Komfort und Monteverde ringsum." },
  "Reservar este domo": { en: "Book this dome", fr: "Réserver ce dôme", de: "Diese Kuppel buchen" },
  "Huéspedes": { en: "Guests", fr: "Voyageurs", de: "Gäste" },
  "Cama": { en: "Bed", fr: "Lit", de: "Bett" },
  "Camas": { en: "Beds", fr: "Lits", de: "Betten" },
  "Baño": { en: "Bathroom", fr: "Salle de bain", de: "Badezimmer" },
  "Jacuzzi": { en: "Hot tub", fr: "Jacuzzi", de: "Whirlpool" },
  "Cocina": { en: "Kitchen", fr: "Cuisine", de: "Küche" },
  "Terraza": { en: "Terrace", fr: "Terrasse", de: "Terrasse" },
  "Habitación": { en: "Bedroom", fr: "Chambre", de: "Schlafzimmer" },
  "Exterior": { en: "Exterior", fr: "Extérieur", de: "Außenbereich" },
  "Vistas": { en: "Views", fr: "Vues", de: "Aussichten" },
  "Interior": { en: "Interior", fr: "Intérieur", de: "Innenbereich" },
  "Ver todas las fotos": { en: "View all photos", fr: "Voir toutes les photos", de: "Alle Fotos ansehen" },
  "Conoce cada espacio": { en: "Discover every space", fr: "Découvrez chaque espace", de: "Entdecken Sie jeden Bereich" },
  "Entre las montañas de Monteverde": { en: "Among the mountains of Monteverde", fr: "Au cœur des montagnes de Monteverde", de: "In den Bergen von Monteverde" },
  "Los domos están en un entorno de bosque y montaña, a pocos minutos de Santa Elena y de los senderos que hacen único a este destino.": { en: "The domes are surrounded by forest and mountains, just minutes from Santa Elena and the trails that make this destination unique.", fr: "Les dômes sont entourés de forêt et de montagnes, à quelques minutes de Santa Elena et des sentiers qui rendent cette destination unique.", de: "Die Kuppeln liegen zwischen Wald und Bergen, nur wenige Minuten von Santa Elena und den einzigartigen Wanderwegen der Region entfernt." },
  "Amenidades": { en: "Amenities", fr: "Équipements", de: "Ausstattung" },
  "Solicita tu reserva": { en: "Request your booking", fr: "Demandez votre réservation", de: "Buchung anfragen" },
  "Cuéntanos las fechas y el espacio que te gustaría. Revisamos disponibilidad y te escribimos para continuar.": { en: "Tell us your dates and preferred dome. We will check availability and contact you to continue.", fr: "Indiquez-nous vos dates et le dôme souhaité. Nous vérifierons les disponibilités et vous contacterons.", de: "Teilen Sie uns Ihre Reisedaten und Ihre bevorzugte Kuppel mit. Wir prüfen die Verfügbarkeit und melden uns bei Ihnen." },
  "Estás solicitando:": { en: "You are requesting:", fr: "Vous demandez :", de: "Ihre Anfrage:" },
  "Domo seleccionado": { en: "Selected dome", fr: "Dôme sélectionné", de: "Ausgewählte Kuppel" },
  "Elige un domo": { en: "Choose a dome", fr: "Choisissez un dôme", de: "Kuppel auswählen" },
  "Fecha de llegada": { en: "Check-in date", fr: "Date d’arrivée", de: "Anreisedatum" },
  "Fecha de salida": { en: "Check-out date", fr: "Date de départ", de: "Abreisedatum" },
  "Máximo {count} en este domo.": { en: "Maximum {count} in this dome.", fr: "Maximum {count} dans ce dôme.", de: "Maximal {count} in dieser Kuppel." },
  "Nombre completo": { en: "Full name", fr: "Nom complet", de: "Vollständiger Name" },
  "Correo electrónico": { en: "Email address", fr: "Adresse e-mail", de: "E-Mail-Adresse" },
  "Teléfono": { en: "Phone", fr: "Téléphone", de: "Telefon" },
  "Mensaje adicional": { en: "Additional message", fr: "Message supplémentaire", de: "Zusätzliche Nachricht" },
  "Esta solicitud no confirma automáticamente tu reserva. Nos pondremos en contacto contigo para verificar disponibilidad y continuar con el proceso.": { en: "This request does not automatically confirm your booking. We will contact you to verify availability and continue the process.", fr: "Cette demande ne confirme pas automatiquement votre réservation. Nous vous contacterons pour vérifier les disponibilités et poursuivre le processus.", de: "Diese Anfrage bestätigt Ihre Buchung nicht automatisch. Wir kontaktieren Sie, um die Verfügbarkeit zu prüfen und den Vorgang fortzusetzen." },
  "Enviar solicitud por WhatsApp": { en: "Send request via WhatsApp", fr: "Envoyer la demande par WhatsApp", de: "Anfrage per WhatsApp senden" },
  "Continúa tu solicitud en WhatsApp.": { en: "Continue your request in WhatsApp.", fr: "Poursuivez votre demande sur WhatsApp.", de: "Setzen Sie Ihre Anfrage in WhatsApp fort." },
  "Abrimos una conversación con los datos que completaste. Revisa el mensaje y presiona enviar para solicitar disponibilidad.": { en: "We opened a chat with the details you entered. Review the message and press send to request availability.", fr: "Nous avons ouvert une conversation avec les informations saisies. Vérifiez le message et envoyez-le pour demander les disponibilités.", de: "Wir haben einen Chat mit Ihren Angaben geöffnet. Prüfen Sie die Nachricht und senden Sie sie, um die Verfügbarkeit anzufragen." },
  "Abrir WhatsApp nuevamente": { en: "Open WhatsApp again", fr: "Rouvrir WhatsApp", de: "WhatsApp erneut öffnen" },
};

export const languageOptions: Array<{ code: Language; label: string; short: string }> = [
  { code: "es", label: "Español", short: "ES" },
  { code: "en", label: "Inglés", short: "EN" },
  { code: "fr", label: "Francés", short: "FR" },
  { code: "de", label: "Alemán", short: "DE" },
];

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: string, values?: Record<string, string | number>) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    const saved = window.localStorage.getItem("macas-moon-language");
    if (saved === "es" || saved === "en" || saved === "fr" || saved === "de") {
      // Restoring browser-only persisted state after hydration is intentional.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("macas-moon-language", nextLanguage);
  }, []);

  const t = useCallback(
    (text: string, values?: Record<string, string | number>) => {
      const translated = language === "es" ? text : (catalog[text]?.[language] ?? text);
      if (!values) return translated;
      return Object.entries(values).reduce(
        (result, [key, value]) => result.replaceAll(`{${key}}`, String(value)),
        translated,
      );
    },
    [language],
  );

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

export function TranslatedText({
  children,
  values,
}: {
  children: string;
  values?: Record<string, string | number>;
}) {
  const { t } = useLanguage();
  return <>{t(children, values)}</>;
}
