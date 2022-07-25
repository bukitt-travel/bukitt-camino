import {
    RiGroupLine,
    RiCoinsLine,
    RiFundsLine,
    RiTimeLine,
    RiInformationLine,
    RiMapPin2Line,
} from 'react-icons/ri';

import Label from '@/components/adventure/Details/Label';
import Value from '@/components/adventure/Details/Value';
import ValueSmall from '@/components/adventure/Details/ValueSmall';
import DetailContainer from '@/components/adventure/Details/DetailContainer';
import LabelContainer from '@/components/adventure/Details/LabelContainer';

const Details = ({ level, price, priceSingleSupplement, group, distance, duration, setOpen }) => {
    return (
        <section className="max-screen-2xl font-stone-50 mx-auto grid grid-cols-1 divide-y divide-dashed divide-stone-900 divide-opacity-50 bg-stone-50 text-stone-900 lg:grid-cols-6 lg:divide-x lg:divide-y-0">
            <DetailContainer>
                <LabelContainer>
                    <RiCoinsLine className="h-6 w-6" />
                    <Label>Price</Label>
                </LabelContainer>
                <div
                    className="mt-2 flex flex-col text-center lg:mt-4
				"
                >
                    <h4>
                        <span className="mr-1 text-xs font-light text-stone-700">from</span>
                        <span className="text-lg font-semibold capitalize lg:text-xl">
                            ${price}
                        </span>
                    </h4>
                    <div className="text-sm">
                        <span className="mr-1 font-medium">+ ${priceSingleSupplement}</span>
                        <span className="text-xs font-light text-stone-700">single supplement</span>
                    </div>
                </div>
            </DetailContainer>

            <DetailContainer>
                <LabelContainer>
                    <RiGroupLine className="h-6 w-6" />
                    <Label>Group</Label>
                </LabelContainer>

                <div className="mt-2 flex items-baseline gap-x-1 lg:mt-4">
                    <Value>{group}</Value>
                    <ValueSmall> min.</ValueSmall>
                </div>
            </DetailContainer>

            <DetailContainer>
                <LabelContainer>
                    <RiFundsLine className="h-6 w-6" />
                    <Label>Level</Label>
                </LabelContainer>
                <div className="mt-2 flex items-baseline gap-x-1 lg:mt-4">
                    <div className="flex-col text-center text-base font-semibold capitalize lg:text-xl">
                        <p>{level.minLevel} / </p>
                        <p>{level.maxLevel}</p>
                    </div>
                </div>
            </DetailContainer>

            <DetailContainer>
                <LabelContainer>
                    <RiMapPin2Line className="h-6 w-6" />
                    <Label>Distance</Label>
                </LabelContainer>
                <div className="mt-2 flex items-baseline gap-x-1 lg:mt-4">
                    <Value>{distance}</Value>
                    <ValueSmall> km.</ValueSmall>
                </div>
            </DetailContainer>

            <DetailContainer>
                <LabelContainer>
                    <RiTimeLine className="h-6 w-6" />
                    <Label>Duration</Label>
                </LabelContainer>
                <div className="mt-2 flex items-baseline gap-x-1 lg:mt-4">
                    <Value>{duration}</Value>
                    <ValueSmall> days</ValueSmall>
                </div>
            </DetailContainer>

            <DetailContainer>
                <LabelContainer>
                    <RiInformationLine className="h-6 w-6" />
                    <Label>Trip Details</Label>
                </LabelContainer>
                <div className="mt-2 flex items-baseline gap-x-1 lg:mt-4">
                    <div onClick={() => setOpen(true)} className="cursor-pointer">
                        <Value>+ details</Value>
                    </div>
                    <ValueSmall>{`(click)`}</ValueSmall>
                </div>
            </DetailContainer>
        </section>
    );
};

export default Details;
