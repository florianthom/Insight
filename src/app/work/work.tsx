import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React from "react";
import Image from "next/image";
import * as constants from "@/src/app/shared/constants/constants";
import { lebenserinnerungenWebsite } from "@/src/app/shared/constants/constants";
import Link from "next/link";

interface Props {
}

export const Work: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <div className="pt-36 sm:pt-56 pb-32 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 ">
                    <h2 className="text-black text-3xl tracking-headline">WORK & REFERENCES</h2>
                    <div className="text-base text-black pt-24">
                        Discover a snipped of the portfolio of crafted work and successful client projects.
                        The proven track record demonstrates the ability to cultivate strong customer relationships and
                        consistently deliver tailored results.
                        Whether it&apos;s expanding your client base through successful marketing initiatives,
                        developing various applications, or effectively managing cloud environments, the dedication
                        shines through.
                        This kind of end-to-end responsibility can be experienced by you too.
                    </div>


                    <div className="py-32 max-w-7xl mx-auto" id="erechnungkit">
                        <div className="flex justify-between gap-16 flex-col lg:flex-row">
                            <div>
                                <h3 className="text-2xl text-black">E-Rechnung-Kit</h3>
                                <div className="text-xs py-2" style={{ color: "black" }}>
                                    Link to the {" "}
                                    <Link href={constants.erechnungWebsite} target="_blank" rel="noopener noreferrer"
                                        className="underline font-medium tracking-wide">
                                        website
                                    </Link>
                                </div>
                                <div className="py-6">
                                    <div className="py-4">
                                        Situation
                                    </div>
                                    <div>
                                        Electronic invoices (e-invoices) are digital documents that contain
                                        invoice
                                        information in a structured and standardized format. In contrast to
                                        traditional
                                        paper or PDF invoices, e-invoices offer numerous advantages in terms
                                        of
                                        efficiency, accuracy and compliance.
                                        In the context of e-invoices in Germany and Europe, the
                                        Zugferd/Factur-X or
                                        XRechnung standards are particularly relevant. Some of these
                                        standards in
                                        particular are complicated to understand, time-consuming to
                                        implement and
                                        impractical to use, which makes dealing with e-invoicing challenging
                                        for
                                        many of
                                        those affected. It must be simple and understandable! In the area of
                                        e-invoicing, the link between this over-regulation and the users
                                        should now
                                        be
                                        created, which does not require a large IT department within the
                                        company.
                                    </div>
                                    <div className="py-4 pt-8">
                                        Solution
                                    </div>
                                    <div>
                                        The objective is to offer practical solutions for e-invoices and
                                        accounting
                                        for
                                        SMEs so that they can concentrate on the important parts of their
                                        business.
                                        The user is supported by the fact that e-invoices (=
                                        machine-readable
                                        format)
                                        are prepared for a review by an actual person, e.g. when an invoice
                                        is
                                        received.
                                        Otherwise, when an invoice is viewed, the user would have to dive
                                        into a XML
                                        file with a data format with different standards (Zugferd,
                                        XRechnung) in
                                        different variants (Profile Basic, Profile EN16991, CIUS, Extension,
                                        ...) in
                                        different syntaxes (CII, UBL) with different versions. Automated
                                        validation
                                        is
                                        also offered, in short: is this invoice correct? This is essential
                                        for
                                        e-invoices, as they must comply with business rules (BR) in
                                        accordance with
                                        EU
                                        Directive EN16931 and the national version (the German CIUS). An
                                        example of
                                        this
                                        is given with an excerpt from BR-47: Each sales tax
                                        breakdown &apos;VAT
                                        BREAKDOWN&apos; (BG-23) must be defined via a coded designation of a
                                        sales
                                        tax
                                        category&apos; VAT category code&apos; (BT-118).
                                        The user is also supported in the creation of e-invoices.
                                        Specifically, the
                                        user
                                        is guided through the creation of an e-invoice so that complicated
                                        gray
                                        areas
                                        are deliberately avoided.
                                        To implement these requirements, a core component and frontends
                                        based on it
                                        were
                                        written for various platforms such as Microsoft Outlook (especially
                                        for
                                        invoice
                                        receipt), Windows-Desktop (PC) and web. The core along with the web api
                                        was
                                        written in
                                        .Net Standard 2.0 and .Net 8 and integrates the processing logic for the
                                        described
                                        use cases as well as the interface to the payment processor (Stripe).
                                        The integration into Microsoft Outlook was implemented using MS Outlook VSTO
                                        Customization
                                        (Classic Outlook) and MS Outlook Addin (New Outlook).
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center my-auto shadow-md">
                                <Link href={constants.erechnungWebsite} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={"/static/images/erechnungkit.png"}
                                        alt="Cover of the work for E-Rechnung-Kit"
                                        width={0}
                                        height={0}
                                        className="w-[80rem] lg:w-[320rem]"
                                        priority={true}
                                        quality={100}
                                        unoptimized={constants.static_site}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="pb-32 max-w-7xl mx-auto" id="lebenserinnerungen">
                        <div className="flex justify-between gap-16 flex-col lg:flex-row">
                            <div>
                                <h3 className="text-2xl">Lebenserinnerungen e. V.</h3>
                                <div className="text-xs py-2" style={{ color: "black" }}>
                                    Link to the {" "}
                                    <Link href={constants.lebenserinnerungenWebsite} target="_blank" rel="noopener noreferrer" className="underline font-medium tracking-wide">
                                        website
                                    </Link>
                                </div>
                                <div className="py-6">
                                    <div className="py-4">
                                        Situation
                                    </div>
                                    <div>
                                        The association promotes personal, verbal and biographical storytelling
                                        with
                                        storytelling opportunities.
                                        It provides formats and suggestions for shared storytelling and promotes
                                        projects
                                        that serve this purpose.
                                        People are brought together through storytelling. The association
                                        develops,
                                        organizes and implements storytelling projects of various kinds in order
                                        to
                                        facilitate spontaneous, authentic storytelling. Storytelling requires
                                        listening, and that is something that people don&apos;t allow each other
                                        enough,
                                        especially when it comes to strangers. The association not only promotes
                                        storytelling, but also listening.
                                    </div>
                                    <div className="py-4 pt-8">
                                        Solution
                                    </div>
                                    <div>
                                        The customer has an existing html website as a baseline.
                                        Content cannot be added or maintained.
                                        The focus was to address these issues by expanding the website
                                        capabilities
                                        maintainability.
                                        The website was rebuilt using Wordpress to meet the requirements.
                                        For the page builder Elementor was selected and should help the team to
                                        update the
                                        website by themself.
                                        The service included the developing on the corporate identity.
                                        Especially the corporate design and the corporate language.
                                        At the end, the team received training on how to add their own content to the
                                        Wordpress site.
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center my-auto shadow-md">
                                <Link href={constants.lebenserinnerungenWebsite} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={"/static/images/lebenserinnerungen.png"}
                                        alt="Cover of the work for lebenserinnerungen"
                                        width={0}
                                        height={0}
                                        className="w-[32rem] lg:w-[128rem]"
                                        priority={true}
                                        quality={100}
                                        unoptimized={constants.static_site}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="bg-main-color text-white">
                <div className="py-32 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8" id="topnotch">
                    <div className="flex justify-between gap-16 flex-col lg:flex-row">
                        <div>
                            <h3 className="text-2xl">Topnotch</h3>
                            <div className="py-6">
                                <div className="py-4">
                                    Situation
                                </div>
                                <div>
                                    Topnotch is a review-sharing platform where users can evaluate
                                    competing
                                    state of
                                    the art offerings.
                                    It serves as a hub for product- and service providers to reach a
                                    global
                                    audience,
                                    while users can discover and
                                    engage with a diverse range of their offerings.
                                    Topnotch implements a platform business model including actors like
                                    viewer,
                                    advertisers and
                                    content creators like product manufacturers or service providers
                                    (companies).
                                    Topnotch tries to build a community ecosystem to address questions
                                    like
                                    “What is the
                                    best off-road automobile” or
                                    “What is the best platform to release on first web, mobile or
                                    Desktop”.
                                </div>
                                <div className="py-4 pt-8">
                                    Solution
                                </div>
                                <div>
                                    Topnotch is a company based on entrepreneurial work which emphasizes
                                    the
                                    hands-on
                                    competition of different offerings.
                                    Most of the decisions were open for discussion.
                                    The focus was mainly to work on modeling the business domain and
                                    prototyping
                                    a first
                                    web application.
                                    The infrastructure was set up in the cloud environment for the
                                    resulting
                                    frontend
                                    and backend.
                                    In addition, the SEO was optimized by optimizing the website by
                                    targeting
                                    selected
                                    keywords and
                                    setting up SEO tools especially in the Google environment.
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center my-auto">
                            <Image
                                src={"/static/images/topnotch_logo_white.svg"}
                                alt="Cover of the work for topnotch"
                                width={0}
                                height={0}
                                className="w-[32rem] lg:w-[128rem]"
                                priority={true}
                                quality={100}
                                unoptimized={constants.static_site}
                            />
                        </div>
                    </div>
                </div>
                <div className="pb-32 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8" id="bitlabs">
                    <div className="flex justify-between gap-16 flex-col lg:flex-row">
                        <div>
                            <h3 className="text-2xl">Bitlabs.global</h3>
                            <div className="py-6">
                                <div className="py-4">
                                    Situation
                                </div>
                                <div>
                                    Bitlabs is a venture specializing in process and product development and
                                    consulting for customers.
                                    They have been providing this service since 2022.
                                    Their goal is to help businesses thrive by providing them with the tools
                                    needed to succeed.
                                </div>
                                <div className="py-4 pt-8">
                                    Solution
                                </div>
                                <div>
                                    The customer needed a web presence to get their first customers in the
                                    surrounding area.
                                    SEO was an important aspect.
                                    To address the problem the development of a corporate identity for the
                                    customer was started.
                                    The website design was refined based on corporate identity.
                                    The website was development utilizing SEO-friendly server-side-rendering
                                    (SSR).
                                    The next step was to improve the marketing by further optimizing SEO on
                                    the
                                    application and web-space level.
                                    Data streams of website analytics were put into place to analyze current
                                    visitors and potential customers.
                                    A Google Business Profile/GMB was created.
                                    After only three months the customer was getting 15+ request/month via
                                    the
                                    developed website alone.
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center my-auto">
                            <Image
                                src={"/static/images/snippetBitlabs.png"}
                                alt="Cover of the work for bitlabs"
                                width={0}
                                height={0}
                                className="w-[32rem] lg:w-[128rem]"
                                priority={true}
                                quality={100}
                                unoptimized={constants.static_site}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="py-32 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="flex justify-between gap-16 flex-col lg:flex-row">
                        <div>
                            <h3 className="text-2xl text-black">Master-Thesis - HTW Berlin, Charité
                                Berlin</h3>
                            <div className="text-xs py-2" style={{ color: "black" }}>
                                “WEB APPLICATION FOR DEVELOPING PLATFORM-BASED BUSINESS MODELS IN THE
                                CONTEXT OF DIGITAL HEALTH”
                            </div>
                            <div className="text-xs py-2" style={{ color: "black" }}>
                                Link to the {" "}
                                <Link href={constants.masterThesisLink} target="_blank" rel="noopener noreferrer"
                                    className="underline font-medium tracking-wide">
                                    thesis
                                </Link>
                            </div>
                            <div className="py-6">
                                <div className="py-4">
                                    Domain
                                </div>
                                <div>
                                    The thesis covers the development of a web application (self-service)
                                    for
                                    the collaborative creation
                                    of platform-based business models in the Digital Health sector.
                                    The challenges include establishing the theoretical foundations,
                                    focusing on
                                    the systematic
                                    of business model development, which entails identifying, describing,
                                    and
                                    analyzing these models, as well as selecting an appropriate systematic.
                                    Additionally, implementing the business model development process
                                    according
                                    to the chosen systematic
                                    involves developing algorithms for computer-assisted implementation and
                                    integrating these algorithms into the context effectively.
                                </div>
                                <div className="py-4">
                                    Solution
                                </div>
                                <div>
                                    Various approaches to business model development were examined.
                                    One particularly promising systematic for business model development was
                                    selected.
                                    IT system and architecture was established according to the selected
                                    approach.
                                    That includes designing algorithms and appropriate domain models for the
                                    consistency matrix,
                                    the computation of the strategy bundles, to conduct the cluster analysis
                                    and
                                    the calculation of the characteristic&apos;s matrix.
                                    The theoretical foundation was implemented through a Proof of Concept
                                    (PoC)
                                    in the form of a web application.
                                    Finally, the integration of the algorithm and the domain model was
                                    successfully achieved.
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center my-auto shadow-md">
                            <Link href={constants.masterThesisLink} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={"/static/images/masterSnippetWebsite.svg"}
                                    alt="Snippet master thesis website"
                                    width={0}
                                    height={0}
                                    className="w-[32rem] lg:w-[128rem]"
                                    priority={true}
                                    quality={100}
                                    unoptimized={constants.static_site}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="pt-16 flex justify-between gap-16 flex-col lg:flex-row">
                        <div>
                            <h3 className="text-2xl text-black">Bachelor-Thesis - HTW Berlin, Charité
                                Berlin</h3>
                            <div className="text-xs py-2" style={{ color: "black" }}>
                                “NEURAL NETWORKS - PREDICTION-BASED CACHING OF DOCUMENTS”
                            </div>
                            <div className="text-xs py-2" style={{ color: "black" }}>
                                Link to the {" "}
                                <Link href={constants.bachelorThesisLink} target="_blank" rel="noopener noreferrer"
                                    className="underline font-medium tracking-wide">
                                    thesis
                                </Link>
                            </div>
                            <div className="py-6">
                                <div className="py-4">
                                    Domain
                                </div>
                                <div>
                                    The thesis covers the creation and integration of a system that
                                    determines
                                    whether any given document
                                    will be accessed again within a specified period based on past document
                                    accesses.
                                    Scalability investigations are conducted regarding the number of
                                    computers
                                    utilized.
                                    Challenges encompass three distinct areas.
                                    <ul className="list-disc text-base text-black list-outside pl-8">
                                        <li>Development of the system infrastructure: orchestration of
                                            compute
                                            nodes for the neural network
                                        </li>
                                        <li>Data analysis to get insights of the data: feature engineering
                                            for
                                            the neural network
                                        </li>
                                        <li>Development of a neural network</li>
                                    </ul>
                                </div>
                                <div className="py-4">
                                    Solution
                                </div>
                                <div>
                                    Achievements have been made across all critical areas: infrastructure,
                                    data
                                    analysis and the neural network.
                                    On the infrastructure site virtual servers have been deployed.
                                    These servers formed the computing cluster by installing spark (data
                                    processing) alongside with kubernetes (neural network processing)
                                    orchestration.
                                    The distributed storage was managed by NFS.
                                    In the realm of data analysis for Gigabytes of data, HDFS and Spark with
                                    Scala have been utilized,
                                    complemented by the RDD-API and Dataframe-API for streamlined
                                    processing.
                                    The data preprocessing involved the creation of batches tailored for
                                    computation with RNNs.
                                    A Recurrent Neural Network architecture was designed and implemented to
                                    tackle the classification problem.
                                    The network includes an encoder (Relu), Recurrent Layer (tanh) and a
                                    Decoder
                                    (Softmax).
                                    The Cost function is defined by argmax(Cross Entropy+L2-Regularization).
                                    For the optimization Gradient Descent (Adam Optimizer) was utilized.
                                    For research purposes PyTorch & MXNet and for the distributed training
                                    Tensorflow were used.
                                    Training Time was about several hours.
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center my-auto">
                            <Link href={constants.bachelorThesisLink} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={"/static/images/bachelorSnippedNetwork.svg"}
                                    alt="Snippet bachelor thesis website"
                                    width={0}
                                    height={0}
                                    className="w-[32rem] lg:w-[128rem]"
                                    priority={true}
                                    quality={100}
                                    unoptimized={constants.static_site}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
