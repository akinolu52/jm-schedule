'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    EMPLOYEES,
    DAYS,
    SHIFTS,
    formatTime,
    calculateDuration,
    type Shift,
    type Employee
} from "@/lib/mock-data";

// Helper: Get time in decimal (e.g., 7:30 -> 7.5)
const getTimeDecimal = (timeStr: string) => {
    const [h, m] = timeStr.split(':').map(Number);
    return h + m / 60;
};

// Config for the Gantt Chart
const START_HOUR = 6; // 6 AM
const END_HOUR = 24; // 12 AM (Midnight)
const TOTAL_HOURS = END_HOUR - START_HOUR;

// Ranges for sections
const RANGES = {
    Morning: { start: 6, end: 12 },
    Afternoon: { start: 12, end: 17 }, // 12pm - 5pm
    Evening: { start: 17, end: 24 }, // 5pm - 12am
};

export function DayViewClient({ day }: { day: string }) {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const dayInfo = DAYS.find(d => d.label === day);

    // Filter shifts and logic
    const dayShifts = useMemo(() => {
        let shifts = SHIFTS
            .filter(s => s.day === day)
            .map(shift => {
                const employee = EMPLOYEES.find(e => e.id === shift.employeeId);
                return { ...shift, employee };
            })
            .filter(item => item.employee !== undefined) as (Shift & { employee: Employee })[];

        // Filter by Search
        if (searchQuery) {
            shifts = shifts.filter(s =>
                s.employee.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Sort by start time
        shifts.sort((a, b) => getTimeDecimal(a.startTime) - getTimeDecimal(b.startTime));

        return shifts;
    }, [day, searchQuery]);

    // Derived Stats
    const totalHours = dayShifts.reduce((acc, s) => acc + calculateDuration(s.startTime, s.endTime).hours, 0);
    const managerCount = dayShifts.filter(s => s.employee.role.includes("Manager")).length;

    // Shift Type Logic for Coloring
    const getShiftStyle = (shift: Shift & { employee: Employee }) => {
        const start = getTimeDecimal(shift.startTime);
        const end = getTimeDecimal(shift.endTime);
        const isManager = shift.employee.role.toLowerCase().includes('manager');

        // Logic: Morning Manager (Starts <= 9am, Ends approx 14-16pm)
        if (isManager && start <= 10 && (end >= 14 && end <= 16.5)) {
            return {
                bg: "bg-amber-500 hover:bg-amber-600",
                label: "Morning Manager",
                textColor: "text-amber-700"
            };
        }

        // Logic: Evening Manager (Starts 14-16pm, Ends >= 21pm)
        if (isManager && (start >= 13 && start <= 17) && end >= 20) {
            return {
                bg: "bg-indigo-500 hover:bg-indigo-600",
                label: "Closing Manager",
                textColor: "text-indigo-700"
            };
        }

        // Default
        return {
            bg: "bg-primary/80 hover:bg-primary",
            label: "Shift",
            textColor: "text-muted-foreground"
        };
    };

    // Overlap Logic
    const checkOverlap = (shift: Shift, rangeStart: number, rangeEnd: number) => {
        const s = getTimeDecimal(shift.startTime);
        const e = getTimeDecimal(shift.endTime);
        return Math.max(s, rangeStart) < Math.min(e, rangeEnd);
    };

    const sections = {
        Morning: dayShifts.filter(s => checkOverlap(s, RANGES.Morning.start, RANGES.Morning.end)),
        Afternoon: dayShifts.filter(s => checkOverlap(s, RANGES.Afternoon.start, RANGES.Afternoon.end)),
        Evening: dayShifts.filter(s => checkOverlap(s, RANGES.Evening.start, RANGES.Evening.end)),
    };

    return (
        <div className="min-h-screen bg-background p-4 md:p-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4 border-b pb-6 justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="outline" onClick={() => router.back()}>
                        ← Back to Week
                    </Button>
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight flex items-center gap-3">
                            {dayInfo?.label} Schedule
                        </h1>
                        <p className="text-muted-foreground">{dayInfo?.date}</p>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    {/* Quick Stats */}
                    <div className="flex gap-4 text-sm">
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-xl">{dayShifts.length}</span>
                            <span className="text-muted-foreground text-xs uppercase tracking-wider">Staff</span>
                        </div>
                        <div className="flex flex-col items-center border-l pl-4">
                            <span className="font-bold text-xl">{managerCount}</span>
                            <span className="text-muted-foreground text-xs uppercase tracking-wider">Managers</span>
                        </div>
                        <div className="flex flex-col items-center border-l pl-4">
                            <span className="font-bold text-xl">{totalHours.toFixed(1)}h</span>
                            <span className="text-muted-foreground text-xs uppercase tracking-wider">Total Duration</span>
                        </div>
                    </div>

                    <div className="w-[250px]">
                        <Label htmlFor="day-search" className="sr-only">Search</Label>
                        <Input
                            id="day-search"
                            placeholder="Filter employees..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Time Sections List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(Object.keys(sections) as Array<keyof typeof sections>).map(section => (
                    <Card key={section} className="h-full border-t-4 border-t-primary/20 shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2 bg-muted/20">
                            <CardTitle className="flex justify-between items-center">
                                {section}
                                <Badge variant="secondary" className="font-mono">
                                    {sections[section].length}
                                </Badge>
                            </CardTitle>
                            <CardDescription>
                                {RANGES[section].start > 12 ? RANGES[section].start - 12 : RANGES[section].start}
                                {RANGES[section].start >= 12 ? 'PM' : 'AM'} -
                                {RANGES[section].end > 12 ? RANGES[section].end - 12 : RANGES[section].end}
                                {RANGES[section].end >= 12 || RANGES[section].end === 24 ? 'PM' : 'AM'}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3 pt-4 max-h-[400px] overflow-y-auto">
                            {sections[section].map((item) => {
                                const style = getShiftStyle(item);
                                return (
                                    <div key={item.employeeId} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0 group">
                                        <div>
                                            <div className="font-semibold text-sm flex items-center gap-2">
                                                {item.employee.name}
                                                {style.label !== 'Shift' && (
                                                    <span className={`w-2 h-2 rounded-full ${style.bg.split(' ')[0]}`} title={style.label} />
                                                )}
                                            </div>
                                            <div className="text-xs text-muted-foreground">{item.employee.role}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-mono text-xs font-bold">
                                                {formatTime(item.startTime)} - {formatTime(item.endTime)}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            {sections[section].length === 0 && (
                                <div className="text-sm text-muted-foreground italic py-4 text-center">
                                    {searchQuery ? "No matching shifts." : "No active shifts."}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Candle Bar / Gantt View */}
            <Card className="border-t-4 border-t-blue-500/20">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div>
                            <CardTitle>Timeline View</CardTitle>
                            <CardDescription>Visual overlap of shifts (6:00 AM - 12:00 AM)</CardDescription>
                        </div>
                        <div className="flex gap-4 text-xs">
                            <div className="flex items-center gap-1">
                                <span className="w-3 h-3 bg-amber-500 rounded-sm"></span> Morning Manager
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="w-3 h-3 bg-indigo-500 rounded-sm"></span> Closing Manager
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="w-3 h-3 bg-primary/80 rounded-sm"></span> Standard
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="relative border rounded-md overflow-x-auto bg-background/50">
                        <div className="min-w-[900px] p-4">
                            {/* Time Axis */}
                            <div className="flex justify-between text-xs text-muted-foreground mb-2 border-b pb-2 pl-[180px]">
                                {Array.from({ length: TOTAL_HOURS + 1 }).map((_, i) => {
                                    const hour = START_HOUR + i;
                                    const label = hour > 12 ? (hour - 12) + ' PM' : hour === 12 ? '12 PM' : hour + ' AM';
                                    return (
                                        <div key={hour} style={{ width: `${100 / TOTAL_HOURS}%`, textAlign: 'left' }}>
                                            {label}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Lines */}
                            <div className="space-y-3 relative">
                                {/* Grid lines background */}
                                <div className="absolute inset-0 flex pointer-events-none z-0 pl-[180px]">
                                    {Array.from({ length: TOTAL_HOURS }).map((_, i) => (
                                        <div key={i} className="border-r h-full opacity-10" style={{ width: `${100 / TOTAL_HOURS}%` }} />
                                    ))}
                                </div>

                                {dayShifts.map((shift) => {
                                    const start = getTimeDecimal(shift.startTime);
                                    const end = getTimeDecimal(shift.endTime);

                                    // Calculate dimensions
                                    const leftPercent = ((start - START_HOUR) / TOTAL_HOURS) * 100;
                                    const widthPercent = ((end - start) / TOTAL_HOURS) * 100;

                                    // Duration
                                    const { hours } = calculateDuration(shift.startTime, shift.endTime);
                                    const style = getShiftStyle(shift);

                                    return (
                                        <div key={shift.employeeId} className="relative h-12 flex items-center z-10 group hover:bg-muted/10 rounded-lg transition-colors -mx-2 px-2">
                                            <div className="w-[180px] shrink-0 pr-4 text-xs font-medium truncate z-20 flex flex-col justify-center">
                                                <span className={`font-bold ${style.textColor}`}>{shift.employee.name}</span>
                                                <span className="text-muted-foreground text-[10px]">{shift.employee.role}</span>
                                            </div>
                                            <div className="flex-1 relative h-8 bg-muted/20 rounded-full">
                                                <div
                                                    className={`absolute h-full rounded-md ${style.bg} transition-all shadow-sm flex items-center justify-center text-[10px] text-white font-bold cursor-help whitespace-nowrap px-1 z-10`}
                                                    style={{
                                                        left: `${Math.max(0, leftPercent)}%`,
                                                        width: `${widthPercent}%`
                                                    }}
                                                    title={`${shift.employee.name} (${style.label}): ${formatTime(shift.startTime)} - ${formatTime(shift.endTime)}`}
                                                >
                                                    {formatTime(shift.startTime)} - {formatTime(shift.endTime)}
                                                </div>

                                                <div
                                                    className="absolute h-full flex items-center pl-2 text-xs font-bold text-muted-foreground z-0"
                                                    style={{
                                                        left: `${Math.max(0, leftPercent) + widthPercent}%`,
                                                    }}
                                                >
                                                    {hours.toFixed(1)}h
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
