import { render } from '@testing-library/react';
import OverviewSkeleton from '../OverviewSkeleton';

describe('OverviewSkeleton UI', () => {
  test('renders overview skeleton', () => {
    const { container } = render(<OverviewSkeleton productCount={4} />);
    expect(container).toMatchSnapshot();
  });
});
