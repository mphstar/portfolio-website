"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Types sesuai response Lanyard
type LanyardData = {
  discord_user: {
    id: string;
    username: string;
    avatar: string;
    display_name?: string | null;
    global_name?: string | null;
  };
  discord_status: string;
  activities: Array<{
    name: string;
    details?: string;
    state?: string;
    application_id?: string;
    assets?: {
      large_image?: string;
      large_text?: string;
    };
  }>;
  active_on_discord_desktop: boolean;
  active_on_discord_web: boolean;
  active_on_discord_mobile: boolean;
};

type LanyardResponse = {
  success: boolean;
  data: LanyardData;
};

const USER_ID = "667270803896926208";
const LANYARD_URL = `https://api.lanyard.rest/v1/users/${USER_ID}`;

export default function DiscordPresenceCard() {
  const [data, setData] = useState<LanyardData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch Lanyard
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(LANYARD_URL);
        const json: LanyardResponse = await res.json();
        if (json.success) setData(json.data);
      } finally {
        setLoading(false);
      }
    }

    load();
    const interval = setInterval(load, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return SkeletonCard();
  if (!data) return ErrorCard();

  return <PresenceUI data={data} />;
}

/* ---------------- SKELETON ---------------- */

function SkeletonCard() {
  return (
    <div className="max-w-xl">
      <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 shadow-md">
        <div className="flex gap-3">
          <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="w-32 h-3 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
            <div className="w-24 h-3 bg-slate-200/70 dark:bg-slate-700/70 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- ERROR ---------------- */

function ErrorCard() {
  return (
    <div className="max-w-xl">
      <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300">
        Gagal memuat data Discord.
      </div>
    </div>
  );
}

/* ---------------- MAIN UI ---------------- */

function PresenceUI({ data }: { data: LanyardData }) {
  const { discord_user, discord_status, activities } = data;

  const activity = activities?.[0];
  const avatarURL = `https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.png`;

  const displayName =
    discord_user.display_name ||
    discord_user.global_name ||
    discord_user.username;

  const statusColor =
    discord_status === "online"
      ? "bg-emerald-500"
      : discord_status === "idle"
      ? "bg-amber-400"
      : discord_status === "dnd"
      ? "bg-red-500"
      : "bg-slate-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.18 }}
      className="max-w-xl"
    >
      <div className="rounded-2xl bg-[#ecf0f8] dark:bg-[#171718] flex flex-col gap-4">
        {/* HEADER */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src={avatarURL}
              alt="Discord Avatar"
              width={50}
              height={50}
              className="rounded-full border border-slate-300 dark:border-slate-600"
            />

            {/* Status circle */}
            <span
              className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-slate-900 ${statusColor}`}
            />
          </div>

          <div className="flex flex-col">
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              {displayName}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              @{discord_user.username}
            </span>
          </div>

          <span
            className={`ml-auto px-3 py-1 text-xs rounded-full text-white ${statusColor}`}
          >
            {discord_status === "dnd"
              ? "Do Not Disturb"
              : discord_status.charAt(0).toUpperCase() + discord_status.slice(1)}
          </span>
        </div>

        {/* ACTIVITY */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 flex items-center gap-4">
          {activity ? (
            <>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] font-semibold text-emerald-500 dark:text-emerald-300 uppercase tracking-wide">
                  Activity
                </span>

                <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100 truncate">
                  {activity.name}
                </p>

                {activity.details && (
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                    {activity.details}
                  </p>
                )}

                {activity.state && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-1">
                    {activity.state}
                  </p>
                )}
              </div>

              {/* IMAGE */}
              {activity.assets?.large_image && activity.application_id && (
                <Image
                  src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`}
                  width={60}
                  height={60}
                  alt={activity.assets.large_text || "Activity"}
                  className="rounded-lg border border-slate-200 dark:border-slate-700"
                />
              )}
            </>
          ) : (
            <p className="text-xs text-slate-500 dark:text-slate-400 italic w-full text-center">
              Tidak ada activity yang sedang berjalan
            </p>
          )}
        </div>

        {/* PLATFORMS */}
        <div className="flex flex-wrap gap-1.5 text-[11px]">
          <Platform label="Desktop" active={data.active_on_discord_desktop} />
          <Platform label="Web" active={data.active_on_discord_web} />
          <Platform label="Mobile" active={data.active_on_discord_mobile} />
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- PLATFORM BADGE ---------------- */

function Platform({
  label,
  active,
}: {
  label: string;
  active: boolean;
}) {
  return (
    <span
      className={`px-2.5 py-0.5 rounded-full border text-[11px] inline-flex items-center gap-1
      ${
        active
          ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:border-emerald-500/50 dark:text-emerald-200"
          : "border-slate-200 bg-slate-100 text-slate-500 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          active ? "bg-emerald-400" : "bg-slate-400"
        }`}
      />
      {label}
    </span>
  );
}
