"use client";
import { FeaturesSectionWithHoverEffects } from "../ui/feature-section-with-hover-effects";
import styles from "@/styles/landingpage/InfoGrid.module.scss";


export default function InfoGrid() {
  return (
    <div className={`relative w-full`}>
      <div className="relative top-0 left-0 w-full">
        <FeaturesSectionWithHoverEffects />
      </div>
    </div>
  );
}
