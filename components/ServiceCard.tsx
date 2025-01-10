import { Service } from "@/types";
import Link from "next/link";
import { memo } from "react";

const ServiceCard = ({ title, description, icon: Icon }: Service) => (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-orange-500/20 hover:scale-105">
        <Icon className="w-12 h-12 text-orange-500 mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <Link
            href="/services"
            prefetch={false}
            className="text-orange-500 hover:text-orange-400 transition-colors duration-300"
        >
            Learn More
        </Link>
    </div>
);

export default memo(ServiceCard);