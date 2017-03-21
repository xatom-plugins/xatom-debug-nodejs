/// <reference types="node" />
import { EventEmitter } from 'events';
export interface DebuggerBreakpoint {
    id: number;
    url: string;
    columnNumber: number;
    lineNumber: number;
}
export declare class DebuggerProtocolClient extends EventEmitter {
    private connected;
    private paused;
    private client;
    private nextRequestId;
    private retry;
    private breakpoints;
    private scripts;
    private callFrames;
    private subscriptions;
    isConnected(): boolean;
    isPaused(): boolean;
    disconnect(): void;
    send(method: any, params?: any): Promise<{}>;
    private getSocketTarget(hostname, port);
    connect(hostname: string, port: number): any;
    reset(): void;
    resume(): Promise<{}>;
    pause(): Promise<{}>;
    stepOver(): Promise<{}>;
    stepInto(): Promise<{}>;
    stepOut(): Promise<{}>;
    getProperties(options: any): Promise<{}>;
    evaluateOnFrames(expression: string, frames: Array<any>): Promise<{}>;
    evaluate(expression: string): Promise<{}>;
    getScriptById(scriptId: number): any;
    getCallStack(): any[];
    getScope(): any[];
    addBreakpoint(url: string, lineNumber: number): Promise<void>;
    getBreakpointById(id: any): Promise<DebuggerBreakpoint>;
    removeBreakpoint(url: string, lineNumber: number): Promise<{}>;
}
