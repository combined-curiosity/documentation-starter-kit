import { DocsThemeConfig } from 'nextra-theme-docs'
import { FaSlack } from "react-icons/fa"
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s | CC Docs'
      }
    } else {
      return {
        titleTemplate: 'CC Docs'
      }
    }
  },
  banner: {
    "dismissible": true,
    "key": "notice-banner",
    "text": "Brand spanking new Doc Site. Enjoy!",
  },
  chat: {
    link: 'https://combinedcuriosity.slack.com/archives/C042JJE86AH',
    icon: <FaSlack style={{ width: "25px", height: "25px" }} />,
  },
  docsRepositoryBase: 'https://github.com/willisjordancc/documentation-starter-kit/blob/main',
  feedback: {
    useLink: () => "https://combinedcuriosity.slack.com/archives/C042JJE86AH",
  },
  footer: {
    component: <span/>,
  },
  head: (
    <>
      <meta name="favicon" content="/favicon.ico" />
    </>
  ),
  logo: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Image
        src="/cc_logo.jpg" // Path to your image in the public directory
        alt="Logo"
        width={36}
        height={36}
      />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Docs
      </span>
    </div>
  ),
  logoLink: "/",
  primaryHue: { dark: 480, light: 650 },
  primarySaturation: { dark: 70, light: 100 },
  project: {
    link: 'https://github.com/willisjordancc/documentation-starter-kit',
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
  }, 
  toc: {
    backToTop: true,
  },
}

export default config
