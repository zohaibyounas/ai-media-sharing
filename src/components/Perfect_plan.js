"use client";

import { Button } from "@/components/ui/button";
import { Check, Circle } from "lucide-react";
import { useI18n } from "../context/I18nContext";

export default function PerfectPlan() {
  const { t, lang } = useI18n();
  const isRTL = ["ar", "ur"].includes(lang);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center lg:max-w-[87%]">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          {t("perfectPlan.heading")}
        </h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base px-2">
          {t("perfectPlan.subtitle")}
        </p>

        {/* Toggle */}
        <div className="mt-6 inline-flex p-1 rounded-full">
          <button className="px-4 sm:px-5 py-2 rounded-full bg-white text-gray-800 font-medium text-sm sm:text-base">
            {t("perfectPlan.toggle.month")}
          </button>
          <button className="px-4 sm:px-5 py-2 rounded-full text-white font-medium shadow bg-[#101828] text-sm sm:text-base">
            {t("perfectPlan.toggle.annual")}
          </button>
        </div>

        {/* Pricing Table */}
        <div className="mt-12 bg-white rounded-3xl shadow-sm border overflow-hidden">
          <div
            className="
              flex flex-col 
              lg:flex-row 
              text-center text-gray-800
            "
          >
            {/* Features Column */}
            <div className="py-8 w-full lg:w-1/6 border-b lg:border-b-0 lg:border-r">
              <h4 className="font-semibold text-gray-900 pt-[2rem] sm:pt-[3.27rem]">
                {t("perfectPlan.features")}
              </h4>

              <div className="mt-8 space-y-4 sm:space-y-[38px] text-gray-700 text-sm px-4">
                <p className="border-t pt-3">
                  {t("perfectPlan.featureList.storage")}
                </p>
                <p className="border-t pt-3">
                  {t("perfectPlan.featureList.branding")}
                </p>
                <p className="border-t pt-3">
                  {t("perfectPlan.featureList.uncompressed")}
                </p>
                <p className="border-t pt-3">
                  {t("perfectPlan.featureList.memories")}
                </p>
                <p className="border-t pt-3">
                  {t("perfectPlan.featureList.credits")}
                </p>
                <p className="border-t pt-3">
                  {t("perfectPlan.featureList.domain")}
                </p>
              </div>
            </div>

            {/* Plans */}
            {[
              {
                name: "RIDER",
                price: t("perfectPlan.plans.rider.price"),
                sub: t("perfectPlan.plans.rider.sub"),
                btn: t("perfectPlan.plans.rider.btn"),
                features: [
                  t("perfectPlan.plans.rider.features.0"),
                  t("perfectPlan.plans.rider.features.1"),
                  t("perfectPlan.plans.rider.features.2"),
                  t("perfectPlan.plans.rider.features.3"),
                  t("perfectPlan.plans.rider.features.4"),
                  t("perfectPlan.plans.rider.features.5"),
                ],
              },
              {
                name: "SKATER SMALL",
                price: t("perfectPlan.plans.skaterSmall.price"),
                sub: t("perfectPlan.plans.skaterSmall.sub"),
                btn: t("perfectPlan.plans.skaterSmall.btn"),
                features: [
                  t("perfectPlan.plans.skaterSmall.features.0"),
                  t("perfectPlan.plans.skaterSmall.features.1"),
                  t("perfectPlan.plans.skaterSmall.features.2"),
                  t("perfectPlan.plans.skaterSmall.features.3"),
                  t("perfectPlan.plans.skaterSmall.features.4"),
                  t("perfectPlan.plans.skaterSmall.features.5"),
                ],
              },
              {
                name: "SKATER",
                price: t("perfectPlan.plans.skater.price"),
                sub: t("perfectPlan.plans.skater.sub"),
                btn: t("perfectPlan.plans.skater.btn"),
                features: [
                  t("perfectPlan.plans.skater.features.0"),
                  t("perfectPlan.plans.skater.features.1"),
                  t("perfectPlan.plans.skater.features.2"),
                  t("perfectPlan.plans.skater.features.3"),
                  t("perfectPlan.plans.skater.features.4"),
                  t("perfectPlan.plans.skater.features.5"),
                ],
              },
              {
                name: "BIKER",
                price: t("perfectPlan.plans.biker.price"),
                sub: t("perfectPlan.plans.biker.sub"),
                btn: t("perfectPlan.plans.biker.btn"),
                highlight: true,
                features: [
                  t("perfectPlan.plans.biker.features.0"),
                  t("perfectPlan.plans.biker.features.1"),
                  t("perfectPlan.plans.biker.features.2"),
                  t("perfectPlan.plans.biker.features.3"),
                  t("perfectPlan.plans.biker.features.4"),
                  t("perfectPlan.plans.biker.features.5"),
                ],
              },
              {
                name: "PILOT",
                price: t("perfectPlan.plans.pilot.price"),
                sub: t("perfectPlan.plans.pilot.sub"),
                btn: t("perfectPlan.plans.pilot.btn"),
                features: [
                  t("perfectPlan.plans.pilot.features.0"),
                  t("perfectPlan.plans.pilot.features.1"),
                  t("perfectPlan.plans.pilot.features.2"),
                  t("perfectPlan.plans.pilot.features.3"),
                  t("perfectPlan.plans.pilot.features.4"),
                  t("perfectPlan.plans.pilot.features.5"),
                ],
              },
              {
                name: "ASTRONAUT",
                price: t("perfectPlan.plans.astronaut.price"),
                sub: t("perfectPlan.plans.astronaut.sub"),
                btn: t("perfectPlan.plans.astronaut.btn"),
                outline: true,
                features: [
                  t("perfectPlan.plans.astronaut.features.0"),
                  t("perfectPlan.plans.astronaut.features.1"),
                  t("perfectPlan.plans.astronaut.features.2"),
                  t("perfectPlan.plans.astronaut.features.3"),
                  t("perfectPlan.plans.astronaut.features.4"),
                  t("perfectPlan.plans.astronaut.features.5"),
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`
                  py-8 
                  w-full 
                  sm:w-1/2 
                  md:w-1/3 
                  lg:w-1/6 
                  border-b sm:border-r 
                  relative 
                  transition-all 
                  duration-300 
                  hover:bg-[#26395F] hover:text-white active:bg-[#26395F] active:text-white focus:bg-[#26395F] focus:text-white
                  hover:text-white
                  ${plan.highlight ? "bg-[#26395F] text-white" : ""}
                `}
              >
                {/* Highlight Tag */}
                {plan.highlight && (
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-[#0d1b2a] w-32 text-xs font-semibold px-2 py-2 rounded-full shadow">
                    {t("perfectPlan.highlightTag")}
                  </div>
                )}

                {/* Header */}
                <div className={`${plan.highlight ? "mt-8" : ""}`}>
                  <h4 className="font-semibold text-sm md:text-base">
                    {plan.name}
                  </h4>
                  <p className="text-xl font-bold mt-2">{plan.price}</p>
                  <p
                    className={`text-sm ${
                      plan.highlight ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {plan.sub}
                  </p>

                  {plan.outline ? (
                    <Button className="mt-4 rounded-full px-6 bg-white text-black hover:bg-white hover:text-[#0d1b2a]">
                      {plan.btn}
                    </Button>
                  ) : (
                    <Button className="mt-4 rounded-full px-6 bg-gray-900 text-white hover:bg-white hover:text-[#0d1b2a]">
                      {plan.btn}
                    </Button>
                  )}
                </div>

                {/* Features */}
                <div className="mt-8 space-y-4 sm:space-y-[38px] text-sm px-4">
                  {plan.features.map((f, idx) => (
                    <p
                      key={idx}
                      className={`border-t pt-3 transition-colors duration-200 ${
                        plan.highlight
                          ? "border-gray-700 text-gray-200"
                          : "border-gray-200"
                      }`}
                    >
                      {f === t("perfectPlan.full") ? (
                        <span className="flex justify-center">
                          <Check className="w-5 h-5 text-green-400" />
                        </span>
                      ) : f === t("perfectPlan.partial") ? (
                        <span className="flex justify-center">
                          <Circle className="w-5 h-5 text-yellow-400" />
                        </span>
                      ) : (
                        f
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="mt-16 bg-gradient-to-b from-[#26395F] to-[#101828] rounded-3xl text-white p-6 sm:p-10 text-left relative">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold">
                {t("perfectPlan.enterprise.title")}
              </h3>
              <p className="text-sm text-gray-300 mt-2 max-w-xl">
                {t("perfectPlan.enterprise.subtitle")}
              </p>
            </div>

            <button className="border border-white text-white rounded-full px-6 py-2 flex items-center gap-2 transition hover:bg-white/10">
              {t("perfectPlan.enterprise.contactBtn")}
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 mt-10">
            {[
              t("perfectPlan.enterprise.features.0.title"),
              t("perfectPlan.enterprise.features.1.title"),
              t("perfectPlan.enterprise.features.2.title"),
              t("perfectPlan.enterprise.features.3.title"),
              t("perfectPlan.enterprise.features.4.title"),
              t("perfectPlan.enterprise.features.5.title"),
            ].map((title, idx) => (
              <div key={idx}>
                <p className="flex items-center gap-3 font-semibold">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white">
                    <Check className="w-4 h-4 text-[#26395F]" />
                  </span>
                  {title}
                </p>
                <p className="text-sm text-gray-300 mt-1">
                  {t(`perfectPlan.enterprise.features.${idx}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
