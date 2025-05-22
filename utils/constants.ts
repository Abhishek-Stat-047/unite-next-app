import {
  NoCodeETL,
  TransformData,
  ScheduledWorkFlow,
  MultiDestinationSupport,
  CustomFieldSelection,
  ErrorTracking,
  RealTimeData,
  SecureByDefault,
  Bing,
  GoogleAds,
  GoogleAnalytics,
  GoogleCloud,
  Hubspot,
  Jira,
  Paypal,
  SnowFlake,
  Stripe,
  TikTok,
  Facebook,
  Instagram,
  LinkedIn,
  QuickBooks,
  Shopify,
  Twitter,
  AmazonAds,
} from "@/public";
import { ETLFeatureType, ImageType } from "@/types";

export const ETLFeatures: ETLFeatureType[] = [
  {
    alt: "No-Code ETL Data Pipeline Builder Icon",
    heading: "No-Code ETL Builder",
    description: "Sync data from 100+ data sources within minutes.",
    image: NoCodeETL,
  },
  {
    alt: "Visual Data Transformation Workflow Icon",
    heading: "Transforms data visually",
    description: "Clean, filter, and reshape data with a no-code interface.",
    image: TransformData,
  },
  {
    alt: "ETL Scheduled Workflow Automation Icon",
    heading: "Scheduled workflows",
    description: "Set schedules so your data updates itself, hands-free.",
    image: ScheduledWorkFlow,
  },
  {
    alt: "Multi-Destination ETL Data Loader Icon",
    heading: "Multi-Destination Support",
    description: "Load your data into warehouses, dashboards, or spreadsheets.",
    image: MultiDestinationSupport,
  },
  {
    alt: "ETL Custom Field Selection Icon",
    heading: "Custom Field Selection",
    description: "Choose the exact metrics and dimensions you need.",
    image: CustomFieldSelection,
  },
  {
    alt: "ETL Error Tracking and Alerts Icon",
    heading: "Error Tracking & Alerts",
    description: "Get notified instantly when something breaks.",
    image: ErrorTracking,
  },
  {
    alt: "Real-Time Data Monitoring for ETL Icon",
    heading: "Real-Time Data Monitoring",
    description:
      "Get alerts for sync failures and monitor pipeline health in a jiffy.",
    image: RealTimeData,
  },
  {
    alt: "Secure ETL Platform with Encryption Icon",
    heading: "Secure by Default",
    description: "End-to-end encryption, role-based access, and audit trails.",
    image: SecureByDefault,
  },
];

export interface DataSourceType extends ImageType {
  name: string;
}

export const DataSourcesOne: DataSourceType[] = [
  {
    alt: "Bing Marketing Ads Integration Icon",
    name: "Bing",
    src: Bing,
  },
  {
    alt: "Google Ads Data Integration Icon",
    name: "Google Ads",
    src: GoogleAds,
  },
  {
    alt: "Google Analytics Platform Icon",
    name: "Google Analytics",
    src: GoogleAnalytics,
  },
  {
    alt: "Google Cloud Platform Integration Icon",
    name: "Google Cloud",
    src: GoogleCloud,
  },
  {
    alt: "Hubspot CRM Integration Icon",
    name: "Hubspot",
    src: Hubspot,
  },
  {
    alt: "Jira Project Management Icon",
    name: "Jira",
    src: Jira,
  },
  {
    alt: "PayPal Payment Integration Icon",
    name: "PayPal",
    src: Paypal,
  },
  {
    alt: "Snowflake Cloud Data Warehouse Icon",
    name: "Snowflake",
    src: SnowFlake,
  },
  {
    alt: "Stripe Payment Gateway Icon",
    name: "Stripe",
    src: Stripe,
  },
  {
    alt: "TikTok Ads Data Integration Icon",
    name: "TikTok",
    src: TikTok,
  },
];

export const DataSourcesTwo: DataSourceType[] = [
  {
    alt: "Amazon Ads Data Integration Icon",
    name: "Amazon Ads",
    src: AmazonAds,
  },
  {
    alt: "QuickBooks Accounting Software Integration Icon",
    name: "QuickBooks",
    src: QuickBooks,
  },
  {
    alt: "Facebook Social Media and Ads Integration Icon",
    name: "Facebook",
    src: Facebook,
  },
  {
    alt: "LinkedIn Professional Network and Ads Integration Icon",
    name: "LinkedIn",
    src: LinkedIn,
  },
  {
    alt: "Twitter Social Media and Ads Integration Icon",
    name: "Twitter",
    src: Twitter,
  },
  {
    alt: "Google Analytics Platform Icon",
    name: "Google Analytics",
    src: GoogleAnalytics,
  },
  {
    alt: "PayPal Payment Integration Icon",
    name: "PayPal",
    src: Paypal,
  },
  {
    alt: "Shopify E-commerce Platform Integration Icon",
    name: "Shopify",
    src: Shopify,
  },
  {
    alt: "Instagram Social Media and Ads Integration Icon",
    name: "Instagram",
    src: Instagram,
  },
  {
    alt: "TikTok Ads Data Integration Icon",
    name: "TikTok",
    src: TikTok,
  },
  {
    alt: "Hubspot CRM Integration Icon",
    name: "Hubspot",
    src: Hubspot,
  },
];

export const DataSourcesThree: DataSourceType[] = [
  {
    alt: "Instagram Social Media and Ads Integration Icon",
    name: "Instagram",
    src: Instagram,
  },
  {
    alt: "Twitter Social Media and Ads Integration Icon",
    name: "Twitter",
    src: Twitter,
  },
  {
    alt: "Google Analytics Platform Icon",
    name: "Google Analytics",
    src: GoogleAnalytics,
  },
  {
    alt: "Hubspot CRM Integration Icon",
    name: "Hubspot",
    src: Hubspot,
  },
  {
    alt: "Amazon Ads Data Integration Icon",
    name: "Amazon Ads",
    src: AmazonAds,
  },
  {
    alt: "TikTok Ads Data Integration Icon",
    name: "TikTok",
    src: TikTok,
  },
  {
    alt: "QuickBooks Accounting Software Integration Icon",
    name: "QuickBooks",
    src: QuickBooks,
  },
  {
    alt: "Snowflake Cloud Data Warehouse Icon",
    name: "Snowflake",
    src: SnowFlake,
  },
  {
    alt: "Facebook Social Media and Ads Integration Icon",
    name: "Facebook",
    src: Facebook,
  },
  {
    alt: "Shopify E-commerce Platform Integration Icon",
    name: "Shopify",
    src: Shopify,
  },
  {
    alt: "LinkedIn Professional Network and Ads Integration Icon",
    name: "LinkedIn",
    src: LinkedIn,
  },
  {
    alt: "Instagram Social Media and Ads Integration Icon",
    name: "Instagram",
    src: Instagram,
  },
  {
    alt: "Twitter Social Media and Ads Integration Icon",
    name: "Twitter",
    src: Twitter,
  },
  {
    alt: "Google Analytics Platform Icon",
    name: "Google Analytics",
    src: GoogleAnalytics,
  },
  {
    alt: "Hubspot CRM Integration Icon",
    name: "Hubspot",
    src: Hubspot,
  },
  {
    alt: "Amazon Ads Data Integration Icon",
    name: "Amazon Ads",
    src: AmazonAds,
  },
  {
    alt: "TikTok Ads Data Integration Icon",
    name: "TikTok",
    src: TikTok,
  },
  {
    alt: "QuickBooks Accounting Software Integration Icon",
    name: "QuickBooks",
    src: QuickBooks,
  },
  {
    alt: "Snowflake Cloud Data Warehouse Icon",
    name: "Snowflake",
    src: SnowFlake,
  },
  {
    alt: "Facebook Social Media and Ads Integration Icon",
    name: "Facebook",
    src: Facebook,
  },
  {
    alt: "Shopify E-commerce Platform Integration Icon",
    name: "Shopify",
    src: Shopify,
  },
];
