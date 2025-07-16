"use client";
import { FeaturesSectionWithHoverEffects } from "../ui/feature-section-with-hover-effects";
import styles from "@/styles/landingpage/InfoGrid.module.scss";
import GsapFadeIn from '@/components/animations/GsapFadeIn';


export default function InfoGrid() {
  return (
    <div className={`relative w-full ${styles.mainContainer}`}>
      <GsapFadeIn effect="zoom-in" duration={1} delay={0.3}>
        <div className="relative top-0 left-0 w-full">
          <FeaturesSectionWithHoverEffects />
        </div>
      </GsapFadeIn>
    </div>
  );
}
