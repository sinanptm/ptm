import { contactDetails, SITE_URL, socialLinks } from "@/constants";

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MartialArtsSchool",
    "@id": `${SITE_URL}#organization`,
    name: "PTM Kalari Pavukandy",
    url: SITE_URL,
    logo: `${SITE_URL}/assets/images/og/og-image.png`,
    description: "PTM Kalari Pavukandy is a prestigious martial arts institution preserving and teaching the ancient Indian martial art of Kalarippayattu.",
    foundingDate: "1994",
    founder: {
        "@type": "Person",
        name: "Sri Moidu Kurikkal",
    },
    address: {
        "@type": "PostalAddress",
        streetAddress: contactDetails[0].text,
        addressLocality: "Pavukandy",
        addressRegion: "Kerala",
        postalCode: "673614",
        addressCountry: "IN"
    },
    sameAs: socialLinks.map(el => el.href),
    telephone: contactDetails[1].text,
    email: contactDetails[2].text,
    areaServed: {
        "@type": "State",
        name: "Kerala"
    },
    knowsAbout: [
        "Kalarippayattu",
        "Traditional Martial Arts",
        "Kerala Martial Arts",
        "Traditional Healing",
        "Marma Treatment"
    ]
};

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: "PTM Kalari Pavukandy",
    description: "Traditional Kerala Martial Arts Academy - Learn authentic Kalarippayattu",
    publisher: {
        "@id": `${SITE_URL}#organization`
    }
};

export const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Traditional Kalarippayattu Training",
    description: "Comprehensive training in the ancient martial art of Kalarippayattu",
    provider: {
        "@id": `${SITE_URL}#organization`
    },
    educationalLevel: "Beginner to Advanced",
    coursePrerequisites: "No prior experience required",
    teaches: [
        "Traditional Kalarippayattu techniques",
        "Combat skills",
        "Body conditioning",
        "Meditation",
        "Traditional weapons training"
    ]
};
