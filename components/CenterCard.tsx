
import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Center } from '@/types';

const CenterCard = ({ center }: { center: Center; }) => (
    <Card className="bg-gray-800 border-gray-700 overflow-hidden">
        <CardContent className="p-0">
            <div className="relative h-48 min-h-[200px] md:h-64">
                <Image
                    src={center.image}
                    alt={center.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-russo-one text-white mb-1">{center.name}</h3>
                    <p className="text-sm text-gray-200 flex items-center">
                        <MapPin size={14} className="mr-1" /> {center.location}
                    </p>
                </div>
            </div>
            <div className="p-4">
                <p className="text-gray-300 text-sm mb-4">{center.description}</p>
                <div className="flex justify-between items-center">
                    <Button variant="link" asChild className="p-0">
                        <Link href={center.mapUrl} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">
                            <MapPin size={14} className="mr-1" /> View on Map
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href="/contact" prefetch={false}>
                            Contact Us
                        </Link>
                    </Button>
                </div>
            </div>
        </CardContent>
    </Card>
);

export default memo(CenterCard);