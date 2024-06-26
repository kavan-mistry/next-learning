
import '@testing-library/jest-dom/extend-expect';
import { useRouter } from 'next/router';
import { createMockRouter } from 'next-router-mock';

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

beforeEach(() => {
  useRouter.mockImplementation(() => createMockRouter({
    pathname: '/',
    route: '/',
    asPath: '/',
  }));
});
