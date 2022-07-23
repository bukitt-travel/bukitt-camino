import {
    IoPricetag,
    IoPeople,
    IoPin,
    IoTime,
    IoBarChart,
    IoInformationCircle,
} from 'react-icons/io5';

import Label from '@/components/adventure/Details/Label';
import LabelContainer from '@/components/adventure/Details/LabelContainer';
import ValueContainer from '@/components/adventure/Details/ValueContainer';
import Value from '@/components/adventure/Details/Value';
import ValueSmall from '@/components/adventure/Details/ValueSmall';
import DetailContainer from '@/components/adventure/Details/DetailContainer';

const Details = ({ level, price, group, distance, duration, setOpen }) => {
    return (
        <section className="col-span-1 flex flex-col divide-y divide-dashed divide-stone-900 divide-opacity-50 md:col-span-2">
            <DetailContainer>
                <LabelContainer>
                    <IoPricetag className="h-5 w-5" />
                    <Label>Price</Label>
                </LabelContainer>
                <ValueContainer>
                    <ValueSmall>from</ValueSmall>
                    <Value> ${price}</Value>
                    {/* <div className="text-sm">
                        <span className="font-medium">+ ${priceSingleSupplement} </span>
                        <span className="text-xs text-stone-500">single supplement</span>
                    </div> */}
                </ValueContainer>
            </DetailContainer>

            <DetailContainer>
                <LabelContainer>
                    <IoPeople className="h-5 w-5" />
                    <Label>Group</Label>
                </LabelContainer>

                <ValueContainer>
                    <Value>{group}</Value>
                    <ValueSmall> min.</ValueSmall>
                </ValueContainer>
            </DetailContainer>

            <DetailContainer>
                <LabelContainer>
                    <IoBarChart className="h-5 w-5" />
                    <Label>Level</Label>
                </LabelContainer>
                <ValueContainer>
                    <Value>{level.minLevel}</Value> /<Value>{level.maxLevel}</Value>
                </ValueContainer>
            </DetailContainer>

            <DetailContainer>
                <LabelContainer>
                    <IoPin className="h-5 w-5" />
                    <Label>Distance</Label>
                </LabelContainer>
                <ValueContainer>
                    <Value>{distance}</Value>
                    <ValueSmall> km.</ValueSmall>
                </ValueContainer>
            </DetailContainer>

            <DetailContainer>
                <LabelContainer>
                    <IoTime className="h-5 w-5" />
                    <Label>Duration</Label>
                </LabelContainer>
                <ValueContainer>
                    <Value>{duration}</Value>
                    <ValueSmall> days</ValueSmall>
                </ValueContainer>
            </DetailContainer>

            <DetailContainer>
                <LabelContainer>
                    <IoInformationCircle className="h-5 w-5" />
                    <Label>Trip Details</Label>
                </LabelContainer>
                <ValueContainer>
                    <div onClick={() => setOpen(true)} className="cursor-pointer">
                        <Value>+ details</Value>
                    </div>
                    <ValueSmall>{`(click)`}</ValueSmall>
                </ValueContainer>
            </DetailContainer>
        </section>
    );
};

export default Details;
