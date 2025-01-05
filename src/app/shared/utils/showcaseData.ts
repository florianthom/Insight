import { Showcase } from "../models/Showcase"

const elektronikRechnung: Showcase = {
    title: "Elektronik-Rechnung.de: E-invoicing for SME's in Germany the easy way",
    description: "Elektronik-Rechnung.de enables you to display and process e-invoices of common industry standards like Factur-X / ZUGFeRD and XRechnung in the respective formats (UBL/CII), variants (CIUS or extension / profiles) or versions on platforms like Microsoft Outlook, nativ Windows-Desktop and Web.",
    imagePath: "/static/images/elektronikrechnung.png",
    link: "/work/#elektronikrechnung"
}

const lebenserinnerungen: Showcase = {
    title: "Lebenserinnerungen.org: Association for the promotion of life-historical remembering and storytelling",
    description: "Promotion of personal, verbal storytelling and providing suitable formats, methods, storytelling occasions, and educational offerings. Storytelling builds bridges and connects. Stories are the threads that bring people from different worlds and times together.",
    imagePath: "/static/images/lebenserinnerungen.png",
    link: "/work/#lebenserinnerungen"
}

const topnotch: Showcase = {
    title: "Topnotch: Worlds state of the art - What's your take?",
    description: "Get an overview about worlds state of the art across various global domains, providing insights into the cutting-edge technologies, innovations, and trends shaping the contemporary world. You ever wanted to know what's the best bike for mountain biking or what's the best family car and why - here you are in the right place.",
    imagePath: "/static/images/topnotch-logo.png",
    link: "/work/#topnotch"
}

const cloudTemplate: Showcase = {
    title: "Cloud Architecture Solution Template",
    description: "Cloud Architecture Solution Template: A starting point for cloud applications with terraform and ansible. AWS cluster solution utilizing aws eks with focus on security and scalability.",
    imagePath: "/static/images/infra-aws.png",
    link: "/work"
}

const ptolemy: Showcase = {
    title: "Ptolomy Venture",
    description: "Exploring an array of map visualizations crafted using diverse tools not only illustrates the breadth of available cartographic techniques but also highlights the nuanced ways geographical data can be portrayed and analyzed.",
    imagePath: "/static/images/map-visualization.png",
    link: "/work"
}

interface ShowcaseData {
    topnotch: Showcase,
    lebenserinnerungen: Showcase,
    cloudTemplate: Showcase,
    ptolemy: Showcase,
    elektronikRechnung: Showcase,
}
export const showcaseData: ShowcaseData = {
    topnotch,
    lebenserinnerungen,
    cloudTemplate,
    ptolemy,
    elektronikRechnung
}