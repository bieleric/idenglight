import { createI18n } from 'vue-i18n'

const messages = {
  de: {
    home: {
      welcome_to: "Willkommen bei",
      lets_go: "Los geht's"
    },
    
    focus: {
        title: "Ich bin...",
        user_title: "Anwender",
        developer_title: "Entwickler"
    },
    steps: {
        general: {
            "description": "Erklärung",
            "scheme": "Schema"
        },
        user: {
            introduction: {
                title: "Einführung",
                paragraph1: "IDEnlight ist eine Anwendung, welches Ihnen das Konzept von selbstbestimmten digitalen Identitäten näher bringt.",
                paragraph2: "Dazu müssen wir zuerst festhalten: Was ist überhaupt eine digitale Identität und was bedeutet selbstbestimmt?",
                paragraph3: "Unsere digitale Identität bildet sich typischerweise aus unzähligen Accounts von Goolge, Facebook, Twitter und so weiter - das heißt aus Daten, die unsere Eigenschaften und Merkmale enthalten (Name, Herkunft, Familie, ...). Das Problem dabei ist, dass wir die Kontrolle über unsere Daten mit der Nutzung jener Services und Plattformen abgeben.",
                paragraph4: "Im realen Leben wird unsere Identität dagegen nicht durch Nutzeraccounts geformt, sondern durch Nachweise, die Sie selbst besitzen und bei denen Sie selbst entscheiden können, mit wem sie diese Daten teilen (Personalausweis, Führerschein, Zeugnis, ...). Diese können wir allerdings nicht im Internet nutzen - höchtens durch aufwändige Videoidentifikationen oder Ähnlichem.",
                paragraph5: "Selbstbestimmte digitale Identitäten lösen beide Probleme. Um dies zu verstehen, werden Sie im Folgenden beispielhaft ein Szenario durchgehen und dabei 3 verschiedene Rollen einnehmen: die HTW Dresden, einen Absolventen der HTW Dresden und einen Arbeitgeber."
            },
            verifiable_credential: {
                title: "Digitaler Nachweis",
                paragraph1: "Ein digitaler Nachweis ist ein Dokument, wie beispielsweise ein Personalausweis, jedoch digital und überprüfbar.",
                paragraph2: "Genau wie bei einem analogen Ausweis sind bei einem digitalen Nachweis Sicherheitsmechanismen vorgesehen, um ihn fälschungssicher zu machen und den Herausgeber zu identifizieren.",
                paragraph3: "In unserem Szenario werden wir ein Abschlusszeugnis betrachten und dieses:",
                actions: {
                    issue: "Ausstellen",
                    store: "Speichern",
                    present: "Vorzeigen",
                    proof: "Überprüfen"
                }
            },
            wallet: {
                title: "Digitale Wallet",
                paragraph1: "Um nun digitale Nachweise speichern zu können, benötigen wir eine digitale Wallet.",
                paragraph2: "Sie können sich das wie ein normales Portmonnaie vorstellen, in welchem Ihre Nachweise enthalten sind. Der Unterschied ist nur, dass sie diese nun digital auf ihrem Smartphone haben.",
                paragraph3: "Diese Anwendung unterstützt folgende digitale Wallets:",
                
            },
        }
    },
    navigation: {
        user: {
            step1: "Einführung",
            step2: "Digitaler Nachweis",
            step3: "Digitale Wallet",
            step4: "Kontakt herstellen",
            step5: "Nachweis ausstellen",
            step6: "Nachweis vorzeigen",
            step7: "Nachweis überprüfen",
            step8: "Zusammenfassung"
        }
    }
  },
  en: {
  }
}

export default createI18n({
  locale: 'de',
  fallbackLocale: 'en',
  legacy: false,
  messages
})