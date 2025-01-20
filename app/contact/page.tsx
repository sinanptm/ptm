import type { Metadata } from "next"
import { memo } from "react"
import ContactHero from "@/components/contact/ContactHero"
import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"
import AllCenters from "@/components/AllCenters"

export const metadata: Metadata = {
  title: "Contact Us | PTM Kalari Pavukandy - Traditional Healing & Martial Arts",
  description:
    "Get in touch with PTM Kalari Pavukandy for inquiries about our traditional healing services and martial arts training programs.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ptmkalari.vercel.app/contact",
    siteName: "PTM Kalari Pavukandy",
    title: "Contact PTM Kalari Pavukandy | Traditional Healing & Martial Arts Center",
    description:
      "Reach out to us for more information about our services, training programs, or to schedule a visit to our center.",
    images: [
      {
        url: "/assets/images/og/contact-og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact PTM Kalari Pavukandy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PTM Kalari Pavukandy | Traditional Healing & Martial Arts",
    description: "Get in touch with us for inquiries about our services and programs.",
    images: ["/assets/images/og/contact-og-image.png"],
    creator: "@ptmkalari",
    site: "@ptmkalari",
  },
  alternates: {
    canonical: "https://ptmkalari.vercel.app/contact",
  },
}

const ContactPage = () => {
  return (
    <main className="relative overflow-hidden w-full min-h-screen">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>
      <AllCenters />
    </main>
  )
}

export default memo(ContactPage)

