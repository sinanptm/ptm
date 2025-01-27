import { centers, contactDetails, services, SITE_URL, socialLinks } from "@/constants";

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["MartialArtsSchool", "LocalBusiness", "SportsActivityLocation"],
    "@id": `${SITE_URL}#organization`,
    name: "PTM Kalari Pavukandy",
    alternateName: ["PTM Kalarisangam", "പി ടി എം കളരി"],
    url: SITE_URL,
    logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/images/og/og-image.png`,
        width: "1200",
        height: "630"
    },
    description: "PTM Kalari Pavukandy is Kerala's premier Kalarippayattu institution, preserving and teaching authentic traditional martial arts since 1994. Founded by Guru Sri Moidu Kurikkal, we offer comprehensive training in all aspects of Kalarippayattu, including combat techniques, healing practices, and spiritual development.",
    foundingDate: "1994",
    founder: {
        "@type": "Person",
        name: "Sri Moidu Kurikkal",
        jobTitle: "Founder and Grand Master",
        description: "Renowned Kalarippayattu master with decades of experience in traditional martial arts"
    },
    address: {
        "@type": "PostalAddress",
        streetAddress: contactDetails[0].text,
        addressLocality: "Pavukandy",
        addressRegion: "Kerala",
        postalCode: "673614",
        addressCountry: "IN"
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: "11.480415",
        longitude: "75.813903"
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
        "Marma Treatment",
        "Kalari Chikilsa",
        "Meipayattu",
        "Vadipayattu",
        "Kalari Massage",
        "Ancient Indian Martial Arts"
    ],
    offers: services.map(service => ({
        "@type": "Offer",
        name: service.title,
        description: service.description
    })),
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Kalarippayattu Training Programs",
        itemListElement: [
            {
                "@type": "Offer",
                name: "Traditional Kalarippayattu Training",
                description: "Comprehensive martial arts training including combat techniques, weapons training, and physical conditioning"
            },
            {
                "@type": "Offer",
                name: "Kalari Treatment",
                description: "Traditional healing practices including massage and therapeutic treatments"
            },
            {
                "@type": "Offer",
                name: "Special Training Programs",
                description: "Customized training programs for children, women, and professional artists"
            }
        ]
    },
    additionalType: [
        "https://schema.org/SportsClub",
        "https://schema.org/HealthAndBeautyBusiness"
    ],
    keywords: [
        "Kalarippayattu training",
        "Traditional Kerala martial arts",
        "Kalari treatment center",
        "Best Kalari institute Kerala",
        "Authentic martial arts training"
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


export const centerSchemas = centers.map(center => ({
    "@context": "https://schema.org",
    "@type": ["MartialArtsSchool", "LocalBusiness"],
    "@id": `${SITE_URL}/contact`,
    name: center.name,
    description: center.description,
    url: `${SITE_URL}/contact`,
    telephone: center.phone,
    image: {
        "@type": "ImageObject",
        url: `${SITE_URL}${center.image}`
    },
    address: {
        "@type": "PostalAddress",
        addressLocality: center.location.split(',')[0].trim(),
        addressRegion: "Kerala",
        addressCountry: "IN"
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: center.name === "PTM Kalari Pavukkandy" ? "11.480415" : "",
        longitude: center.name === "PTM Kalari Pavukkandy" ? "75.813903" : ""
    },
    employee: {
        "@type": "Person",
        name: center.instructor,
        jobTitle: "Lead Instructor"
    },
    parentOrganization: {
        "@id": `${SITE_URL}#organization`
    },
    hasMap: center.mapUrl,
    areaServed: {
        "@type": "City",
        name: center.location.split(',')[0].trim()
    }
}));
