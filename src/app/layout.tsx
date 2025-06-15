import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";
import "../styles/rotating-card.css";
import "@ant-design/v5-patch-for-react-19";
import { App, ConfigProvider } from "antd";
import themeConfig from "@theme/themeConfig";
import { StoreProviders } from "../redux/providers";
import HeaderComponent from "@/components/Header";
//import Footer from "@/components/Footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tameshwar Nirmalkar",
  description: "Frontend developer, tameshwar nirmalkar, React, Nextjs, Redux, Angular",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.className} bg-gray-900`}>
      {/* ${geistSans.variable} ${geistMono.variable} */}
      <body>
        <StoreProviders>
          <AntdRegistry>
            <ConfigProvider theme={themeConfig} button={{ autoInsertSpace: false }}>
              <App>
                <HeaderComponent />
                {children}
                {/* <Footer /> */}
              </App>
            </ConfigProvider>
          </AntdRegistry>
        </StoreProviders>
      </body>
    </html>
  );
}
