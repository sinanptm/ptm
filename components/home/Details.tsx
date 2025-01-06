import HomeSectionWrapper from "@/hoc/HomeSectionWrapper";
import { memo } from "react";

const Details = () => {
    return (
        <HomeSectionWrapper>
            <div className="w-full lg:w-1/2">
                <h2 className="text-2xl font-bold text-gray-900">About Us</h2>

            </div>

            <div className="w-full lg:w-1/2">
                <p className="max-w-xl mx-auto leading-relaxed text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
                    interdum lectus. Donec vel felis eget libero varius semper. Nulla facilisi.
                    Donec sodales, sapien vel efficitur hendrerit, sem neque venenatis velit,
                    in consectetur neque velit at velit. Sed vel ligula in nunc malesuada
                    tincidunt.
                </p>
            </div>
        </HomeSectionWrapper>
    );
};

export default memo(Details);