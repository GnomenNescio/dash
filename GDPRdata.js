const gdprData = {
  art: [
    ["Ch. 1","General provisions (Art. 1–4)","https://gdpr.fan/c1"],
    [1,"Subject-matter and objectives"],[2,"Material scope"],[3,"Territorial scope"],[4,"Definitions"],
    ["Ch. 2","Principles (Art. 5–11)","https://gdpr.fan/c2"],
    [5,"Principles relating to processing of personal data"],[6,"Lawfulness of processing"],[7,"Conditions for consent"],
    [8,"Child's consent for information society services"],[9,"Processing of special categories of personal data"],
    [10,"Processing re criminal convictions and offences"],[11,"Processing not requiring identification"],
    ["Ch. 3","Rights of the data subject (Art. 12–23)","https://gdpr.fan/c3"],
    [12,"Transparent information, communication and modalities"],[13,"Information where data collected from data subject"],
    [14,"Information where data not obtained from data subject"],[15,"Right of access by the data subject"],
    [16,"Right to rectification"],[17,"Right to erasure ('right to be forgotten')"],[18,"Right to restriction of processing"],
    [19,"Notification obligation re rectification or erasure"],[20,"Right to data portability"],[21,"Right to object"],
    [22,"Automated individual decision-making, including profiling"],[23,"Restrictions"],
    ["Ch. 4","Controller and processor (Art. 24–43)","https://gdpr.fan/c4"],
    [24,"Responsibility of the controller"],[25,"Data protection by design and by default"],[26,"Joint controllers"],
    [27,"Representatives not established in the Union"],[28,"Processor"],
    [29,"Processing under authority of controller or processor"],[30,"Records of processing activities"],
    [31,"Cooperation with the supervisory authority"],[32,"Security of processing"],
    [33,"Notification of breach to supervisory authority"],[34,"Communication of breach to data subject"],
    [35,"Data protection impact assessment"],[36,"Prior consultation"],
    [37,"Designation of the data protection officer"],[38,"Position of the data protection officer"],
    [39,"Tasks of the data protection officer"],[40,"Codes of conduct"],[41,"Monitoring of approved codes of conduct"],
    [42,"Certification"],[43,"Certification bodies"],
    ["Ch. 5","Transfers to third countries (Art. 44–50)","https://gdpr.fan/c5"],
    [44,"General principle for transfers"],
    [45,"Transfers based on adequacy decision"],[46,"Transfers subject to appropriate safeguards"],
    [47,"Binding corporate rules"],[48,"Transfers or disclosures not authorised by Union law"],
    [49,"Derogations for specific situations"],[50,"International cooperation for data protection"],
    ["Ch. 6","Independent supervisory authorities (Art. 51–59)","https://gdpr.fan/c6"],
    [51,"Supervisory authority"],[52,"Independence"],[53,"General conditions for supervisory authority members"],
    [54,"Rules on establishment of supervisory authority"],[55,"Competence"],
    [56,"Competence of lead supervisory authority"],[57,"Tasks"],[58,"Powers"],[59,"Activity reports"],
    ["Ch. 7","Cooperation and consistency (Art. 60–76)","https://gdpr.fan/c7"],
    [60,"Cooperation between lead and other supervisory authorities"],[61,"Mutual assistance"],
    [62,"Joint operations of supervisory authorities"],[63,"Consistency mechanism"],[64,"Opinion of the Board"],
    [65,"Dispute resolution by the Board"],[66,"Urgency procedure"],[67,"Exchange of information"],
    [68,"European Data Protection Board"],[69,"Independence"],[70,"Tasks of the Board"],[71,"Reports"],
    [72,"Procedure"],[73,"Chair"],[74,"Tasks of the Chair"],[75,"Secretariat"],[76,"Confidentiality"],
    ["Ch. 8","Remedies, liability and penalties (Art. 77–84)","https://gdpr.fan/c8"],
    [77,"Right to lodge a complaint with supervisory authority"],
    [78,"Right to judicial remedy against supervisory authority"],
    [79,"Right to judicial remedy against controller or processor"],[80,"Representation of data subjects"],
    [81,"Suspension of proceedings"],[82,"Right to compensation and liability"],
    [83,"General conditions for imposing administrative fines"],[84,"Penalties"],
    ["Ch. 9","Specific processing situations (Art. 85–91)","https://gdpr.fan/c9"],
    [85,"Processing and freedom of expression and information"],[86,"Processing and public access to official documents"],
    [87,"Processing of the national identification number"],[88,"Processing in the context of employment"],
    [89,"Safeguards for archiving, research or statistical purposes"],[90,"Obligations of secrecy"],
    [91,"Existing data protection rules of churches and religious associations"],
    ["Ch. 10","Delegated acts and implementing acts (Art. 92–93)","https://gdpr.fan/c10"],
    [92,"Exercise of the delegation"],[93,"Committee procedure"],
    ["Ch. 11","Final provisions (Art. 94–99)","https://gdpr.fan/c11"],
    [94,"Repeal of Directive 95/46/EC"],[95,"Relationship with Directive 2002/58/EC"],
    [96,"Relationship with previously concluded Agreements"],[97,"Commission reports"],
    [98,"Review of other Union legal acts on data protection"],[99,"Entry into force and application"]
  ],
  rec: [
    [1,"Data Protection as a Fundamental Right"],[2,"Respect of Fundamental Rights and Freedoms"],
    [3,"Directive 95/46/EC Harmonisation"],[4,"Data Protection in Balance with Other Fundamental Rights"],
    [5,"Cooperation Between Member States to Exchange Personal Data"],
    [6,"High Level of Data Protection Despite Increased Exchange"],
    [7,"Framework Based on Control and Certainty"],[8,"Adoption into National Law"],
    [9,"Different Standards of Protection by Directive 95/46/EC"],
    [10,"Harmonised Level of Data Protection Despite National Scope"],
    [11,"Harmonisation of Powers and Sanctions"],[12,"Authorization of the European Parliament and Council"],
    [13,"Taking Account of Micro, Small and Medium-Sized Enterprises"],[14,"Not Applicable to Legal Persons"],
    [15,"Technology Neutrality"],[16,"Not Applicable to National and Common Security"],
    [17,"Adaptation of Regulation (EC) No 45/2001"],[18,"Not Applicable to Personal or Household Activities"],
    [19,"Not Applicable to Criminal Prosecution"],[20,"Respecting Independence of the Judiciary"],
    [21,"Liability Rules of Intermediary Service Providers"],[22,"Processing by an Establishment"],
    [23,"Applicable if Data Subjects in Union are Targeted"],[24,"Applicable if Data Subjects in Union are Profiled"],
    [25,"Applicable to Controllers Due to International Law"],[26,"Not Applicable to Anonymous Data"],
    [27,"Not Applicable to Data of Deceased Persons"],[28,"Introduction of Pseudonymisation"],
    [29,"Pseudonymisation at the Same Controller"],[30,"Online Identifiers for Profiling and Identification"],
    [31,"Not Applicable to Public Authorities in Official Tasks"],[32,"Conditions for Consent"],
    [33,"Consent to Certain Areas of Scientific Research"],[34,"Genetic Data"],[35,"Health Data"],
    [36,"Determination of the Main Establishment"],[37,"Group of Undertakings"],
    [38,"Special Protection of Children's Personal Data"],[39,"Principles of Data Processing"],
    [40,"Lawfulness of Data Processing"],[41,"Legal Basis or Legislative Measures"],
    [42,"Burden of Proof and Requirements for Consent"],[43,"Freely Given Consent"],
    [44,"Performance of a Contract"],[45,"Fulfillment of Legal Obligations"],
    [46,"Vital Interests of the Data Subject"],[47,"Overriding Legitimate Interest"],
    [48,"Overriding Legitimate Interest Within Group of Undertakings"],
    [49,"Network and Information Security as Legitimate Interest"],[50,"Further Processing of Personal Data"],
    [51,"Protecting Sensitive Personal Data"],[52,"Exceptions to Prohibition on Special Categories Processing"],
    [53,"Sensitive Data in Health and Social Sector"],[54,"Sensitive Data in Public Health Sector"],
    [55,"Processing by Official Authorities for Religious Communities"],
    [56,"Processing Political Opinions by Parties"],[57,"Additional Data for Identification"],
    [58,"Principle of Transparency"],[59,"Procedures for Exercise of Data Subject Rights"],
    [60,"Information Obligation"],[61,"Time of Information"],
    [62,"Exceptions to Obligation to Provide Information"],[63,"Right of Access"],
    [64,"Identity Verification"],[65,"Right of Rectification and Erasure"],[66,"Right to be Forgotten"],
    [67,"Restriction of Processing"],[68,"Right of Data Portability"],[69,"Right to Object"],
    [70,"Right to Object to Direct Marketing"],[71,"Profiling"],
    [72,"EDPB Guidance Regarding Profiling"],[73,"Restrictions of Rights and Principles"],
    [74,"Responsibility and Liability of the Controller"],[75,"Risks to Rights and Freedoms of Natural Persons"],
    [76,"Risk Assessment"],[77,"Risk Assessment Guidelines"],
    [78,"Appropriate Technical and Organisational Measures"],
    [79,"Allocation of Responsibilities"],[80,"Designation of a Representative"],
    [81,"The Use of Processors"],[82,"Record of Processing Activities"],[83,"Security of Processing"],
    [84,"Risk Evaluation and Impact Assessment"],[85,"Notification of Breaches to Supervisory Authority"],
    [86,"Notification of Data Subjects in Case of Breaches"],[87,"Promptness of Reporting / Notification"],
    [88,"Format and Procedures of the Notification"],[89,"Elimination of General Reporting Requirement"],
    [90,"Data Protection Impact Assessment"],[91,"Necessity of a DPIA"],[92,"Broader DPIA"],
    [93,"DPIA at Authorities"],[94,"Consultation of the Supervisory Authority"],
    [95,"Support by the Processor"],[96,"Consultation in the Course of a Legislative Process"],
    [97,"Data Protection Officer"],[98,"Preparation of Codes of Conduct"],
    [99,"Consultation of Stakeholders in Codes of Conduct"],[100,"Certification"],
    [101,"General Principles for International Data Transfers"],
    [102,"International Agreements for Appropriate Level of Protection"],
    [103,"Appropriate Level Based on Adequacy Decision"],[104,"Criteria for an Adequacy Decision"],
    [105,"Consideration of International Agreements for Adequacy"],[106,"Monitoring and Periodic Review"],
    [107,"Amendment, Revocation and Suspension of Adequacy Decisions"],[108,"Appropriate Safeguards"],
    [109,"Standard Data Protection Clauses"],[110,"Binding Corporate Rules"],
    [111,"Exceptions for Certain Cases of International Transfers"],
    [112,"Transfers due to Important Reasons of Public Interest"],
    [113,"Transfers Not Repetitive / Limited Number of Data Subjects"],
    [114,"Safeguarding Rights in Absence of Adequacy Decision"],
    [115,"Third Country Rules Contrary to the Regulation"],
    [116,"Cooperation Among Supervisory Authorities"],[117,"Establishment of Supervisory Authorities"],
    [118,"Monitoring of Supervisory Authorities"],[119,"Organisation of Several Supervisory Authorities"],
    [120,"Features of Supervisory Authorities"],[121,"Independence of Supervisory Authorities"],
    [122,"Responsibility of Supervisory Authorities"],
    [123,"Cooperation with Each Other and with the Commission"],
    [124,"Lead Authority Regarding Processing in Several Member States"],
    [125,"Competences of the Lead Authority"],[126,"Joint Decisions"],
    [127,"Information Regarding Local Processing"],
    [128,"Responsibility Regarding Processing in the Public Interest"],
    [129,"Tasks and Powers of Supervisory Authorities"],
    [130,"Consideration of Authority with which Complaint Lodged"],
    [131,"Attempt of an Amicable Settlement"],[132,"Awareness-Raising Activities and Specific Measures"],
    [133,"Mutual Assistance and Provisional Measures"],[134,"Participation in Joint Operations"],
    [135,"Consistency Mechanism"],[136,"Binding Decisions and Opinions of the Board"],
    [137,"Provisional Measures"],[138,"Urgency Procedure"],[139,"European Data Protection Board"],
    [140,"Secretariat and Staff of the Board"],[141,"Right to Lodge a Complaint"],
    [142,"Right to Mandate a Not-For-Profit Body"],[143,"Judicial Remedies"],
    [144,"Related Proceedings"],[145,"Choice of Venue"],[146,"Indemnity"],[147,"Jurisdiction"],
    [148,"Penalties"],[149,"Penalties for Infringements of National Rules"],[150,"Administrative Fines"],
    [151,"Administrative Fines in Denmark and Estonia"],[152,"Power of Sanction of Member States"],
    [153,"Processing for Journalistic, Academic, Artistic or Literary Purposes"],
    [154,"Principle of Public Access to Official Documents"],[155,"Processing in Employment Context"],
    [156,"Processing for Archiving, Research or Statistical Purposes"],
    [157,"Information from Registries and Scientific Research"],[158,"Processing for Archiving Purposes"],
    [159,"Processing for Scientific Research Purposes"],[160,"Processing for Historical Research Purposes"],
    [161,"Consenting to Clinical Trials"],[162,"Processing for Statistical Purposes"],
    [163,"Production of European and National Statistics"],
    [164,"Professional or Equivalent Secrecy Obligations"],
    [165,"Status of Churches and Religious Associations"],
    [166,"Delegated Acts of the Commission"],[167,"Implementing Powers of the Commission"],
    [168,"Implementing Acts on Standard Contractual Clauses"],
    [169,"Immediately Applicable Implementing Acts"],
    [170,"Principle of Subsidiarity and Proportionality"],
    [171,"Repeal of Directive 95/46/EC and Transitional Provisions"],
    [172,"Consultation of the European Data Protection Supervisor"],
    [173,"Relationship to Directive 2002/58/EC"]
  ]
};

const edpbData = {
  gl: [
    ["7/2020","Concepts of controller and processor","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-072020-concepts-controller-and-processor-gdpr_en"],
    ["5/2020","Consent under Regulation 2016/679","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-052020-consent-under-regulation-2016679_en"],
    ["4/2019","Art. 25 — Data Protection by Design and by Default","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-42019-article-25-data-protection-design-and_en"],
    ["1/2024","Processing based on Article 6(1)(f) GDPR","https://www.edpb.europa.eu/our-work-tools/documents/public-consultations/2024/guidelines-12024-processing-personal-data-based_en"],
    ["9/2022","Personal data breach notification under GDPR","https://edpb.europa.eu/our-work-tools/documents/public-consultations/2022/guidelines-92022-personal-data-breach_en"],
    ["1/2021","Examples regarding Data Breach Notification","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-012021-examples-regarding-personal-data-breach_en"],
    ["5/2021","Interplay between Art. 3 and Chapter V (transfers)","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-052021-interplay-between-application-article-3_en"],
    ["1/2022","Data subject rights — Right of access","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-012022-data-subject-rights-right-access_en"],
    ["2/2019","Art. 6(1)(b) — online services to data subjects","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-22019-processing-personal-data-under-article-61b_en"],
    ["3/2018","Territorial scope of the GDPR (Art. 3)","https://edpb.europa.eu/our-work-tools/documents/public-consultations/2018/guidelines-32018-territorial-scope-gdpr-article_en"],
    ["2/2018","Derogations of Article 49","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-22018-derogations-article-49-under-regulation_en"],
    ["1/2025","Pseudonymisation","https://www.edpb.europa.eu/our-work-tools/documents/public-consultations/2025/guidelines-012025-pseudonymisation_en"],
    ["8/2020","Targeting of social media users","https://edpb.europa.eu/our-work-tools/documents/public-consultations/2020/guidelines-082020-targeting-social-media-users_en"],
    ["2/2023","Technical Scope of Art. 5(3) ePrivacy Directive","https://edpb.europa.eu/our-work-tools/documents/public-consultations/2023/guidelines-22023-technical-scope-art-53-eprivacy_en"],
    ["3/2022","Deceptive design patterns in social media","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-032022-deceptive-design-patterns-social-media_en"],
    ["4/2022","Calculation of administrative fines","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-042022-calculation-administrative-fines-under_en"],
    ["3/2019","Processing through video devices","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-32019-processing-personal-data-through-video_en"],
    ["5/2019","Right to be Forgotten in search engines","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-52019-criteria-right-be-forgotten-search-engines_en"],
    ["3/2025","Interplay between the DSA and the GDPR","https://www.edpb.europa.eu/our-work-tools/documents/public-consultations/2025/guidelines-32025-interplay-between-dsa-and-gdpr_en"],
    ["10/2020","Restrictions under Article 23 GDPR","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-102020-restrictions-under-article-23-gdpr_en"],
    ["Joint","Interplay between the DMA and the GDPR","https://www.edpb.europa.eu/our-work-tools/documents/public-consultations/2025/joint-guidelines-interplay-between-digital_en"],
    ["8/2022","Identifying a controller or processor's lead SA","https://edpb.europa.eu/our-work-tools/documents/public-consultations/2022/guidelines-82022-identifying-controller-or_en"],
    ["2/2024","Article 48 GDPR","https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-022024-article-48-gdpr_en"],
    ["6/2020","Interplay of PSD2 and GDPR","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-062020-interplay-second-payment-services_en"],
    ["1/2020","Connected vehicles and mobility applications","https://edpb.europa.eu/our-work-tools/documents/public-consultations/2020/guidelines-12020-processing-personal-data_en"],
    ["2/2021","Virtual Voice Assistants","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-022021-virtual-voice-assistants_en"],
    ["3/2020","Health data for scientific research (COVID-19)","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-032020-processing-data-concerning-health-purpose_en"],
    ["2/2025","Processing of personal data through blockchain technologies","https://www.edpb.europa.eu/our-work-tools/documents/public-consultations/2025/guidelines-022025-processing-personal-data_en"],
    ["4/2020","Location data and contact tracing (COVID-19)","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-042020-use-location-data-and-contact-tracing_en"],
    ["1/2019","Codes of Conduct and Monitoring Bodies","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-12019-codes-conduct-and-monitoring-bodies-0_en"],
    ["4/2021","Codes of conduct as tools for transfers","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-042021-codes-conduct-tools-transfers_en"],
    ["7/2022","Certification as a tool for transfers","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-072022-certification-tool-transfers_en"],
    ["4/2018","Accreditation of certification bodies (Art. 43)","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-42018-accreditation-certification-bodies-under_en"],
    ["1/2018","Certification criteria (Art. 42 and 43)","https://edpb.europa.eu/our-work-tools/documents/public-consultations/2018/guidelines-12018-certification-and-identifying_en"],
    ["2/2020","Art. 46(2)(a) and 46(3)(b) — transfers between public authorities","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-22020-articles-46-2-and-46-3-b-regulation_en"],
    ["9/2020","Relevant and reasoned objection","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-092020-relevant-and-reasoned-objection-under_en"],
    ["2/2022","Application of Article 60 GDPR","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-022022-application-article-60-gdpr_en"],
    ["3/2021","Application of Article 65(1)(a) GDPR","https://edpb.europa.eu/our-work-tools/documents/public-consultations/2021/guidelines-032021-application-article-651a-gdpr_en"],
    ["6/2022","Practical implementation of amicable settlements","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-062022-practical-implementation-amicable_en"],
    ["5/2022","Facial recognition in law enforcement","https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-052022-use-facial-recognition-technology-area_en"],
    ["1/2023","Article 37 Law Enforcement Directive","https://edpb.europa.eu/our-work-tools/documents/public-consultations/2023/guidelines-012023-article-37-law-enforcement_en"]  ],
  recs: [
    ["1/2020","Supplementary measures for transfer tools","https://edpb.europa.eu/our-work-tools/our-documents/recommendations/recommendations-012020-measures-supplement-transfer_en"],
    ["2/2020","European Essential Guarantees for surveillance measures","https://edpb.europa.eu/our-work-tools/our-documents/recommendations/recommendations-022020-european-essential-guarantees_en"],
    ["1/2026","Processor Binding Corporate Rules (Art. 47)","https://www.edpb.europa.eu/our-work-tools/documents/public-consultations/2026/recommendations-12026-application-approval-and_en"],
    ["2/2025","Legal basis for user accounts on e-commerce websites","https://www.edpb.europa.eu/our-work-tools/documents/public-consultations/2025/recommendations-22025-legal-basis-requiring_en"],
    ["1/2025","2027 WADA World Anti-Doping Code","https://www.edpb.europa.eu/our-work-tools/our-documents/recommendations/recommendations-12025-2027-wada-world-anti-doping-code_en"],
    ["1/2022","Controller Binding Corporate Rules (Art. 47)","https://www.edpb.europa.eu/our-work-tools/our-documents/recommendations/recommendations-12022-application-approval-and_en"],
    ["1/2021","Adequacy referential under the LED","https://edpb.europa.eu/our-work-tools/our-documents/recommendations/recommendations-012021-adequacy-referential-under-law_en"],
  ]
};

const lovdataLookup = [

  // === PERSONVERN ===
  {
    id: 'NL/lov/2018-06-15-38',
    tags: ['personopplysningsloven', 'popl', 'personvern', 'gdpr'],
    title: 'Personopplysningsloven',
  },
  {
    id: 'SF/forskrift/2018-07-02-1108',
    tags: ['epostforskriften', 'ekomforskriften', 'cookies', 'epost', 'markedsføring'],
    title: 'Epostforskriften',
  },
  {
    id: 'PROP/forarbeid/prop-56-ls-201718',
    tags: ['prop 56', 'forarbeid personopplysningsloven', 'prop personopplysning'],
    title: 'Prop. 56 LS (2017–18) Personopplysningsloven',
  },
  {
    id: 'PROP/forarbeid/prop-158-l-202021',
    tags: ['prop 158', 'forarbeid personopplysningsloven', 'ytringsfrihet', 'informasjonsfrihet', 'offentleglova'],
    title: 'Prop. 158 L (2020–21) Endr. personopplysningsloven og offentleglova (ytrings- og informasjonsfrihet mv.)',
  },

  // === HELSE OG FORSKNING ===
  {
    id: 'NL/lov/2014-06-20-43',
    tags: ['helseregisterloven', 'hregl', 'helseregister'],
    title: 'Helseregisterloven',
  },
  {
    id: 'PROP/forarbeid/prop-72-l-201314',
    tags: ['prop 72', 'forarbeid helseregisterloven'],
    title: 'Prop. 72 L (2013–14) Helseregisterloven',
  },
  {
    id: 'NL/lov/2008-06-20-44',
    tags: ['helseforskningsloven', 'hforsknl', 'helseforskning'],
    title: 'Helseforskningsloven',
  },
  {
    id: 'PROP/forarbeid/prop-109-l-202425',
    tags: ['prop 109 l', 'forarbeid helseforskningsloven', 'endring helseforskning 2025'],
    title: 'Prop. 109 L (2024–25) Endr. helseforskningsloven',
  },
  {
    id: 'NL/lov/2014-06-20-42',
    tags: ['pasientjournalloven', 'pjl', 'pasientjournal', 'helseopplysninger'],
    title: 'Pasientjournalloven',
  },
  {
    id: 'PROP/forarbeid/prop-154-l-202425',
    tags: ['prop 154', 'forarbeid pasientjournalloven', 'taushetsplikt helseopplysninger'],
    title: 'Prop. 154 L (2024–25) Endr. pasientjournalloven mv.',
  },
  {
    id: 'PROP/forarbeid/prop-152-l-202425',
    tags: ['prop 152', 'helsedata', 'tilgjengeliggjøring', 'helselovgivningen', 'sikkerhetstiltak'],
    title: 'Prop. 152 L (2024–25) Endr. helselovgivningen (tilgjengeliggjøring helsedata)',
  },
  {
    id: 'SF/forskrift/2019-06-21-789',
    tags: ['kvalitetsregisterforskriften', 'medisinske kvalitetsregistre'],
    title: 'Forskrift om medisinske kvalitetsregistre',
  },
  {
    id: 'NL/lov/2019-06-21-32',
    tags: ['statistikkloven', 'statl', 'statistikk', 'ssb'],
    title: 'Statistikkloven',
  },
  {
    id: 'PROP/forarbeid/prop-72-ls-201819',
    tags: ['prop 72 ls', 'forarbeid statistikkloven'],
    title: 'Prop. 72 LS (2018–19) Statistikkloven',
  },
  {
    id: 'SF/forskrift/2020-12-11-2731',
    tags: ['statistikkforskriften', 'forskrift til statistikkloven'],
    title: 'Statistikkforskriften',
  },

  // === SIKKERHET ===
  {
    id: 'NL/lov/2023-12-20-108',
    tags: ['digitalsikkerhetsloven', 'digsikl', 'digital sikkerhet', 'nis'],
    title: 'Digitalsikkerhetsloven',
  },
  {
    id: 'SF/forskrift/2025-06-20-1131',
    tags: ['digitalsikkerhetsforskriften', 'digsikforskriften'],
    title: 'Digitalsikkerhetsforskriften',
  },
  {
    id: 'PROP/forarbeid/prop-109-ls-202223',
    tags: ['prop 109 ls', 'forarbeid digitalsikkerhetsloven', 'prop digitalsikkerhet'],
    title: 'Prop. 109 LS (2022–23) Digitalsikkerhetsloven',
  },
  {
    id: 'NL/lov/2018-06-01-24',
    tags: ['sikkerhetsloven', 'sikkl', 'nasjonal sikkerhet', 'nsm', 'klarering'],
    title: 'Sikkerhetsloven',
  },
  {
    id: 'PROP/forarbeid/prop-153-l-201617',
    tags: ['prop 153', 'forarbeid sikkerhetsloven'],
    title: 'Prop. 153 L (2016–17) Sikkerhetsloven',
  },

  // === UTDANNING ===
  {
    id: 'NL/lov/2024-03-08-9',
    tags: ['universitets- og høyskoleloven', 'uh-loven', 'uhl', 'universitet', 'høyskole'],
    title: 'Universitets- og høyskoleloven',
  },
  {
    id: 'PROP/forarbeid/prop-126-l-202223',
    tags: ['prop 126', 'forarbeid uh-loven', 'forarbeid universitets- og høyskoleloven'],
    title: 'Prop. 126 L (2022–23) UH-loven',
  },
  {
    id: 'SF/forskrift/2024-06-28-1392',
    tags: ['uh-forskriften', 'universitets- og høyskoleforskriften', 'uhforskriften'],
    title: 'UH-forskriften',
  },
  {
    id: 'NL/lov/2023-06-09-30',
    tags: ['opplæringsloven', 'opplæringslova', 'oppll', 'opplæring', 'skole'],
    title: 'Opplæringslova',
  },
  {
    id: 'PROP/forarbeid/prop-57-l-202223',
    tags: ['prop 57', 'forarbeid opplæringslova'],
    title: 'Prop. 57 L (2022–23) Opplæringslova',
  },
  {
    id: 'PROP/forarbeid/prop-131-l-202425',
    tags: ['prop 131', 'individregistre', 'opplæringslova', 'barnehageloven', 'fravær', 'overtredelsesgebyr'],
    title: 'Prop. 131 L (2024–25) Endr. opplæringslova mv. (individregistre, overtredelsesgebyr)',
  },
  {
    id: 'PROP/forarbeid/prop-79-l-202526',
    tags: ['prop 79 2025-26', 'opplæringslova samleproposisjon', 'barnehageloven', 'opplæring'],
    title: 'Prop. 79 L (2025–26) Endr. opplæringslova og barnehageloven mv. (samleproposisjon)',
  },

  // === BARN OG FAMILIE ===
  {
    id: 'NL/lov/1981-04-08-7',
    tags: ['barneloven', 'barnelova', 'bl', 'barn og foreldre'],
    title: 'Barnelova',
  },
  {
    id: 'PROP/forarbeid/prop-117-l-202425',
    tags: ['prop 117', 'forarbeid ny barnelov', 'barnelova', 'barn og foreldre'],
    title: 'Prop. 117 L (2024–25) Ny barnelov',
  },
  {
    id: 'PROP/forarbeid/prop-94-l-202122',
    tags: ['prop 94', 'personopplysninger barn', 'frivillige tiltak', 'barne- og familieområdet'],
    title: 'Prop. 94 L (2021–22) Forskriftshjemmel personopplysninger – frivillige tiltak barne-/familieområdet',
  },

  // === FORVALTNINGSRETT ===
  {
    id: 'NL/lov/1814-05-17',
    tags: ['grunnloven', 'grl', 'grunnlov', 'konstitusjon', '§ 102', '§ 100'],
    title: 'Grunnloven',
  },
  {
    id: 'NL/lov/1967-02-10',
    tags: ['forvaltningsloven', 'fvl', 'forvaltning', 'taushetsplikt', 'enkeltvedtak'],
    title: 'Forvaltningsloven',
  },
  {
    id: 'PROP/forarbeid/prop-116-l-201213',
    tags: ['prop 116', 'forarbeid forvaltningsloven endring', 'elektronisk kommunikasjon', 'forvaltning'],
    title: 'Prop. 116 L (2012–13) Endr. forvaltningsloven (elektronisk kommunikasjon)',
  },
  {
    id: 'NL/lov/2025-06-20-81',
    tags: ['ny forvaltningslov', 'forvaltningsloven 2025', 'fvl 2025'],
    title: 'Forvaltningsloven (2025)',
  },
  {
    id: 'PROP/forarbeid/prop-79-l-202425',
    tags: ['prop 79', 'forarbeid ny forvaltningslov'],
    title: 'Prop. 79 L (2024–25) Ny forvaltningslov',
  },
  {
    id: 'NL/lov/2006-05-19-16',
    tags: ['offentleglova', 'offentlighetsloven', 'offl', 'innsyn', 'offentlighet'],
    title: 'Offentleglova',
  },
  {
    id: 'PROP/forarbeid/otprp-102-200405',
    tags: ['otprp 102', 'forarbeid offentleglova', 'forarbeid offentlighetsloven'],
    title: 'Ot.prp. nr. 102 (2004–05) Offentleglova',
  },
  {
    id: 'PROP/forarbeid/otprp-9-200506',
    tags: ['otprp 9', 'forarbeid offentleglova', 'offentleglova re-fremsettelse'],
    title: 'Ot.prp. nr. 9 (2005–06) Offentleglova (re-fremsettelse)',
  },
  {
    id: 'PROP/forarbeid/prop-125-l-201011',
    tags: ['prop 125', 'forarbeid offentleglova endring', 'lønnsoppgåver', 'fødselsnummer', 'offentleglova'],
    title: 'Prop. 125 L (2010–11) Endr. offentleglova (lønnsoppgåver, fødselsnummer)',
  },
  {
    id: 'PROP/forarbeid/prop-111-l-201516',
    tags: ['prop 111', 'forarbeid offentleglova vidarebruk', 'vidarebruksdirektivet', 'offentleglova'],
    title: 'Prop. 111 L (2015–16) Endr. offentleglova (vidarebruksdirektivet)',
  },
  {
    id: 'NL/lov/2025-06-20-96',
    tags: ['arkivloven', 'arkivlova', 'arkl', 'arkiv', 'dokumentasjon'],
    title: 'Arkivlova (2025)',
  },
  {
    id: 'PROP/forarbeid/prop-52-l-202425',
    tags: ['prop 52', 'forarbeid ny arkivlov', 'arkivlova 2025', 'dokumentasjon', 'arkiv'],
    title: 'Prop. 52 L (2024–25) Ny arkivlov (dokumentasjon og arkiv)',
  },
  {
    id: 'SF/forskrift/2004-06-25-988',
    tags: ['eforvaltningsforskriften', 'eforv', 'elektronisk kommunikasjon forvaltning'],
    title: 'eForvaltningsforskriften',
  },

  // === ARBEIDSLIV ===
  {
    id: 'NL/lov/2005-06-17-62',
    tags: ['arbeidsmiljøloven', 'aml', 'arbeidsmiljø', 'arbeidsforhold'],
    title: 'Arbeidsmiljøloven',
  },

  // === ANSKAFFELSER ===
  {
    id: 'NL/lov/2016-06-17-73',
    tags: ['anskaffelsesloven', 'offanskl', 'anskaffelse', 'offentlige anskaffelser'],
    title: 'Anskaffelsesloven',
  },
  {
    id: 'PROP/forarbeid/prop-51-l-201516',
    tags: ['prop 51', 'forarbeid anskaffelsesloven'],
    title: 'Prop. 51 L (2015–16) Anskaffelsesloven',
  },
  {
    id: 'PROP/forarbeid/prop-147-l-202425',
    tags: ['prop 147', 'forarbeid anskaffelsesloven endring', 'samfunnshensyn', 'offentlige anskaffelser'],
    title: 'Prop. 147 L (2024–25) Endr. anskaffelsesloven (samfunnshensyn mv.)',
  },
  {
    id: 'SF/forskrift/2016-08-12-974',
    tags: ['anskaffelsesforskriften', 'foa', 'offentlige anskaffelser forskrift'],
    title: 'Anskaffelsesforskriften',
  },

  // === DATA OG FORVALTNING ===
  {
    id: 'PROP/forarbeid/prop-54-ls-202526',
    tags: ['prop 54 ls', 'dataforvaltningsloven', 'datadeling', 'åpne data', 'dataforvaltningsforordningen'],
    title: 'Prop. 54 LS (2025–26) Dataforvaltningsloven (datadeling og dataforvaltning)',
  },
];

const datatilsynetData = [

  // === PLIKTER OG PRINSIPPER ===
  {
    url: 'https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/',
    tags: ['plikter', 'virksomhet', 'oversikt'],
    title: 'Virksomhetenes plikter (oversikt)',
  },
  {
    url: 'https://www.datatilsynet.no/rettigheter-og-plikter/personvernprinsippene/grunnleggende-personvernprinsipper/',
    tags: ['prinsipper', 'art. 5', 'grunnleggende', 'personvernprinsipper'],
    title: 'Veileder om personvernprinsippene',
  },
  {
    url: 'https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/fastsette-formal/',
    tags: ['formål', 'formålsbegrensning'],
    title: 'Fastsette formål',
  },
  {
    url: 'https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/om-behandlingsgrunnlag/',
    tags: ['behandlingsgrunnlag', 'art. 6', 'samtykke', 'rettslig grunnlag'],
    title: 'Behandlingsgrunnlag',
  },
  {
    url: 'https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/om-behandlingsgrunnlag/nodvendig-for-a-ivareta-legitime-interesser---interesseavveiing/',
    tags: ['interesseavveining', 'berettiget interesse', 'art. 6(1)(f)', 'legitime interesser'],
    title: 'Interesseavveining (art. 6(1)(f))',
    // sjekk URL – lang sti
  },

  // === PROTOKOLL, ÅPENHET, RETTIGHETER ===
  {
    url: 'https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/protokoll-over-behandlingsaktiviteter/',
    tags: ['protokoll', 'behandlingsprotokoll', 'art. 30', 'ropa'],
    title: 'Protokoll over behandlingsaktiviteter',
  },
  {
    url: 'https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/informasjon-og-apenhet/',
    tags: ['informasjonsplikt', 'åpenhet', 'personvernerklæring', 'art. 13', 'art. 14', 'transparens'],
    title: 'Informasjon og åpenhet',
  },
  {
    url: 'https://www.datatilsynet.no/rettigheter-og-plikter/den-registrertes-rettigheter/',
    tags: ['rettigheter', 'registrerte', 'innsyn', 'sletting', 'portabilitet'],
    title: 'Den registrertes rettigheter',
  },
  {
    url: 'https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/retting-og-sletting/',
    tags: ['retting', 'sletting', 'art. 16', 'art. 17'],
    title: 'Retting og sletting',
  },

  // === SIKKERHET OG INTERNKONTROLL ===
  {
    url: 'https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/informasjonssikkerhet-internkontroll/',
    tags: ['informasjonssikkerhet', 'internkontroll', 'art. 32', 'sikkerhet', 'tiltak'],
    title: 'Informasjonssikkerhet og internkontroll',
  },

  // === BEHANDLINGSANSVARLIG OG DATABEHANDLER ===
  {
    url: 'https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/behandlingsansvarlig-og-databehandler/',
    tags: ['behandlingsansvarlig', 'databehandler', 'roller', 'art. 26', 'art. 28'],
    title: 'Behandlingsansvarlig og databehandler',
  },
  {
    url: 'https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/hvordan-lage-en-databehandleravtale/',
    tags: ['databehandleravtale', 'dba', 'art. 28', 'avtale'],
    title: 'Databehandleravtale',
  },

  // === DPIA ===
  {
    url: 'https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/vurdering-av-personvernkonsekvenser/',
    tags: ['dpia', 'personvernkonsekvenser', 'art. 35', 'konsekvensvurdering', 'pvk'],
    title: 'DPIA – veileder',
  },

  // === INNEBYGD PERSONVERN ===
  {
    url: 'https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/innebygd-personvern-og-personvern-som-standard/',
    tags: ['innebygd personvern', 'privacy by design', 'art. 25', 'pbd', 'standardinnstilling'],
    title: 'Innebygd personvern og personvern som standard',
  },
  {
    url: 'https://www.datatilsynet.no/regelverk-og-verktoy/veiledere/programvareutvikling-med-innebygd-personvern/',
    tags: ['programvareutvikling', 'innebygd personvern', 'utvikler', 'software'],
    title: 'Programvareutvikling med innebygd personvern',
    // sjekk URL – kan ha endret sti
  },

  // === OVERFØRING TIL TREDJELAND ===
  {
    url: 'https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/overforing-av-personopplysninger-ut-av-eos/',
    tags: ['overføring', 'tredjeland', 'eøs', 'schrems', 'kapittel v', 'scc', 'standardkontrakt', 'tia'],
    title: 'Overføring av personopplysninger ut av EØS',
  },
  {
    url: 'https://www.datatilsynet.no/aktuelt/aktuelle-nyheter-2023/nye-regler-for-overforing-av-personopplysninger-til-usa/',
    tags: ['usa', 'overføring', 'adekvansbeslutning', 'data privacy framework', 'dpf'],
    title: 'Overføring til USA (DPF)',
  },
  {
    url: 'https://www.datatilsynet.no/aktuelt/aktuelle-nyheter-2021/nye-standardavtaler/',
    tags: ['standardavtale', 'scc', 'standardkontrakt', 'overføring', 'databehandleravtale'],
    title: 'Nye standardavtaler (SCC)',
  },

  // === AVVIK ===
  {
    url: 'https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/avvik/',
    tags: ['avvik', 'brudd', 'databrudd', 'art. 33', 'art. 34', 'varsling', 'notifikasjon'],
    title: 'Brudd på personopplysningssikkerheten (avvik)',
  },

  // === PERSONVERNOMBUD ===
  {
    url: 'https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/personvernombud/',
    tags: ['personvernombud', 'pvo', 'dpo', 'art. 37', 'art. 38', 'art. 39', 'ombud'],
    title: 'Personvernombud',
  },
  {
    url: 'https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/personvernombud/personvernombudets-oppgaver/',
    tags: ['personvernombud', 'oppgaver', 'dpo', 'rolle'],
    title: 'Personvernombudets oppgaver',
  },

  // === KUNSTIG INTELLIGENS ===
  {
    url: 'https://www.datatilsynet.no/regelverk-og-verktoy/rapporter-og-utredninger/kunstig-intelligens/',
    tags: ['ki', 'ai', 'kunstig intelligens', 'maskinlæring'],
    title: 'Kunstig intelligens og personvern (rapport)',
    // sjekk URL
  },
  {
    url: 'https://www.datatilsynet.no/regelverk-og-verktoy/sandkasse-for-kunstig-intelligens/',
    tags: ['sandkasse', 'sandbox', 'ki', 'ai', 'innovasjon'],
    title: 'Sandkasse for kunstig intelligens',
  },

  // === TEMAER: FORSKNING, BARN, ARBEIDSLIV ===
  {
    url: 'https://www.datatilsynet.no/personvern-pa-ulike-omrader/forskning-helse-og-velferd/',
    tags: ['forskning', 'helse', 'velferd', 'rek', 'vitenskapelig'],
    title: 'Forskning, helse og velferd',
  },
  {
    url: 'https://www.datatilsynet.no/personvern-pa-ulike-omrader/skole-barn-unge/',
    tags: ['barn', 'unge', 'skole', 'samtykke', 'utdanning'],
    title: 'Barn, unge og skole',
  },
  {
    url: 'https://www.datatilsynet.no/personvern-pa-ulike-omrader/personvern-pa-arbeidsplassen/',
    tags: ['arbeidsplass', 'ansatt', 'arbeidsgiver', 'epost', 'innsyn', 'kontroll'],
    title: 'Personvern på arbeidsplassen',
  },
  {
    url: 'https://www.datatilsynet.no/personvern-pa-ulike-omrader/overvaking-og-sporing/',
    tags: ['overvåking', 'kamera', 'sporing', 'gps'],
    title: 'Overvåking, sporing og varsling',
  },

  // === VERKTØY OG REFERANSE ===
  {
    url: 'https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/sjekkliste/',
    tags: ['sjekkliste', 'virksomhet', 'komme i gang'],
    title: 'Sjekkliste for virksomheten',
  },
  {
    url: 'https://www.datatilsynet.no/regelverk-og-verktoy/lover-og-regler/',
    tags: ['regelverk', 'lover', 'regler', 'gdpr', 'personopplysningsloven'],
    title: 'Lover og regler',
  },
  {
    url: 'https://www.datatilsynet.no/regelverk-og-verktoy/ordliste/',
    tags: ['ordliste', 'begreper', 'definisjon'],
    title: 'Ordliste',
  },
  {
    url: 'https://www.datatilsynet.no/regelverk-og-verktoy/ordbok/',
    tags: ['ordbok', 'norsk', 'engelsk', 'oversettelse'],
    title: 'Ordbok (norsk–engelsk)',
  },
  {
    url: 'https://www.datatilsynet.no/regelverk-og-verktoy/sporsmal-svar/',
    tags: ['faq', 'spørsmål', 'svar'],
    title: 'Spørsmål og svar',
  },

  // === KONTAKT OG TILSYN ===
  {
    url: 'https://www.datatilsynet.no/om-datatilsynet/kontakt-oss/veiledningstjenesten/',
    tags: ['veiledningstjeneste', 'kontakt', 'telefon', 'rådgivning'],
    title: 'Veiledningstjenesten',
  },
  {
    url: 'https://www.datatilsynet.no/regelverk-og-verktoy/internasjonalt/retningslinjer-og-uttalelser-fra-personvernradet/',
    tags: ['edpb', 'personvernrådet', 'retningslinjer', 'norsk oversettelse'],
    title: 'EDPB-retningslinjer (norske oversettelser)',
  },
];