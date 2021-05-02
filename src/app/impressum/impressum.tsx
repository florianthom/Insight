import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React from "react";
import { PlatformCard } from "@/src/app/contact/platformCard/platformCard";
import * as constants from "@/src/app/shared/constants/constants";

interface Props {}

export const Impressum: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <div className="pt-56 pb-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-more-than-wide">Impressum</h2>
                    <div className="text-base text-black pt-24">
                        In Germany I have to put a section on my website called “Impressum” (in german language). “An
                        Impressum is essentially a statement of ownership and authorship. It was put into place to in an
                        effort to protect user data, combat illegal content and spam by making website owners identify
                        themselves, and as a result assume responsibility for the content on their platform. Often when
                        talking about an Impressum, people mean the German (DACH) version of compulsory information
                        placed on a website.” (source:{" "}
                        <a
                            className="hover:underline"
                            href="https://www.iubenda.com/en/help/7816-impressum-what-is-it-and-when-is-it-needed#required"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            "Iubenda"
                        </a>
                        )
                    </div>
                    <div className="pt-24">
                        <div className="text-2xl">Adresse</div>
                        <div className="pt-2">
                            <div>Florian Thom </div>
                            <div>Walter-Friedrich-Str.53 </div>
                            <div>13125 Berlin</div>
                            <div>Tel: +49 (0) 15203749443</div>
                            <div>{constants.email_string}</div>
                        </div>
                        <div className="pt-24 text-2xl">Disclaimer - rechtliche Hinweise</div>
                        <div className="pt-2">
                            <p>
                                <strong>Auskunfts- und Widerrufsrecht</strong>
                            </p>
                            <p>
                                Sie haben jederzeit das Recht, sich unentgeltlich und unverz&#252;glich &#252;ber die zu
                                Ihrer Person erhobenen Daten zu erkundigen. Ebenfalls k&#246;nnen Sie Ihre Zustimmung
                                zur Verwendung Ihrer angegebenen pers&#246;nlichen Daten mit Wirkung f&#252;r die
                                Zukunft widerrufen. Hierf&#252;r wenden Sie sich bitte an den im Impressum angegebenen
                                Diensteanbieter.
                            </p>
                            <p>
                                <strong>Datenschutz (allgemein)</strong>
                            </p>
                            <p>
                                Beim Zugriff auf unsere Webseite werden automatisch allgemeine Informationen (sog.
                                Server-Logfiles) erfasst. Diese beinhalten u.a. den von Ihnen verwendeten Webbrowser
                                sowie Ihr Betriebssystem und Ihren Internet Service Provider. Diese Daten lassen
                                keinerlei R&#252;ckschl&#252;sse auf Ihre Person zu und werden von uns statistisch
                                ausgewertet, um unseren Internetauftritt technisch und inhaltlich zu verbessern. Das
                                Erfassen dieser Informationen ist notwendig, um den Inhalt der Webseite korrekt
                                ausliefern zu k&#246;nnen.
                            </p>
                            <p>
                                Die Nutzung der Webseite ist grunds&#228;tzlich ohne Angabe personenbezogener Daten
                                m&#246;glich. Soweit personenbezogene Daten (beispielsweise Name, Anschrift oder
                                E-Mail-Adressen) erhoben werden, erfolgt dies, soweit m&#246;glich, stets auf
                                freiwilliger Basis. Diese Daten werden ohne Ihre ausdr&#252;ckliche Zustimmung nicht an
                                Dritte weitergegeben.
                            </p>
                            <p>
                                Sofern ein Vertragsverh&#228;ltnis begr&#252;ndet, inhaltlich ausgestaltet oder
                                ge&#228;ndert werden soll oder Sie an uns eine Anfrage stellen, erheben und verwenden
                                wir personenbezogene Daten von Ihnen, soweit dies zu diesem Zwecke erforderlich ist
                                (Bestandsdaten). Wir erheben, verarbeiten und nutzen personenbezogene Daten soweit dies
                                erforderlich ist, um Ihnen die Inanspruchnahme des Webangebots zu erm&#246;glichen
                                (Nutzungsdaten). S&#228;mtliche personenbezogenen Daten werden nur solange gespeichert
                                wie dies f&#252;r den genannten Zweck (Bearbeitung Ihrer Anfrage oder Abwicklung eines
                                Vertrags) erforderlich ist. Hierbei werden steuer- und handelsrechtliche
                                Aufbewahrungsfristen von uns ber&#252;cksichtigt. Auf Anordnung der zust&#228;ndigen
                                Stellen m&#252;ssen wir im Einzelfall Auskunft &#252;ber diese Daten (Bestandsdaten)
                                erteilen, soweit dies f&#252;r Zwecke der Strafverfolgung, zur Gefahrenabwehr, zur
                                Erf&#252;llung der gesetzlichen Aufgaben der Verfassungsschutzbeh&#246;rden oder des
                                Milit&#228;rischen Abschirmdienstes oder zur Durchsetzung der Rechte am geistigen
                                Eigentum erforderlich ist.
                            </p>
                            <p>
                                Wir weisen ausdr&#252;cklich darauf hin, dass die Daten&#252;bertragung im Internet (z.
                                B. bei der Kommunikation per E-Mail) Sicherheitsl&#252;cken aufweisen kann. Vor dem
                                Zugriff auf Daten kann nicht l&#252;ckenlos gesch&#252;tzt werden.
                            </p>
                            <p>
                                Die Nutzung von im Rahmen der Impressumspflicht ver&#246;ffentlichten Kontaktdaten durch
                                Dritte zur &#220;bersendung von nicht ausdr&#252;cklich angeforderter Werbung und
                                Informationsmaterialien wird hiermit ausdr&#252;cklich untersagt. Ausgenommen hiervon
                                sind bestehende Gesch&#228;ftsbeziehungen bzw. es liegt Ihnen eine entsprechende
                                Einwilligung von uns vor.
                            </p>
                            <p>
                                Die Anbieter und alle auf dieser Website genannten Dritten behalten sich
                                ausdr&#252;cklich rechtliche Schritte im Falle der unverlangten Zusendung von
                                Werbeinformationen vor. Gleiches gilt f&#252;r die kommerzielle Verwendung und
                                Weitergabe der Daten.
                            </p>
                            <p>
                                <strong>
                                    Datenschutzerkl&#228;rung Facebook-Plugins (Like/ Gef&#228;llt mir-Button etc.)
                                </strong>
                            </p>
                            <p>
                                Auf dieser Website sind Plugins des Social-Media-Anbieters Facebook.com (f&#252;r
                                Europa: Facebook Irland Limited, 4 Grand Canal Square, Dublin 2, Ireland; f&#252;r die
                                USA: Facebook Inc., 1601 Willow Road, Menlo Park, CA 94025, USA), implementiert. Eine
                                &#220;bersicht der Facebook-Plugins finden Sie hier:{" "}
                                <a target="_blank" href="https://developers.facebook.com/docs/plugins/">
                                    https://developers.facebook.com/docs/plugins/
                                </a>
                                .
                            </p>
                            <p>
                                Durch Ihren Besuch auf Seiten mit Facebook-Plugins, wird durch das Plugin eine
                                Verbindung zwischen Ihrem Browser und einem Server von Facebook hergestellt. Hierdurch
                                erh&#228;lt Facebook Informationen zu Ihrer IP-Adresse und dem Besuch auf unserer
                                Website.
                            </p>
                            <p>
                                Durch Anklicken der Facebook-Plugins gelangen Sie zum Login-Bereich von Facebook.
                                Bereits eingeloggte Facebook-Nutzer k&#246;nnen sofort Inhalte unserer Website auf ihren
                                Facebook-Profilen ver&#246;ffentlichen. Infolge der Nutzung dieser Plugins kann Facebook
                                den Besuch unserer Website Ihrem pers&#246;nlichen Benutzerkonto zuordnen. Wir weisen
                                ausdr&#252;cklich darauf hin, dass wir als Anbieter dieser Internetseiten keine Kenntnis
                                vom Inhalt der &#252;bermittelten Daten sowie deren Nutzung durch Facebook erhalten.
                                Weitere Informationen zum Datenschutz durch Facebook erhalten Sie unter:{" "}
                                <a target="_blank" href="https://de-de.facebook.com/policy.php">
                                    https://de-de.facebook.com/policy.php
                                </a>
                                .
                            </p>
                            <p>
                                Um eine Zuordnung durch Facebook zwischen Ihrem Besuch auf unserer Website zu Ihrem
                                Benutzerkonto zu verhindern, m&#252;ssen Sie sich aus Ihrem Facebook-Account ausloggen.
                            </p>
                            <p>
                                <strong>Google Analytics</strong>
                            </p>
                            <p>
                                Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc.
                                ("Google"), 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Google Analytics
                                verwendet sog. "Cookies" (Textdateien), die auf Ihrem Computer gespeichert werden und
                                die eine Analyse der Benutzung der Website durch Sie erm&#246;glichen. Die durch das
                                Cookie erzeugten Informationen &#252;ber Ihre Benutzung dieser Website werden in der
                                Regel an einen Server von Google in den USA &#252;bertragen und dort gespeichert. Im
                                Falle der Aktivierung der IP-Anonymisierung auf dieser Website, wird Ihre IP-Adresse von
                                Google jedoch innerhalb von Mitgliedstaaten der Europ&#228;ischen Union oder in anderen
                                Vertragsstaaten des Abkommens &#252;ber den Europ&#228;ischen Wirtschaftsraum zuvor
                                gek&#252;rzt. Nur in Ausnahmef&#228;llen wird die vollst&#228;ndige IP-Adresse an einen
                                Server von Google in den USA &#252;bertragen und dort anonymisiert. Im Auftrag des
                                Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der
                                Website auszuwerten, um Reports &#252;ber die Websiteaktivit&#228;ten zusammenzustellen
                                und um weitere mit der Websitenutzung und der Internetnutzung verbundene
                                Dienstleistungen gegen&#252;ber dem Websitebetreiber zu erbringen. Die im Rahmen von
                                Google Analytics von Ihrem Browser &#252;bermittelte IP-Adresse wird nicht mit anderen
                                Daten von Google zusammengef&#252;hrt.
                            </p>
                            <p>
                                Sie k&#246;nnen die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer
                                Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall
                                gegebenenfalls nicht s&#228;mtliche Funktionen dieser Website vollumf&#228;nglich nutzen
                                k&#246;nnen. Sie k&#246;nnen dar&#252;ber hinaus die Erfassung der durch das Cookie
                                erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an
                                Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter
                                dem folgenden Link verf&#252;gbare Browser-Add-on herunterladen und installieren:{" "}
                                <a target="_blank" href="http://tools.google.com/dlpage/gaoptout?hl=de">
                                    http://tools.google.com/dlpage/gaoptout?hl=de
                                </a>
                                . Das Browser-Add-on zur Deaktivierung von Google Analytics ist mit Chrome, Internet
                                Explorer 8 bis 11, Safari, Firefox und Opera kompatibel.
                            </p>
                            <p>
                                Weitere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter folgenden
                                Links:{" "}
                                <a target="_blank" href="http://www.google.com/analytics/terms/de.html">
                                    http://www.google.com/analytics/terms/de.html
                                </a>{" "}
                                und{" "}
                                <a target="_blank" href="https://www.google.de/intl/de/policies/">
                                    https://www.google.de/intl/de/policies/
                                </a>
                                .
                            </p>
                            <p>
                                <strong>Google Adsense</strong>
                            </p>
                            <p>
                                Diese Website benutzt Google Adsense, einen Werbeanzeigendienst der Google Inc.
                                ("Google"), 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Google Adsense
                                verwendet sog. "Cookies" (Textdateien), die auf Ihrem Computer gespeichert werden und
                                die eine Analyse der Benutzung der Website durch Sie erm&#246;glichen. F&#252;r die
                                Auswertung verwendet Google Adsense zus&#228;tzlich sog. "Web Beacons" (kleine
                                unsichtbare Grafiken), welche z. B. Informationen wie den Besucherverkehr auf der Seite
                                erzeugen. Diese gesammelten Informationen (einschlie&#223;lich Ihrer IP-Adresse) werden
                                in der Regel an einen Server von Google in den USA &#252;bertragen und dort gespeichert.
                                Die Informationen verwendet Google, um Ihre Nutzung der Website im Hinblick auf die
                                Werbeanzeigen zu analysieren und so Auswertungen &#252;ber die Websiteaktivit&#228;ten
                                und Werbeanzeigen f&#252;r die Betreiber der Website vornehmen zu k&#246;nnen sowie
                                weitere Dienstleistungen in Bezug auf die Websitenutzung und Internetnutzung erbringen
                                zu k&#246;nnen. Die von Google gesammelten Informationen k&#246;nnen an Dritte, durch
                                Vertrag oder durch gesetzliche Vorschriften, von Google weitergegeben werden. Google
                                wird Ihre IP-Adresse nicht mit anderen von Ihnen gespeicherten Daten verkn&#252;pfen.
                            </p>
                            <p>
                                Sie k&#246;nnen die Speicherung der Cookies und die Anzeige der Web Beacons durch eine
                                entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch
                                darauf hin, dass Sie in diesem Fall gegebenenfalls nicht s&#228;mtliche Funktionen
                                dieser Website vollumf&#228;nglich nutzen k&#246;nnen.
                            </p>
                            <p>
                                Durch die Nutzung dieser Website erkl&#228;ren Sie sich mit der Bearbeitung der
                                &#252;ber Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und
                                zu dem zuvor benannten Zweck einverstanden.
                            </p>
                            <p>&nbsp;</p>
                            <p>
                                <strong>Disclaimer (Haftungsausschluss)</strong>
                            </p>
                            <p>
                                <strong>1. Haftung f&#252;r Inhalte</strong>
                            </p>
                            <p>
                                Als Diensteanbieter sind wir gem&#228;&#223; &#167; 7 Abs. 1 TMG f&#252;r eigene Inhalte
                                auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &#167;&#167; 8 bis
                                10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &#252;bermittelte oder
                                gespeicherte fremde Informationen zu &#252;berwachen oder nach Umst&#228;nden zu
                                forschen, die auf eine rechtswidrige T&#228;tigkeit hinweisen. Verpflichtungen zur
                                Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
                                bleiben hiervon unber&#252;hrt. Eine diesbez&#252;gliche Haftung ist jedoch erst ab dem
                                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&#246;glich. Bei Bekanntwerden
                                von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                            </p>
                            <p>
                                <strong>2. Haftung f&#252;r Links</strong>
                            </p>
                            <p>
                                Diese Website enth&#228;lt Links zu externen Webseiten Dritter, auf deren Inhalte kein
                                Einfluss genommen werden kann. Deshalb kann f&#252;r diese fremden Inhalte auch keine
                                Gew&#228;hr &#252;bernommen werden. F&#252;r die Inhalte der verlinkten Seiten ist stets
                                der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                                wurden zum Zeitpunkt der Verlinkung auf m&#246;gliche Rechtsverst&#246;&#223;e
                                &#252;berpr&#252;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                                erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                                konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                                Rechtsverletzungen werden derartige Links umgehend von dieser Website auf die
                                rechtsverletzende Site entfernen.
                            </p>
                            <p>
                                <strong>3. Urheberrecht</strong>
                            </p>
                            <p>
                                Die durch die Diensteanbieter, deren Mitarbeiter und beauftragte Dritte erstellten
                                Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                                Vervielf&#228;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                                au&#223;erhalb der Grenzen des Urheberrechtes bed&#252;rfen der vorherigen schriftlichen
                                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
                                nur f&#252;r den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte
                                auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
                                beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden derartige
                                Inhalte umgehend entfernen.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
