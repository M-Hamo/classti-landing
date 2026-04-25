import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import starIcon from "../../assets/icons/star.svg";
import icon1 from "../../assets/icons/Group.svg";
import icon2 from "../../assets/icons/fi_1604644.svg";
import mapImg from "../../assets/images/Map.jpg";
import tuitionIcon from "../../assets/icons/group_house.svg";
import transportIcon from "../../assets/icons/fees_bus.svg";
import activityIcon from "../../assets/icons/university.svg";
import attendanceIcon from "../../assets/icons/fi_13434658.svg";
import analyticsIcon from "../../assets/icons/fi_11005556.svg";
import fi_7267625 from "../../assets/icons/fi_7267625.svg";
import fi_4236692 from "../../assets/icons/fi_4236692.svg";
import fi_7406696 from "../../assets/icons/fi_7406696.svg";
import fi_1169341 from "../../assets/icons/fi_1169341.svg";
import fi_584616 from "../../assets/icons/fi_584616.svg";
import moveIcon from "../../assets/icons/move.svg";

export const Features = () => {
  const { t, i18n } = useTranslation();
  const activityList = [
    {
      title: "task_completion",
      desc: "task_completion_desc",
      icon: fi_4236692,
    },
    {
      title: "accuracy",
      desc: "accuracy_desc",
      icon: fi_7406696,
    },
    {
      title: "costs",
      desc: "costs_desc",
      icon: fi_1169341,
    },
    {
      title: "performance_tracking",
      desc: "performance_tracking_desc",
      icon: fi_584616,
    },
  ];

  const badActivityList = activityList.map((item) => ({
    ...item,
    title: `${item.title}_bad`,
    desc: `${item.desc}_bad`,
  }));

  const [sliderValue, setSliderValue] = useState(25);

  const chartData = [
    { name: t("subject_english"), uv: 40 },
    { name: t("subject_arabic"), uv: 60 },
    { name: t("subject_islamic"), uv: 80 },
    { name: t("subject_social"), uv: 50 },
    { name: t("subject_science"), uv: 75 },
    { name: t("subject_math"), uv: 85 },
  ];

  const feesList = [
    {
      key: "fee_tuition",
      icon: tuitionIcon,
      color: "bg-[#00512E]",
      iconBg: "bg-[#00512E]/16",
      percent: "70%",
      value: "1.598",
      pending: "685,200",
    },
    {
      key: "fee_transport",
      icon: transportIcon,
      color: "bg-[#1A9F58]",
      iconBg: "bg-[#1A9F58]/16",
      percent: "30%",
      value: "0.685",
      pending: "1,598,800",
    },
    {
      key: "fee_activities",
      icon: activityIcon,
      color: "bg-[#A96908]",
      iconBg: "bg-[#A96908]/16",
      percent: "50%",
      value: "1.142",
      pending: "1,142,000",
    },
  ];

  return (
    <section
      id="howItWorks"
      className="mt-6 flex flex-col items-stretch justify-start gap-6 md:mt-0 md:gap-8"
    >
      <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
        <div className="flex h-7.5 items-center justify-center gap-2 rounded-2xl border border-[#CCCCCC] bg-[#E5FFF4] px-3 py-1">
          <img src={starIcon} alt="about" className="h-4 w-4" />
          <span className="font-ibm-semiBold text-sm text-[#00512E]">
            {t("features")}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
          <h2 className="font-ibm-bold text-[24px] md:text-[32px]">
            {t("features_title")}
          </h2>
          <p className="font-ibm-medium text-center text-xs text-[#5B6161] md:text-base">
            {t("features_desc")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-8 lg:gap-6">
        <div className="flex flex-col items-stretch justify-start gap-4 rounded-3xl border border-[#E6E6E6] bg-white p-4 shadow-sm shadow-[#E6E6E6] md:gap-6 md:p-6 lg:col-span-5">
          <div className="flex flex-row items-start justify-center gap-2.5 md:items-center">
            <div className="flex h-10 min-h-10 w-10 min-w-10 items-center justify-center rounded-lg bg-[#00512E]/10">
              <img src={icon1} alt="yellow-start" className="h-5 w-5" />
            </div>
            <div className="flex flex-col items-start justify-start gap-1">
              <h3 className="font-ibm-medium text-base text-[#00512E]">
                {t("feature_bus_tracking")}
              </h3>
              <p className="font-ibm-regular text-sm text-[#5B6161]">
                {t("feature_bus_tracking_desc")}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-stretch justify-center rounded-3xl border border-[#F4F4D1] bg-[#F9F9E9] p-3 shadow-sm">
            <div className="flex flex-col items-stretch justify-center gap-4 rounded-xl bg-white p-3 shadow-sm shadow-[#E6E6E6] md:gap-6">
              <h4 className="font-ibm-semiBold text-xs text-[#0E1F1F] md:text-sm">
                {t("bus_route")}
              </h4>
              <img
                className="h-[138px] min-h-[138px] rounded-xl border-[.5px] border-[#F4F4D1] md:h-[180px] md:min-h-[180px]"
                src={mapImg}
                alt="map"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-stretch justify-center gap-4 rounded-3xl border border-[#E6E6E6] bg-white p-4 shadow-sm shadow-[#E6E6E6] md:gap-6 md:p-6 lg:col-span-3">
          <div className="flex flex-row items-start justify-center gap-2.5 md:items-center">
            <div className="flex h-10 min-h-10 w-10 min-w-10 items-center justify-center rounded-lg bg-[#00512E]/10">
              <img src={icon2} alt="yellow-start" className="h-5 w-5" />
            </div>
            <div className="flex flex-col items-start justify-start gap-1">
              <h3 className="font-ibm-medium text-base text-[#00512E]">
                {t("financial_intelligence")}
              </h3>
              <p className="font-ibm-regular text-sm text-[#5B6161]">
                {t("financial_intelligence_desc")}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-stretch justify-center rounded-3xl border border-[#F4F4D1] bg-[#F9F9E9] p-3 shadow-sm">
            <div className="flex flex-col items-stretch justify-center gap-4 rounded-xl bg-white p-3 shadow-sm shadow-[#E6E6E6] md:gap-6">
              <h4 className="font-ibm-semiBold text-xs text-[#0E1F1F] md:text-sm">
                {t("fees_title")}
              </h4>

              <div className="flex flex-col items-stretch justify-start gap-4">
                {feesList.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-stretch justify-start gap-1.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-5 min-h-5 w-5 min-w-5 items-center justify-center rounded-lg shadow-xs ${item.iconBg}`}
                        >
                          <img
                            src={item.icon}
                            alt={item.key}
                            className="h-[13px] w-[13px]"
                          />
                        </div>

                        <h5 className="font-ibm-semiBold text-xs leading-[12px] text-[#0E1F1F]">
                          {t(item.key)}
                        </h5>
                      </div>

                      <span className="font-ibm-semiBold text-xs text-[#00512E]">
                        {item.value} <span className="text-[#646969]">/ 2.284</span>
                      </span>
                    </div>

                    <div className="h-[3.3px] rounded-full bg-gray-50">
                      <div
                        className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                        style={{ width: item.percent }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between px-1">
                      <span className="font-ibm-regular text-xs text-[#646969]">
                        {item.percent} {t("collected")}
                      </span>
                      <span className="font-ibm-semiBold text-xs text-[#C79312]">
                        {t("pending")}: {item.pending}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-stretch justify-start gap-4 rounded-3xl border border-[#E6E6E6] bg-white p-4 shadow-sm shadow-[#E6E6E6] md:gap-6 md:p-6 lg:col-span-3">
          <div className="flex flex-row items-start justify-center gap-2.5 md:items-center">
            <div className="flex h-10 min-h-10 w-10 min-w-10 items-center justify-center rounded-lg bg-[#00512E]/10">
              <img src={attendanceIcon} alt="academic analytics" className="h-5 w-5" />
            </div>
            <div className="flex flex-col items-start justify-start gap-1">
              <h3 className="font-ibm-medium text-base text-[#00512E]">
                {t("academic_analytics")}
              </h3>
              <p className="font-ibm-regular text-sm text-[#5B6161]">
                {t("academic_analytics_desc")}
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col items-stretch justify-center rounded-3xl border border-[#F4F4D1] bg-[#F9F9E9] p-3 shadow-sm">
            <div className="flex h-full flex-col items-stretch justify-between gap-4 rounded-xl bg-white p-3 shadow-sm shadow-[#E6E6E6] md:p-4">
              <div className="flex items-center justify-between">
                <h4 className="font-ibm-semiBold text-xs text-[#0E1F1F] md:text-sm">
                  {t("avg_grades")}
                </h4>

                <div className="font-ibm-regular flex items-center gap-1 text-[10px] text-[#5B6161]">
                  <span className="font-ibm-medium flex items-center gap-1 text-[#1A9F58]">
                    18%
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.91669 6.66667L4.82136 4.762C4.98408 4.59928 5.24796 4.59928 5.41068 4.762L6.16278 5.51408C6.38604 5.73735 6.74836 5.73516 6.96877 5.5092L9.07414 3.3486M9.07414 3.3486V5.42593M9.07414 3.3486H6.99682"
                        stroke="#1A9F58"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {t("vs_last_month")}
                </div>
              </div>

              <div className="mt-4 h-full w-full md:mt-6" dir="ltr">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    margin={{ top: 0, right: -20, left: -10, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#F2F4F7"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#0E1F1F", fontSize: 8, fontFamily: "ibm-regular" }}
                      dy={8}
                    />
                    <YAxis
                      type="number"
                      width={35}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#A9A7A7", fontSize: 8, fontFamily: "ibm-regular" }}
                      tickFormatter={(value) => `${value}%`}
                      tickCount={11}
                    />
                    <Tooltip
                      cursor={{ fill: "transparent" }}
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="font-ibm-semiBold rounded-md border border-[#E6E6E6] bg-white p-1.5 text-[10px] text-[#0E1F1F] shadow-sm">
                              {`${payload[0].value}%`}
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="uv" radius={[4, 4, 4, 4]} barSize={16}>
                      {chartData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill="#4D9E7B" />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-stretch justify-start gap-4 rounded-3xl border border-[#E6E6E6] bg-white p-4 shadow-sm shadow-[#E6E6E6] md:gap-6 md:p-6 lg:col-span-5">
          <div className="flex flex-row items-start justify-center gap-2.5 md:items-center">
            <div className="flex h-10 min-h-10 w-10 min-w-10 items-center justify-center rounded-lg bg-[#00512E]/10">
              <img src={analyticsIcon} alt="smart attendance" className="h-5 w-5" />
            </div>
            <div className="flex flex-col items-start justify-start gap-1">
              <h3 className="font-ibm-medium text-base text-[#00512E]">
                {t("smart_attendance")}
              </h3>
              <p className="font-ibm-regular text-sm text-[#5B6161]">
                {t("smart_attendance_desc")}
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col items-stretch justify-center rounded-3xl border border-[#F4F4D1] bg-[#F9F9E9] p-3 shadow-sm">
            <div className="flex h-full flex-col items-stretch justify-start gap-4 rounded-xl bg-white p-4 shadow-sm shadow-[#E6E6E6] md:gap-6">
              <div className="flex items-center justify-between">
                <h4 className="font-ibm-semiBold text-xs text-[#0E1F1F] md:text-sm">
                  {t("elementary_stage")}
                </h4>

                <span className="font-ibm-semiBold text-[10px] text-[#646969]">
                  {t("student_count")}
                </span>
              </div>

              <div className="grid flex-grow grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4">
                {[
                  { grade: "grade_1", color: "bg-[#1A9F58]", percent: "25%" },
                  { grade: "grade_2", color: "bg-[#F8951B]", percent: "65%" },
                  { grade: "grade_3", color: "bg-[#DD0417]", percent: "80%" },
                  { grade: "grade_4", color: "bg-[#F8951B]", percent: "65%" },
                  { grade: "grade_5", color: "bg-[#1A9F58]", percent: "25%" },
                  { grade: "grade_6", color: "bg-[#1A9F58]", percent: "25%" },
                  { grade: "grade_7", color: "bg-[#F8951B]", percent: "65%" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-stretch justify-center gap-1 rounded-xl border border-[#E6E6E6] p-3 shadow-sm shadow-[#E6E6E6]"
                  >
                    <h5 className="font-ibm-semiBold text-xs leading-[12px] text-[#0E1F1F]">
                      {t(item.grade)}
                    </h5>
                    <h5 className="font-ibm-regular text-xs text-[#646969]">
                      {t("class_count")}
                    </h5>

                    <div
                      className="mt-1 flex w-full items-center gap-2"
                      dir={i18n.language === "en" ? "rtl" : "ltr"}
                    >
                      <div className="flex h-1.5 flex-grow justify-end rounded-full bg-[#F2F4F7]">
                        <div
                          className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                          style={{ width: item.percent }}
                        ></div>
                      </div>
                      <span
                        className={`font-ibm-semiBold text-[10px]`}
                        style={{ color: item.color.replace("bg-[", "").replace("]", "") }}
                      >
                        {item.percent}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:mt-6 lg:grid-cols-5 lg:gap-6">
        <div className="flex flex-col items-stretch justify-start gap-4 rounded-3xl bg-white p-4 shadow-sm shadow-[#E6E6E6] md:gap-6 md:p-6 lg:col-span-2">
          <div className="flex items-center justify-start">
            <div className="flex h-7.5 items-center justify-center gap-2 rounded-2xl border border-[#CCCCCC] bg-[#E5FFF4] px-3 py-1">
              <img src={fi_7267625} alt="about" className="h-4 w-4" />
              <span className="font-ibm-semiBold text-sm text-[#00512E]">
                {t("why_us")}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-ibm-bold text-lg text-[#0E1F1F] md:text-[32px]">
              {t("from_chaos_title_1")}
              <span className="bg-linear-to-l from-[#026A3D] to-[#07C951] bg-clip-text text-transparent">
                {t("from_chaos_title_2")}
              </span>
            </h2>
            <p className="font-ibm-medium text-base text-[#5B6161]">{t("why_us_desc")}</p>
          </div>

          <div className="relative flex min-h-[200px] w-full flex-grow items-center justify-center overflow-hidden rounded-3xl border border-[#CCCCCC] bg-black shadow-sm">
            <video
              className="h-full w-full object-cover"
              controls
              controlsList="nodownload"
              preload="metadata"
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="relative flex min-h-[400px] flex-col items-stretch justify-start rounded-3xl bg-white p-4 shadow-sm shadow-[#E6E6E6] md:p-6 lg:col-span-3">
          <div className="relative z-0 flex w-full flex-grow flex-col items-stretch justify-start gap-4 md:gap-6">
            {activityList.map((item, idx) => (
              <div
                key={idx}
                className="flex h-[104px] items-center justify-start gap-3 rounded-3xl border border-[#99FFD3] bg-[#F2FCF8] p-2 shadow-sm md:gap-6 md:p-3 md:px-6"
              >
                <img src={item.icon} alt="icon" className="h-10.5 w-10.5" />

                <div className="flex flex-col items-start justify-center gap-1 md:gap-2">
                  <h4 className="font-ibm-medium text-sm text-[#5B6161]">
                    {t(item.title)}
                  </h4>

                  <p className="font-ibm-bold text-base text-[#0E1F1F]">{t(item.desc)}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="pointer-events-none absolute inset-0 flex h-full w-full flex-col items-stretch justify-start gap-4 p-4 md:gap-6 md:p-6"
            style={{
              clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`,
            }}
          >
            <div className="flex w-full flex-grow flex-col items-stretch justify-start gap-4 md:gap-6">
              {badActivityList.map((item, idx) => (
                <div
                  key={idx}
                  className="flex h-[104px] items-center justify-start gap-3 rounded-3xl border border-[#FFCCCC] bg-[#FFF5F5] p-2 shadow-sm md:gap-6 md:p-3 md:px-6"
                >
                  <img src={item.icon} alt="icon" className="h-10.5 w-10.5" />

                  <div className="flex flex-col items-start justify-center gap-1 md:gap-2">
                    <h4 className="font-ibm-medium text-sm text-[#5B6161]">
                      {t(item.title)}
                    </h4>

                    <p className="font-ibm-bold text-base text-[#0E1F1F]">
                      {t(item.desc)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="pointer-events-none absolute top-0 bottom-0 z-10 w-1 bg-[#00512E]"
            style={{ left: `${sliderValue}%` }}
          >
            <div
              className="absolute top-16 left-1/2 flex -translate-x-1/2 items-center justify-center gap-6"
              dir="ltr"
            >
              <div className="font-ibm-semiBold flex h-[27px] items-center rounded-full bg-[#EF4444] px-3 text-center text-sm text-white shadow-sm">
                {t("before")}
              </div>
              <div className="font-ibm-semiBold flex h-[27px] items-center rounded-full bg-[#1A9F58] px-3 text-center text-sm text-white shadow-sm">
                {t("after")}
              </div>
            </div>

            <div className="absolute top-2/3 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#E6E6E6] bg-white shadow-md">
              <img src={moveIcon} alt="move" className="h-6 w-6" />
            </div>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
            className="absolute inset-0 z-20 m-0 h-full w-full cursor-ew-resize opacity-0"
            dir="ltr"
          />
        </div>
      </div>
    </section>
  );
};
