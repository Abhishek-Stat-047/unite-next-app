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
  AllRound,
  BaneDigital,
  BoringMarketing,
  DigitalSisco,
  ECD,
  Enpal,
  StoryTerrace,
  Trendify,
  ConfigurePipeline,
  ConnectDataSource,
  SendToDestination,
  amazonS3,
  azure,
  mongoDB,
  mysql,
  redshift,
  googleStorage,
  SalesForce,
  looker,
  microsoftSqlServer,
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

export const DataDestinationOne: DataSourceType[] = [
  {
    alt: "Sales force integration icon",
    name: "Sales force",
    src: SalesForce,
  },

  {
    alt: "Google Analytics Platform Icon",
    name: "Google Analytics",
    src: GoogleAnalytics,
  },

  {
    alt: "MySQL Relational Database Integration Icon",
    name: "MySQL",
    src: mysql,
  },

  {
    alt: "Snowflake Cloud Data Warehouse Icon",
    name: "Snowflake",
    src: SnowFlake,
  },
  {
    alt: "Amazon S3 Cloud Storage Integration Icon",
    name: "Amazon S3",
    src: amazonS3,
  },
  {
    alt: "Microsoft Azure Cloud Integration Icon",
    name: "Azure",
    src: azure,
  },
  {
    alt: "Google Cloud Storage Integration Icon",
    name: "Google Storage",
    src: googleStorage,
  },
  {
    alt: "MongoDB NoSQL Database Integration Icon",
    name: "MongoDB",
    src: mongoDB,
  },

  {
    alt: "PostgreSQL Open-Source Database Integration Icon",
    name: "PostgreSQL",
    src: looker,
  },
  {
    alt: "Amazon Redshift Data Warehouse Integration Icon",
    name: "Redshift",
    src: redshift,
  },
  // {
  //   alt: "googleSheets icon",
  //   name: "googleSheets",
  //   src: googleSheets,
  // },
  {
    alt: "microsoft Sql Server icon",
    name: "microsoftSqlServer ",
    src: microsoftSqlServer,
  },
];
export const DataDestinationTwo: DataSourceType[] = [
  {
    alt: "Microsoft Azure Cloud Integration Icon",
    name: "Azure",
    src: azure,
  },
  {
    alt: "MongoDB NoSQL Database Integration Icon",
    name: "MongoDB",
    src: mongoDB,
  },
  {
    alt: "Sales force integration icon",
    name: "Sales force",
    src: SalesForce,
  },
  {
    alt: "Amazon Redshift Data Warehouse Integration Icon",
    name: "Redshift",
    src: redshift,
  },
  {
    alt: "Snowflake Cloud Data Warehouse Icon",
    name: "Snowflake",
    src: SnowFlake,
  },
  {
    alt: "Microsoft Sql Server icon",
    name: "microsoftSqlServer ",
    src: microsoftSqlServer,
  },
  {
    alt: "Google Cloud Storage Integration Icon",
    name: "Google Storage",
    src: googleStorage,
  },
  {
    alt: "Google Analytics Platform Icon",
    name: "Google Analytics",
    src: GoogleAnalytics,
  },
  {
    alt: "PostgreSQL Open-Source Database Integration Icon",
    name: "PostgreSQL",
    src: looker,
  },
  {
    alt: "MySQL Relational Database Integration Icon",
    name: "MySQL",
    src: mysql,
  },
  {
    alt: "Amazon S3 Cloud Storage Integration Icon",
    name: "Amazon S3",
    src: amazonS3,
  },
];
export const DataDestinationThree: DataSourceType[] = [
  {
    alt: "PostgreSQL Open-Source Database Integration Icon",
    name: "PostgreSQL",
    src: looker,
  },
  {
    alt: "Google Analytics Platform Icon",
    name: "Google Analytics",
    src: GoogleAnalytics,
  },
  {
    alt: "Amazon S3 Cloud Storage Integration Icon",
    name: "Amazon S3",
    src: amazonS3,
  },
  {
    alt: "Microsoft Azure Cloud Integration Icon",
    name: "Azure",
    src: azure,
  },
  {
    alt: "Snowflake Cloud Data Warehouse Icon",
    name: "Snowflake",
    src: SnowFlake,
  },
  {
    alt: "Sales force integration icon",
    name: "Sales force",
    src: SalesForce,
  },
  {
    alt: "MongoDB NoSQL Database Integration Icon",
    name: "MongoDB",
    src: mongoDB,
  },
  {
    alt: "Amazon Redshift Data Warehouse Integration Icon",
    name: "Redshift",
    src: redshift,
  },
  {
    alt: "MySQL Relational Database Integration Icon",
    name: "MySQL",
    src: mysql,
  },
  {
    alt: "microsoft Sql Server icon",
    name: "microsoftSqlServer ",
    src: microsoftSqlServer,
  },
  {
    alt: "Google Cloud Storage Integration Icon",
    name: "Google Storage",
    src: googleStorage,
  },
];

export const trustedCompanyLogos = [
  { src: AllRound, alt: "AllRound logo" },
  { src: BaneDigital, alt: "BaneDigital logo" },
  { src: BoringMarketing, alt: "BoringMarketing logo" },
  { src: ECD, alt: "ECD logo" },
  { src: StoryTerrace, alt: "StoryTerrace logo" },
  { src: Trendify, alt: "Trendify logo" },
  { src: DigitalSisco, alt: "DigitalSisco logo" },
  { src: Enpal, alt: "Enpal logo" },
];

export const ETLProcess = [
  {
    src: ConnectDataSource,

    heading: "1. Connect Data Sources",
    description:
      "Authenticate and connect with 100+ platforms like Google Ads, Facebook, HubSpot, Shopify and more – no API knowledge needed.",
    alt: "Illustration showing a user connecting various cloud-based data sources like Google Ads, Facebook, and HubSpot to a central system for data integration.",
  },
  {
    src: ConfigurePipeline,

    heading: "2. Configure Your Pipeline",
    description:
      "Select metrics and dimensions, apply filters, and set data sync frequency – all through our visual no-code interface.",
    alt: "Diagram depicting a user configuring a data pipeline with a no-code interface, selecting metrics, applying filters, and setting data sync frequency for data transformation.",
  },
  {
    src: SendToDestination,
    heading: "3. Send Data to Destination",
    description:
      "Unite delivers a clean, structured data to your preferred destination - like Google BigQuery, Looker Studio, Google Sheets, Redshift, Snowflake, etc. in minutes.",
    alt: "Image showing structured data being sent from a computer to various data destinations such as Google BigQuery, Looker Studio, and Snowflake for analytics and reporting.",
  },
];

export const LandingPageFaq = [
  {
    question: "Do I need to have coding skills to use Unite?",
    answer:
      "Nope. Our platform offers a visual pipeline builder for no-code users, but also supports SQL and Python for advanced customizations — ideal for both analysts and engineers.",
  },
  {
    question:
      "I couldn't find a particular data connector in Unite, what do I do?",
    answer:
      "Nope. Our platform offers a visual pipeline builder for no-code users, but also supports SQL and Python for advanced customizations — ideal for both analysts and engineers.",
  },
  {
    question: "What data warehouses does Unite support?",
    answer:
      "Nope. Our platform offers a visual pipeline builder for no-code users, but also supports SQL and Python for advanced customizations — ideal for both analysts and engineers.",
  },
  {
    question: "What makes Unite better than other ETL tools in the market?",
    answer:
      "Nope. Our platform offers a visual pipeline builder for no-code users, but also supports SQL and Python for advanced customizations — ideal for both analysts and engineers.",
  },
];
