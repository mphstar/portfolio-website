"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Main from "@/components/Template";
import ContentAchievement from "@/components/ContentAchievement";
import { LettersPullUp } from "@/components/LettersPullUp";
import achievements, { AchievementItem } from "@/models/data_achievements";

const PAGE_SIZE = 5;

export default function Achievements() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<AchievementItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(achievements);
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  useEffect(
    () => () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    },
    []
  );

  const visibleData = useMemo(
    () => data.slice(0, page * PAGE_SIZE),
    [data, page]
  );

  const hasMore = visibleData.length < data.length;

  const handleLoadMore = () => {
    if (!hasMore || isLoading) return;

    setIsLoading(true);

    timerRef.current = setTimeout(() => {
      setPage((prev) => prev + 1);
      setIsLoading(false);
    }, 400);
  };

  return (
    <Main selectedNav="Achievements" title="Achievements | @Mphstar">
      <div className="flex flex-col w-full flex-1 h-full mt-24 mb-4 justify-start px-4 md:px-8 items-center overflow-hidden">
        <div className="w-full flex flex-col justify-center mb-8">
          <LettersPullUp className="font-semibold text-3xl" text="Achievements" />
          <p>Here is a list of achievements that I have obtained:</p>
        </div>
        <div className="flex flex-col h-full w-full gap-3">
          {isLoading && visibleData.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-sm text-slate-500 dark:text-slate-400">
              Loading achievements...
            </div>
          ) : (
            visibleData.map((item, index) => (
              <ContentAchievement
                key={`${item.judul}-${index}`}
                profile={item.profile}
                tanggal={item.tanggal}
                judul={item.judul}
                penerbit={item.penerbit}
                keahlian={item.keahlian}
                foto={item.foto}
              />
            ))
          )}
        </div>
        {hasMore && (
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="flex px-3 py-2 border-2 dark:border-gray-600 mt-6 rounded-md hover:bg-slate-900 hover:text-white duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </Main>
  );
}
