import "@testing-library/jest-dom";

// Mock window.localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

// Mock window.navigator
Object.defineProperty(window, "navigator", {
  value: {
    language: "en-US",
    userLanguage: "en-US",
  },
  writable: true,
});

// Mock fetch
global.fetch = vi.fn();

// Mock ClipboardItem
global.ClipboardItem = vi.fn();

beforeEach(() => {
  localStorageMock.getItem.mockClear();
  localStorageMock.setItem.mockClear();
  localStorageMock.removeItem.mockClear();
  localStorageMock.clear.mockClear();
  global.fetch.mockClear();
});
