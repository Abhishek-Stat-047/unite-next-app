import {
  NoCodeETL,
  TransformData,
  ScheduledWorkFlow,
  MultiDestinationSupport,
  CustomFieldSelection,
  ErrorTracking,
  RealTimeData,
  SecureByDefault,
} from "@/public";
import { ETLFeatureType } from "@/types";

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
