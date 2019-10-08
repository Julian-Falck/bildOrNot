var bayes = require('bayes')

var classifier = bayes()

//positive Phrases
classifier.learn('Schauspielerin Bella Thorne (22) ist frisch verliebt!', 'BILD)
classifier.learn('Wer das Mädchen ist, interessierte vorerst aber niemanden. ', 'BILD')
classifier.learn('Viel mehr wollten ihre Follower wissen, warum die beiden überhaupt angezogen ins Bett gingen.', 'BILD')
classifier.learn('Mittlerweile ist auch klar, wer die Unbekannte ist, die sich mit Schuhen in die Laken legte', 'BILD')
classifier.learn('Schon lange ist bekannt, dass die Amerikanerin bisexuell ist, Sie erklärte immer wieder öffentlich, dass sie sowohl Männer als auch Frauen liebe.', 'BILD')
classifier.learn('Doch im Juli korrigierte sie dann plötzlich die Definition und stellte klar, dass es nicht mehr ganz auf sie zutreffe.', 'BILD')
classifier.learn('„Ich bin eigentlich pansexuell und habe das bislang gar nicht gewusst“, erklärte Thorne in einem Interview in der Show „Good Morning America“ des US-Senders NBC', 'BILD')
classifier.learn('Was das bedeutet? Thorne: „Du magst eben, was du magst.“', 'BILD')
classifier.learn('Der feine Unterschied: Während für Bisexuelle sowohl Männer als auch Frauen infrage kommen, ist das Geschlecht für Pansexuelle generell kein Auswahlkriterium.', 'BILD')
classifier.learn('Bella selbst formulierte das so: „Es geht buchstäblich darum, die Persönlichkeit zu mögen. Du magst einfach ein Individuum.“', 'BILD')
classifier.learn('Briten-Regierung sieht Brexit-Gespräche vor dem Kollaps', 'BILD')
classifier.learn('London sticht Details zu Johnson-Merkel-Streit-Telefonat durch, um Kanzlerin die Schuld an einem Scheitern der Verhandlungen zuzuschieben ', 'BILD')
classifier.learn('Das ist passiert: Briten-Premier Boris Johnson (55) telefonierte am Morgen mit Bundeskanzlerin Angela Merkel (65, CDU). ', 'BILD')
classifier.learn('Die soll ihm dabei klargemacht haben: In der Frage der Grenze zwischen Irland und Nordirland müsse er kompromissbereit sein, sonst sei ein Brexit-Abkommen „erdrückend unwahrscheinlich“.', 'BILD')
classifier.learn('Merkel habe gefordert, dass Nordirland „für immer“ in der Zollunion bleibe.', 'BILD')
classifier.learn('Johnson habe darauf geantwortet: Ein Deal sei damit „im Wesentlichen unmöglich“, und zwar „nicht nur jetzt, sondern immer“.', 'BILD')
classifier.learn('Überhaupt passe dieser Stil nicht zu Merkel – ganz im Gegensatz zu Boris Johnson, der schon als EU-Korrespondent für den „Telegraph“ so manche EU-Geschichte verfälscht hatte.', 'BILD')
classifier.learn('Jetzt bekommt er seine Chance - und steht enorm unter Druck. Auch wenn er das anders sieht. ', 'BILD')
classifier.learn('Und weiter: „Ich hoffe, dass wir als Team ein gutes Spiel machen. Das wird ein fantastisches Spiel, ich freue mich darauf.“, 'BILD')
classifier.learn('Dazu sagt der Barca-Keeper: Ich mache mir da nicht viele Gedanken drüber. Ich habe mich die letzten Wochen auf den Fußball konzentriert. Jeder möchte spielen, so ist es auf jeder Position, nicht nur im Tor., 'BILD')
classifier.learn('Zeugen hörten Täter „Allah“ sagen', 'BILD')
classifier.learn('Limburg in Aufruhr! Warum hat ein Mann offenbar gezielt versucht, mit einem Lkw andere Verkehrsteilnehmer zu rammen und ihnen Schaden zuzufügen?', 'BILD')
classifier.learn('Neun Menschen sind verletzt worden, als am Montag um 17.20 Uhr ein Mann in einem gestohlenen Laster offenbar absichtlich in sieben Autos crashte. ', 'BILD')
classifier.learn('Sein Blick habe gewirkt, als stünde er unter Drogeneinfluss.', 'BILD')
classifier.learn(' Sie soll versucht haben, dem Unfallverursacher zu helfen. Ihrer Ansicht nach sprach der Mann Arabisch.', 'BILD')
classifier.learn(' Weil er versucht haben soll, sie anzugreifen, und angeblich von „Allah“ sprach, hielten mehrere Menschen den mutmaßlichen Täter fest.', 'BILD')
classifier.learn('Eine Frau, die in einem Büro direkt an der Unfallstelle arbeitete, rannte nach draußen. Sie habe den Mann angesprochen, berichtete sie: „Er hat gesagt: ‚Mir tut alles weh.‘ Ich habe gefragt, wie er heißt. ', 'BILD')
classifier.learn('Er sagte mir, er heiße Mohammed.', 'BILD')
classifier.learn('SEK stürmt Wohnung in Langen', 'BILD')
classifier.learn('Unter ihnen der Fahrer, er wurde festgenommen! ', 'BILD')
classifier.learn('Der Täter ist syrischer Staatsbürger.', 'BILD')
classifier.learn('', 'BILD')
classifier.learn('', 'BILD')
classifier.learn('', 'BILD')
classifier.learn('', 'BILD')
classifier.learn('', 'BILD')
classifier.learn('', 'BILD')
classifier.learn('', 'BILD')
classifier.learn('', 'BILD')
classifier.learn('', 'BILD')
classifier.learn('', 'BILD')


//negative Phrases
classifier.learn('terrible, shitty thing. Damn. Sucks!!', 'negative')

//Phrase to analyze
var category = classifier.categorize('Syrischer Minister verlässt EU');
console.log(category);


// serialize the classifier's state as a JSON string.
var stateJson = classifier.toJson()

// load the classifier back from its JSON representation.
var revivedClassifier = bayes.fromJson(stateJson)