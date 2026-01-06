'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import {
    EMPLOYEES,
    DAYS,
    SHIFTS,
    formatTime,
    calculateDuration,
    type Shift
} from "@/lib/mock-data";

export function EmployeeViewClient({ name }: { name: string }) {
    const router = useRouter();

    // Decode the name (already done by the server component but doing it again feels redundant but harmless, 
    // actually the prop passed down will be the decoded params from Server Component usually, 
    // but Next.js params can be encoded. Lets safely use what is passed).
    const decodedName = decodeURIComponent(name);

    // Find employee by name
    const employee = EMPLOYEES.find(e => e.name.toLowerCase() === decodedName.toLowerCase());

    if (!employee) {
        return (
            <div className="p-8 text-center bg-background min-h-screen">
                <h1 className="text-2xl font-bold text-red-500">Employee "{decodedName}" not found</h1>
                <Button className="mt-4" onClick={() => router.push('/')}>Go Home</Button>
            </div>
        );
    }

    const employeeShifts = SHIFTS.filter(s => s.employeeId === employee.id);
    const totalHours = employeeShifts.reduce((acc, s) => acc + calculateDuration(s.startTime, s.endTime).hours, 0);

    // Sort shifts by day order
    const sortedShifts = employeeShifts.sort((a, b) => {
        const dayA = DAYS.findIndex(d => d.label === a.day);
        const dayB = DAYS.findIndex(d => d.label === b.day);
        return dayA - dayB;
    });

    return (
        <div className="min-h-screen bg-background p-4 md:p-8 space-y-8">
            <div className="flex items-center gap-4 border-b pb-6">
                <Button variant="outline" onClick={() => router.push('/')}>
                    ← Back to Schedule
                </Button>
                <div className="flex-1">
                    <h1 className="text-3xl font-extrabold tracking-tight flex items-center gap-3">
                        {employee.name}
                        <Badge className={`text-lg px-3 py-1 ${totalHours > 40 ? 'bg-red-500' : 'bg-primary'}`}>
                            {totalHours.toFixed(1)} hrs / week
                        </Badge>
                    </h1>
                    <p className="text-muted-foreground text-lg">{employee.role}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Stats Card */}
                <Card className="md:col-span-1 lg:col-span-1 bg-muted/10">
                    <CardHeader>
                        <CardTitle>Weekly Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center border-b pb-2">
                            <span className="text-muted-foreground">Shifts Assigned</span>
                            <span className="font-bold text-xl">{employeeShifts.length}</span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-2">
                            <span className="text-muted-foreground">Total Hours</span>
                            <span className="font-bold text-xl">{totalHours.toFixed(1)}</span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-2">
                            <span className="text-muted-foreground">Avg. Shift Length</span>
                            <span className="font-bold text-xl">
                                {employeeShifts.length ? (totalHours / employeeShifts.length).toFixed(1) : 0}h
                            </span>
                        </div>
                    </CardContent>
                </Card>

                {/* Shifts List */}
                <Card className="md:col-span-2 lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Schedule</CardTitle>
                        <CardDescription>Assigned shifts for this week</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="relative border-l-2 border-primary/20 ml-4 space-y-8 pb-4">
                            {sortedShifts.map((shift, index) => {
                                const dayDetails = DAYS.find(d => d.label === shift.day);
                                const { hours, breakMinutes } = calculateDuration(shift.startTime, shift.endTime);

                                return (
                                    <div key={index} className="relative pl-8">
                                        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-muted/5 rounded-lg border hover:bg-muted/10 transition-colors">
                                            <div>
                                                <div className="font-bold text-lg text-primary flex items-center gap-2">
                                                    {shift.day}
                                                    <span className="text-sm font-normal text-muted-foreground">({dayDetails?.date})</span>
                                                </div>
                                                <div className="text-2xl font-extrabold mt-1">
                                                    {formatTime(shift.startTime)} - {formatTime(shift.endTime)}
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                <Badge variant="outline" className="text-base px-3 py-1">
                                                    {hours.toFixed(1)} Hours
                                                </Badge>
                                                {breakMinutes > 0 && (
                                                    <Badge variant="secondary" className="text-xs">
                                                        Includes {breakMinutes}m break
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            {sortedShifts.length === 0 && (
                                <div className="pl-8 text-muted-foreground italic">No shifts assigned this week.</div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
