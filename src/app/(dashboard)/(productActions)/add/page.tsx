import { Metadata } from 'next';
import { ButtonCustom } from '@/components';
import { NewCustomerIcon, RightArrowUp } from '@/icons';
import { OverviewAddProduct } from '@/ui';

export const metadata: Metadata = {
  title: 'Add Product',
  description:
    'Add a new product to your inventory by filling out the form below.',
};

const AddPage = () => {
  return (
    <section className="pb-[52px] pl-7 pr-[50px] pt-5">
      <div className="flex justify-between items-center mb-l">
        <h1 className="font-bold text-3xl">New Product</h1>
        <div className="flex">
          <ButtonCustom
            color="default"
            radius="sm"
            className="mr-5 h-auto gap-6 cursor-not-allowed"
            size="xs"
            startContent={<RightArrowUp width="14px" height="13px" />}
          >
            Export
          </ButtonCustom>
          <ButtonCustom
            color="dark"
            radius="sm"
            className="p-4 h-auto gap-4 text-xsm font-semibold text-white dark:text-black-900 cursor-not-allowed"
            startContent={
              <NewCustomerIcon width="26px" height="26px" fill="white" />
            }
          >
            New Customer
          </ButtonCustom>
        </div>
      </div>
      <OverviewAddProduct />
    </section>
  );
};

export default AddPage;
