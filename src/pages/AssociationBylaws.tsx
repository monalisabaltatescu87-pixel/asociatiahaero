import React from 'react';

const StatutAsociatie: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-haero-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-haero-dark mb-4">
              Statutul <span className="text-haero-yellow-600">Asociației HAERO</span>
            </h2>
            <div className="w-16 h-1 bg-haero-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-haero-gray-500 max-w-3xl mx-auto text-lg">
              Versiune simplificată a statutului asociației, pentru informarea membrilor și a persoanelor interesate.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-raised border-t-4 border-haero-yellow space-y-10">
            {/* Section 1 */}
            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-4">1. Denumirea și sediul asociației</h3>
              <div className="space-y-3 text-haero-gray-500">
                <p><strong className="text-haero-gray-700">1.1.</strong> Asociația înființată de către asociații membrii fondatori va purta denumirea ASOCIAȚIA „HAERO" și are sediul în România, Tg. Mureş, bld. 1 Decembrie 1918, nr. 189, et. 7, ap 32, jud. Mureş, în baza unui contract de comodat încheiat.</p>
                <p><strong className="text-haero-gray-700">1.2.</strong> Asociația își va putea deschide sedii secundare și/sau filiale sau sucursale în țară sau străinătate, în baza hotărârii Adunării generale dată în acest sens și cu respectarea cerințelor de înregistrare stabilite de lege.</p>
                <p><strong className="text-haero-gray-700">1.3.</strong> Disponibilitatea denumirii asociației este dovedită prin actul anexat emis în acest sens de Ministerul Justiției.</p>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-4">2. Scopul și durata asociației</h3>
              <div className="space-y-3 text-haero-gray-500">
                <p><strong className="text-haero-gray-700">2.1.</strong> Scopul primordial al asociației este de a milita pentru respectarea drepturilor pacienților cu angioedem ereditar, dintre care putem enumera: dreptul de acces egal și nediscriminatoriu la tratament, la îngrijire medicala, la informare, dreptul la confidențialitate și respectarea intimității, la îngrijiri și suport de calitate, la tratament personalizat, administrat în timp util, la simplificarea procedurii pentru obținerea pensiei medicale.</p>
                <p>Prin realizarea scopului, Asociația susține și apără drepturile și interesele bolnavilor cu angioedem ereditar din România.</p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-4">3. Modalități/activități specifice de realizare a scopului asociației</h3>
              <div className="space-y-3 text-haero-gray-500">
                <p><strong className="text-haero-gray-700">3.1.</strong> Modalitățile realizării scopului precum și a atingerii obiectivelor propuse se vor materializa prin propria activitate a asociaților și a colaboratorilor.</p>
                <p><strong className="text-haero-gray-700">3.2.</strong> Activitățile principale sunt și/sau vor fi orientate spre:</p>
                <ul className="list-none space-y-2 pl-4">
                  <li><strong className="text-haero-gray-700">a)</strong> campanii de informare și conștientizare a bolii;</li>
                  <li><strong className="text-haero-gray-700">b)</strong> informarea constantă a medicilor cu privire la modalitățile de manifestare a bolii, posibilităților de diagnostic și opțiunilor de tratament;</li>
                  <li><strong className="text-haero-gray-700">c)</strong> organizarea întâlnirilor de pacienți;</li>
                  <li><strong className="text-haero-gray-700">d)</strong> crearea, desfășurarea și susținerea programelor dedicate pacienților;</li>
                  <li><strong className="text-haero-gray-700">e)</strong> crearea unui portal on-line pentru informarea pacienților și medicilor;</li>
                  <li><strong className="text-haero-gray-700">f)</strong> campanii de informare utilizând rețelele sociale existente;</li>
                  <li><strong className="text-haero-gray-700">g)</strong> integrarea consilierii psihologice în planul de tratament al pacienților;</li>
                  <li><strong className="text-haero-gray-700">h)</strong> atragerea de fonduri prin sponsorizări, donații, proiecte de finanțare interne și internaționale în vederea realizării obiectivelor propuse;</li>
                  <li><strong className="text-haero-gray-700">i)</strong> organizarea de evenimente și workshop-uri educative pentru copii și tineri în scopul dezvoltării armonioase;</li>
                  <li><strong className="text-haero-gray-700">j)</strong> colaborarea cu alte Organizații/Fundații cu interese comune.</li>
                </ul>
                <p><strong className="text-haero-gray-700">3.3.</strong> Modalitățile concrete de elaborare și realizare a proiectelor și sau a programelor, precum și persoanele responsabile de realizarea acestora vor fi hotărâte prin regulamente interne.</p>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-4">4. Organizarea și conducerea asociației</h3>
              <div className="space-y-3 text-haero-gray-500">
                <p><strong className="text-haero-gray-700">4.1.</strong> Organele asociației sunt: Adunarea Generală a asociaților, Consiliul Director și Cenzorul.</p>

                <h4 className="text-lg font-semibold text-haero-dark mt-6 mb-2">4.2. Adunarea generală</h4>
                <p><strong className="text-haero-gray-700">4.2.1.</strong> Adunarea generală a asociaților este organul de conducere al asociației și este alcătuit din totalitatea asociaților.</p>
                <p><strong className="text-haero-gray-700">4.2.2.</strong> Adunarea generală a asociaților se convoacă cel puțin o dată pe an, sau ori de câte ori este nevoie.</p>
                <p><strong className="text-haero-gray-700">4.2.3.</strong> Convocarea adunării generale se face de către președintele Consiliului Director sau în lipsa acestuia de către unul dintre membrii, cu cel puțin 5 zile înainte de data adunării, cu arătarea ordinii de zi.</p>
                <p><strong className="text-haero-gray-700">4.2.4.</strong> Adunarea generală, la prima convocare, se constituie în mod valabil în prezența a 2/3 din numărul membrilor, hotărârile luându-se cu votul majorității simple a celor prezenți. La a doua convocare, adunarea generală se consideră ca fiind legal constituită în prezența a jumătate din numărul total al membrilor, hotărârile putându-se lua cu votul majorității celor prezenți. Întâlnirile se pot organiza online și hotărârile adunării generale sunt considerate valide.</p>
                <p><strong className="text-haero-gray-700">4.2.5.</strong> Adunarea generală a asociaților are următoarele competențe:</p>
                <ul className="list-none space-y-1 pl-4">
                  <li><strong className="text-haero-gray-700">a.</strong> stabilește strategia și obiectivele generale ale asociației pe termen mediu și lung.</li>
                  <li><strong className="text-haero-gray-700">b.</strong> stabilește prioritățile și condițiile generale ale finanțărilor.</li>
                  <li><strong className="text-haero-gray-700">c.</strong> aprobă bugetul de venituri și cheltuieli și bilanțul contabil.</li>
                  <li><strong className="text-haero-gray-700">d.</strong> alege și revocă membrii Consiliului Director.</li>
                  <li><strong className="text-haero-gray-700">e.</strong> alege și revocă cenzorul.</li>
                  <li><strong className="text-haero-gray-700">f.</strong> aprobă înființarea de filiale sau orice altă structură organizatorică.</li>
                  <li><strong className="text-haero-gray-700">g.</strong> aprobă modificarea actului constitutiv și a statutului, cu excepția mutării sediului care este dată în competența Consiliului Director.</li>
                  <li><strong className="text-haero-gray-700">h.</strong> aprobă cooptarea de noi membrii în asociație.</li>
                  <li><strong className="text-haero-gray-700">i.</strong> hotărăşte asupra pierderii calității de membru al asociației.</li>
                  <li><strong className="text-haero-gray-700">j.</strong> hotărăşte asupra cuantumului cotizațiilor.</li>
                  <li><strong className="text-haero-gray-700">k.</strong> controlează activitatea Consiliului Director și a cenzorului și aprobă raportul de activitate anual al acestora.</li>
                  <li><strong className="text-haero-gray-700">l.</strong> hotărăște asupra modului de organizare și funcționare a asociației.</li>
                  <li><strong className="text-haero-gray-700">m.</strong> hotărăște constituirea de către asociație a unor entități lucrative și/sau de participare a asociației la asemenea societăți comerciale.</li>
                  <li><strong className="text-haero-gray-700">n.</strong> hotărăște asupra bunurilor rămase după lichidare, care vor fi destinate unor organizații neguvernamentale cu scop similar.</li>
                </ul>
                <p><strong className="text-haero-gray-700">4.2.5.1</strong> Dizolvarea și lichidarea asociației se va face conform legii.</p>
                <p><strong className="text-haero-gray-700">4.2.6.</strong> Hotărârile Adunării generale, luate în limitele legii și ale prezentului statut, sunt obligatorii chiar și pentru asociații care nu au luat parte la adunare sau, dacă au luat parte la adunare, au votat împotrivă.</p>

                <h4 className="text-lg font-semibold text-haero-dark mt-6 mb-2">4.3. Consiliul Director</h4>
                <p><strong className="text-haero-gray-700">4.3.1.</strong> Consiliul director este format din 3 membri și este numit de către adunarea generală pentru un mandat de 5 ani, mandatul membrilor putând fi reînnoit.</p>
                <p><strong className="text-haero-gray-700">4.3.2.</strong> Membrii Consiliului director se numesc din cadrul membrilor asociației, dintre persoanele cu o activitate semnificativă în dezvoltarea scopului asociației.</p>
                <p><strong className="text-haero-gray-700">4.3.3.</strong> Calitatea de membru al Consiliului director se poate pierde prin:</p>
                <ul className="list-none space-y-1 pl-4">
                  <li><strong className="text-haero-gray-700">a.</strong> deces;</li>
                  <li><strong className="text-haero-gray-700">b.</strong> demisie;</li>
                  <li><strong className="text-haero-gray-700">c.</strong> revocare din calitatea de membru făcută de către Adunarea generală în următoarele cazuri:</li>
                  <li><strong className="text-haero-gray-700">d.</strong> încălcarea conștientă și deliberată a Statutului;</li>
                  <li><strong className="text-haero-gray-700">e.</strong> dezinteres față de activitatea asociației, lipsa repetată și nejustificată de la şedințele consiliului;</li>
                  <li><strong className="text-haero-gray-700">f.</strong> conduită morală corespunzătoare.</li>
                </ul>
                <p><strong className="text-haero-gray-700">4.3.4.</strong> În cazul prevăzut de articolul precedent, Adunarea generală va numi altă(e) persoană(e) ca făcând parte din Consiliul director.</p>
                <p><strong className="text-haero-gray-700">4.3.5.</strong> Consiliul director, prin grija Preşedintelui, se întrunește în ședințe cel puțin o dată pe lună sau ori de câte ori este necesar.</p>
                <p><strong className="text-haero-gray-700">4.3.6.</strong> Consiliul director asigură conducerea activității asociației și punerea în executare a hotărârilor adunării generale având următoarele atribuții:</p>
                <ul className="list-none space-y-1 pl-4">
                  <li><strong className="text-haero-gray-700">a.</strong> prezintă anual rapoarte de activitate Adunării generale pe care le supune aprobării;</li>
                  <li><strong className="text-haero-gray-700">b.</strong> prezintă Adunării generale spre aprobare proiectul bugetului de venituri și cheltuieli și proiectul asupra programelor asociației;</li>
                  <li><strong className="text-haero-gray-700">c.</strong> execută bugetul aprobat, ia măsuri pentru întocmirea bilanțului contabil;</li>
                  <li><strong className="text-haero-gray-700">d.</strong> stabilește regulile și condițiile programelor asociației, ia toate măsurile necesare desfășurării activității asociației;</li>
                  <li><strong className="text-haero-gray-700">e.</strong> încheie acte juridice în numele și pe seama asociației;</li>
                  <li><strong className="text-haero-gray-700">f.</strong> aprobă organigrama și politica de personal a asociației;</li>
                  <li><strong className="text-haero-gray-700">g.</strong> aproba mutarea sediului asociației;</li>
                  <li><strong className="text-haero-gray-700">h.</strong> îndeplinește orice alte atribuții stabilite de către Adunarea generală.</li>
                </ul>

                <h4 className="text-lg font-semibold text-haero-dark mt-6 mb-2">4.4. Președintele Consiliului Director</h4>
                <p><strong className="text-haero-gray-700">4.4.</strong> Președintele Consiliului Director este desemnat de către Consiliul Director pentru un mandat de 4 ani, mandatul său putând fi reînnoit.</p>
                <p><strong className="text-haero-gray-700">4.4.1.</strong> Președintele Consiliului Director este organul de execuție al asociației având atribuții de administrare a asociației, având dreptul și obligația de a administra patrimoniul asociației, relațiile asociației cu banca, autoritățile statului și alte persoane juridice sau fizice cu care asociația intră în contact.</p>
                <p><strong className="text-haero-gray-700">4.4.2.</strong> Președintele Consiliului director poate delega parte sau totalitatea atribuțiile sale unui sau unor directori executivi în baza unui mandat special dat în acest sens.</p>

                <h4 className="text-lg font-semibold text-haero-dark mt-6 mb-2">4.5. Cenzorul</h4>
                <p><strong className="text-haero-gray-700">4.5.</strong> Cenzorul asociației este numit de Adunarea generală pentru un mandat de 4 ani, mandatul acestuia putând fi reînnoit.</p>
                <p><strong className="text-haero-gray-700">4.5.1.</strong> Calitatea de cenzor se poate pierde prin demisie, deces sau revocarea dispusă de adunarea generală pentru nerespectarea atribuțiilor prevăzute de Statut sau lege.</p>
                <p><strong className="text-haero-gray-700">4.5.2.</strong> În cazul prevăzut de articolul precedent, Adunarea generală va numi o altă persoană care va îndeplini funcția de cenzor.</p>
                <p><strong className="text-haero-gray-700">4.5.3.</strong> Cenzorul va verifica activitatea financiară a asociației și va întocmi un raport anual pe care-l va prezenta spre competentă aprobare, Adunării generale.</p>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-4">5. Membrii asociației. Dobândirea și pierderea calității de membru. Drepturi și obligații.</h3>
              <div className="space-y-3 text-haero-gray-500">
                <p><strong className="text-haero-gray-700">5.1.</strong> Poate fi membru cu drepturi depline a asociației, orice persoană majoră care aderă la prevederile Statutului și este dedicată obiectivelor și scopurilor declarate ale asociației.</p>
                <p><strong className="text-haero-gray-700">5.2.</strong> Calitatea de membru se dobândește, la cererea persoanei, prin completarea unui formular online. Cererea este acceptata automat.</p>
                <p><strong className="text-haero-gray-700">5.3.</strong> Calității de membru îi incumbă obligația de a respecta prevederile statutare.</p>
                <p><strong className="text-haero-gray-700">5.4.</strong> Calitatea de membru se poate pierde prin deces, retragere voluntară sau excludere.</p>
                <p><strong className="text-haero-gray-700">5.7.</strong> Excluderea poate fi hotărâtă de către Adunarea generală în cazul în care se constată că persoana respectivă nu a respectat prevederile statutare.</p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-4">6. Patrimoniul asociației</h3>
              <div className="space-y-3 text-haero-gray-500">
                <p><strong className="text-haero-gray-700">6.1.</strong> Veniturile asociației se compun din:</p>
                <ul className="list-none space-y-1 pl-4">
                  <li><strong className="text-haero-gray-700">a.</strong> patrimoniul inițial de 200 lei depus de asociați în momentul înființării asociației;</li>
                  <li><strong className="text-haero-gray-700">c.</strong> dobânzile și dividendele rezultate din plasarea sumelor disponibile, în condițiile legii;</li>
                  <li><strong className="text-haero-gray-700">d.</strong> dividende din profitul societăților comerciale pe care asociația le-ar înființa sau la care ar fi asociat sau acționar;</li>
                  <li><strong className="text-haero-gray-700">e.</strong> venituri realizate din activități economice directe;</li>
                  <li><strong className="text-haero-gray-700">f.</strong> donații, sponsorizări sau legate;</li>
                  <li><strong className="text-haero-gray-700">g.</strong> resurse obținute de la bugetul de stat și/sau de la bugetele locale;</li>
                  <li><strong className="text-haero-gray-700">h.</strong> orice alte venituri obținute în condițiile legii.</li>
                </ul>
                <p><strong className="text-haero-gray-700">6.2.</strong> Patrimoniul asociației va fi folosit exclusiv pentru realizarea scopului pentru care asociația a fost infiintata.</p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-4">7. Dizolvarea și lichidarea asociației</h3>
              <div className="space-y-3 text-haero-gray-500">
                <p>Asociația se dizolvă: de drept; prin hotărârea instanței de judecată; prin hotărârea adunării generale.</p>
                <p><strong className="text-haero-gray-700">7.1.</strong> Asociația se dizolvă de drept:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>realizarea sau după caz imposibilitatea realizării scopului pentru care a fost constituită dacă în termen de trei luni de la constatarea unui astfel de fapt nu se produce schimbarea acestui scop;</li>
                  <li>imposibilitatea constituirii adunării generale sau a constituirii consiliului director în conformitate cu statutul asociației, dacă această situație durează mai mult de un an de la data la care, potrivit statutului, adunarea generală sau după caz, consiliul director poate fi constituit;</li>
                  <li>reducerea numărului de asociați sub limita fixată de lege, dacă acesta nu a fost complinit timp de 3 luni.</li>
                </ul>
                <p>Constatarea dizolvării se realizează prin hotărârea judecătoriei în a cărei circumscripție se află sediul asociației, la cererea oricărei persoane interesate.</p>
                <p><strong className="text-haero-gray-700">7.2.</strong> Asociația se dizolvă prin hotărâre judecătorească:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>când scopul sau activitatea asociației a devenit ilicită sau contrară ordinii publice;</li>
                  <li>când realizarea scopului este urmărită prin mijloace ilicite sau contrare ordinii publice;</li>
                  <li>când asociația urmărește alt scop decât pentru care a fost constituit;</li>
                  <li>alte cazuri prevăzute de lege.</li>
                </ul>
                <p><strong className="text-haero-gray-700">7.3.</strong> Lichidarea asociației se va efectua conform procedurii prevăzute în Ordonanța Guvernului nr. 26/2000, precum și în conformitate cu prevederile Legii nr. 246/2005, pentru aprobarea Ordonanței Guvernului nr. 26/2000 cu privire la asociații și fundații.</p>
                <p><strong className="text-haero-gray-700">7.4.</strong> În situația în care funcționarea asociației ar deveni imposibilă din orice motiv toate bunurile, mijloacele materiale și băneşti aflate în patrimoniul ei se transmit spre a deservi aceleași scopuri și în cadrul unor activități identice, în favoarea unei asociații sau fundații de drept privat cu scop similar, neguvernamental, ce se va stabili ulterior de Adunarea generală.</p>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h3 className="text-xl font-bold text-haero-dark mb-4">8. Alte prevederi</h3>
              <div className="space-y-3 text-haero-gray-500">
                <p><strong className="text-haero-gray-700">8.1.</strong> Asociația va ține contabilitatea conform prevederilor legale în materie.</p>
                <p><strong className="text-haero-gray-700">8.2.</strong> Asociația va putea angaja personal, în baza hotărârii Consiliului director, în condițiile și cu respectarea dispozițiilor legale în materie.</p>
                <p><strong className="text-haero-gray-700">8.3.</strong> Membrii Consiliului director vor putea fi remunerați pentru activitatea depusă, cu aprobarea adunării generale, dar pe cât posibil asociația va lucra pe bază de voluntariat.</p>
                <p><strong className="text-haero-gray-700">8.4.</strong> Prevederile actelor constitutive se întregesc de drept cu prevederile legislației în vigoare cu privire la organizarea și funcționarea asociațiilor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatutAsociatie;
