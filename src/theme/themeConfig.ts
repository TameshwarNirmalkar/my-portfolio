import { type ThemeConfig, theme } from "antd";

const themeConfig: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    borderRadius: 6,
    // boxShadowTertiary: "none",
    colorPrimaryBorder: "#ff8904",
    colorTextBase: "#999",
    colorLink: "#ff6900",
    colorLinkActive: "ff8909",
    colorPrimary: "#ff6900",
    // colorBgElevated: "#18181b",
    // colorText: "#999",
    // colorBorder: "#64748b",
    // controlItemBgHover: "#64748b",
    // colorTextDisabled: "#64748b",
    // colorInfoBg: "#0ea5e9",
    // colorInfoBorder: "#0ea5e9",
    // colorSuccessBg: "#d6fdc3",
    // colorSuccessBorder: "#16a34a",
    // colorWarningBg: "#eab308",
    // colorWarningBorder: "#ca8a04",
    // colorErrorBg: "#b91c1c",
    // colorErrorBorder: "#b91c1c",
    // colorErrorText: "#ffffff",
    // colorIcon: "#cbd5e1",
    // colorSplit: " #cbd5e1",
    // colorBgMask: "#d8ebff61",
    // colorTextQuaternary: "#e2e8f0", // --------- dropdown default text color,
    // colorTextPlaceholder: "#e4e4e7",
    // colorTextLabel: "#ffffff",
  },
  components: {
    Carousel: {
      arrowSize: 40,
      arrowOffset: -50,
      dotGap: 10,
      dotHeight: 8,
      dotWidth: 50,
      dotActiveWidth: 50,
    },
    Button: {
      algorithm: true,
      defaultActiveBorderColor: "rgb(250,173,20)",
      defaultActiveColor: "rgb(250,173,20)",
      colorPrimary: "#ff8904",
      primaryShadow: "none",
      boxShadow: "none",
      dangerShadow: "none",
      colorBorder: "none",
    },
    Layout: {
      bodyBg: "#1e293b",
      triggerBg: "#64748b",
      headerPadding: "0px 5px",
    },
    Menu: {
      darkItemHoverBg: "#64748b",
      darkItemSelectedBg: "#64748b",
    },
    Table: {
      headerBg: "#64748b",
      borderColor: "#64748b",
      footerBg: "#64748b",
    },
    Pagination: {
      itemBg: "#18181b",
      itemActiveBg: "#64748b",
    },
    Input: {
      activeBorderColor: "#64748b",
      activeShadow: "none",
      colorText: "#444444",
    },
    Card: {
      colorBorder: "#64748b",
      borderRadius: 50,
      actionsBg: "#1e293b",
    },
    DatePicker: {
      cellHoverBg: "#f59e0b",
      cellActiveWithRangeBg: "#f59e0b",
      cellHoverWithRangeBg: "#f59e0b",
    },
    Select: {
      selectorBg: "#334155",
      optionActiveBg: "#64748b",
      optionSelectedBg: "#64748b",
      optionSelectedColor: "#e2e8f0",
    },
    Message: {
      algorithm: true,
      // colorBgElevated: "#52c41a",
    },
  },
};

export default themeConfig;
