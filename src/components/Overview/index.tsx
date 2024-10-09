'use client';
import { CalendarIcon } from '@/icons';
import { RenderSelect } from '../Select';
import { dateDicker, productSelector } from '@/mocks';
import OverviewStats from '../OverviewStats';

const Overview = () => {
  return (
    <section className="w-full rounded-lg">
      <div className="flex pt-5 pl-5">
        <div className="pl-lg pr-5 py-3 rounded-lg flex justify-between  border-1 border-gray-50 w-[242px] cursor-pointer">
          <CalendarIcon width="20px" height="21px" fill="black" />
          <span className="font-semibold text-sm">12/12/2022 - 12/20/2022</span>
        </div>
        <RenderSelect
          defaultSelectedKey="Weekly"
          items={dateDicker}
          width="120px"
        />
        <RenderSelect
          defaultSelectedKey="All Products"
          items={productSelector}
          width="152px"
        />
      </div>
      <OverviewStats />
    </section>
  );
};

export default Overview;
