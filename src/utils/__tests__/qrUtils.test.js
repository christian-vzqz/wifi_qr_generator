import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  generateWiFiString,
  validateWiFiData,
  downloadQRCode,
} from "../qrUtils";

describe("qrUtils", () => {
  describe("generateWiFiString", () => {
    it("should generate correct WiFi string with WPA security", () => {
      const result = generateWiFiString("MyWiFi", "password123", "WPA", false);
      expect(result).toBe("WIFI:T:WPA;S:MyWiFi;P:password123;H:false;;");
    });

    it("should generate correct WiFi string with WEP security", () => {
      const result = generateWiFiString("TestNetwork", "secret", "WEP", true);
      expect(result).toBe("WIFI:T:WEP;S:TestNetwork;P:secret;H:true;;");
    });

    it("should generate correct WiFi string with no password", () => {
      const result = generateWiFiString("OpenNetwork", "", "nopass", false);
      expect(result).toBe("WIFI:T:nopass;S:OpenNetwork;P:;H:false;;");
    });

    it("should escape special characters in SSID and password", () => {
      const result = generateWiFiString(
        'WiFi"Name;',
        'pass;word"',
        "WPA",
        false
      );
      expect(result).toBe(
        'WIFI:T:WPA;S:WiFi\\"Name\\;;P:pass\\;word\\";H:false;;'
      );
    });

    it("should use default values when not provided", () => {
      const result = generateWiFiString("MyWiFi", "password");
      expect(result).toBe("WIFI:T:WPA;S:MyWiFi;P:password;H:false;;");
    });
  });

  describe("validateWiFiData", () => {
    it("should return valid for correct data", () => {
      const result = validateWiFiData("MyWiFi", "password123");
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it("should return invalid for empty SSID", () => {
      const result = validateWiFiData("", "password123");
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain("Network name (SSID) is required");
    });

    it("should return invalid for SSID with only spaces", () => {
      const result = validateWiFiData("   ", "password123");
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain("Network name (SSID) is required");
    });

    it("should return invalid for SSID longer than 32 characters", () => {
      const longSSID = "a".repeat(33);
      const result = validateWiFiData(longSSID, "password123");
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain(
        "Network name cannot exceed 32 characters"
      );
    });

    it("should return invalid for empty password", () => {
      const result = validateWiFiData("MyWiFi", "");
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain("Password is required");
    });

    it("should return invalid for password with only spaces", () => {
      const result = validateWiFiData("MyWiFi", "   ");
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain("Password is required");
    });

    it("should return invalid for password shorter than 8 characters", () => {
      const result = validateWiFiData("MyWiFi", "1234567");
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain(
        "Password must be at least 8 characters long"
      );
    });

    it("should return multiple errors for multiple issues", () => {
      const result = validateWiFiData("", "123");
      expect(result.isValid).toBe(false);
      expect(result.errors).toHaveLength(2);
      expect(result.errors).toContain("Network name (SSID) is required");
      expect(result.errors).toContain(
        "Password must be at least 8 characters long"
      );
    });
  });

  describe("downloadQRCode", () => {
    beforeEach(() => {
      // Mock DOM elements
      global.document = {
        createElement: vi.fn(() => ({
          href: "",
          download: "",
          click: vi.fn(),
        })),
        body: {
          appendChild: vi.fn(),
          removeChild: vi.fn(),
        },
      };
    });

    it("should create download link with correct attributes", () => {
      const mockElement = {
        href: "",
        download: "",
        click: vi.fn(),
      };

      global.document.createElement.mockReturnValue(mockElement);

      const dataUrl = "data:image/png;base64,test";
      const filename = "test-qr";

      downloadQRCode(dataUrl, filename);

      expect(document.createElement).toHaveBeenCalledWith("a");
      expect(mockElement.href).toBe(dataUrl);
      expect(mockElement.download).toBe("test-qr.png");
      expect(mockElement.click).toHaveBeenCalled();
    });

    it("should use default filename when not provided", () => {
      const mockElement = {
        href: "",
        download: "",
        click: vi.fn(),
      };
      global.document.createElement.mockReturnValue(mockElement);

      const dataUrl = "data:image/png;base64,test";

      downloadQRCode(dataUrl);

      expect(mockElement.download).toBe("wifi-qr.png");
    });
  });
});
