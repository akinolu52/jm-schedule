'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
    EMPLOYEES,
    DAYS,
    SHIFTS,
    formatTime,
    calculateDuration,
    type Shift
} from "@/lib/mock-data";

export function ScheduleGrid() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    // Helper to find shift for a specific employee and day
    const getShift = (employeeId: string, dayLabel: string) => {
        return SHIFTS.find(s => s.employeeId === employeeId && s.day === dayLabel);
    };

    // Calculate total hours for an employee
    const calculateTotalHours = (employeeId: string) => {
        const employeeShifts = SHIFTS.filter(s => s.employeeId === employeeId);
        let total = 0;
        employeeShifts.forEach(shift => {
            const { hours } = calculateDuration(shift.startTime, shift.endTime);
            total += hours;
        });
        return total;
    };

    // Calculate total hours for a specific day across all employees
    const calculateDailyTotal = (dayLabel: string) => {
        const dayShifts = SHIFTS.filter(s => s.day === dayLabel);
        let total = 0;
        dayShifts.forEach(shift => {
            const { hours } = calculateDuration(shift.startTime, shift.endTime);
            total += hours;
        });
        return total;
    };

    const filteredEmployees = useMemo(() => {
        let employees = EMPLOYEES;

        // Filter by search
        if (searchQuery) {
            employees = employees.filter(emp =>
                emp.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return employees;
    }, [searchQuery]);

    const handleDayClick = (dayLabel: string) => {
        router.push(`/day/${dayLabel}`);
    };

    const handleEmployeeClick = (employeeName: string) => {
        router.push(`/employee/${encodeURIComponent(employeeName)}`);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 max-w-sm">
                    <Label htmlFor="search" className="sr-only">Search</Label>
                    <Input
                        id="search"
                        placeholder="Search employees..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="w-full h-[80vh] overflow-auto border rounded-md shadow-sm relative">
                <Table className="min-w-[1000px] relative border-separate border-spacing-0">
                    <TableHeader className="bg-muted/90 sticky top-0 z-20 backdrop-blur-sm shadow-sm">
                        <TableRow>
                            <TableHead className="w-[200px] border-r sticky left-0 z-30 bg-muted/90 font-bold text-primary shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                                Employee
                            </TableHead>
                            {DAYS.map((day) => {
                                const dailyTotal = calculateDailyTotal(day.label);

                                return (
                                    <TableHead
                                        key={day.label}
                                        className="text-center border-r min-w-[140px] cursor-pointer transition-colors hover:bg-primary/10"
                                        onClick={() => handleDayClick(day.label)}
                                    >
                                        <div className="flex flex-col items-center py-2 gap-1">
                                            <span className="font-extrabold text-foreground">{day.label}</span>
                                            <span className="text-xs text-muted-foreground">{day.date}</span>
                                            <Badge variant="outline" className="text-[10px] h-5 mt-1 bg-background/50">
                                                {dailyTotal.toFixed(1)}h
                                            </Badge>
                                        </div>
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredEmployees.map((employee) => {
                            const totalHours = calculateTotalHours(employee.id);

                            return (
                                <TableRow key={employee.id} className="hover:bg-muted/30 group">
                                    <TableCell
                                        className="font-medium sticky left-0 bg-background z-10 border-r shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-muted/10 group-hover:bg-muted/30 transition-colors"
                                        onClick={() => handleEmployeeClick(employee.name)}
                                    >
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm font-bold text-primary group-hover:underline underline-offset-4">{employee.name}</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-muted-foreground">{employee.role}</span>
                                                <Badge variant="outline" className="text-[10px] h-5 px-1">
                                                    {totalHours.toFixed(1)} hrs
                                                </Badge>
                                            </div>
                                        </div>
                                    </TableCell>
                                    {DAYS.map((day) => {
                                        const shift = getShift(employee.id, day.label);

                                        if (!shift) {
                                            return (
                                                <TableCell
                                                    key={day.label}
                                                    className="border-r p-2 bg-muted/5"
                                                />
                                            );
                                        }

                                        const { hours, breakMinutes } = calculateDuration(shift.startTime, shift.endTime);

                                        return (
                                            <TableCell
                                                key={day.label}
                                                className="border-r p-1 align-top h-24"
                                            >
                                                <div className="flex flex-col h-full justify-between bg-primary/5 p-2 rounded border border-primary/10 transition-colors">
                                                    <div className="text-center font-bold text-sm">
                                                        {formatTime(shift.startTime)} - {formatTime(shift.endTime)}
                                                    </div>

                                                    {breakMinutes > 0 && (
                                                        <div className="mt-1 flex justify-center">
                                                            <Badge variant="secondary" className="text-[10px] px-1 h-5 whitespace-nowrap">
                                                                Only {hours.toFixed(1)}h (+30m break)
                                                            </Badge>
                                                        </div>
                                                    )}

                                                    {!breakMinutes && (
                                                        <div className="mt-1 flex justify-center">
                                                            <span className="text-[10px] text-muted-foreground">{hours.toFixed(1)}h</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
