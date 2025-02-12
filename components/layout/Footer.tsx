'use client';

import { memo } from "react";
import Link from "next/link";
import { contactDetails, navLinks, socialLinks } from '@/constants';

const Footer = () => {
    return (
        <footer className="bg-red-950/25 backdrop-blur-sm border-t border-orange-500/20">
            <div className="container px-4 pt-12 pb-5 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

                    <div className="space-y-4">
                        <h3 className={`text-orange-500 text-xl`}>PTM Kalari</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            A distinguished center for the ancient art of Kalarippayattu,
                            Kalari Marma, and Ayurveda since 1994.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className={`text-orange-500 text-xl`}>Quick Links</h3>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className={`text-orange-500 text-xl`}>Contact Us</h3>
                        <ul className="space-y-3">
                            {contactDetails.map(el => (
                                <li key={el.text} className="flex items-center gap-2 text-gray-300">
                                    {el.icon}
                                    <span className="text-sm">{el.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className={`text-orange-500 text-xl`}>Social Links</h3>
                        <div className="flex gap-4">
                            {socialLinks.map(({ href, label, Icon }, index) => (
                                <Link
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    prefetch={false}
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="text-gray-300 hover:text-orange-400 transition-colors"
                                >
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="mt-8 pt-8 border-t border-gray-800">
                    <p className="text-center text-gray-400 text-sm">
                        © {new Date().getFullYear()} PTM Kalari Pavukkandy. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);

