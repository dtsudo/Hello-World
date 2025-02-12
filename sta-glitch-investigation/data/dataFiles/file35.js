if (!window.files) window.files = {}; 
window.files['lang/pl.json'] = ` 
{
	"main-menu" : {
		"new" : "Nowa gra",
		"load" : "Wczytaj grę",
		"contrib-levels" : "Dodatkowe poziomy",
		"options" : "Opcje",
		"quit" : "Wyjdź z gry"
	},

	"contrib-menu" : {
		"empty" : "[Brak dodatkowych poziomów]"
	},

	"options-menu" : {
		"difficulty" : "Poziom trudności",
		"language" : "Język",
		"keyboard" : "Zmień sterowanie klawiaturą",
		"joystick" : "Zmień sterowanie kontrolerem",
		"speedrun" : "Licznik do speedrunowania"
	},
	
	"timers-menu" : {
		"speedrun-timer-level" : "Licznik speedrunowania poziomu",
		"speedrun-timer-global" : "Globalny licznik speedrunowania"
	},

	"controls-menu" : {
		"press-key-for" : "Naciśnij klawisz dla",
		"press-button-for" : "Naciśnij przycisk dla",
		"up" : "góra",
		"down" : "dół",
		"left" : "lewo",
		"right" : "prawo",
		"jump" : "skok",
		"shoot" : "strzelanie",
		"run" : "bieganie",
		"sneak" : "skradanie",
		"pause" : "pauza",
		"item-swap" : "zmiana przedmiotu",
		"menu-accept" : "akceptowanie w menu"
	},
	
	"menu-commons" : {
		"yes" : "Tak",
		"no" : "Nie",
		"back" : "Powrót",
		"cancel" : "Anuluj",
		"on" : "Wł",
		"off" : "Wył"
	},

	"bool" : {
		"on" : "Wł",
		"off" : "Wył"
	},

	"difficulty-levels" : {
		"easy" : "Łatwy",
		"normal" : "Normalny",
		"hard" : "Trudny",
		"super" : "Super Tux"
	},

	"pause-menu" : {
		"continue" : "Kontynuuj",
		"character" : "Zmień postać",
		"restart" : "Zrestartuj poziom",
		"quit-game" : "Wyjdź z gry",
		"quit-level" : "Opuść poziom",
		"save" : "Zapisz grę"
	},

	"info" : {
		"welcome" :
		"Witaj w grze SuperTux Advance! Ta wiadomość zniknie kiedy oddalisz się od tego bloku. Naciśnij F1 jeżeli chcesz zobaczyć informacje od Kelvin Shadewing.",
		"tutWall" :
		"Przytrzymaj SKOK i odepchnij się od ściany aby wykonać skok od ściany",
		"tutSlide" :
		"Naciśnij DÓŁ podczas biegania aby się ślizgać",
		"waterjump" :
		"Przytrzymaj SKOK podczas wychodzenia z wody aby wyskoczyć wyżej",
 		"noend" :
 		"Poziomy, których nie musisz ukończyć aby przejść dalej nie mają normalnych wyjść. Naciśnij ESCAPE aby opuścić strefy takie jak ta.",
 		"hills" :
 		"Wzgórza są bardzo ważne! Ćwicz ślizganie się kiedy jest tylko szansa na to.",
 		"pipes" :
 		"Możesz wejść do rur po prostu wpadając do nich. Możesz też przytrzymać DÓŁ aby wlecieć w nie.",
 		"controls" :
 		"Nie zapomnij aby ustawić sterowanie w opcjach w menu głównym! Jeżeli naprawdę coś popsujesz ustawiając sterowanie, usuń plik config.json.",
 		"secrets" :
		"Sekretne przejścia są wszędzie! Oprzyj się o ścianę aby je odsłonić lub oglądaj w jaki sposób poruszają się przeciwnicy.",
		"coyotetime" :
		"Masz krótki moment po opuszczeniu podłoża kiedy możesz jeszcze skoczyć. Trenuj zbieganie z krawędzi i skakanie od razu po tym jak twoje stopy opuszczą podłoże.",
		"tntex" :
		"Bloki TNT wybuchają chwile po dotknięciu ich.",
		"chainex" :
		"Bloki TNT także wybuchają od innego wybuchu, skutkuje to czymś w rodzaju wybuchu łańcuchowego kiedy wiele bloków TNT jest blisko siebie.",
		"fireex" :
		"Kule ognia mogą podpalić bloki TNT, zdobądź ognisty kwiat i wypróbuj to!",
		"owplats" :
		"Możesz zeskoczyć z jednokierunkowych platform naciskając DÓŁ i SKOK w tym samym czasie. Jeżeli zeskoczysz przez przypadek masz dwa razy więcej czasu niż przy spadnięciu z krawędzi, aby wskoczyć z powrotem.",
		"slidewarn" :
		"Poziomy takie jak ten zmuszą cię do ślizgania się! (Zostanie to zamienione czymś innym w przyszłości.)"
	},

	"devcom" : {
		"welcome" :
		"KELVIN: Jeżeli to widzisz, aktywowałeś tryb komentarzy deweloperskich. Dotknij czerwonych szalików aby przeczytać notatki o rozwoju gry.",
		"hiff-0" :
		"KELVIN: Jedna z wielu rzeczy, która mnie wkurzyła było zrobienie tak żeby deathcap wchodził pod to wzgórze. Z jakiegoś powodu sprawdzanie dwa razy dalej spowodowało, że zachowują się poprawnie...",
		"pipes" :
		"KELVIN: Chciałem aby rury zachowywały się tak samo jak te w Mario ale wydawało mi się denerwujące, że w tych grach trzeba było naciśnąć góra/dół aby sprawdzić czy są otwarte więc zamiast tego po prostu wpadasz do nich.",
		"firetux" :
		"KELVIN: Oryginalnie, Ognisty Tux miał mieć hełm tak jak w oryginalnym SuperTux'ie. Członek serwera Discord SuperTux'a zasugerował aby użyć projektu autorstwa RustyBox. Zgodziłem się, że wyglądało to lepiej. Oryginalny projekt Ognistego Tux'a może być znaleziony na stronie OpenGameArt.org.",
		"coins" :
		"KELVIN: Monety są używane tylko do osiągnięć. Nigdy nie lubiłem mechaniki dodatkowych żyć, ponieważ to powoduje, że gracz musi czekać dłużej aby spróbować zagrać w poziom ponownie jeżeli skończą się mu się życia. ",
		"sliding" :
		"KELVIN: Pomysł na mechanikę zwiększania się prędkości podczas spadania z krawędzi przyszedł mi na myśl z powodu potrzeby zrekompensowania tego, że spadki nie przyspieszają gracza wystarczająco. Technicznie jest to błędem, który zdecydowałem się pozostawić ponieważ był zabawny. To samo zalicza się do wielu innych mechanik.",
		"trees" :
		"KELVIN: Drzewa nie rosną na Antarktydzie, dlatego pingwiny rzeźbią je z lodu.",
		"snakes" :
		"KELVIN: Wiem że posiadanie węży na Antarktydzie ma tyle sensu co posiadanie głodnych roślin. ",
		"waterfalls" :
		"KELVIN: Ta część jaskini jest według mnie bardzo ładna. Podoba mi się przestronne tło z wodospadami przed nim. Chciałem aby poziom miał poczucie eksploracji więc scena jak taka, która daje poczucie przestrzeni ma na celu przekazanie poczucia eksploracji.",
		"loops" :
		"KELVIN: Przykro mi, czy oczekiwałeś, że ta pętla będzie działać? Ha! Nie jestem ani trochę blisko aby to zaprogramować... jeszcze.",
		"contrib" :
		"FROSTC: Cześć! To jest pierwszy komentarz deweloperski nie napisany przez Kelvin'a, ponieważ to jest poziom mojego autorstwa",
		"walldev" :
		"FROSTC: Tak właściwie to nie wiedziałem, że możesz po prostu wskoczyć tutaj po ścianach kiedy zrobiłem ten obszar. Później pomyślałem żeby dodać tutaj coś co uniemożliwi wchodzenie tutaj, jednak zdecydowałem się tego nie robić",
		"tnt" :
		"FROSTC: Zobaczyłem, że to TNT jest użyte w poziomie Ekstremalne Wzgórza więc zdecydowałem się na zrobienie poziomu pokazującego możliwości tego TNT. Ciekawostka: ten poziom został ukończony zanim powstał poziom Pod wodą",
		"trans" :
		"FROSTC: Zajęło mi dużo czasu aby zrobienie tak żeby przejście tła zaczęło działać, było to spowodowane tym, że był to pierwszy raz kiedy używałem aktywatorów",
		"lifenote" :
		"FROSTC: Dla tych, którzy grali w starsze wersje, mam nadzieję, że spodoba się wam całkiem nowe, dużo trudniejsze miejsce 1-UP'u! hahahahahaha!!",
		"signnote" :
		"FROSTC: Jeżeli czujesz się trochę leniwie, możesz po prostu wysadzić rurę używając ognistych pocisków aby ją otworzyć zamiast prześlizgnąć się przez nią. Może to jest dobra strategia speedrunowania??",
		"sense":
		"FROSTC: Mój trzeci poziom, chciałem zrobić poziom troszkę inspirowany poziomem Grumbel's Sense of Snow ze standardowego SuperTux'a. Zabawne jest to, że ten poziom nie jest w najnowszych wersjach standardowego SuperTux'a",
		"subsea" :
		"KELVIN: Na początku nie byłem pewny w jaki sposób obchodzić się z podwodnymi poziomami. Myślałem o poziomach takich jak w SMB 1 i 3 ale wyglądały na coś co Tux mógłby szybko przelecieć. Później przypomniałem sobie o podwodnych poziomach w DKC, wyglądają one trochę jak labirynty gdzie musisz unikać niebezpiecznych wrogów. Pomyślałem, że to może się sprawdzić dla tej gry, ponieważ Tux jest szybki pod wodą a Konqi i Midi zachowują ofensywne możliwości w ich neutralnych formach.",
		"subsea-name" :
		"KELVIN: Nazwa, Pod wodą pochodzi z trasy o tej samej nazwie z gry SuperTuxKart. Pomyślałem, że byłoby fajnie wziąć części tras z tej try i wyobrazić sobie je na nowo jako poziomy w platformówce. Miasto Candela także jest planowane, finalny poziom, w którym będzie odbywać się walka z Nolok'iem będzie nazywać się Fort Magma. Inne nazwy z gry SuperTuxKart też mogą się pojawić.",
		"tutorial-zone" :
		"KELVIN: Po dostaniu opini o rozgrywce od Aurora Sol, zdecydowałem, że powinienem tak aby ta część samouczka jaśniej pokazywała podstawowe mechaniki. Kiedy testował grę pominął pierwszą rurę mimo, że stoi tutaj tabliczka podpowiadająca, że coś tutaj jest, spowodowało to, że także pominął miejsce pokazujące mechanikę pływania. Miejsca, w których powinieneś się ślizgać nie były jasno zaznaczone co spowodowało pominięcie też i tego. Ta strefa nie pozwoli ci na kontynuowanie dopóki nie nauczysz się każdej mechaniki ale cały czas może być pominięta jeżeli znasz podstawy.",
		"speedrunex":
		"FROSTC: Zaprojektowałem ten poziom z myślą o osobach speedrunujących go, więc sprawdź jak szybko potrafisz go ukończyć!",
		"secretredex":
		"FROSTC: Aktualna wersja tego sekretu bardzo różni się od tego jaka była kiedyś, jedną z różnic jest to, że kiedyś miała zakręt. Nie umiałem zrobić tego tak, żeby działało poprawinie więc jest to powodem pozbycia się tego.",
		"fishex":
		"FROSTC: Tak jak poziom Problem z TNT, ten poziom został zrobiony przed kilkoma wcześniejszymi poziomami.",
		"mezex":
		"FROSTC: Musiałem zrobić kilka własnych płytek aby ten labirynt wyglądał dobrze, wydaje mi się, że warto było to zrobić! Uważam, że jest to najlepsza rzecz w tym poziomie.",
		"outage":
		"FROSTC: Kolejny losowy fakt... Ten i ostatni poziom zajął tylko 3 dni aby go ukończyć! Najprawdopodobniej pomogło, to że szkoła była zamknięta pierwszego dnia kiedy zacząłem pracować nad tymi poziomami, było to spowodowane brakiem prądu lub czymś innym."
	},

	"npc" : {
		"null" : "",
		"rad-0t" :
		"Hej, gdzie jest twoja deska? Czy zamierzasz ślizgać się na swoim brzuczu? Wydaje mi się, że nie dasz rady zebrać wszystkich monet na tym wzgórzu w ten sposób. Jeżeli ci się uda dam ci coś co pomoże ci złapać trochę powietrza!",
		"rad-0k" :
		"Hej, gdzie jest twoja deska? Jeździsz zbyt wolno na zjazd taki jak ten!",
		"rad-0m" :
		"Czy zamierzasz użyć tej piłki na tej zjazd? Powodzenia.",
		"rad-0d" :
		"Zdobądź wszystkie monety na tym wzgórzu jeżeli chcesz nautyczną nagrodę!",
		"penny-0t" :
		"Och, Tux! Bardzo cieszę się, że cię widzę! Nolok porwał naszych przyjaciół! Słyszałam, że zostali zabrani do różnych fortec rozmieszczonych po całym świecie. Chciałabym widzieć dlaczego. Postaraj się ich uratować, Tux!",
		"penny-0k" :
		"Konqi! Cieszę się, że cię widzę! Jestem pewna, że Plasma Breeze jest w porządku. Proszę pomóż Tux'owi. Razem uda się wam pokonać Nolok'a!",
		"penny-0m" :
		"Więc ty jesteś Midi. Słyszałam, że jesteś całkiem zdolnym wojownikiem. Cieszę się, że pomagasz Tux'owi. Upewnię się, że dostaniesz dobrą nagrodę.",
		"penny-0d" :
		"Miło mi cię poznać. Czy pomagasz Tux'owi uratować naszych przyjaciół? Jestem bardzo zadowolona słysząc to.",
		"rad-t0t" :
		"Hej, Tux! Prezydent Penny szuka ciebie. Przy okazji, złap mnie kiedyś na stoku. Chciałbym zobaczyć czy dobrze ścigasz się na śniegu.",
		"rad-t0k" :
		"Hej, jesteś Konqi, prawda? Człowieku, uważaj na ogień w okolicy. Lód z tym to nie jest to dobre połączenie.",
		"rad-t0m" :
		"Co wiewiórka robi tak daleko na południe? Czy nie jest tutaj zbyt zimno dla ciebie? Wejdź do środka zanim zmarzniesz.",
		"rad-t0d" :
		"Wow, nowa twarz. Nie znam ciebie. Jeżeli szukasz Prezydenta Penny, jest ona w największym igloo w środku miasta. Lubię nazywać je dużym iglem.",
		"xue-c" :
		"Dzięki za uratowanie mnie, czu! Spotkamy się w Pennyton!",
		"xue-pt-t" :
		"Następnym razem kiedy spotkam tego Nolok'a, dostanie ode mnie prosto w twarz wybuchającymi ciastami! W ten sposób pokażę mu, za zadzieranie z nami, czu!",
		"xue-pt-k" :
		"Hej, Konqi! Daj Nolok'owi niezłe podpalenie kiedy go spotkasz! Nikt nie zadziera z nami, na czy poza trasą dla go-kartów, czu!",
		"xue-pt-m" :
		"Wow, inny gryzoń, który także lubi wybuchy! (i całkiem ładny, czu...) Co? N-nic, czu! Ja, och, zastanawiałam się czy chciałbyś pójść pościgać się go-kartami! N-nie jako randka czy coś takiego! (Ucisz się, Xue, ucisz się!)",
		"xue-pt-d" :
		"Dziękuję ci za twoją pomoc, czu! Pokażmy Nolok'owi, żeby nigdy z nami nie zadzierał!",
		"fireguin-0" :
		"Nie ma tutaj zbyt dużo zadań dla strażaka, co? Lód może się roztopić, to prawda, ale gasi też ogień.",
		"fireguin-1" :
		"Może byłoby mi lepiej w miasteczku z domami z drewna. Ciężko tutaj znaleźć drewno więc nawet drzewa są zrobione z lodu!",
		"fireguin-2" :
		"Wiele domów tutaj jest pustych. Jestem pewien, że nasi przyjaciele wrócą kiedy zostaną ocaleni od Nolok'a.",
		"fireguin-3" :
		"Niestabilne bloki, cieńki lód roztopi się kiedy uderzysz w niego kulą ognia. Możesz także go rozwalić ślizgając się.",
		"fireguin-4" :
		"Uważaj na cieńki lód! Rozwali się gdy będziesz stał na nim zbyt długo.",
		"fireguin-5" :
		"Jeżeli chcesz poprawić swoje umiejętności w ślizganiu się, idź do zjazdu poza miastem. Znajdziesz go po prawo od tego miejsca.",
		"konqi-c" :
		"Hej, dziękuję za wydostanie mnie stąd. Zostałem złapany próbując odnaleźć Plasma Breeze. Mam nadzieję, że ona jest w porządku. Najprawdopodobniej Nolok porwał ją do innej fortecy. Pomogę ci ją uratować!",
		"rocky-c" :
		"W porządku, jestem uratowany! Człowieku, Nolok jest rodzajem śmieci, których nie chciałbym nawet dotykać. Powodzenia w walce z nim!",
		"rocky-pt-t" :
		"Hej, Tux! Złap mnie później. Kupię ci rybę.",
		"rocky-pt-k" :
		"Nolok jest krokodylem, prawda? Człowieku, mam nadzieję, że twoje łuski są cięższe niż jego. Nie chciałbym, żeby ten facet mnie obgryzał!",
		"rocky-pt-m" :
		"Przypominasz mi mnie. Mały, szybki i dobry w zbieraniu śmieci. Ale jesteś odważniejszy ode mnie. Nie okazuj Nolok'owi żadnej litości!",
		"rocky-pt-d" :
		"Tak, to miejsce jest dość zimne ale jest dużo bezpieczniejsze. Najgorsze miniony Nolok'a są na kontynencie i innych strefach więc mam zamiar na razie zostać w Pennyton.",
		"python-c" :
		"Dziękuję za ocalenie! Spotkamy się w mieście.",
		"python-pt-t" :
		"Hej tutaj Tux. Mam nadzieję, że jest bezpiecznie niedługo pójść się do domu. Zamarzam tutaj!",
		"python-pt-k" :
		"Czy są jakieś szanse ogrzać mnie twoim płomieniem? Tutaj jest strasznie zimno...",
		"python-pt-m" :
		"Chciałbym aby ty i Xue nie denerwowali się tak. Nawet jeżeli zrobiłbym się głodny, nie zjadłbym was!",
		"python-pt-d" :
		"Wydaje mi się, że tobie jest lepiej kiedy jest zimno niż mi. Nie bez powodu Nolok nie lubi tego miejsca.",
		"garuda-c" :
		"W porządku! Dziękuję za pomoc w pozbyciu się tego człowieka! Nie mogę doczekać się aby wyjść z tego miejsca i rozprostować moje skrzydła.",
		"garuda-pt-t" :
		"Kiedyś było mi przykro z powodu, że pingwiny nie mogą latać ale później zobaczyłem w jaki sposób poruszają się pod wodą. Pływają tak jakby latali!",
		"garuda-pt-k" :
		"Słyszałem, że smoki uwielbiają złoto tak jak gryfy. Na szczęście dla nas, w okolicy jest dużo monet! Chociaż zastanawiam się co powoduje, że unoszą się...",
		"garuda-pt-m" :
		"Używasz bomb, tak? Wydaje mi się, że gdybym uniósł cię w powietrze moglibyśmy zespół strajku powietrznego! Ale... boję się zostać ponownie zestrzelonym. W ten sposób Nolok złapał mnie pierwszym razem.",
		"garuda-pt-d" :
		"Dziękuję za twoją pomoc. Czuję się świetne mogąc znów latać.",
		"breeze-c-k" :
		"Konqi! Wiedziałam, że po mnie przyjdziesz! Bardzo cieszę się, że cię widzę! Wydostańmy się stąd! Będę za tobą.",
		"breeze-c-d" :
		"Dziękuję za wydostanie mnie stąd. Będę kierowała się w stronę Pennyton. Kopnij Nolok'a dla mnie!",
		"breeze-pt-t" :
		"Och, jesteś bardzo słodkim, małym pingwinem! Znam klacz, która bardzo lubi ptaki. Pewnie polubiłbyś ją.",
		"breeze-pt-k" :
		"Zawsze cieszę się kiedy cię spotykam, Konqi! Powodzenia w walce z Nolok'iem. Będę ci kibicowała najgłośniej!",
		"breeze-pt-d" :
		"Każda pomoc jest potrzebna w walce z Nolok'iem. Cieszę się, że jesteś po naszej stronie.",
		"gnu-c" :
		"Żałuję, że znowu zostałem złapany przez Nolok'a. Dziękuję ci za wypuszczenie mnie.",
		"gnu-pt-0" :
		"Jest dobrze excelować, ale lepiej jest to zrobić za pomocą vim'a.",
		"gnu-pt-1" :
		"Żaba pacman jest łowcą apt.",
		"gnu-pt-2" :
		"Prawdziwa wolność jest odnajdowana na trasie gnu.",
		"gnu-pt-3" :
		"Niektóre tajemnice są rozwiązywane za pomocą odnajdowywania print'ów, inne za pomocą robienia ich.",
		"gnu-pt-4" :
		"Podczas chodzenia z fork'iem, lekko stąpaj.",
		"gnu-pt-5" :
		"Nie używaj cat'a jeżeli możesz zrobić więcej lub mniej.",
		"gnu-pt-6" :
		"Jeżeli info nie jest dla ciebie opcją, man jest wyborem.",
		"gnu-pt-7" :
		"007 ma wszystkie uprawnienia, których potrzebujesz.",
		"gnu-pt-8" :
		"Ten młody pingwin, Rad, ma takiego ducha. Żyje życiem dla Emacsa.",
		"gnu-pt-9" :
		"Jeżeli nie widzisz nic innego tylko zera, pamiętaj, dev'null dokładnie.",
		"gnu-pt-10" :
		"Zanim wyślesz swoje zmiany, muszą być zatwierdzone.",
		"gnu-pt-11" :
		"Mądrość złożona z wielu źródeł sprawia, że plan jest wykonywalny.",
		"midi-c" :
		"Siema! Pilnowałem swojego biznesu kiedy te dziwne rzeczy podobne do grzybów zaczęły pojawiać się tutaj. Nie chce mi się już tutaj siedzieć. Co wy na to żebym dołączył do was i kopnął tego Nolok'a w ogon?",
		"sam-0" :
		"Mnóstwo sprzętu przygodowego na stanie... czekaj, używasz złota? Te rzeczy byłby dużo tańsze gdybyś miał szmaragdy.",
		"sam-1" :
		"Nie zrozum mnie źle, złoto jest wspaniałe ale jest po prostu zbyt częste. Nie wyobrażam sobie musieć nosić tyle i używać jako pieniędzy!",
		"sam-2" :
		"Czy wydaje ci się, że my lubimy szmaragdy? Spróbuj tylko zblizyć się do nich!",
		"sam-3" :
		"Nie chcę być niemiły ale czy zamierzasz coś kupić? Nie płacą mi za rozmawianie.",
		"sam-4" :
		"Tak, wykopałem i zrobiłem te wszystkie rzeczy i teraz je sprzedaję. Więc co mój szef robi aby dostać swoją część zarobków? On jest właścicielem firmy!",
		"sam-5" :
		"Przy okazji kiedy rozmawiamy o pieniądzach, gra w której jesteśmy? Jest darmowa, nawet możesz modyfikować i sprzedawać to co zrobisz, więc weź pod uwagę możliwość przekazania darowizny osobom, które nad nią pracowały!",
		"tuckles-0" :
		"Nawet pod lodem łatwo jest pracować ciężko.",
		"tuckles-1" :
		"Dlaczego wymieniać rybę za rybę skoro wykopać je z lodu? Właśnie z tego powodu tutaj jestem!",
		"tuckles-2" :
		"Podnoś ryby oraz jedz ciężarki... Nie, poczekaj.",
		"tuckles-3" :
		"Jeżeli chcesz być silny, musisz zostać silny. Jeżeli chcesz być duży, musisz zostać duży. Jeżeli chcesz być twardy, musisz zostać twardy.",
		"tuckles-4" :
		"Kluczem do najlepszych uścisków są duże mięśnie i miękki brzuch. Ryby dadzą ci te obie rzeczy.",
		"tuckles-5" :
		"Te wszystkie mufinki, które jesz nie są porównywalne do ryb, które wydobywujemy. Są większe, silniejsze i smaczniejsze.",
		"tuckles-6" :
		"Czy widziałeś Duke'a? On lubi zdobywać ryby leniwą metodą: udawając, że jego wędka jest zepsuta oraz wyłudzając ryby od innych. Ignorowałbym go jeżeli nie byłby w stanie blokować dróg siedząc na nich."
	},

	"level" : {
		"shop" : "Punkt handlowy Sam'a",
		"overworld-0" : "Wyspy zorzy polarnej",
		"overworld-1" : "Antarktyda",
		"0-t0" : "Pennyton",
		"0-t1" : "Kopalnie ryb",
		"0-0" : "Nauka stoków",
		"0-1" : "Kryształowe przejście",
		"0-2" : "Ślizganie i zjeżdżanie",
		"0-3" : "Pod wodą",
		"0-4" : "Problem z TNT",
		"0-5" : "Zmysł śniegu Frost'a",
		"0-x" : "Ekstremalne wzgórza",
		"0-c" : "Forteca Borealis",
		"0-6a" : "Mroźny raj",
		"0-6b" : "Ścieżka się rozdziela",
		"0-7" : "Oceaniczny most",
		"0-8" : "Arktyczny wiatr",
		"0-9" : "Zatopione kroki",
		"0-s" : "Strefa czerwonego przycisku"
	},

	"key" : {
		"0" : "_0",
		"1" : "_1",
		"2" : "_2",
		"3" : "_3",
		"4" : "A",
		"5" : "B",
		"6" : "C",
		"7" : "D",
		"8" : "E",
		"9" : "F",
		"10" : "G",
		"11" : "H",
		"12" : "I",
		"13" : "J",
		"14" : "K",
		"15" : "L",
		"16" : "M",
		"17" : "N",
		"18" : "O",
		"19" : "P",
		"20" : "Q",
		"21" : "R",
		"22" : "S",
		"23" : "T",
		"24" : "U",
		"25" : "V",
		"26" : "W",
		"27" : "X",
		"28" : "Y",
		"29" : "Z",
		"30" : "1",
		"31" : "2",
		"32" : "3",
		"33" : "4",
		"34" : "5",
		"35" : "6",
		"36" : "7",
		"37" : "8",
		"38" : "9",
		"39" : "0",
		"40" : "Enter",
		"41" : "Escape",
		"42" : "Backspace",
		"43" : "Tab",
		"44" : "Spacja",
		"45" : "-",
		"46" : "=",
		"47" : "[",
		"48" : "]",
		"49" : "\\\\",
		"50" : "/",
		"51" : ";",
		"52" : "'",
		"53" : "\`",
		"54" : ",",
		"55" : ".",
		"56" : "/",
		"57" : "CAP",
		"58" : "F1",
		"59" : "F2",
		"60" : "F3",
		"61" : "F4",
		"62" : "F5",
		"63" : "F6",
		"64" : "F7",
		"65" : "F8",
		"66" : "F9",
		"67" : "F10",
		"68" : "F11",
		"69" : "F12",
		"70" : "Print",
		"71" : "Scroll",
		"72" : "Pause",
		"73" : "Insert",
		"74" : "Home",
		"75" : "Pg Up",
		"76" : "Delete",
		"77" : "End",
		"78" : "Pg Down",
		"79" : "Right",
		"80" : "Left",
		"81" : "Down",
		"82" : "Up",
		"83" : "Num",
		"84" : "#/",
		"85" : "#*",
		"86" : "#-",
		"87" : "#+",
		"88" : "#Ent",
		"89" : "#1",
		"90" : "#2",
		"91" : "#3",
		"92" : "#4",
		"93" : "#5",
		"94" : "#6",
		"95" : "#7",
		"96" : "#8",
		"97" : "#9",
		"98" : "#0",
		"99" : "#.",
		"100" : "\\\\",
		"101" : "App",
		"102" : "Pow",
		"103" : "#=",
		"104" : "F13",
		"105" : "F14",
		"106" : "F15",
		"107" : "F16",
		"108" : "F17",
		"109" : "F18",
		"110" : "F19",
		"111" : "F20",
		"112" : "F21",
		"113" : "F22",
		"114" : "F23",
		"115" : "F24",
		"116" : "Exe",
		"117" : "Help",
		"118" : "Menu",
		"119" : "Select",
		"120" : "Stop",
		"121" : "Again",
		"122" : "Undo",
		"123" : "Cut",
		"124" : "Copy",
		"125" : "Paste",
		"126" : "Find",
		"127" : "Mute",
		"128" : "Vol Up",
		"129" : "Vol Down",
		"130" : "#,",
		"131" : "#=400",
		"132" : "",
		"133" : "",
		"134" : "",
		"135" : "",
		"136" : "",
		"137" : "",
		"138" : "",
		"139" : "",
		"140" : "",
		"141" : "",
		"142" : "",
		"143" : "",
		"144" : "",
		"145" : "",
		"146" : "",
		"147" : "",
		"148" : "",
		"149" : "",
		"150" : "",
		"151" : "",
		"152" : "",
		"153" : "",
		"154" : "",
		"155" : "",
		"156" : "",
		"157" : "",
		"158" : "",
		"159" : "",
		"160" : "",
		"161" : "",
		"162" : "",
		"163" : "",
		"164" : "",
		"165" : "",
		"166" : "",
		"167" : "",
		"168" : "",
		"169" : "",
		"170" : "",
		"171" : "",
		"172" : "",
		"173" : "",
		"174" : "",
		"175" : "",
		"176" : "",
		"177" : "",
		"178" : "",
		"179" : "",
		"180" : "",
		"181" : "",
		"182" : "",
		"183" : "",
		"184" : "",
		"185" : "",
		"186" : "",
		"187" : "",
		"188" : "",
		"189" : "",
		"190" : "",
		"191" : "",
		"192" : "",
		"193" : "",
		"194" : "",
		"195" : "",
		"196" : "",
		"197" : "",
		"198" : "",
		"199" : "",
		"200" : "",
		"201" : "",
		"202" : "",
		"203" : "",
		"204" : "",
		"205" : "",
		"206" : "",
		"207" : "",
		"208" : "",
		"209" : "",
		"210" : "",
		"211" : "",
		"212" : "",
		"213" : "",
		"214" : "",
		"215" : ""
	}
}
`; 

 window.superTuxAdvanceWebVersion.simulatedFileSystem.addFile('lang/pl.json', ''); 