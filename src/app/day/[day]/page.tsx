import React from 'react';
import { DAYS } from "@/lib/mock-data";
import { DayViewClient } from "@/components/day-view-client";

type Props = {
    params: Promise<{ day: string }>;
};

export async function generateStaticParams() {
    return DAYS.map((day) => ({
        day: day.label,
    }));
}

export default async function DayPage({ params }: Props) {
    const { day } = await params;
    return <DayViewClient day={day} />;
}
